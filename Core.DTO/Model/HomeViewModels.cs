using Core.DTO.File;
using Core.DTO.IdeaUser;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO.Model
{
    public class HomeViewModels
    {
        public List<IdeaUserDTO> Ideas { get; set; }
        public int TotalPage { get; set; }
        public int TotalRecord { get; set; }
        public int CurrentPage { get; set; }

        public HomeViewModels()
        {
            this.Ideas = new List<IdeaUserDTO>();
        }
    }
}
