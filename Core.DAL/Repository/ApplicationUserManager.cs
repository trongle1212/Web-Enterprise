using AutoMapper;
using Core.Common;
using Core.DAL.IRepository;
using Core.DTO.Account;
using Core.Entities;
using Core.Entities.Identitity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DAL.Repository
{
    public class ApplicationUserManager : UserManager<UsersEntities>, IApplicationUserManager
    {
        public ApplicationUserManager(IUserStore<UsersEntities> store)
            : base(store)
        {
        }

        public ApplicationUserManager Create(IdentityFactoryOptions<ApplicationUserManager> options, IOwinContext context)
        {
            var manager = new ApplicationUserManager(new UserStore<UsersEntities>(context.Get<CoreContext>()));
            // Configure validation logic for usernames
            manager.UserValidator = new UserValidator<UsersEntities>(manager)
            {
                AllowOnlyAlphanumericUserNames = false,
                RequireUniqueEmail = true
            };

            // Configure validation logic for passwords
            manager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 6,
                RequireNonLetterOrDigit = true,
                RequireDigit = true,
                RequireLowercase = true,
                RequireUppercase = true,
            };
            return manager;
        }

        public async Task<ResponseDTO> SignUpAsync(UsersEntities usersEntity, string password, string role = "")
        {
            ResponseDTO Response = new ResponseDTO();
            try
            {
                /*** Check Email Exits ***/
                using (var _context = new CoreContext())
                {
                    var hasUser = _context.Users.Any(z => z.Email.Equals(usersEntity.Email) && !z.IsDelete && z.IsActive);
                    if (hasUser)
                    {
                        Response.KeyValuePairs.Add("Email", "E-mail đã tồn tại trong hệ thống");
                    }
                    else
                    {
                        usersEntity.Id = Guid.NewGuid().ToString();
                        var Result = await this.CreateAsync(usersEntity, password);
                        if (Result.Succeeded)
                        {
                            await this.AddToRoleAsync(usersEntity.Id, role);
                            Response.Success = true;
                        }
                        else
                        {
                            Response.KeyValuePairs.Add("", "Vui lòng kiểm tra đường truyền");
                        }
                    }
                }
            }
            catch (Exception ex) {
                Response.KeyValuePairs.Add("", "Vui lòng kiểm tra đường truyền");
            }
            return Response;
        }

        public async Task<ResponseDTO> UpdatedAsync(UsersEntities usersEntity, string role = "")
        {
            var Response = new ResponseDTO();
            try
            {
                /*** Check E-email Exits ***/
                using (var _context = new CoreContext())
                {
                    var hasUser = _context.Users.Any(z => z.Email.Equals(usersEntity.Email) && !z.IsDelete && z.IsActive && !z.Id.Equals(usersEntity.Id));
                    if (hasUser)
                    {
                        Response.KeyValuePairs.Add("Email", "E-mail đã tồn tại trong hệ thống");
                    }
                    else
                    {
                        usersEntity.PasswordHash = this.PasswordHasher.HashPassword(usersEntity.Password);
                        usersEntity.UserName = usersEntity.Email;
                        _context.Entry(usersEntity).State = EntityState.Modified;
                        if (!string.IsNullOrEmpty(role))
                        {
                            var Roles = await this.GetRolesAsync(usersEntity.Id);
                            foreach (var Role in Roles)
                            {
                                await this.RemoveFromRoleAsync(usersEntity.Id, Role);
                            }
                            /**** Add Role To User Again ***/
                            await this.AddToRoleAsync(usersEntity.Id, role);
                        }
                        var Result = await _context.SaveChangesAsync();
                        if (Result >= 1)
                        {
                            Response.Success = true;
                        }
                        else
                        {
                            Response.KeyValuePairs.Add("", "Vui lòng kiểm tra đường truyền");
                        }
                    }
                }
            }
            catch (Exception) {
                Response.KeyValuePairs.Add("", "Vui lòng kiểm tra đường truyền");
            }
            return Response;
        }
    }
}
