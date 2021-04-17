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
	public class ProjectsController : Controller
	{
		private readonly ITimeLoggerRepo _repository;
        private readonly IMapper _mapper;
        public ProjectsController(ITimeLoggerRepo repository, IMapper mapper)
		{
			_repository = repository;
			_mapper = mapper;
		}

		// GET api/projects
		[HttpGet]
		public ActionResult<IEnumerable<ProjectDto>> GetAllProjects()
		{
			var projects = _repository.GetAllProjects();
			return Ok(_mapper.Map<IEnumerable<ProjectDto>>(projects));
		}

		// GET api/projects/{id}
		[HttpGet("{id}", Name = "GetProject")]
		public ActionResult<ProjectDto> GetProject(int id)
		{
			var project = _repository.GetProjectById(id);
			if(project != null) 
			{
				return Ok(_mapper.Map<ProjectDto>(project));
			}
			return NotFound();
		}

		//POST api/projects
		[HttpPost]
		public ActionResult<ProjectDto> CreateProject(ProjectCreateDto projectCreateDto){
			var project = _mapper.Map<Project>(projectCreateDto);
			_repository.CreateProject(project);
			_repository.SaveChanges();
			var projectDto = _mapper.Map<ProjectDto>(project);

			//return URI to use for redirection after we create a project in react
			return CreatedAtRoute(nameof(GetProject), new {id = projectDto.id}, projectDto);
			//return Ok(projectDto);
		}

		//DELETE api/projects/{id}
		[HttpDelete("{id}")]
		public ActionResult DeleteProject(int id){
			var project = _repository.GetProjectById(id);
			if(project == null){
				return NotFound();
			}
			_repository.DeleteProject(project);
			_repository.SaveChanges();

			return NoContent();
		}
	}
}
