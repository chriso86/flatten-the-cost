using System.Collections.Generic;

namespace Flatten.The.Cost.Lib.Application.Forum.Models
{
    public class GetArticlesResponse
    {
        public ICollection<GetArticleResponse> Articles { get; set; }
    }
}
