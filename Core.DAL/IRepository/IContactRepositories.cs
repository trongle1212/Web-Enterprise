using Core.Common.IRepository;
using Core.DTO.Contact;
using Core.Entities.Contact;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DAL.IRepository
{
    public interface IContactRepositories : IGenericRepository<ContactEntities, ContactDTO>
    {
    }
}
