using Flatten.The.Cost.Lib.Domain.Common.Models;
using Flatten.The.Cost.Lib.Domain.User.Models;
using System;

namespace Flatten.The.Cost.Lib.Domain.Forum.Models
{
    public class Comment : FlaggableBaseEntity
    {
        public string Body { get; set; }
        public UserProfile Author { get; set; }

        public Comment()
        {
        }

        public Comment(string body, UserProfile author)
        {
            Body = body;
            Author = author;
            CreatedAt = DateTimeOffset.Now;
            CreatedBy = author;
        }

        public void Update(string body, UserProfile updatedBy)
        {
            Body = body;

            Update(updatedBy);
        }
    }
}
