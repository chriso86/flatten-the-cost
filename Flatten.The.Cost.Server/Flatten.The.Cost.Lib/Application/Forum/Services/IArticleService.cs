using Flatten.The.Cost.Lib.Application.Common.Services;
using Flatten.The.Cost.Lib.Application.Forum.Models;

namespace Flatten.The.Cost.Lib.Application.Forum.Services
{
    public interface IArticleService : IFlagService
    {
        GetArticlesResponse GetArticles(GetArticlesRequest request);

        GetArticleResponse GetArticle(int articleId);

        void AddArticle(SetArticleRequest article);

        void UpdateArticle(SetArticleRequest article);

        GetCommentsForArticleResponse GetCommentsForArticle(GetCommentsForArticleRequest request);

        void AddCommentToArticle(SetCommentOnArticleRequest comment);

        void UpdateCommentOnArticle(SetCommentOnArticleRequest comment);

        void RemoveCommentFromArticle(int articleId);
    }
}
