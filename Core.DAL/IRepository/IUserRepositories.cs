using Core.Common;
using Core.Common.IRepository;
using Core.DTO.Account;
using Core.Entities.Identitity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DAL.IRepository
{
    public interface IUserRepositories : IGenericRepository<UsersEntities, AccountDTO>
    {
        List<AccountDTO> GetListAccount();
        //Task<ResponseDTO> Approved(UserDTO model, string msg);
    }
}
