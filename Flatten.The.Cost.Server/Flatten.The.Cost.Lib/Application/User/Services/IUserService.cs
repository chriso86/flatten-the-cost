using Flatten.The.Cost.Lib.Application.Common.Services;
using Flatten.The.Cost.Lib.Application.User.Models;

namespace Flatten.The.Cost.Lib.Application.User.Services
{
    public interface IUserService : IFlagService
    {
        GetUserProfilesResponse GetUserProfiles(GetUserProfilesRequest request);

        GetUserProfileResponse GetUserProfile(int userId);

        void AddUserProfile(SetUserProfileRequest user);

        void UpdateUserProfile(SetUserProfileRequest user);

        void RemoveUserProfile(int userId);
    }
}
