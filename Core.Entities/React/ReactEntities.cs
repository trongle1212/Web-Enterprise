using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities.React
{
    [Table("React")]
    public class ReactEntities : BaseEntities
    {
        public string FileId { get; set; }
        public bool Like { get; set; }
        public bool Unlike { get; set; }
        public bool View { get; set; }
        public string UserId { get; set; }
    }
}
