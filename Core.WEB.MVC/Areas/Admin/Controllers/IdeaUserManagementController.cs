using AutoMapper;
using Core.Common.Enum;
using Core.Common.Extentions;
using Core.DAL.IRepository;
using Core.DTO.IdeaUser;
using Core.Entities.IdeaUser;
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
    public class IdeaUserManagementController : Controller
    {
        private readonly IMapper Mapper;
        private readonly IIdeaUserRepositories IdeaUserRepo;
        public IdeaUserManagementController(IIdeaUserRepositories IdeaUserRepo, IMapper mapper)
        {
            this.Mapper = mapper;
            this.IdeaUserRepo = IdeaUserRepo;
        }
        public ActionResult Index()
        {
            Expression<Func<IdeaUserEntities, bool>> predicate = e => e.IsDelete == false;
            int totalPage = 0, totalRecord = 0;
            Expression<Func<IdeaUserEntities, DateTime>> sort = e => e.CreatedAt;
            var modelEntities = this.IdeaUserRepo.GetAll(sort, out totalPage, out totalRecord, predicate);
            var models = new List<IdeaUserDTO>();
            if (modelEntities != null && modelEntities.Any())
            {
                models = Mapper.Map<List<IdeaUserEntities>, List<IdeaUserDTO>>(modelEntities.ToList());
            }
            return View(models);
        }

        public ActionResult New()
        {
            var model = new IdeaUserDTO();
            return View(model);
        }

        [HttpPost]
        public async Task<ActionResult> New(IdeaUserDTO model)
        {
            if (ModelState.IsValid == false)
            {
                return View(model);
            }
            var modelEntity = Mapper.Map<IdeaUserDTO, IdeaUserEntities>(model);
            modelEntity.CreatedBy = this.User.Identity.GetUserId();
            modelEntity.Id = Guid.NewGuid().ToString();
            var Response = await this.IdeaUserRepo.InsertAsync(modelEntity);
            if (Response.Success)
            {
                TempData["Successful"] = "Thêm mới ý tưởng thành công";
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
                TempData["IntervalServer"] = "Vui lòng kiểm tra đường truyền";
            }
            return View(model);
        }

        public async Task<ActionResult> Edit(string Id)
        {
            var model = new IdeaUserDTO();
            var modelEntity = await this.IdeaUserRepo.FindByIdAsync(Id);
            if (modelEntity != null)
            {
                model = Mapper.Map<IdeaUserEntities, IdeaUserDTO>(modelEntity);
            }
            return View(model);
        }

        [HttpPost]
        public async Task<ActionResult> Edit(IdeaUserDTO model)
        {
            if (ModelState.IsValid == false)
            {
                return View(model);
            }

            var modelEntity = Mapper.Map<IdeaUserDTO, IdeaUserEntities>(model);
            modelEntity.CreatedBy = this.User.Identity.GetUserId();
            var Response = await this.IdeaUserRepo.UpdateAsync(modelEntity);
            if (Response.Success)
            {
                TempData["Successful"] = "Cập nhật ý tưởng thành công";
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
                TempData["IntervalServer"] = "Vui lòng kiểm tra đường truyền";
            }
            return View(model);
        }

        public async Task<ActionResult> Destroy(string Id)
        {
            if (this.IdeaUserRepo != null)
            {
                var entity = await this.IdeaUserRepo.FindByIdAsync(Id);
                if (entity != null)
                {
                    entity.IsDelete = true;
                    entity.IsActive = false;
                    var Response = await this.IdeaUserRepo.UpdateAsync(entity);
                    if (Response.Success)
                    {
                        TempData["Successful"] = "Xoá thông tin ý tưởng thành công";
                    }
                    else
                    {
                        TempData["IntervalServer"] = "Không thể xoá thông tin ý tưởng";
                    }
                }
            }
            return RedirectToAction("Index");
        }
    }
}