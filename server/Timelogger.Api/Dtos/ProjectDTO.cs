using System.Collections.Generic;
using Timelogger.Entities;

namespace TimeloggerApi.Dto
{
public class ProjectDto
	{
		public int id { get; set; }
		public string name { get; set; }
		public int totalHours { get; set; }
		public string deadline { get; set; }
		public IEnumerable<TimeEntry> TimeEntries{ get; set; }
	}
}
