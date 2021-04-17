using System.Collections.Generic;
using Timelogger.Entities;

namespace TimeloggerApi.Data
{
    public class MockTimeLoggerRepo : ITimeLoggerRepo
    {
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
        public Project GetProjectById(int id)
        {
            return new Project (0, "project 1", 2,"01/01/2000");
        }
    }
}