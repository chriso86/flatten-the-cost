using System.Collections.Generic;

namespace Flatten.The.Cost.Lib.Application.Survey.Models
{
    public class GetSurveyQuestionsResponse
    {
        public int Id { get; set; }
        public ICollection<GetSurveyQuestionResponse> Questions { get; set; }
    }
}
