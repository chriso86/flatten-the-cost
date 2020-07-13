using Flatten.The.Cost.Lib.Infrastructure.Models;

namespace Flatten.The.Cost.Lib.Application.Forum.Models
{
    public class SetCommentOnArticleRequest : BaseRequest
    {
        public int ArticleId { get; set; }
        public string Body { get; set; }
    }
}
