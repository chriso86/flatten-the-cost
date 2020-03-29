using Flatten.The.Cost.Lib.Domain.Survey.Models;

namespace Flatten.The.Cost.Lib.Infrastructure.Repositories
{
    public class SurveyRepository : BaseRepository<Survey, FtcDbContext>
    {
        public SurveyRepository(FtcDbContext context) : base(context)
        {
        }
    }
}
