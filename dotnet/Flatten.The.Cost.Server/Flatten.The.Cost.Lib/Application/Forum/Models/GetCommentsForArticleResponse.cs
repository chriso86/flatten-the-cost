using System.Collections.Generic;

namespace Flatten.The.Cost.Lib.Application.Forum.Models
{
    public class GetCommentsForArticleResponse
    {
        public ICollection<GetCommentResponse> Comments { get; set; }
    }
}
