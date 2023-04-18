using AutoMapper;
using Core.Common.IRepository;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Common.Repository
{
    public class GenericRepository<T, TEntity, TContext> : IGenericRepository<TEntity, T>
        where T : class
        where TEntity : class
        where TContext : DbContext, new()
    {
        public TContext _context = null;
        public DbSet<TEntity> _entities = null;

        public GenericRepository()
        {
            this._context = new TContext();
            this._entities = _context.Set<TEntity>();
        }
        public GenericRepository(TContext context)
        {
            this._context = context;
            _entities = _context.Set<TEntity>();
        }
        public IQueryable<TEntity> GetAll<Ttype>(Expression<Func<TEntity, Ttype>> sort, out int totalPage, 
            out int totalRecord, Expression<Func<TEntity,bool>> predicate = null, int pageNo = 1, int pageSize = 25,
            bool is_Paging_Server = false, string sortType = "desc")
        {
            totalPage = 0; totalRecord = 0;
            try
            {
                IQueryable<TEntity> query = _entities;
                if (predicate != null)
                {
                    query = query.Where(predicate);
                }
                if(sortType == "desc")
                {
                    query = query.OrderByDescending(sort);
                }
                else
                {
                    query = query.OrderBy(sort);
                }
                if (is_Paging_Server)
                {
                    query = query.Skip((pageNo - 1) * pageSize).Take(pageSize);
                }
                totalRecord = query.Count();
                totalPage = (int)Math.Ceiling(totalRecord / (double)pageSize);
                return query;
            }
            catch (Exception ex) { }
            return null;
        }

        public List<T> GetAll<Type>(IMapper mapper, Expression<Func<TEntity, Type>> sort, out int totalPage, out int totalRecord, Expression<Func<TEntity, bool>> predicate = null, int pageNo = 1, int pageSize = 25, bool is_Paging_Server = false)
        {
            totalPage = 0; totalRecord = 0;
            try
            {
                IQueryable<TEntity> query = _entities;
                if (predicate != null)
                {
                    query = query.Where(predicate);
                }
                query = query.OrderByDescending(sort);
                if (is_Paging_Server)
                {
                    query = query.Skip((pageNo - 1) * pageSize).Take(pageSize);
                }
                totalRecord = query.Count();
                totalPage = (int)Math.Ceiling(totalRecord / (double)pageSize);
                return query.AsEnumerable().Select(x => mapper.Map<TEntity, T>(x)).ToList();
            }
            catch (Exception) { }
            return null;
        }

        public ResponseDTO Insert(TEntity model)
        {
            var Response = new ResponseDTO();
            try
            {
                var KeyValuePairs = new Dictionary<string, string>();
                var IsValidation = ValidationData(model, true, ref KeyValuePairs);
                if(IsValidation)
                {
                    _entities.Add(model);
                    var Result = _context.SaveChanges();
                    if (Result == 1)
                    {
                        Response.Success = true;
                        Response.Message = "Add Record Successfull";
                    }
                    else
                    {
                        Response.Success = false;
                        Response.Message = "Add Record Fail";
                    }
                } 
                else
                {
                    Response.Success = false;
                    Response.KeyValuePairs = KeyValuePairs;
                }
            }
            catch (Exception ex) { }
            return Response;
        }

        public async Task<ResponseDTO> InsertAsync(TEntity model)
        {
            var Response = new ResponseDTO();
            try
            {
                var KeyValuePairs = new Dictionary<string, string>();
                var IsValidation = ValidationData(model, true, ref KeyValuePairs);
                if (IsValidation)
                {
                    _entities.Add(model);
                    var Result = await _context.SaveChangesAsync();
                    if (Result == 1)
                    {
                        Response.Success = true;
                        Response.Message = "Add Record Successfull";
                    }
                    else
                    {
                        Response.Success = false;
                        Response.Message = "Add Record Fail";
                    }
                }
                else
                {
                    Response.Success = false;
                    Response.KeyValuePairs = KeyValuePairs;
                }
            }
            catch (Exception ex) { }
            return Response;
        }

        public virtual bool ValidationData(TEntity Model, Boolean IsEdit, ref Dictionary<string, string> KeyValuePairs)
        {
            return true;
        }

        public ResponseDTO Update(TEntity model)
        {
            var Response = new ResponseDTO();
            try
            {
                var KeyValuePairs = new Dictionary<string, string>();
                var IsValidation = ValidationData(model, true, ref KeyValuePairs);
                if(IsValidation)
                {
                    this._context.Entry(model).State = EntityState.Modified;
                    var Result = _context.SaveChanges();
                    if(Result == 1)
                    {
                        Response.Success = true;
                        Response.Message = "Updated Record Successful";
                    }
                    else
                    {
                        Response.Success = false;
                        Response.Message = "Updated Record Fail";
                    }
                }
                else
                {
                    Response.Success = false;
                    Response.KeyValuePairs = KeyValuePairs;
                }
            }
            catch (Exception ex) { }
            return Response;
        }

        public async Task<ResponseDTO> UpdateAsync(TEntity model)
        {
            var Response = new ResponseDTO();
            try
            {
                var KeyValuePairs = new Dictionary<string, string>();
                var IsValidation = ValidationData(model, true, ref KeyValuePairs);
                if (IsValidation)
                {
                    this._context.Entry(model).State = EntityState.Modified;
                    var Result = await _context.SaveChangesAsync();
                    if (Result == 1)
                    {
                        Response.Success = true;
                        Response.Message = "Updated Record Successful";
                    }
                    else
                    {
                        Response.Success = false;
                        Response.Message = "Updated Record Fail";
                    }
                }
                else
                {
                    Response.Success = false;
                    Response.KeyValuePairs = KeyValuePairs;
                }
            }
            catch (Exception ex) { }
            return Response;
        }

        public TEntity FindById(object Id)
        {
            try
            {
                return this._entities.Find(Id);
            }
            catch(Exception ex) { }
            return null;
        }

        public async Task<TEntity> FindByIdAsync(object Id)
        {
            try
            {
                return await this._entities.FindAsync(Id);
            }
            catch (Exception) { }
            return null;
        }

        public void Delete(TEntity entity)
        {
            try
            {
                this._entities.Remove(entity);
                this._context.SaveChanges();
            }
            catch (Exception) { }
        }
    }
}
