using System;
using System.Collections.Generic;
using System.Linq;
using Timelogger;
using Timelogger.Entities;
using TimeloggerApi.Dto;

namespace TimeloggerApi.Data
{
    public class TimeLoggerRepo : ITimeLoggerRepo
    {
        private readonly ApiContext _context;

        public TimeLoggerRepo(ApiContext context)
        {
            _context = context;
        }

        public void CreateProject(Project project)
        {
            if(project == null) throw new ArgumentNullException(nameof(project));
            _context.Projects.Add(project);
        }

        public void CreateTimeEntry(TimeEntry timeEntry)
        {
            if(timeEntry == null) throw new ArgumentNullException(nameof(timeEntry));
            _context.TimeEntries.Add(timeEntry);
        }

        public void DeleteProject(Project project)
        {
            if(project == null) throw new ArgumentException(nameof(project));
            _context.Projects.Remove(project);
        }

        public void DeleteTimeEntry(TimeEntry timeEntry)
        {
            if(timeEntry == null) throw new ArgumentException(nameof(timeEntry));
            _context.TimeEntries.Remove(timeEntry);
        }

        public IEnumerable<Project> GetAllProjects()
        {
            var projects = _context.Projects.ToList();
            foreach(var project in projects) project.timeEntries = _context.TimeEntries.Where(t => t.projectId == project.id).ToList();
            return projects;
        }

        public IEnumerable<TimeEntry> GetAllTimeEntries()
        {
            return _context.TimeEntries.ToList();
        }

        public Project GetProjectById(int id)
        {
            return _context.Projects.FirstOrDefault(p => p.id == id);
        }

        public TimeEntry GetTimeEntryById(int id)
        {
            return _context.TimeEntries.FirstOrDefault(p => p.id == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}