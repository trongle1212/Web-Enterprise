using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DTO.IdeaUser
{
    public class IdeaUserDTO : BaseDTO
    {
        public string UserId { get; set; }
        public string Name { get; set; }
        public string IdeaCategoryId { get; set; }
        public int IdeaStatus { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string IdeaCategoryName { get; set; }
        public List<FileDTO> Files { get; set; }
    }

    public class FileDTO : BaseDTO
    {
        public string Name { get; set; }
        public string FilePath { get; set; }
        public string IdeaId { get; set; }
        public int LikeNumber { get; set; }
        public int UnLikeNumber { get; set; }
        public int ViewNumber { get; set; }
        public IList<ReactDTO> Reacts { get; set; }
        public IList<CommentDTO> Comments { get; set; }
    }

    public class ReactDTO : BaseDTO
    {
        public string FileId { get; set; }
        public bool Like { get; set; }
        public bool Unlike { get; set; }
        public bool View { get; set; }
        public string UserId { get; set; }
    }
    public class CommentDTO : BaseDTO
    {
        public string Comment { get; set; }
        public string FileId { get; set; }
    }
}
