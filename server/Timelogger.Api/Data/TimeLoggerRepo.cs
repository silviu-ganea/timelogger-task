using System.Collections.Generic;
using System.Linq;
using Timelogger;
using Timelogger.Entities;

namespace TimeloggerApi.Data
{
    public class TimeLoggerRepo : ITimeLoggerRepo
    {
        private readonly ApiContext _context;

        public TimeLoggerRepo(ApiContext context)
        {
            _context = context;
        }
        public IEnumerable<Project> GetAllProjects()
        {
            return _context.Projects.ToList();
        }
        public Project GetProjectById(int id)
        {
            return _context.Projects.FirstOrDefault(p => p.id == id);
        }
    }
}