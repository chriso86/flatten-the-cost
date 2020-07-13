using Flatten.The.Cost.Lib.Domain.Common.Models;
using Flatten.The.Cost.Lib.Infrastructure.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Flatten.The.Cost.Lib.Domain.Survey.Models
{
    public class SurveyQuestion : BaseEntity
    {
        public string Question { get; set; }
        public SurveyAnswerType AnswerType { get; set; }
        public ICollection<SurveyAnswer> Answers { get; set; }
    }
}
