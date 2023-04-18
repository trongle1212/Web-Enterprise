using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Common.IRepository
{
    public interface IHelperRepository
    {
        DateTime ConvertLocalTimeToUTCTime(DateTime dateTime);
        DateTime ConvertUTCTimeToLocalTime(DateTime dateTime, string timeZone = null);
        Task SendGmailAsync(string to, string subject, string body, string file = "");
        ResponseDTO SendGmail(string to, string subject, string body, string file = "");
    }
}
