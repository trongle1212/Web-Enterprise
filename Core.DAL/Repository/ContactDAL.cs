using AutoMapper;
using Core.Common.Repository;
using Core.DAL.IRepository;
using Core.DTO.Contact;
using Core.Entities;
using Core.Entities.Contact;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.DAL.Repository
{
    public class ContactDAL : GenericRepository<ContactDTO, ContactEntities, CoreContext>, IContactRepositories
    {
    }
}
