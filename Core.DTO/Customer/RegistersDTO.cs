using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO.Customer
{
    public class RegistersDTO
    {
        [Required(ErrorMessage = "Required")]
        [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "E-mail không đúng định dạng.")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Required")]
        [MinLength(6, ErrorMessage = "Mật khẩu phải lớn hơn hoặc bằng 6 kí tự")]
        public string Password { get; set; }
        [Compare("Password", ErrorMessage = "Xác nhận mật khẩu không chính xác")]
        public string ConfirmPassword { get; set; }
        [Required(ErrorMessage = "Required")]
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Acreage { get; set; }
    }
}
