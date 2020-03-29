using Flatten.The.Cost.Lib.Application.User.Models;
using Flatten.The.Cost.Lib.Infrastructure.Enums;
using System;
using System.Collections.Generic;

namespace Flatten.The.Cost.Lib.Application.User.Services
{
    public class UserService : IUserService
    {
        public void AddUserProfile(SetUserProfileRequest user)
        {
            throw new NotImplementedException();
        }

        public void FlagItem(FlagItemType flagItemType, int itemId)
        {
            throw new NotImplementedException();
        }

        public GetUserProfileResponse GetUserProfile(int userId)
        {
            throw new NotImplementedException();
        }

        public ICollection<GetUserProfileResponse> GetUserProfiles()
        {
            throw new NotImplementedException();
        }

        public GetUserProfilesResponse GetUserProfiles(GetUserProfilesRequest request)
        {
            throw new NotImplementedException();
        }

        public void RemoveUserProfile(int userId)
        {
            throw new NotImplementedException();
        }

        public void UnFlagItem(FlagItemType flagItemType, int itemId)
        {
            throw new NotImplementedException();
        }

        public void UpdateUserProfile(SetUserProfileRequest user)
        {
            throw new NotImplementedException();
        }
    }
}
