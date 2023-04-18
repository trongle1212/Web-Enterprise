using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities.Identitity
{
    public class UsersEntities : IdentityUser
    {
        public string FullName { get; set; }
        public bool IsSupperAdmin { get; set; }
        public string Password { get; set; }
        public bool IsDelete { get; set; }
        public string Avartar { get; set; }
        public string Address { get; set; }
        public string DateOfBirth { get; set; }
        public int Gender { get; set; }
        public int Department { get; set; }
        public bool IsActive { get; set; }
        public bool IsApproved { get; set; }
        public string Acreage { get; set; }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<UsersEntities> manager)
        {
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);   
            return userIdentity;
        }
    }
}
