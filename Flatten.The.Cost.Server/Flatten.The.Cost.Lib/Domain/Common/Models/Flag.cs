using Flatten.The.Cost.Lib.Domain.User.Models;
using System;

namespace Flatten.The.Cost.Lib.Domain.Common.Models
{
    public class Flag : AuditableBaseEntity
    {
        public DateTimeOffset FlaggedAt { get; set; }
        public UserProfile FlaggedBy { get; set; }
        public string Reason { get; set; }
        public bool IsReviewed { get; set; }
        public new DateTimeOffset CreatedAt { get; set; }
        public new UserProfile CreatedBy { get; set; }
        public new DateTimeOffset? UpdatedAt { get; set; }
        public new UserProfile UpdatedBy { get; set; }
        public new DateTimeOffset? RemovedAt { get; set; }
        public new UserProfile RemovedBy { get; set; }

        public Flag()
        {
        }

        public Flag(string reason, UserProfile flaggedBy)
        {
            Reason = reason;
            FlaggedAt = DateTimeOffset.Now;
            FlaggedBy = flaggedBy;
            IsReviewed = false;
        }
    }
}
