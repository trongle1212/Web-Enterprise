using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities.File
{
    [Table("File")]
    public class FileEntities : BaseEntities
    {
        public string Name { get; set; }
        public string FilePath { get; set; }
        public string IdeaId { get; set; }
    }
}
