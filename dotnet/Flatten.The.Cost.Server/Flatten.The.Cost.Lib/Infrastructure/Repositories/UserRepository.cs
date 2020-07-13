using Flatten.The.Cost.Lib.Domain.User.Models;

namespace Flatten.The.Cost.Lib.Infrastructure.Repositories
{
    public class UserRepository : BaseRepository<UserProfile, FtcDbContext>
    {
        public UserRepository(FtcDbContext context) : base(context)
        {
        }
    }
}
