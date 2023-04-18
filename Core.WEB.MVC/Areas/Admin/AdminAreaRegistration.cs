using System.Web.Mvc;

namespace Core.WEB.MVC.Areas.Admin
{
    public class AdminAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Admin";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {

            context.MapRoute(
            name: "Sign_In",
            url: "users/sign-in",
            defaults: new
            {
                controller = "AccountManagement",
                action = "SignIn",
                namespaces = new[] { "Core.WEB.MVC.Areas.Admin.Controllers" }
            });

            context.MapRoute(
            name: "Roles_Index",
            url: "roles",
            defaults: new
            {
                controller = "RolesManagement",
                action = "Index",
                namespaces = new[] { "Core.WEB.MVC.Areas.Admin.Controllers" }
            });

            context.MapRoute(
            name: "Menu_Index",
            url: "menu",
            defaults: new
            {
                controller = "MenuManagement",
                action = "Index",
                namespaces = new[] { "Core.WEB.MVC.Areas.Admin.Controllers" }
            });

            context.MapRoute(
            name: "Category_Blog_Index",
            url: "admin/blog/category",
            defaults: new
            {
                controller = "CategoryBlogManagement",
                action = "Index",
                namespaces = new[] { "Core.WEB.MVC.Areas.Admin.Controllers" }
            });

            context.MapRoute(
            name: "Category_Product_Index",
            url: "admin/product/category",
            defaults: new
            {
                controller = "CategoriesManagement",
                action = "Index",
                namespaces = new[] { "Core.WEB.MVC.Areas.Admin.Controllers" }
            });

            context.MapRoute(
            name: "Completed",
            url: "admin/chung-nhan",
            defaults: new
            {
                controller = "FileManagement",
                action = "Completed",
                namespaces = new[] { "Core.WEB.MVC.Areas.Admin.Controllers" }
            });

            context.MapRoute(
                "Admin_default",
                "Admin/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}