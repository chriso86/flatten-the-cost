using Flatten.The.Cost.Lib.Domain.Common.Models;
using Flatten.The.Cost.Lib.Domain.Forum.Models;
using System;
using System.Collections.Generic;

namespace Flatten.The.Cost.Lib.Domain.User.Models
{
    public class UserProfile : FlaggableBaseEntity
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string PasswordSalt { get; set; }
        public string Bio { get; set; }
        public string ImageUrl { get; set; }
        public string CvUrl { get; set; }
        public ICollection<UserProfile> Followers { get; set; }
        public ICollection<Article> FavouriteArticles { get; set; }

        public UserProfile()
        {
        }

        public UserProfile(
            string firstname, 
            string lastname, 
            string email, 
            string username, 
            string passwordSalt, 
            string bio, 
            string imageUrl, 
            string cvUrl)
        {
            Firstname = firstname;
            Lastname = lastname;
            Email = email;
            Username = username;
            PasswordSalt = passwordSalt;
            Bio = bio;
            ImageUrl = imageUrl;
            CvUrl = cvUrl;
            CreatedAt = DateTimeOffset.Now;
        }

        public void Update(
            string email, 
            string username, 
            string passwordSalt, 
            string bio, 
            string imageUrl, 
            string cvUrl, 
            UserProfile updatedBy)
        {
            Email = email;
            Username = username;
            PasswordSalt = passwordSalt;
            Bio = bio;
            ImageUrl = imageUrl;
            CvUrl = cvUrl;

            Update(updatedBy);
        }

        public void AddFollower(UserProfile user)
        {
            if(user != null)
            {
                Followers.Add(user);
            }
        }

        public void RemoveFollower(UserProfile user)
        {
            if (user != null)
            {
                try
                {
                    Followers.Remove(user);
                } catch
                {
                    throw new IndexOutOfRangeException("Could not remove follower from user, because the user does not exist as a follower");
                }
            }
        }

        public void AddFavouriteArticle(Article article)
        {
            if (article != null)
            {
                FavouriteArticles.Add(article);
            }
        }

        public void RemoveFavouriteArticle(Article article)
        {
            if (article != null)
            {
                try
                {
                    FavouriteArticles.Remove(article);
                }
                catch
                {
                    throw new IndexOutOfRangeException("Could not remove article from favourited articles, because the article does not exist as a favourited article");
                }
            }
        }
    }
}
