using Flatten.The.Cost.Lib.Infrastructure.Models;

namespace Flatten.The.Cost.Lib.Application.Forum.Models
{
    public class GetArticlesRequest : PageableRequest
    {
        public int UserId { get; set; }
    }
}
