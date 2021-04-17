using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Timelogger.Entities;

namespace TimeloggerApi.Dto
{
public class TimeEntryCreateDto
	{
		public int projectId { get; set; }
		public string dateAdded { get; set; }
		public int hours { get; set; }
		public string description { get; set; }
	}
}
