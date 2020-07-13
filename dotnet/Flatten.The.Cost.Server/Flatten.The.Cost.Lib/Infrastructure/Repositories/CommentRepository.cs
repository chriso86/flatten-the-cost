using Flatten.The.Cost.Lib.Domain.Forum.Models;

namespace Flatten.The.Cost.Lib.Infrastructure.Repositories
{
    public class CommentRepository : BaseRepository<Comment, FtcDbContext>
    {
        public CommentRepository(FtcDbContext context) : base(context)
        {
        }
    }
}
