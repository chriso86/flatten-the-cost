using Flatten.The.Cost.Lib.Infrastructure.Enums;
using System.Collections.Generic;

namespace Flatten.The.Cost.Lib.Application.Survey.Models
{
    public class GetSurveyQuestionResponse
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public SurveyAnswerType AnswerType { get; set; }
        public ICollection<GetSurveyQuestionAnswerResponse> Answers { get; set; }
    }
}
