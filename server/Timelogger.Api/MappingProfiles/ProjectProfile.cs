using AutoMapper;
using Timelogger.Entities;
using TimeloggerApi.Dto;

namespace TimeloggerApi.Profiles
{
    public class ProjectProfile : Profile
    {
        public ProjectProfile()
        {
            CreateMap<Project, ProjectDto>();
        }
    }
}