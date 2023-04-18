using AutoMapper;
using Core.Common.IRepository;
using Core.Common.Repository;
using Core.DAL.AutoMapper;
using Core.DAL.IRepository;
using Core.DAL.Repository;
using Core.Entities;
using Core.Entities.Identitity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin.Security;
using System.Data.Entity;
using System.Web;
using System.Web.Mvc;
using Unity;
using Unity.Injection;
using Unity.Mvc5;

namespace Core.WEB.MVC
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            container.RegisterType<IHelperRepository, HelperRepository>();
            container.RegisterType<IApplicationSignInManager, ApplicationSignInManager>();
            container.RegisterType<IApplicationUserManager, ApplicationUserManager>();
            container.RegisterType<IDepartmentRepositories, DepartmentDAL>();
            container.RegisterType<IIdeaCategoryRepositories, IdeaCategoryDAL>();
            container.RegisterType<IIdeaUserRepositories, IdeaUserDAL>();
            container.RegisterType<IContactRepositories, ContactDAL>();
            container.RegisterType<IIdeaUserRepositories, IdeaUserDAL>();
            container.RegisterType<IIdeaCategoryRepositories, IdeaCategoryDAL>();

            container.RegisterType<IUserStore<UsersEntities>, UserStore<UsersEntities>>();
            container.RegisterType<IUserRepositories, UsersDAL>();
            container.RegisterType<UserManager<UsersEntities>>();
            container.RegisterType<IDepartmentRepositories, DepartmentDAL>();
            container.RegisterType<DbContext, CoreContext>();
            container.RegisterType<IAuthenticationManager>(
                new InjectionFactory(
                    o => System.Web.HttpContext.Current.GetOwinContext().Authentication
                )
            );
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new AutoMapperConfiguration());
            });
            container.RegisterInstance<IMapper>(config.CreateMapper());
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}