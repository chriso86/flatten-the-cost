using Flatten.The.Cost.Lib.Application.Survey.Models;
using Flatten.The.Cost.Lib.Application.Survey.Services;
using Flatten.The.Cost.Lib.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Fatten.The.Cost.Rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SurveyController : ControllerBase
    {
        private ISurveyService _surveyService;

        public SurveyController(ISurveyService surveyService)
        {
            _surveyService = surveyService;
        }

        [HttpGet]
        public JsonResponse<GetSurveyQuestionsResponse> Get()
        {
            try
            {
                var response = _surveyService.GetSurvey();

                return new JsonResponse<GetSurveyQuestionsResponse>(response);
            }
            catch (Exception error)
            {
                return new JsonResponse<GetSurveyQuestionsResponse>(error);
            }
        }
    }
}