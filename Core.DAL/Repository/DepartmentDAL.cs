using Core.Common.Enum;
using Core.Common.Repository;
using Core.DAL.IRepository;
using Core.DTO.Department;
using Core.Entities;
using Core.Entities.Department;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DAL.Repository
{
    public class DepartmentDAL : GenericRepository<DepartmentDTO, DepartmentEntities, CoreContext>, IDepartmentRepositories
    {
        public List<DepartmentDTO> GetDepartmentByLocale(string locale = "vi")
        {
           
            return new List<DepartmentDTO>();
        }
    }
}
