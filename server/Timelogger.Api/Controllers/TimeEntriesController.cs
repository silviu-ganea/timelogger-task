using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Timelogger.Entities;
using TimeloggerApi.Data;
using TimeloggerApi.Dto;

namespace Timelogger.Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TimeEntriesController : Controller
	{
		private readonly ITimeLoggerRepo _repository;
        private readonly IMapper _mapper;
        public TimeEntriesController(ITimeLoggerRepo repository, IMapper mapper)
		{
			_repository = repository;
			_mapper = mapper;
		}

        // GET api/timeentries
		[HttpGet]
		public ActionResult<IEnumerable<TimeEntryDto>> GetAllTimeEntries()
		{
			var timeEntries = _repository.GetAllTimeEntries();
			return Ok(_mapper.Map<IEnumerable<TimeEntryDto>>(timeEntries));
		}

		//POST api/timeentries
		[HttpPost]
		public ActionResult<ProjectDto> CreateTimeEntry(TimeEntryCreateDto timeEntryCreateDto){
			var timeEntry = _mapper.Map<TimeEntry>(timeEntryCreateDto);
			_repository.CreateTimeEntry(timeEntry);
			_repository.SaveChanges();
			var timeEntryDto = _mapper.Map<TimeEntryDto>(timeEntry);

			return Ok(timeEntryDto);
		}

		//DELETE api/timeentries/{id}
		[HttpDelete("{id}")]
		public ActionResult DeleteTimeEntry(int id){
			var timeEntry = _repository.GetTimeEntryById(id);
			if(timeEntry == null){
				return NotFound();
			}
			_repository.DeleteTimeEntry(timeEntry);
			_repository.SaveChanges();

			return NoContent();
		}
	}
}
