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
		private readonly ApiContext _context;
        private readonly IMapper _mapper;
        private readonly ITimeLoggerRepo _repository;
        public ProjectsController(ApiContext context, IMapper mapper, ITimeLoggerRepo repository)
		{
			_context = context;
			_mapper = mapper;
			_repository = repository;
		}

		// GET api/projects
		[HttpGet]
		public ActionResult<IEnumerable<Project>> GetAllProjects()
		{
			var projects = _repository.GetAllProjects();
			return Ok(projects);
		}

		// GET api/projects/{id}
		[HttpGet("{id}")]
		public ActionResult<Project> GetProject(int id)
		{
			var project = _repository.GetProjectById(id);
			return Ok(project);
		}
	}
}
