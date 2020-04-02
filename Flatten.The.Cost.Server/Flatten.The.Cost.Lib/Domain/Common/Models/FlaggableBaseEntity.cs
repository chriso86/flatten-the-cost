using Flatten.The.Cost.Lib.Domain.User.Models;
using System.Collections.Generic;

namespace Flatten.The.Cost.Lib.Domain.Common.Models
{
    public class FlaggableBaseEntity : AuditableBaseEntity
    {
        public bool IsFlagged { get; set; }
        public ICollection<Flag> Flags { get; set; }

        public FlaggableBaseEntity()
        {
        }

        public void Flag(string reason, UserProfile flaggedBy)
        {
            if (!IsFlagged)
            {
                IsFlagged = true;
            }

            var flag = new Flag(reason, flaggedBy);

            Flags.Add(flag);
        }

        public void unFlag()
        {
            if (IsFlagged)
            {
                IsFlagged = false;

                foreach (var flag in Flags)
                {
                    flag.IsReviewed = true;
                }
            }
        }
    }
}
