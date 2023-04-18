using Core.Common;
using Core.Common.IRepository;
using Core.DTO.File;
using Core.DTO.IdeaCategory;
using Core.Entities.IdeaCategory;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Core.DAL.IRepository
{
    public interface IIdeaCategoryRepositories : IGenericRepository<IdeaCategoryEntities, IdeaCategoryDTO>
    {
    }
}
