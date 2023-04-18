using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities.IdeaCategory
{
    [Table("IdeaCategory")]
    public class IdeaCategoryEntities : BaseEntities
    {
        public string Name { get; set; }
    }
}
