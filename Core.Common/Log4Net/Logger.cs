using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Core.Common.Log4Net
{
    public static class Logger
    {
        private static readonly ILog Log = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        public static void Info(object obj)
        {
            if (obj != null)
            {
                var message = JsonConvert.SerializeObject(obj);
                Log.Info(message);
            }
        }

        public static void Error(object obj)
        {
            if (obj != null)
            {
                var message = JsonConvert.SerializeObject(obj);
                Log.Info(message);
            }
        }

        public static void Debug(object obj)
        {
            if (obj != null)
            {
                var message = JsonConvert.SerializeObject(obj);
                Log.Info(message);
            }
        }

        public static void Fatal(object obj)
        {
            if (obj != null)
            {
                var message = JsonConvert.SerializeObject(obj);
                Log.Info(message);
            }
        }

        public static void Warn(object obj)
        {
            if (obj != null)
            {
                var message = JsonConvert.SerializeObject(obj);
                Log.Info(message);
            }
        }
    }
}
