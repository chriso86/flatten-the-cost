using Flatten.The.Cost.Lib.Application.User.Models;
using Flatten.The.Cost.Lib.Infrastructure.Models;

namespace Flatten.The.Cost.Lib.Application.Forum.Models
{
    public class GetCommentResponse : BaseResponse
    {
        public string Body { get; set; }
        public GetUserProfileResponse Author { get; set; }
    }
}
