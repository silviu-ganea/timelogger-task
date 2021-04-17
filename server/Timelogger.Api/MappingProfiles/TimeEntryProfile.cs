using AutoMapper;
using Timelogger.Entities;
using TimeloggerApi.Dto;

namespace TimeloggerApi.Profiles
{
    public class TimeEntryProfile : Profile
    {
        public TimeEntryProfile()
        {
            //Source -> destination
            CreateMap<TimeEntry, TimeEntryDto>();
            CreateMap<TimeEntryCreateDto, TimeEntry>();
        }
    }
}