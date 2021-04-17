using System.Collections.Generic;
using Timelogger.Entities;

namespace TimeloggerApi.Dto
{
public class TimeEntryDto
	{
		public int id { get; set; }
		public int projectId { get; set; }
		public string dateAdded { get; set; }
		public int hours { get; set; }
		public string description { get; set; }
	}
}
