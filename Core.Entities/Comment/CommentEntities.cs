using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities.Comment
{
    [Table("Comment")]
    public class CommentEntities : BaseEntities
    {
        public string Comment { get; set; }
        public string FileId { get; set; } 
    }
}
