using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Core.DTO.Model
{
    public class CommentCreateDTO
    {
        public string Comment { get; set; }
        public string FileId { get; set; }
    }
}
