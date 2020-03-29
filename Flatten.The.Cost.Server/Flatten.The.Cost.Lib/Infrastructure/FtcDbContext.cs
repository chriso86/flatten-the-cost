using Flatten.The.Cost.Lib.Domain.Common.Models;
using Flatten.The.Cost.Lib.Domain.Forum.Models;
using Flatten.The.Cost.Lib.Domain.Survey.Models;
using Flatten.The.Cost.Lib.Domain.User.Models;
using Microsoft.EntityFrameworkCore;

namespace Flatten.The.Cost.Lib.Infrastructure
{
    public class FtcDbContext : DbContext
    {
        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Flag> Flags { get; set; }
        public DbSet<Survey> Surveys { get; set; }

        public FtcDbContext(DbContextOptions<FtcDbContext> options)
            : base(options)
        {
        }
    }
}
