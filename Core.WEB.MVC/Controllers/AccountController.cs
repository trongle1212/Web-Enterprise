using AutoMapper;
using Core.DAL.IRepository;
using Core.DTO.Customer;
using Core.Entities.Identitity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace Core.WEB.MVC.Controllers
{
    public class AccountController : ApplicationController
    {

        readonly IApplicationSignInManager SignInManager;
        readonly IApplicationUserManager UserManager;
        readonly IMapper Mapper;

        public AccountController(IApplicationUserManager userManager, IApplicationSignInManager signInManager, IMapper mapper)
        {
            SignInManager = signInManager;
            UserManager = userManager;
            Mapper = mapper;
        }
        public ActionResult Index()
        {
            var model = new RegistersLoginDTO();
            return View(model);
        }


        [HttpPost]
        public async Task<ActionResult> Login(LoginDTO model)
        {
            if (!ModelState.IsValid)
            {
                return PartialView("_Login", model);
            }
            var modelLogin = new Core.DTO.Account.LoginDTO
            {
                Email = model.Email,
                Password = model.Password
            };
            var Result = await SignInManager.SignInAsync(modelLogin, shouldLockout: false);
            if (Result.Success)
            {
                return Json(new { status = 200 });
            }
            else
            {
                ViewBag.LockLogin = "Thông tin đăng nhập không chính xác";
                return PartialView("_Login", model);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Register(RegistersDTO model)
        {
            if (ModelState.IsValid)
            {
                var usersEntities = Mapper.Map<RegistersDTO, UsersEntities>(model);
                usersEntities.UserName = model.Email;
                usersEntities.IsApproved = false;
                usersEntities.PhoneNumber = model.Phone;
                usersEntities.IsActive = true;
                var result = await UserManager.SignUpAsync(usersEntities, model.Password, "Client");
                if (result.Success)
                {
                    model = new RegistersDTO();
                    ViewBag.Success = true;
                    return PartialView("Register", model);
                }
                else
                {
                    if(result.KeyValuePairs != null && result.KeyValuePairs.Any())
                    {
                        foreach(var keyValue in result.KeyValuePairs)
                        {
                            if (string.IsNullOrEmpty(keyValue.Key))
                            {
                                ViewBag.Error = true;
                                ViewBag.Messages = keyValue.Value;
                            }
                            else
                            {
                                ModelState.AddModelError(keyValue.Key, keyValue.Value);
                            }
                        }
                    }
                }
            }
            return PartialView("Register", model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LogOff()
        {
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            return RedirectToAction("Index", "Home");
        }

        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }

        // GET: Account
        private ActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            return RedirectToAction("Index", "Home");
        }
    }
}