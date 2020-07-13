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
        public DbSet<SurveyQuestion> Questions { get; set; }
        public DbSet<SurveyAnswer> Answers { get; set; }

        public FtcDbContext(DbContextOptions<FtcDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var userProfile = modelBuilder.Entity<UserProfile>();
            var article = modelBuilder.Entity<Article>();
            var comment = modelBuilder.Entity<Comment>();
            var flag = modelBuilder.Entity<Flag>();
            var survey = modelBuilder.Entity<Survey>();
            var question = modelBuilder.Entity<SurveyQuestion>();
            var answer = modelBuilder.Entity<SurveyAnswer>();

            // User Profile

            userProfile.HasMany(userProfile => userProfile.Followers);
            userProfile.HasMany(userProfile => userProfile.FavouriteArticles);
            userProfile.HasMany(userProfile => userProfile.Flags);
            userProfile.HasOne(userProfile => userProfile.CreatedBy);
            userProfile.HasOne(userProfile => userProfile.UpdatedBy);
            userProfile.HasOne(userProfile => userProfile.RemovedBy);

            // Article
            article.HasMany(article => article.TagList);
            article.HasOne(article => article.Author);
            article.HasMany(article => article.Flags);
            article.HasOne(article => article.CreatedBy);
            article.HasOne(article => article.UpdatedBy);
            article.HasOne(article => article.RemovedBy);

            // Comment
            comment.HasOne(comment => comment.Author);
            comment.HasMany(comment => comment.Flags);
            comment.HasOne(comment => comment.CreatedBy);
            comment.HasOne(comment => comment.UpdatedBy);
            comment.HasOne(comment => comment.RemovedBy);

            // Flags
            flag.HasOne(flag => flag.FlaggedBy);
            flag.HasOne(flag => flag.CreatedBy);
            flag.HasOne(flag => flag.UpdatedBy);
            flag.HasOne(flag => flag.RemovedBy);

            // Survey
            survey.HasMany(survey => survey.Questions);

            // Question
            question.HasMany(question => question.Answers);
        }
    }
}
