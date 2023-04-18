using Core.Entities.Identitity;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities.Mapping
{
    public class UserEntitiesMapping : EntityTypeConfiguration<UsersEntities>
    {
        public UserEntitiesMapping()
        {
            this.HasIndex(x => x.UserName).IsUnique(false);
        }
    }
}
