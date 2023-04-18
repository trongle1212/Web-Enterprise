using AutoMapper;
using Core.Common.Enum;
using Core.Common.Extentions;
using Core.DAL.IRepository;
using Core.DTO.Department;
using Core.Entities.Department;
using Core.WEB.MVC.App_Start;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Core.WEB.MVC.Areas.Admin.Controllers
{
    [NuAuthorizeToken]
    public class DepartmentManagementController : Controller
    {
        private readonly IMapper Mapper;
        private readonly IDepartmentRepositories DepartmentRepo;
        private readonly IUserRepositories UserRepo;
        public DepartmentManagementController(IDepartmentRepositories DepartmentRepo, IUserRepositories UserRepo, IMapper mapper)
        {
            this.Mapper = mapper;
            this.DepartmentRepo = DepartmentRepo;
            this.UserRepo = UserRepo;
        }
        public ActionResult Index()
        {
            Expression<Func<DepartmentEntities, bool>> predicate = e => e.IsDelete == false;
            int totalPage = 0, totalRecord = 0;
            Expression<Func<DepartmentEntities, DateTime>> sort = e => e.CreatedAt;
            var modelEntities = this.DepartmentRepo.GetAll(sort, out totalPage, out totalRecord, predicate);
            var models = new List<DepartmentDTO>();
            if (modelEntities != null && modelEntities.Any())
            {
                models = Mapper.Map<List<DepartmentEntities>, List<DepartmentDTO>>(modelEntities.ToList());
                foreach (var item in models)
                {
                    item.QAName = UserRepo.FindById(item.QAId)?.FullName;
                }
            }
            return View(models);
        }

        public ActionResult New()
        {
            var model = new DepartmentDTO();
            model.ListUsers = GetListUser();
            return View(model);
        }

        [HttpPost]
        public async Task<ActionResult> New(DepartmentDTO model)
        {
            if (ModelState.IsValid == false)
            {
                model.ListUsers = GetListUser();
                return View(model);
            }
            var modelEntity = Mapper.Map<DepartmentDTO, DepartmentEntities>(model);
            modelEntity.CreatedBy = this.User.Identity.GetUserId();
            modelEntity.Id = Guid.NewGuid().ToString();
            var Response = await this.DepartmentRepo.InsertAsync(modelEntity);
            if (Response.Success)
            {
                TempData["Successful"] = "Created sucessfull";
                return RedirectToAction("Index");
            }
            else if (Response.KeyValuePairs != null && Response.KeyValuePairs.Any())
            {
                foreach (var keyValue in Response.KeyValuePairs)
                {
                    if (!string.IsNullOrEmpty(keyValue.Key))
                    {
                        ModelState.AddModelError(keyValue.Key, keyValue.Value);
                    }
                    else
                    {
                        TempData["IntervalServer"] = keyValue.Value;
                    }
                }
            }
            else
            {
                TempData["IntervalServer"] = "Error";
            }
            return View(model);
        }

        public async Task<ActionResult> Edit(string Id)
        {
            var model = new DepartmentDTO();
            var modelEntity = await this.DepartmentRepo.FindByIdAsync(Id);
            if (modelEntity != null)
            {
                model = Mapper.Map<DepartmentEntities, DepartmentDTO>(modelEntity);
            }
            model.ListUsers = GetListUser();
            return View(model);
        }

        [HttpPost]
        public async Task<ActionResult> Edit(DepartmentDTO model)
        {
            if (ModelState.IsValid == false)
            {
                model.ListUsers = GetListUser();
                return View(model);
            }

            var modelEntity = Mapper.Map<DepartmentDTO, DepartmentEntities>(model);
            modelEntity.CreatedBy = this.User.Identity.GetUserId();
            var Response = await this.DepartmentRepo.UpdateAsync(modelEntity);
            if (Response.Success)
            {
                TempData["Successful"] = "Edit sucessfull";
                return RedirectToAction("Index");
            }
            else if (Response.KeyValuePairs != null && Response.KeyValuePairs.Any())
            {
                foreach (var keyValue in Response.KeyValuePairs)
                {
                    if (!string.IsNullOrEmpty(keyValue.Key))
                    {
                        ModelState.AddModelError(keyValue.Key, keyValue.Value);
                    }
                    else
                    {
                        TempData["IntervalServer"] = keyValue.Value;
                    }
                }
            }
            else
            {
                TempData["IntervalServer"] = "Error";
            }
            return View(model);
        }

        public async Task<ActionResult> Destroy(string Id)
        {
            if (this.DepartmentRepo != null)
            {
                var entity = await this.DepartmentRepo.FindByIdAsync(Id);
                if (entity != null)
                {
                    entity.IsDelete = true;
                    entity.IsActive = false;
                    var Response = await this.DepartmentRepo.UpdateAsync(entity);
                    if (Response.Success)
                    {
                        TempData["Successful"] = "Delete sucessfull";
                    }
                    else
                    {
                        TempData["IntervalServer"] = "Can not delete";
                    }
                }
            }
            return RedirectToAction("Index");
        }


        private List<SelectListItem> GetListUser()
        {
            var ListItems = new List<SelectListItem>();
            try
            {
                var modelEntities = this.UserRepo.GetListAccount();
                if (modelEntities != null && modelEntities.Any())
                {
                    ListItems = modelEntities.Select(z => new SelectListItem
                    {
                        Value = z.Id,
                        Text = z.FullName
                    }).ToList();
                }
            }
            catch (Exception) { }
            return ListItems;
        }

    }
}