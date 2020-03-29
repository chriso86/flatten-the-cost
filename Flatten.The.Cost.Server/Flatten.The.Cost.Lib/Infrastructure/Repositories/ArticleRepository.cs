using Flatten.The.Cost.Lib.Domain.Forum.Models;

namespace Flatten.The.Cost.Lib.Infrastructure.Repositories
{
    public class ArticleRepository : BaseRepository<Article, FtcDbContext>
    {
        public ArticleRepository(FtcDbContext context) : base(context)
        {
        }
    }
}
