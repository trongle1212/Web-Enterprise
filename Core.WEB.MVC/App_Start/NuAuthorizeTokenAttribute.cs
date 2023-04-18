using Core.Entities;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Core.WEB.MVC.App_Start
{
    public class NuAuthorizeTokenAttribute : AuthorizeAttribute
    {
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            if (httpContext.User.Identity.IsAuthenticated)
            {
                var UserId = httpContext.User.Identity.GetUserId();
                using (var context = new CoreContext())
                {
                    var IsAdmin = context.Users.GroupJoin(context.Roles, u => u.Roles.Select(z => z.RoleId).FirstOrDefault(), r => r.Id, (u, r) => new { u, r = r.FirstOrDefault() })
                                                .Any(z => ( z.r != null ? z.r.Name == "Admin" : z.u.IsSupperAdmin) && z.u.Id == UserId);

                    return IsAdmin;
                }
            }
            return true;
        }

        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            filterContext.Result = new RedirectToRouteResult(
                new RouteValueDictionary(
                    new
                    {
                        controller = "Account",
                        action = "Index",
                        area = string.Empty
                    })
                );
        }
    }
}