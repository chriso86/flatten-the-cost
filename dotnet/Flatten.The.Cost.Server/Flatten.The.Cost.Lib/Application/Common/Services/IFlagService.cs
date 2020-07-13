using Flatten.The.Cost.Lib.Infrastructure.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Flatten.The.Cost.Lib.Application.Common.Services
{
    public interface IFlagService
    {
        void FlagItem(FlagItemType flagItemType, int itemId);

        void UnFlagItem(FlagItemType flagItemType, int itemId);
    }
}
