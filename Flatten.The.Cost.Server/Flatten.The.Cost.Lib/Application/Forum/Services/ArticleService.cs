using Flatten.The.Cost.Lib.Application.Forum.Models;
using Flatten.The.Cost.Lib.Infrastructure.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Flatten.The.Cost.Lib.Application.Forum.Services
{
    public class ArticleService : IArticleService
    {
        public void AddArticle(SetArticleRequest article)
        {
            throw new NotImplementedException();
        }

        public void AddCommentToArticle(SetCommentOnArticleRequest comment)
        {
            throw new NotImplementedException();
        }

        public void FlagItem(FlagItemType flagItemType, int itemId)
        {
            throw new NotImplementedException();
        }

        public GetArticleResponse GetArticle(int articleId)
        {
            throw new NotImplementedException();
        }

        public GetArticlesResponse GetArticles(GetArticlesRequest request)
        {
            throw new NotImplementedException();
        }

        public GetCommentsForArticleResponse GetCommentsForArticle(GetCommentsForArticleRequest request)
        {
            throw new NotImplementedException();
        }

        public void RemoveCommentFromArticle(int articleId)
        {
            throw new NotImplementedException();
        }

        public void UnFlagItem(FlagItemType flagItemType, int itemId)
        {
            throw new NotImplementedException();
        }

        public void UpdateArticle(SetArticleRequest article)
        {
            throw new NotImplementedException();
        }

        public void UpdateCommentOnArticle(SetCommentOnArticleRequest comment)
        {
            throw new NotImplementedException();
        }

        public void UpdateCommentToArticle(SetCommentOnArticleRequest comment)
        {
            throw new NotImplementedException();
        }
    }
}
