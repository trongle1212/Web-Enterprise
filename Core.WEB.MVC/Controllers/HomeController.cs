using AutoMapper;
using Core.DAL.IRepository;
using Core.DTO.File;
using Core.DTO.IdeaUser;
using Core.DTO.Model;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Core.Entities.IdeaUser;
using Microsoft.AspNet.Identity;
using Core.Common.IRepository;
using Core.Entities.File;
using Core.Entities.Comment;

namespace Core.WEB.MVC.Controllers
{
    public class HomeController : ApplicationController
    {
        private readonly IMapper Mapper;
        private readonly IDepartmentRepositories CateRepo;
        private readonly IIdeaUserRepositories IdeaUserRepo;
        private readonly CoreContext _dbContext;
        readonly IHelperRepository _helper;
        public HomeController(IMapper mapper, IDepartmentRepositories cateRepo, IHelperRepository helper, IIdeaUserRepositories IdeaUserRepo)
        {
            this.Mapper = mapper;
            this.CateRepo = cateRepo;
            this.IdeaUserRepo = IdeaUserRepo;
            this._helper = helper;
            _dbContext = new CoreContext();
        }
        public async Task<ActionResult> Index()
        {
            HomeViewModels model = new HomeViewModels();
            var ideas = _dbContext.IdeaUser.Join(_dbContext.IdeaCategory, iu => iu.IdeaCategoryId, ic=> ic.Id, (iu, ic) => new { iu, ic })
                .Join(_dbContext.Users, g => g.iu.UserId, u => u.Id, (g, u) => new { ic = g.ic, iu = g.iu, u }).Select(s => new IdeaUserDTO()
            {
                Id = s.iu.Id,
                Name = s.iu.Name,
                UserId = s.iu.UserId,
                IdeaCategoryId = s.iu.IdeaCategoryId,
                IdeaCategoryName = s.ic.Name,
                EndDate = s.iu.EndDate,
                StartDate = s.iu.StartDate,
                CreatedAt = s.iu.CreatedAt,
                CreatedBy = s.iu.CreatedBy
            }).ToList();
            if (ideas != null)
            {
                foreach (var item in ideas)
                {
                    item.Files = _dbContext.File.Where(w => w.IdeaId == item.Id).Select(s => new DTO.IdeaUser.FileDTO()
                    {
                        Id = s.Id,
                        FilePath = s.FilePath,
                        Name = s.Name
                    }).ToList();

                    foreach (var itemC in item.Files)
                    {
                        var reacts = _dbContext.React.Where(w => w.FileId == itemC.Id).Select(s => new DTO.IdeaUser.ReactDTO()
                        {
                            FileId = s.FileId,
                            Like = s.Like,
                            Unlike = s.Unlike,
                            View = s.View
                        }).ToList();
                        itemC.LikeNumber = reacts.Where(w => w.Like).Count();
                        itemC.UnLikeNumber = reacts.Where(w => w.Unlike).Count();
                        itemC.ViewNumber = reacts.Where(w => w.View).Count();
                        itemC.Comments = _dbContext.Comment.Where(w => w.FileId == itemC.Id).Select(s => new DTO.IdeaUser.CommentDTO()
                        {
                            Comment = s.Comment,
                            FileId = s.FileId
                        }).ToList();
                    }
                }
                model.Ideas = ideas;
            }
            
            return View(model);
        }
        public async Task<ActionResult> Idea(string search = "")
        {
            HomeViewModels model = new HomeViewModels();
            var ideas = _dbContext.IdeaUser.Join(_dbContext.IdeaCategory, iu => iu.IdeaCategoryId, ic => ic.Id, (iu, ic) => new { iu, ic })
                .Join(_dbContext.Users, g => g.iu.UserId, u => u.Id, (g, u) => new { ic = g.ic, iu = g.iu, u })
                .Where(w=>w.iu.Name.ToLower().Trim().Contains(search.ToLower().Trim()))
                .Select(s => new IdeaUserDTO()
                {
                    Id = s.iu.Id,
                    Name = s.iu.Name,
                    UserId = s.iu.UserId,
                    IdeaCategoryId = s.iu.IdeaCategoryId,
                    IdeaCategoryName = s.ic.Name,
                    EndDate = s.iu.EndDate,
                    StartDate = s.iu.StartDate,
                    CreatedAt = s.iu.CreatedAt,
                    CreatedBy = s.iu.CreatedBy
                }).ToList();
            if (ideas != null)
            {
                foreach (var item in ideas)
                {
                    item.Files = _dbContext.File.Where(w => w.IdeaId == item.Id).Select(s => new DTO.IdeaUser.FileDTO()
                    {
                        Id = s.Id,
                        FilePath = s.FilePath,
                        Name = s.Name
                    }).ToList();

                    foreach (var itemC in item.Files)
                    {
                        var reacts = _dbContext.React.Where(w => w.FileId == itemC.Id).Select(s => new DTO.IdeaUser.ReactDTO()
                        {
                            FileId = s.FileId,
                            Like = s.Like,
                            Unlike = s.Unlike,
                            View = s.View
                        }).ToList();
                        itemC.LikeNumber = reacts.Where(w => w.Like).Count();
                        itemC.UnLikeNumber = reacts.Where(w => w.Unlike).Count();
                        itemC.ViewNumber = reacts.Where(w => w.View).Count();
                        itemC.Comments = _dbContext.Comment.Where(w => w.FileId == itemC.Id).Select(s => new DTO.IdeaUser.CommentDTO()
                        {
                            Comment = s.Comment,
                            FileId = s.FileId
                        }).ToList();
                    }
                }
                model.Ideas = ideas;
            }
            return View(model);
        }

        public async Task<ActionResult> IdeaCate(string id = "")
        {
            HomeViewModels model = new HomeViewModels();
            var ideas = _dbContext.IdeaUser.Join(_dbContext.IdeaCategory, iu => iu.IdeaCategoryId, ic => ic.Id, (iu, ic) => new { iu, ic })
                .Join(_dbContext.Users, g => g.iu.UserId, u => u.Id, (g, u) => new { ic = g.ic, iu = g.iu, u })
                .Where(w => w.ic.Id == id)
                .Select(s => new IdeaUserDTO()
                {
                    Id = s.iu.Id,
                    Name = s.iu.Name,
                    UserId = s.iu.UserId,
                    IdeaCategoryId = s.iu.IdeaCategoryId,
                    IdeaCategoryName = s.ic.Name,
                    EndDate = s.iu.EndDate,
                    StartDate = s.iu.StartDate,
                    CreatedAt = s.iu.CreatedAt,
                    CreatedBy = s.iu.CreatedBy
                }).ToList();
            if (ideas != null)
            {
                foreach (var item in ideas)
                {
                    item.Files = _dbContext.File.Where(w => w.IdeaId == item.Id).Select(s => new DTO.IdeaUser.FileDTO()
                    {
                        Id = s.Id,
                        FilePath = s.FilePath,
                        Name = s.Name
                    }).ToList();

                    foreach (var itemC in item.Files)
                    {
                        var reacts = _dbContext.React.Where(w => w.FileId == itemC.Id).Select(s => new DTO.IdeaUser.ReactDTO()
                        {
                            FileId = s.FileId,
                            Like = s.Like,
                            Unlike = s.Unlike,
                            View = s.View
                        }).ToList();
                        itemC.LikeNumber = reacts.Where(w => w.Like).Count();
                        itemC.UnLikeNumber = reacts.Where(w => w.Unlike).Count();
                        itemC.ViewNumber = reacts.Where(w => w.View).Count();
                        itemC.Comments = _dbContext.Comment.Where(w => w.FileId == itemC.Id).Select(s => new DTO.IdeaUser.CommentDTO()
                        {
                            Comment = s.Comment,
                            FileId = s.FileId
                        }).ToList();
                    }
                }
                model.Ideas = ideas;
            }
            return View(model);
        }

        public async Task<ActionResult> AddIdea(IdeaCreateDTO model)
        {
            if (model.File != null && model.File.ContentLength > 0)
            {
                Byte[] fileByte = new Byte[model.File.ContentLength];
                model.File.InputStream.Read(fileByte, 0, model.File.ContentLength);
                model.Byte = fileByte;
                model.FileName = string.Format("/Uploads/Files/{0}", string.Format("{0}_Idea_{1}", model.Name.Replace(" ", "_"), DateTime.Now.ToString("ddMMyyyyhhmmss")) + Path.GetExtension(model.File.FileName));
            }

            IdeaUserEntities ideaUserEntities = new IdeaUserEntities();
            ideaUserEntities.Id = Guid.NewGuid().ToString();
            ideaUserEntities.UserId = User.Identity.GetUserId();
            ideaUserEntities.IdeaCategoryId = model.IdeaCategoryId;
            ideaUserEntities.Name = model.Name;
            ideaUserEntities.CreatedBy = User.Identity.Name;
            ideaUserEntities.StartDate = DateTime.Now;
            ideaUserEntities.EndDate = DateTime.Now.AddDays(30);
            ideaUserEntities.CreatedAt = DateTime.Now;
            ideaUserEntities.UpdatedAt = DateTime.Now;

            var Result = await this.IdeaUserRepo.InsertAsync(ideaUserEntities);
            if (Result.Success)
            {
                var user = _dbContext.Users.Find(User.Identity.GetUserId());
                FileEntities fileEntities = new FileEntities();
                fileEntities.Id = Guid.NewGuid().ToString();
                fileEntities.IdeaId = ideaUserEntities.Id;
                fileEntities.FilePath = model.FileName;
                fileEntities.Name = model.FileName;
                fileEntities.CreatedBy = User.Identity.Name;
                fileEntities.CreatedAt = DateTime.Now;
                fileEntities.UpdatedAt = DateTime.Now;
                _dbContext.File.Add(fileEntities);
                var res = _dbContext.SaveChanges();
                var path = Server.MapPath(model.FileName);
                System.IO.File.WriteAllBytes(path, model.Byte);
                /*** Send mail ***/
                await Task.Run(() =>
                {
                    this._helper.SendGmailAsync(user?.Email, "Inform idea", "", path);
                });
                /*** End send mail ***/
                return Json(new { status = 200, message = "Sucessfully" });
            }
            return Json(new { sucess = true });
        }

        public async Task<ActionResult> AddComment(CommentCreateDTO model)
        {
            CommentEntities commentEntities = new CommentEntities();
            commentEntities.Id = Guid.NewGuid().ToString();
            commentEntities.Comment = model.Comment;
            commentEntities.FileId = model.FileId;
            commentEntities.CreatedBy = User.Identity.Name;
            commentEntities.CreatedAt = DateTime.Now;
            commentEntities.UpdatedAt = DateTime.Now;

            _dbContext.Comment.Add(commentEntities);
            _dbContext.SaveChanges(); 
            return Json(new { sucess = true });
        }
        public ActionResult SetLocale(string locale = "vi")
        {
            if(Response.Cookies != null && Response.Cookies["locale"] != null)
            {
                HttpCookie currentCookies = Request.Cookies["locale"];
                Response.Cookies.Remove("locale");
                currentCookies.Expires = DateTime.Now.AddDays(-10);
                currentCookies.Value = null;
                Response.SetCookie(currentCookies);
            }
            HttpCookie cookie = new HttpCookie("locale");
            cookie.Value = locale;
            cookie.Expires = DateTime.Now.AddYears(1);
            Response.SetCookie(cookie);

            return Redirect(Request.UrlReferrer.ToString());
        }
    }
}