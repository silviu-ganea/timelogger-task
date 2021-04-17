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

        public void DeleteProject(Project project)
        {
            if(project == null) throw new ArgumentException(nameof(project));
            _context.Projects.Remove(project);
        }

        public IEnumerable<Project> GetAllProjects()
        {
            return _context.Projects.ToList();
        }
        public Project GetProjectById(int id)
        {
            return _context.Projects.FirstOrDefault(p => p.id == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}