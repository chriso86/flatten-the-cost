using System;
using Microsoft.AspNetCore.Mvc;
using Flatten.The.Cost.Lib.Infrastructure.Models;
using Flatten.The.Cost.Lib.Infrastructure.Enums;
using Flatten.The.Cost.Lib.Application.Forum.Services;
using Flatten.The.Cost.Lib.Application.Forum.Models;

namespace Fatten.The.Cost.Rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForumController : ControllerBase
    {
        public IArticleService _articleService { get; set; }

        public ForumController(IArticleService articleService)
        {
            _articleService = articleService;
        }

        // GET api/values
        [HttpGet]
        public JsonResponse<GetArticlesResponse> Get([FromQuery] GetArticlesRequest request)
        {
            try
            {
                var response = _articleService.GetArticles(request);

                return new JsonResponse<GetArticlesResponse>(response);
            }
            catch (Exception error)
            {
                return new JsonResponse<GetArticlesResponse>(error);
            }
        }

        // GET api/values/5
        [HttpGet]
        public JsonResponse<GetArticleResponse> Get([FromQuery] int articleId)
        {
            try
            {
                var response = _articleService.GetArticle(articleId);

                return new JsonResponse<GetArticleResponse>(response);
            }
            catch (Exception error)
            {
                return new JsonResponse<GetArticleResponse>(error);
            }
        }

        // POST api/values
        [HttpPost]
        public JsonResponse<bool> Post([FromBody] SetArticleRequest request)
        {
            try
            {
                _articleService.AddArticle(request);

                return new JsonResponse<bool>();
            }
            catch (Exception error)
            {
                return new JsonResponse<bool>(error);
            }
        }

        // PUT api/values/5
        [HttpPut]
        public JsonResponse<bool> Put([FromBody] SetArticleRequest request)
        {
            try
            {
                _articleService.UpdateArticle(request);

                return new JsonResponse<bool>();
            }
            catch (Exception error)
            {
                return new JsonResponse<bool>(error);
            }
        }

        // DELETE api/values/5
        [HttpDelete]
        public JsonResponse<bool> Delete([FromQuery] int articleId)
        {
            try
            {
                _articleService.RemoveCommentFromArticle(articleId);

                return new JsonResponse<bool>();
            }
            catch (Exception error)
            {
                return new JsonResponse<bool>(error);
            }
        }

        // POST api/values
        [HttpPost]
        public JsonResponse<bool> AddComment([FromBody] SetCommentOnArticleRequest request)
        {
            try
            {
                _articleService.AddCommentToArticle(request);

                return new JsonResponse<bool>();
            }
            catch (Exception error)
            {
                return new JsonResponse<bool>(error);
            }
        }

        // PUT api/values/5
        [HttpPut]
        public JsonResponse<bool> UpdateComment([FromBody] SetCommentOnArticleRequest request)
        {
            try
            {
                _articleService.UpdateCommentOnArticle(request);

                return new JsonResponse<bool>();
            }
            catch (Exception error)
            {
                return new JsonResponse<bool>(error);
            }
        }

        // DELETE api/values/5
        [HttpDelete]
        public JsonResponse<bool> DeleteComment([FromQuery] int commentId)
        {
            try
            {
                _articleService.RemoveCommentFromArticle(commentId);

                return new JsonResponse<bool>();
            }
            catch (Exception error)
            {
                return new JsonResponse<bool>(error);
            }
        }

        [HttpPost]
        public JsonResponse<bool> FlagArticle([FromBody] int articleId)
        {
            try
            {
                _articleService.FlagItem(FlagItemType.Article, articleId);

                return new JsonResponse<bool>();
            }
            catch (Exception error)
            {
                return new JsonResponse<bool>(error);
            }
        }

        [HttpPost]
        public JsonResponse<bool> FlagComment([FromBody] int commentId)
        {
            try
            {
                _articleService.FlagItem(FlagItemType.Comment, commentId);

                return new JsonResponse<bool>();
            }
            catch (Exception error)
            {
                return new JsonResponse<bool>(error);
            }
        }
    }
}