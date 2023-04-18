using Core.Common;
using Core.DAL.Repository;
using Core.DTO.Account;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DAL.IRepository
{
    public interface IApplicationSignInManager
    {
        ApplicationSignInManager Create(IdentityFactoryOptions<ApplicationSignInManager> options, IOwinContext context);
        Task<ResponseDTO> SignInAsync(LoginDTO model, bool shouldLockout);
    }
}
