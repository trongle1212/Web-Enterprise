using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO.Customer
{
    public class RegistersLoginDTO
    {
        public RegistersDTO Registers { get; set; }
        public LoginDTO Login { get; set; }

        public RegistersLoginDTO()
        {
            this.Registers = new RegistersDTO();
            this.Login = new LoginDTO();
        }
    }
}
