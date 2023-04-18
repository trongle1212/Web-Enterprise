using Core.Common.IRepository;
using Core.DTO.Department;
using Core.Entities.Department;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.DAL.IRepository
{
    public interface IDepartmentRepositories : IGenericRepository<DepartmentEntities, DepartmentDTO>
    {
        List<DepartmentDTO> GetDepartmentByLocale(string locale = "vi");
    }
}
