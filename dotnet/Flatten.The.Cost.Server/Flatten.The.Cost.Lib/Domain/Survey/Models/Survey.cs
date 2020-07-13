using Flatten.The.Cost.Lib.Domain.Common.Models;
using System.Collections.Generic;

namespace Flatten.The.Cost.Lib.Domain.Survey.Models
{
    public class Survey : BaseEntity
    {
        public ICollection<SurveyQuestion> Questions { get; set; }
    }
}
