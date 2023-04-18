using Core.Common;
using Core.Common.Enum;
using Core.Common.Repository;
using Core.DAL.IRepository;
using Core.DTO.IdeaCategory;
using Core.Entities;
using Core.Entities.IdeaCategory;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Core.DAL.Repository
{
    public class IdeaCategoryDAL : GenericRepository<IdeaCategoryDTO, IdeaCategoryEntities, CoreContext>, IIdeaCategoryRepositories
    {
        
    }
}
