using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO.Model
{
    public class AjaxResult
    {
        public bool Success { get; set; }
        public string ErrorMessage { get; set; }
        public object Data { get; set; }
        public int? Mode { get; set; }
        public Dictionary<string,string> ListErrors { get; set; }
        public int TotalPage { get; set; }
        public int CurrentPage { get; set; }
    }
}
