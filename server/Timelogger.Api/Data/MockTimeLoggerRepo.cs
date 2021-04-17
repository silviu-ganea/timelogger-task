using System.Collections.Generic;
using Timelogger.Entities;
using TimeloggerApi.Dto;

namespace TimeloggerApi.Data
{
    public class MockTimeLoggerRepo : ITimeLoggerRepo
    {
        public void CreateProject(Project project)
        {
            throw new System.NotImplementedException();
        }

        public void CreateTimeEntry(TimeEntry timeEntry)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteProject(Project project)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteTimeEntry(TimeEntry timeEntry)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Project> GetAllProjects()
        {
            var projects = new List<Project>
            {
                new Project (0, "project 0", 2,"10/01/2015"),
                new Project (1, "project 1", 55,"12/12/2021"),
                new Project (2, "project 2", 126,"03/02/2017")
            };
            return projects;
        }

        public IEnumerable<TimeEntry> GetAllTimeEntries()
        {
            throw new System.NotImplementedException();
        }

        public Project GetProjectById(int id)
        {
            return new Project (0, "project 1", 2,"01/01/2000");
        }

        public TimeEntry GetTimeEntryById(int id)
        {
            throw new System.NotImplementedException();
        }

        public bool SaveChanges()
        {
            throw new System.NotImplementedException();
        }
    }
}