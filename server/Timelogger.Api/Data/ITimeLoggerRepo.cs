using System.Collections.Generic;
using Timelogger.Entities;
using TimeloggerApi.Dto;

namespace TimeloggerApi.Data{
    public interface ITimeLoggerRepo
    {
        bool SaveChanges();
        IEnumerable<Project> GetAllProjects();
        Project GetProjectById(int id);
        void CreateProject(Project project);
        void DeleteProject(Project project);
    }
}