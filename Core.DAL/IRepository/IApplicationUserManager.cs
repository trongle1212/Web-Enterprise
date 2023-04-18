using AutoMapper;
using Core.Common;
using Core.DAL.Repository;
using Core.DTO.Account;
using Core.Entities.Identitity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DAL.IRepository
{
    public interface IApplicationUserManager
    {
        ApplicationUserManager Create(IdentityFactoryOptions<ApplicationUserManager> options, IOwinContext context);
        Task<ResponseDTO> SignUpAsync(UsersEntities usersEntity, string password, string role = "");
        Task<ResponseDTO> UpdatedAsync(UsersEntities usersEntity, string role = "");
    }
}
