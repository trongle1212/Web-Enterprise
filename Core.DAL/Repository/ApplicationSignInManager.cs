using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Common;
using Core.DAL.IRepository;
using Core.DTO.Account;
using Core.Entities.Identitity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Security;

namespace Core.DAL.Repository
{
    public class ApplicationSignInManager : SignInManager<UsersEntities, string>, IApplicationSignInManager
    {
        public ApplicationSignInManager(ApplicationUserManager userManager, IAuthenticationManager authenticationManager)
          : base(userManager, authenticationManager)
        {
        }

        public ApplicationSignInManager Create(IdentityFactoryOptions<ApplicationSignInManager> options, IOwinContext context)
        {
            return new ApplicationSignInManager(context.GetUserManager<ApplicationUserManager>(), context.Authentication);
        }

        public async Task<ResponseDTO> SignInAsync(LoginDTO model, bool shouldLockout)
        {
            var signInResponse = new ResponseDTO();
            if (this.UserManager != null)
            {
                var User = await this.UserManager.FindAsync(model.Email, model.Password);
                if (User != null && User.IsActive && User.IsDelete == false)
                {
                    signInResponse.Success = true;
                    await SignInAsync(User, model.RememberMe, shouldLockout);
                }
            }
            return signInResponse;
        }
    }
}
