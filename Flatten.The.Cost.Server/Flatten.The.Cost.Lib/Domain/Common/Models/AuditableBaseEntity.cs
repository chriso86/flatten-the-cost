using System;
using Flatten.The.Cost.Lib.Domain.User.Models;

namespace Flatten.The.Cost.Lib.Domain.Common.Models
{
    public class AuditableBaseEntity : BaseEntity
    {
        public bool IsRemoved { get; set; }
        public DateTimeOffset CreatedAt { get; set; }
        public UserProfile CreatedBy { get; set; }
        public DateTimeOffset? UpdatedAt { get; set; }
        public UserProfile UpdatedBy { get; set; }
        public DateTimeOffset? RemovedAt { get; set; }
        public UserProfile RemovedBy { get; set; }

        public void Update(UserProfile updatedBy)
        {
            UpdatedAt = DateTimeOffset.Now;
            UpdatedBy = updatedBy;
        }

        public void Remove(UserProfile removedBy)
        {
            IsRemoved = true;
            RemovedAt = DateTimeOffset.Now;
            RemovedBy = removedBy;
        }

        public void Reinstate()
        {
            IsRemoved = false;
        }
    }
}
