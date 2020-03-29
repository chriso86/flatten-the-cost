using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace Flatten.The.Cost.Lib.Infrastructure.Enums
{
    public enum FlagItemType
    {
        [Description("Article")]
        Article = 1,
        [Description("Comment")]
        Comment = 2,
        [Description("User")]
        User = 3
    }
}
