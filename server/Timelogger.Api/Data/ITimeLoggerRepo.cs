using System.Collections.Generic;
using Timelogger.Entities;
using TimeloggerApi.Dto;

namespace TimeloggerApi.Data{
    public interface ITimeLoggerRepo
    {
        bool SaveChanges();

        //Projects
        IEnumerable<Project> GetAllProjects();
        Project GetProjectById(int id);
        void CreateProject(Project project);
        void DeleteProject(Project project);

        //TimeEntries
        IEnumerable<TimeEntry> GetAllTimeEntries();
        TimeEntry GetTimeEntryById(int id);
        void CreateTimeEntry(TimeEntry timeEntry);
        void DeleteTimeEntry(TimeEntry timeEntry);
    }
}