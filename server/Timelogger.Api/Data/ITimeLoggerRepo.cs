using System.Collections.Generic;
using Timelogger.Entities;

namespace TimeloggerApi.Data{
    public interface ITimeLoggerRepo
    {
        IEnumerable<Project> GetAllProjects();
        Project GetProjectById(int id);
    }
}