using AutoMapper;
using Core.DTO.Account;
using Core.DTO.Contact;
using Core.DTO.Customer;
using Core.DTO.Department;
using Core.DTO.IdeaCategory;
using Core.DTO.IdeaUser;
using Core.Entities.Contact;
using Core.Entities.Department;
using Core.Entities.IdeaCategory;
using Core.Entities.IdeaUser;
using Core.Entities.Identitity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DAL.AutoMapper
{
    public class AutoMapperConfiguration : Profile
    {
        public AutoMapperConfiguration()
        {
            this.CreateMap<UsersEntities, RegisterDTO>().ReverseMap();
            this.CreateMap<AccountDTO, UsersEntities>().ReverseMap();
            this.CreateMap<DepartmentEntities, DepartmentDTO>().ReverseMap();
            this.CreateMap<IdeaCategoryDTO, IdeaCategoryEntities>().ReverseMap();
            this.CreateMap<IdeaUserEntities, IdeaUserDTO>().ReverseMap();
            this.CreateMap<ContactEntities, ContactDTO>().ReverseMap();
        }
    }
}
