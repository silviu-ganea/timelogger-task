using AutoMapper;
using Timelogger.Entities;
using TimeloggerApi.Dto;

namespace TimeloggerApi.Profiles
{
    public class ProjectProfile : Profile
    {
        public ProjectProfile()
        {
            //Source -> destination
            CreateMap<Project, ProjectDto>();
            CreateMap<ProjectCreateDto, Project>();
        }
    }
}