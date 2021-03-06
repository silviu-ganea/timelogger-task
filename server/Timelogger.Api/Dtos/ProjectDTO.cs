using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Timelogger.Entities;

namespace TimeloggerApi.Dto
{
public class ProjectDto
	{
		public int id { get; set; }
        [Required]
		public string name { get; set; }
        [Required]
		public int totalHours { get; set; }
        [Required]
		public string deadline { get; set; }
		public IEnumerable<TimeEntryDto> TimeEntries{ get; set; }
	}
}
