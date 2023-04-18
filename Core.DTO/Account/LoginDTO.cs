using Core.DTO.Customer;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO.Account
{
    public class LoginDTO
    {
        [Required(ErrorMessage = "The field is required")]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "The field is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public bool RememberMe { get; set; }

        public RegistersDTO Registers { get; set; }

        public LoginDTO()
        {
            this.Registers = new RegistersDTO();
        }
    }
}
