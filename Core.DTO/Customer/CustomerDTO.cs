using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Core.DTO.Customer
{
    public class CustomerDTO : BaseDTO
    {
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int Gender { get; set; }
        public string Avartar { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public bool IsApproved { get; set; }
        public bool IsAdmin { get; set; }
        public int Department { get; set; }
        public string DepartmentId { get; set; }
        public int Role { get; set; }
        public List<SelectListItem> ListDep { get; set; }
        public CustomerDTO()
        {
            ListDep = new List<SelectListItem>();
        }
    }
}
