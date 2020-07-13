using System;
using System.Collections.Generic;
using System.Text;

namespace Flatten.The.Cost.Lib.Infrastructure.Models
{
    public class JsonResponse<T>
    {
        public T Body { get; set; }
        public Exception Error { get; set; }

        public JsonResponse(T body)
        {
            Body = body;
            Error = null;
        }

        public JsonResponse(Exception error)
        {
            Body = default(T);
            Error = error;
        }

        public JsonResponse()
        {
        }
    }
}
