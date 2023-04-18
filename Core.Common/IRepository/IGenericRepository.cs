using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Common.IRepository
{
    public interface IGenericRepository<TEntity, T> where TEntity : class
            where T : class
    {
        IQueryable<TEntity> GetAll<Ttype>(Expression<Func<TEntity, Ttype>> sort, out int totalPage, out int totalRecord , 
            Expression<Func<TEntity, bool>> predicate = null, int pageNo = 1, int pageSize = 25, bool is_Paging_Server = false, string sortType = "desc");

        List<T> GetAll<Type>(IMapper mapper, Expression<Func<TEntity, Type>> sort, out int totalPage, out int totalRecord, Expression<Func<TEntity, bool>> predicate = null, int pageNo = 1, int pageSize = 25, bool is_Paging_Server = false);
        ResponseDTO Insert(TEntity model);
        Task<ResponseDTO> InsertAsync(TEntity model);
        ResponseDTO Update(TEntity entity);
        Task<ResponseDTO> UpdateAsync(TEntity model);
        TEntity FindById(object Id);
        Task<TEntity> FindByIdAsync(object Id);
        bool ValidationData(TEntity Model, Boolean IsEdit, ref Dictionary<string, string> KeyValuePairs);
        void Delete(TEntity entity);
    }
}
