using Flatten.The.Cost.Lib.Domain.Forum.Models;
using Flatten.The.Cost.Lib.Domain.User.Models;
using Flatten.The.Cost.Lib.Infrastructure.Models;
using System.Collections.Generic;

namespace Flatten.The.Cost.Lib.Application.Forum.Models
{
    public class GetArticleResponse : BaseResponse
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Body { get; set; }
        public UserProfile Author { get; set; }
        public ICollection<Tag> TagList { get; set; }
    }
}
