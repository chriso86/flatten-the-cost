using Flatten.The.Cost.Lib.Application.User.Models;
using System;

namespace Flatten.The.Cost.Lib.Infrastructure.Models
{
    public class BaseResponse
    {
        public int Id { get; set; }
        public bool IsFlagged { get; set; }
        public DateTimeOffset CreatedAt { get; set; }
        public GetUserProfileResponse CreatedBy { get; set; }
        public DateTimeOffset UpdatedAt { get; set; }
        public GetUserProfileResponse UpdatedBy { get; set; }
    }
}
