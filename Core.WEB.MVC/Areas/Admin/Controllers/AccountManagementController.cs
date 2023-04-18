using AutoMapper;
using Core.Common.Helper;
using Core.DAL.IRepository;
using Core.DTO.Account;
using Core.Entities;
using Core.Entities.Identitity;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Core.WEB.MVC.Areas.Admin.Controllers
{
    public class AccountManagementController : Controller
    {
        readonly IApplicationSignInManager SignInManager;
        readonly IApplicationUserManager UserManager;
        readonly IMapper Mapper;
        private readonly CoreContext _dbContext;
        readonly IUserRepositories UserRepo;
        public AccountManagementController(IApplicationUserManager userManager, IApplicationSignInManager signInManager, IMapper mapper, IUserRepositories userRepo)
        {
            SignInManager = signInManager;
            UserManager = userManager;
            Mapper = mapper;
            _dbContext = new CoreContext();
            this.UserRepo = userRepo;
        }
        [Authorize]
        public ActionResult Index()
        {
            var models = this.UserRepo.GetListAccount();
            return View(models);
        }
        [Authorize]
        public ActionResult New()
        {
            var model = new AccountDTO();
            return View(model);
        }
        [Authorize]
        [HttpPost]
        public async Task<ActionResult> New(AccountDTO model)
        {
            if(ModelState.IsValid == false)
            {
                return View(model);
            }
           
            byte[] photoByte = null;
            if (model.PictureUpload != null && model.PictureUpload.ContentLength > 0)
            {
                Byte[] imgByte = new Byte[model.PictureUpload.ContentLength];
                model.PictureUpload.InputStream.Read(imgByte, 0, model.PictureUpload.ContentLength);
                model.PictureByte = imgByte;
                model.Avartar = string.Format(CommonHelper.AvatarImgPath, Guid.NewGuid() + Path.GetExtension(model.PictureUpload.FileName));
                photoByte = imgByte;
            }
            if (string.IsNullOrEmpty(model.Avartar))
            {
                model.Avartar = "~/Images/DefaultUser.jpg";
            }
            var usersEntities = Mapper.Map<AccountDTO, UsersEntities>(model);
            usersEntities.UserName = model.Email;
            var result = await UserManager.SignUpAsync(usersEntities, model.Password, "Admin");
            if (result.Success)
            {
                if (!string.IsNullOrEmpty(model.Avartar) && model.PictureByte != null)
                {
                    var path = Server.MapPath(model.Avartar);
                    MemoryStream ms = new MemoryStream(photoByte, 0, photoByte.Length);
                    ms.Write(photoByte, 0, photoByte.Length);
                    System.Drawing.Image imageTmp = System.Drawing.Image.FromStream(ms, true);

                    ImageHelper.Me.SaveCroppedImage(imageTmp, path, model.Avartar, ref photoByte);
                }
                TempData["Successful"] = "Created sucessfull";
                return RedirectToAction("Index");
            }
            else if(result.KeyValuePairs != null && result.KeyValuePairs.Any())
            {
                foreach(var keyValue in result.KeyValuePairs)
                {
                    if(!string.IsNullOrEmpty(keyValue.Key))
                    {
                        ModelState.AddModelError(keyValue.Key, keyValue.Value);
                    }
                    else
                    {
                        TempData["IntervalServer"] = keyValue.Value;
                    }
                }
            }
            return View(model);
        }
        [Authorize]
        public async Task<ActionResult> Edit(string Id)
        {
            var model = new AccountDTO();
            var modelEntity = await this.UserRepo.FindByIdAsync(Id);
            if(modelEntity != null)
            {
                model = Mapper.Map<UsersEntities, AccountDTO>(modelEntity);
            }
            return View(model);
        }
        [Authorize]
        [HttpPost]
        public async Task<ActionResult> Edit(AccountDTO model)
        {
            if(ModelState.IsValid == false)
            {
                return View(model);
            }
            byte[] photoByte = null;
            var backUpURL = model.Avartar;
            if (!string.IsNullOrEmpty(model.Avartar))
            {
                backUpURL = model.Avartar;
            }

            if (model.PictureUpload != null && model.PictureUpload.ContentLength > 0)
            {
                Byte[] imgByte = new Byte[model.PictureUpload.ContentLength];
                model.PictureUpload.InputStream.Read(imgByte, 0, model.PictureUpload.ContentLength);
                model.PictureByte = imgByte;
                model.Avartar = string.Format(CommonHelper.AvatarImgPath, Guid.NewGuid() + Path.GetExtension(model.PictureUpload.FileName));
                model.PictureUpload = null;
                photoByte = imgByte;
            }
            if (string.IsNullOrEmpty(model.Avartar))
            {
                model.Avartar = "~/Images/DefaultUser.jpg";
            }

            var UserEntity = Mapper.Map<AccountDTO, UsersEntities>(model);
            var Response = await this.UserManager.UpdatedAsync(UserEntity, "Admin");
            if (Response.Success)
            {
                if (!string.IsNullOrEmpty(model.Avartar) && model.PictureByte != null)
                {
                    if (System.IO.File.Exists(Server.MapPath(backUpURL)) && !backUpURL.Contains("DefaultUser.jpg"))
                    {
                        ImageHelper.Me.TryDeleteImageUpdated(Server.MapPath(backUpURL));
                    }

                    var path = Server.MapPath(model.Avartar);
                    MemoryStream ms = new MemoryStream(photoByte, 0, photoByte.Length);
                    ms.Write(photoByte, 0, photoByte.Length);
                    System.Drawing.Image imageTmp = System.Drawing.Image.FromStream(ms, true);

                    ImageHelper.Me.SaveCroppedImage(imageTmp, path, model.Avartar, ref photoByte);
                }
                TempData["Successful"] = "Edit sucessfull";
                return RedirectToAction("Index");
            }
            else if(Response.KeyValuePairs != null && Response.KeyValuePairs.Any())
            {
                foreach(var keyValue in Response.KeyValuePairs)
                {
                    if(!string.IsNullOrEmpty(keyValue.Key))
                    {
                        ModelState.AddModelError(keyValue.Key, keyValue.Value);
                    }
                    else
                    {
                        TempData["IntervalServer"] = keyValue.Value;
                    }
                }
            }

            return View(model);
        }
        [Authorize]
        public async Task<ActionResult> Destroy(string Id)
        {
            if (this.UserRepo != null)
            {
                var entity = await this._dbContext.Users.Where(w=>w.Id == Id).FirstOrDefaultAsync();
                if (entity != null)
                {
                    entity.IsDelete = true;
                    try
                    {

                        var Response = await this._dbContext.SaveChangesAsync();
                        if (Response > 0)
                        {
                            TempData["Successful"] = "Delete sucessfull";
                        }
                        else
                        {
                            TempData["IntervalServer"] = "Can not delete";
                        }
                    }
                    catch (Exception ex)
                    {

                        throw;
                    }
                }
            }
            return RedirectToAction("Index");
        }

        [AllowAnonymous]
        public ActionResult SignIn()
        {
            var model = new LoginDTO();
            return View(model);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> SignIn(LoginDTO model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var Result = await SignInManager.SignInAsync(model, shouldLockout: false);
            if(Result.Success)
            {
                return RedirectToAction("Index", "Home", new { area = "Admin" });
            }
            else
            {
                TempData["LockLogin"] = "The Infomation Users Not Correct";
                return View(model);
            }
        }

        public ActionResult LogOff()
        {
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            return RedirectToAction("SignIn");
        }

        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }
    }
}