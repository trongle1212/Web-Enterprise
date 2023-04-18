using AutoMapper;
using Core.Common.Enum;
using Core.Common.Extentions;
using Core.DAL.IRepository;
using Core.DTO.IdeaCategory;
using Core.Entities.IdeaCategory;
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
    public class IdeaCategoryManagementController : Controller
    {
        private readonly IMapper Mapper;
        private readonly IIdeaCategoryRepositories IdeaCategoryRepo;
        public IdeaCategoryManagementController(IIdeaCategoryRepositories IdeaCategoryRepo, IMapper mapper)
        {
            this.Mapper = mapper;
            this.IdeaCategoryRepo = IdeaCategoryRepo;
        }
        public ActionResult Index()
        {
            Expression<Func<IdeaCategoryEntities, bool>> predicate = e => e.IsDelete == false;
            int totalPage = 0, totalRecord = 0;
            Expression<Func<IdeaCategoryEntities, DateTime>> sort = e => e.CreatedAt;
            var modelEntities = this.IdeaCategoryRepo.GetAll(sort, out totalPage, out totalRecord, predicate);
            var models = new List<IdeaCategoryDTO>();
            if (modelEntities != null && modelEntities.Any())
            {
                models = Mapper.Map<List<IdeaCategoryEntities>, List<IdeaCategoryDTO>>(modelEntities.ToList());
            }
            return View(models);
        }

        public ActionResult New()
        {
            var model = new IdeaCategoryDTO();
            return View(model);
        }

        [HttpPost]
        public async Task<ActionResult> New(IdeaCategoryDTO model)
        {
            if (ModelState.IsValid == false)
            {
                return View(model);
            }
            var modelEntity = Mapper.Map<IdeaCategoryDTO, IdeaCategoryEntities>(model);
            modelEntity.CreatedBy = this.User.Identity.GetUserId();
            modelEntity.Id = Guid.NewGuid().ToString();
            var Response = await this.IdeaCategoryRepo.InsertAsync(modelEntity);
            if (Response.Success)
            {
                TempData["Successful"] = "Creatde sucessfull";
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
            var model = new IdeaCategoryDTO();
            var modelEntity = await this.IdeaCategoryRepo.FindByIdAsync(Id);
            if (modelEntity != null)
            {
                model = Mapper.Map<IdeaCategoryEntities, IdeaCategoryDTO>(modelEntity);
            }
            return View(model);
        }

        [HttpPost]
        public async Task<ActionResult> Edit(IdeaCategoryDTO model)
        {
            if (ModelState.IsValid == false)
            {
                return View(model);
            }

            var modelEntity = Mapper.Map<IdeaCategoryDTO, IdeaCategoryEntities>(model);
            modelEntity.CreatedBy = this.User.Identity.GetUserId();
            var Response = await this.IdeaCategoryRepo.UpdateAsync(modelEntity);
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
            if (this.IdeaCategoryRepo != null)
            {
                var entity = await this.IdeaCategoryRepo.FindByIdAsync(Id);
                if (entity != null)
                {
                    entity.IsDelete = true;
                    entity.IsActive = false;
                    var Response = await this.IdeaCategoryRepo.UpdateAsync(entity);
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
    }
}