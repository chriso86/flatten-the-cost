using Flatten.The.Cost.Lib.Domain.Forum.Models;

namespace Flatten.The.Cost.Lib.Infrastructure.Repositories
{
    public class TagRepository : BaseRepository<Tag, FtcDbContext>
    {
        public TagRepository(FtcDbContext context) : base(context)
        {
        }
    }
}
