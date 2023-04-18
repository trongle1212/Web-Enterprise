using Core.Common.Enum;
using Core.DTO.Account;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;
using System.Data.Entity;
using Core.DTO.Customer;
using Core.DTO.File;
using System.Data.Entity.Core.Objects;
using Core.Common.IRepository;
using Core.DTO.IdeaCategory;

namespace Authentication
{
    public class UserServices
    {
        public static CustomerDTO GetInfoCustomer()
        {
            if (HttpContext.Current.User.Identity.IsAuthenticated)
            {
                CoreContext _dbContext = new CoreContext();
                try
                {
                    var CusId = HttpContext.Current.User.Identity.GetUserId();
                    var UsersInfo = _dbContext.Users.GroupJoin(_dbContext.Roles, u => u.Roles.Select(z => z.RoleId).FirstOrDefault(), r => r.Id, (u, r) => new { u, r = r.FirstOrDefault() })
                                        .Where(z => z.u.IsDelete == false && z.u.Id == CusId)
                                        .Select(z => new CustomerDTO
                                        {
                                            Id = z.u.Id,
                                            IsApproved = z.u.IsApproved,
                                            FullName = z.u.FullName,
                                            Department = z.u.Department,
                                            IsAdmin = z.u.IsSupperAdmin,
                                        }).FirstOrDefault();
                    return UsersInfo;
                }
                catch (Exception) { }
            }
            
            return null;
        }
        public static List<IdeaCategoryDTO> GetAllIdeaCategory()
        {
            CoreContext _dbContext = new CoreContext();
            try
            {
                var ideaCates = _dbContext.IdeaCategory.Where(z => z.IsDelete == false)
                                    .Select(z => new IdeaCategoryDTO
                                    {
                                        Id = z.Id,
                                        Name = z.Name
                                    }).ToList();
                return ideaCates;
            }
            catch (Exception) { }

            return null;
        }
    }
}