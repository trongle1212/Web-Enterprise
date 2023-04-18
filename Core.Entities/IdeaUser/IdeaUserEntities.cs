using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities.IdeaUser
{
    [Table("IdeaUser")]
    public class IdeaUserEntities : BaseEntities
    {
        public string UserId { get; set; }
        public string Name { get; set; }
        public string IdeaCategoryId { get; set; }
        public int IdeaStatus { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
