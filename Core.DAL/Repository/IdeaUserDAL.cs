using Core.Common;
using Core.Common.Enum;
using Core.Common.Repository;
using Core.DAL.IRepository;
using Core.DTO.IdeaUser;
using Core.Entities;
using Core.Entities.IdeaUser;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Core.DAL.Repository
{
    public class IdeaUserDAL : GenericRepository<IdeaUserDTO, IdeaUserEntities, CoreContext>, IIdeaUserRepositories
    {
        
    }
}
