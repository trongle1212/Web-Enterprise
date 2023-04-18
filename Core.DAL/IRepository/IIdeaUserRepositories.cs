using Core.Common;
using Core.Common.IRepository;
using Core.DTO.IdeaUser;
using Core.Entities.IdeaUser;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Core.DAL.IRepository
{
    public interface IIdeaUserRepositories : IGenericRepository<IdeaUserEntities, IdeaUserDTO>
    {
    }
}
