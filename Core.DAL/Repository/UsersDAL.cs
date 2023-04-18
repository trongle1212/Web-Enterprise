using Core.Common;
using Core.Common.Repository;
using Core.DAL.IRepository;
using Core.DTO.Account;
using Core.Entities;
using Core.Entities.Identitity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DAL.Repository
{
    public class UsersDAL : GenericRepository<AccountDTO, UsersEntities, CoreContext>, IUserRepositories
    {
        //public async Task<ResponseDTO> Approved(CustomerDTO model, string msg)
        //{
        //    var Response = new ResponseDTO();
        //    try
        //    {
        //        var Entity = _context.Users.Find(model.Id);
        //        if(Entity != null)
        //        {
        //            Entity.IsApproved = true;

        //            var Result = await _context.SaveChangesAsync();
        //            if(Result == 1)
        //            {
        //                var _Id = Guid.NewGuid().ToString();
        //                if (model.Department == (int)Common.Enum.EnumCommon.EDepartment.Club)
        //                {
        //                    int _count = _context.ClubUser.Where(w => w.UserId.Equals(model.Id) && w.ClubId.Equals(model.DepartmentId) && w.Type == (int)Common.Enum.EnumCommon.EDepartment.Club).Count();
        //                    int _totalMember = _context.Club.Where(w => w.Id.Equals(model.DepartmentId)).Select(s => s.Member).FirstOrDefault();
        //                    if (_count >= _totalMember)
        //                    {
        //                        msg = "Số lượng thành viên đăng ký đã Full!";
        //                    }
        //                    else
        //                    {
        //                        var e = new ClubUserEntities
        //                        {
        //                            Id = _Id,
        //                            UserId = Entity.Id,
        //                            ClubId = model.DepartmentId,
        //                            IsActive = true,
        //                            CreatedAt = DateTime.Now,
        //                            UpdatedBy = model.UpdatedBy,
        //                            UpdatedAt = DateTime.Now,
        //                            Type = (int)Common.Enum.EnumCommon.EDepartment.Club
        //                        };
        //                        _context.ClubUser.Add(e);
        //                        Result = await _context.SaveChangesAsync();
        //                        if (Result == 1)
        //                        {
        //                            Response.Success = true;
        //                        }
        //                        else
        //                        {
        //                            msg = "Xác nhận thông tin tài khoản không thành công";
        //                        }
        //                    }                            
        //                }
        //                else
        //                {
        //                    int _count = _context.ClubUser.Where(w => w.UserId.Equals(model.Id) && w.ClubId.Equals(model.DepartmentId) && w.Type == (int)Common.Enum.EnumCommon.EDepartment.Club).Count();
        //                    int _totalMember = _context.Group.Where(w => w.Id.Equals(model.DepartmentId)).Select(s => s.Member).FirstOrDefault();
        //                    if (_count >= _totalMember)
        //                    {
        //                        msg = "Số lượng thành viên đăng ký đã Full!";
        //                    }
        //                    else
        //                    {
        //                        var e = new GroupUserEntities
        //                        {
        //                            Id = _Id,
        //                            UserId = Entity.Id,
        //                            GroupId = model.DepartmentId,
        //                            IsActive = true,
        //                            CreatedAt = DateTime.Now,
        //                            UpdatedBy = model.UpdatedBy,
        //                            UpdatedAt = DateTime.Now,
        //                            Type = (int)Common.Enum.EnumCommon.EDepartment.Group
        //                        };
        //                        _context.GroupUser.Add(e);
        //                        Result = await _context.SaveChangesAsync();
        //                        if (Result == 1)
        //                        {
        //                            Response.Success = true;
        //                        }
        //                        else
        //                        {
        //                            msg = "Xác nhận thông tin tài khoản không thành công";
        //                        }
        //                    }                            
        //                }               
        //            }
        //        }
        //    }
        //    catch (Exception) { }
        //    return Response;
        //}

        public List<AccountDTO> GetListAccount()
        {
            var models = new List<AccountDTO>();
            try
            {
                models = _context.Users.Join(_context.Roles, u => u.Roles.Select(z => z.RoleId).FirstOrDefault(), r => r.Id, (u, r) => new { u, r })
                                    .Where(z => z.u.IsDelete == false)
                                    .Select(z => new AccountDTO
                                    {
                                        FullName = z.u.FullName,
                                        Email = z.u.Email,
                                        Address = z.u.Address,
                                        Avartar = z.u.Avartar,
                                        DateOfBirth = z.u.DateOfBirth,
                                        Gender = z.u.Gender,
                                        Phone = z.u.PhoneNumber,
                                        IsActive = z.u.IsActive,
                                        Id = z.u.Id,
                                        Department = z.u.Department
                                    }).ToList();
            }
            catch (Exception) { }
            return models;
        }

    }
}
