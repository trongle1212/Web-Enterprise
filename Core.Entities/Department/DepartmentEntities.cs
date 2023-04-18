using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities.Department
{
    [Table("Department")]
    public class DepartmentEntities : BaseEntities
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string QAId { get; set; }
    }
}
