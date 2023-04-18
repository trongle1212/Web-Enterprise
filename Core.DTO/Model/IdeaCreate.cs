using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Core.DTO.Model
{
    public class IdeaCreateDTO
    {
        public string UserId { get; set; }
        public string IdeaCategoryId { get; set; }
        public string Name { get; set; }
        public string FileName { get; set; }
        [DataType(DataType.Upload)]
        public HttpPostedFileBase File { get; set; }
        public byte[] Byte { get; set; }
    }
}
