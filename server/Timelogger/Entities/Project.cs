using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
namespace Timelogger.Entities
{
	public class Project
	{
		public Project()
		{
			this.timeEntries = new List<TimeEntry>();
		}
		public Project(int id, string name, int totalHours, string deadline) : base()
		{
			this.id = id;
			this.name = name;
			this.totalHours = totalHours;
			this.deadline = deadline;
		}
		//Required annotations are used to make sure that data that is required on DB level is mirrored at entity level, not really needed in an -in memmory- implementation, but we should have them in DTO
		[Key]
		public int id { get; set; }
		[Required]
		public string name { get; set; }
		[Required]
		public int totalHours { get; set; }
		[Required]
		public string deadline { get; set; }
		public List<TimeEntry> timeEntries{ get; set; }
	}
}
