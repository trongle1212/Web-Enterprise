using Core.Entities.Comment;
using Core.Entities.Contact;
using Core.Entities.Department;
using Core.Entities.File;
using Core.Entities.IdeaCategory;
using Core.Entities.IdeaUser;
using Core.Entities.Identitity;
using Core.Entities.React;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class CoreContext : IdentityDbContext<UsersEntities>
    {
        public CoreContext() : base("name=Core_Context")
        {
            ((IObjectContextAdapter)this).ObjectContext.ContextOptions.LazyLoadingEnabled = true;
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            var typesToRegister = Assembly.GetExecutingAssembly().GetTypes()
                                            .Where(type => !String.IsNullOrEmpty(type.Namespace))
                                            .Where(type => type.BaseType != null && type.BaseType.IsGenericType &&
                                            type.BaseType.GetGenericTypeDefinition() == typeof(EntityTypeConfiguration<>));
            foreach (var type in typesToRegister)
            {
                dynamic configurationInstance = Activator.CreateInstance(type);
                modelBuilder.Configurations.Add(configurationInstance);
            }

            base.OnModelCreating(modelBuilder);
        }

        public static CoreContext Create()
        {
            return new CoreContext();
        }

        public virtual DbSet<DepartmentEntities> Department { get; set; }
        public virtual DbSet<IdeaCategoryEntities> IdeaCategory { get; set; }
        public virtual DbSet<IdeaUserEntities> IdeaUser { get; set; }
        public virtual DbSet<ContactEntities> Contact { get; set; }
        public virtual DbSet<CommentEntities> Comment { get; set; }
        public virtual DbSet<ReactEntities> React { get; set; }
        public virtual DbSet<FileEntities> File { get; set; }
    }
}
