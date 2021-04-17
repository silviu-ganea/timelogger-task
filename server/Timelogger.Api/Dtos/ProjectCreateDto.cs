using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Timelogger.Entities;

namespace TimeloggerApi.Dto
{
public class ProjectCreateDto
	{
		[Required]
		public string name { get; set; }
		[Required]
		public int totalHours { get; set; }
		[Required]
		public string deadline { get; set; }
	}
}
