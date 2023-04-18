using Microsoft.CodeAnalysis.CSharp.Syntax;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Core.DTO.File
{
    public class FileDTO : BaseDTO
    {
        public string Name { get; set; }
        public string FilePath { get; set; }
        public string IdeaId { get; set; }
    }
}
