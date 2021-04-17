using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Timelogger.Entities
{
	public class Project
	{
		public Project(int id, string name, int totalHours, string deadline)
		{
			this.id = id;
			this.name = name;
			this.totalHours = totalHours;
			this.deadline = deadline;
			this.timeEntries = new List<TimeEntry>();
		}
		public int id { get; set; }
		public string name { get; set; }
		public int totalHours { get; set; }
		public string deadline { get; set; }
		public List<TimeEntry> timeEntries{ get; set; }
	}
}
