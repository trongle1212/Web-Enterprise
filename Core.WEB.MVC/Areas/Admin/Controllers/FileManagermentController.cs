using Core.DTO.File;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Core.WEB.MVC.Areas.Admin.Controllers
{
    public class FileManagermentController : Controller
    {
        private readonly CoreContext _dbContext;
        public FileManagermentController()
        {
            _dbContext = new CoreContext();
        }
        // GET: Admin/FileManagerment
        public ActionResult Index()
        {
            var data = new List<FileDTO>();
            var tem = _dbContext.File.Where(w => w.IsDelete == false).Select(s => new FileDTO()
            {
                Id = s.Id,
                Name = s.Name,
                CreatedBy = s.CreatedBy
            }).ToList();
            data = tem;
            return View(data);
        }
        public ActionResult Destroy(string Id)
        {
            var entity = this._dbContext.File.Where(w=>w.Id == Id).FirstOrDefault();
            if (entity != null)
            {
                entity.IsDelete = true;
                entity.IsActive = false;
                var Response =  this._dbContext.SaveChanges();
                if (Response == 1)
                {
                    TempData["Successful"] = "Delete sucessfull";
                }
                else
                {
                    TempData["IntervalServer"] = "Can not delete";
                }
            }
            return RedirectToAction("Index");
        }
    }
}