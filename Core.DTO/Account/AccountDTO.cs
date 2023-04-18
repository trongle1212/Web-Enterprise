using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Core.DTO.Account
{
    public class AccountDTO : BaseDTO
    {
        [Required(ErrorMessage = "Required")]
        [MinLength(6, ErrorMessage = "Mật khẩu phải lớn hơn hoặc bằng 6 kí tự")]
        public string Password { get; set; }
        public string HashPassword { get; set; }
        [Required(ErrorMessage = "Required")]
        public string FullName { get; set; }
        public string Address { get; set; }
        [Required(ErrorMessage = "Thông tin bắc buộc")]
        [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "E-mail không đúng định dạng.")]
        public string Email { get; set; }
        [RegularExpression("([0-9]+)", ErrorMessage = "Số điện thoại không đúng định dạng")]
        public string Phone { get; set; }
        [Required(ErrorMessage = "Required")]
        public int Gender { get; set; }
        [Required(ErrorMessage = "Required")]
        public int Department { get; set; }
        public string Avartar { get; set; }
        [DataType(DataType.Upload)]
        public HttpPostedFileBase PictureUpload { get; set; }
        public byte[] PictureByte { get; set; }
        public string DateOfBirth { get; set; }
        public string Role { get; set; }
        public string SecurityStamp { get; set; }
    }
}
