namespace Core.Entities.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Core.Entities.CoreContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Core.Entities.CoreContext context)
        {
            context.Roles.AddOrUpdate(z => z.Name, new Microsoft.AspNet.Identity.EntityFramework.IdentityRole
            {
                Id = Guid.NewGuid().ToString(),
                Name = "Admin",
            });
            context.Roles.AddOrUpdate(z => z.Name, new Microsoft.AspNet.Identity.EntityFramework.IdentityRole
            {
                Id = Guid.NewGuid().ToString(),
                Name = "Client"
            });
            /*** Init Seed Data For User ***/
            context.Users.AddOrUpdate(x => x.Email, new Identitity.UsersEntities
            {
                Id = Guid.NewGuid().ToString(),
                Email = "admin@gmail.com",
                FullName = "Admin",
                PasswordHash = "AJ7jUJexLI2nYK47xxjyJT+L6mKt7KrbiAbj5qY8lZPeCIyBS1L4XRd/HR4OSn2UGA==",// Admin@123
                PhoneNumberConfirmed = false,
                EmailConfirmed = false,
                TwoFactorEnabled = false,
                LockoutEnabled = false,
                AccessFailedCount = 0,
                SecurityStamp = "8f33b5f5-a2c9-4e88-a912-1b882da2a6ba",
                UserName = "admin@gmail.com",
                IsActive = true,
                IsSupperAdmin = true,
                Department = 1
            });
        }
    }
}
