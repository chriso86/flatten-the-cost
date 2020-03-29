using Flatten.The.Cost.Lib.Domain.Common.Models;

namespace Flatten.The.Cost.Lib.Domain.Forum.Models
{
    public class Tag : BaseEntity
    {
        public string Description { get; set; }

        public Tag(string description)
        {
            Description = description;
        }
    }
}
