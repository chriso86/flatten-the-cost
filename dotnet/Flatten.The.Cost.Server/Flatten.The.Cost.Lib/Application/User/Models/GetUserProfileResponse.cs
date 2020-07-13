using Flatten.The.Cost.Lib.Application.Forum.Models;
using Flatten.The.Cost.Lib.Infrastructure.Models;
using System.Collections.Generic;

namespace Flatten.The.Cost.Lib.Application.User.Models
{
    public class GetUserProfileResponse : BaseResponse
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Bio { get; set; }
        public string ImageUrl { get; set; }
        public string CvUrl { get; set; }
        public int NumberOfFollowers { get; set; }
        public ICollection<GetUserProfileResponse> Followers { get; set; }
        public ICollection<GetArticlesResponse> FavouriteArticles { get; set; }
    }
}
