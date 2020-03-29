using Flatten.The.Cost.Lib.Domain.Common.Models;

namespace Flatten.The.Cost.Lib.Infrastructure.Repositories
{
    public class FlagRepository : BaseRepository<Flag, FtcDbContext>
    {
        public FlagRepository(FtcDbContext context) : base(context)
        {
        }
    }
}
