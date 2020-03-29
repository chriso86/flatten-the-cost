using System;
using System.Collections.Generic;
using System.Text;

namespace Flatten.The.Cost.Lib.Application.User.Models
{
    public class GetUserProfilesResponse
    {
        ICollection<GetUserProfileResponse> UserProfiles { get; set; }
    }
}
