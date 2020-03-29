using Flatten.The.Cost.Lib.Domain.Common.Models;
using Flatten.The.Cost.Lib.Domain.User.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Flatten.The.Cost.Lib.Domain.Forum.Models
{
    public class Article : FlaggableBaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Body { get; set; }
        public UserProfile Author { get; set; }
        public ICollection<Tag> TagList { get; set; }
        
        public Article(string title, string description, string body, UserProfile author)
        {
            Title = title;
            Description = description;
            Body = body;
            Author = author;
            CreatedAt = DateTimeOffset.Now;
            CreatedBy = author;
        }

        public void Update(string title, string description, string body, UserProfile updatedBy)
        {
            Title = title;
            Description = description;
            Body = body;

            Update(updatedBy);
        }

        public void AddTag(string description)
        {
            if (description != null && description != "")
            {
                var tag = new Tag(description);

                TagList.Add(tag);
            }
        }

        public void RemoveTag(string description)
        {
            if (description != null && description != "")
            {
                var tag = TagList.SingleOrDefault(x => x.Description == description);

                if (tag != null)
                {
                    try
                    {
                        TagList.Remove(tag);
                    }
                    catch
                    {
                        throw new IndexOutOfRangeException("Could not remove tag from article, because the tag does not exist on the article");
                    }
                }
            }
        }
    }
}
