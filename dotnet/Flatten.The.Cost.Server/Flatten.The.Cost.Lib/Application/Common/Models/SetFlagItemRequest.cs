using Flatten.The.Cost.Lib.Infrastructure.Enums;

namespace Flatten.The.Cost.Lib.Application.Common.Models
{
    public class FlagItemRequest
    {
        public FlagItemType FlagItemType { get; set; }
        public int ItemId { get; set; }
    }
}
