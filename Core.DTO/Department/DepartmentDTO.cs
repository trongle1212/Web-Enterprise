using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Core.DTO.Department
{
    public class DepartmentDTO : BaseDTO
    {
        [Required(ErrorMessage = "Required")]
        public string Name { get; set; }
        public string Description { get; set; }
        public string QAId { get; set; }
        public string QAName { get; set; }

        public List<SelectListItem> ListUsers { get; set; }
    }
}
