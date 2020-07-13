using System;
using Microsoft.AspNetCore.Mvc;
using Flatten.The.Cost.Lib.Infrastructure.Models;
using Flatten.The.Cost.Lib.Infrastructure.Enums;
using Flatten.The.Cost.Lib.Application.User.Models;
using Flatten.The.Cost.Lib.Application.User.Services;

namespace Fatten.The.Cost.Rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public IUserService _userService { get; set; }

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        // GET api/values
        [HttpGet]
        public JsonResponse<GetUserProfilesResponse> Get([FromQuery] GetUserProfilesRequest request)
        {
            try
            {
                var response = _userService.GetUserProfiles(request);

                return new JsonResponse<GetUserProfilesResponse>(response);
            }
            catch (Exception error)
            {
                return new JsonResponse<GetUserProfilesResponse>(error);
            }
        }

        // GET api/values/5
        [HttpGet]
        public JsonResponse<GetUserProfileResponse> Get([FromQuery] int userId)
        {
            try
            {
                var response = _userService.GetUserProfile(userId);

                return new JsonResponse<GetUserProfileResponse>(response);
            }
            catch (Exception error)
            {
                return new JsonResponse<GetUserProfileResponse>(error);
            }
        }

        // POST api/values
        [HttpPost]
        public JsonResponse<bool> Post([FromBody] SetUserProfileRequest request)
        {
            try
            {
                _userService.AddUserProfile(request);

                return new JsonResponse<bool>();
            }
            catch (Exception error)
            {
                return new JsonResponse<bool>(error);
            }
        }

        // PUT api/values/5
        [HttpPut]
        public JsonResponse<bool> Put([FromBody] SetUserProfileRequest request)
        {
            try
            {
                _userService.UpdateUserProfile(request);

                return new JsonResponse<bool>();
            }
            catch (Exception error)
            {
                return new JsonResponse<bool>(error);
            }
        }

        // DELETE api/values/5
        [HttpDelete]
        public JsonResponse<bool> Delete([FromQuery] int userId)
        {
            try
            {
                _userService.RemoveUserProfile(userId);

                return new JsonResponse<bool>();
            }
            catch (Exception error)
            {
                return new JsonResponse<bool>(error);
            }
        }

        [HttpPost]
        public JsonResponse<bool> Flag([FromBody] int userId)
        {
            try
            {
                _userService.FlagItem(FlagItemType.User, userId);

                return new JsonResponse<bool>();
            }
            catch (Exception error)
            {
                return new JsonResponse<bool>(error);
            }
        }
    }
}
