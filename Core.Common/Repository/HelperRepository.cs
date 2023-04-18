using Core.Common.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;

namespace Core.Common.Repository
{
    public class HelperRepository : IHelperRepository
    {
        public DateTime ConvertLocalTimeToUTCTime(DateTime dateTime)
        {
            DateTime localDateTime = DateTime.SpecifyKind(dateTime, DateTimeKind.Local);
            DateTime utcDateTime = TimeZoneInfo.ConvertTimeToUtc(localDateTime, TimeZoneInfo.Local);
            return utcDateTime;
        }

        public DateTime ConvertUTCTimeToLocalTime(DateTime dateTime, string timeZone = null)
        {
            if (!string.IsNullOrEmpty(timeZone))
            {
                /* SE Asia Standard Time Việt Nam */
                TimeZoneInfo zi = TimeZoneInfo.FindSystemTimeZoneById(timeZone);
                return TimeZoneInfo.ConvertTimeFromUtc(dateTime, zi);
            }
            else
            {
                DateTime localTime = TimeZoneInfo.ConvertTimeFromUtc(dateTime, TimeZoneInfo.Local);
                return localTime;
            }
        }

        public ResponseDTO SendGmail(string to, string subject, string body, string file = "")
        {
            var Response = new ResponseDTO();
            try
            {
                string smtpAddress = "smtp.gmail.com";
                int portNumber = 587;
                bool enableSSL = true;
                string emailFrom = "Hiephoicamcaophong@gmail.com";
                string password = "vQ5_6LelUgpXg-l";
                using (MailMessage mail = new MailMessage())
                {
                    mail.From = new MailAddress(emailFrom);
                    mail.To.Add(to);
                    mail.Subject = subject;
                    mail.Body = body;
                    mail.IsBodyHtml = true;
                    if (!string.IsNullOrEmpty(file))
                    {
                        Attachment data = new Attachment(file, MediaTypeNames.Application.Octet);
                        mail.Attachments.Add(data);
                    }
                    using (SmtpClient smtp = new SmtpClient(smtpAddress, portNumber))
                    {
                        smtp.Credentials = new NetworkCredential(emailFrom, password);
                        smtp.EnableSsl = enableSSL;
                        smtp.Send(mail);
                        Response.Success = true;
                    }
                }
            }
            catch (Exception ex) { }
            return Response;
        }

        public async Task SendGmailAsync(string to, string subject, string body, string file="")
        {
            try
            {
                string smtpAddress = "smtp.gmail.com";
                int portNumber = 587;
                bool enableSSL = true;
                string emailFrom = "Hiephoicamcaophong@gmail.com";
                string password = "vQ5_6LelUgpXg-l";
                using (MailMessage mail = new MailMessage())
                {
                    mail.From = new MailAddress(emailFrom);
                    mail.To.Add(to);
                    mail.Subject = subject;
                    mail.Body = body;
                    mail.IsBodyHtml = true;
                    if (!string.IsNullOrEmpty(file))
                    {
                        Attachment data = new Attachment(file,MediaTypeNames.Application.Octet);
                        mail.Attachments.Add(data);
                    }
                    using (SmtpClient smtp = new SmtpClient(smtpAddress, portNumber))
                    {
                        smtp.Credentials = new NetworkCredential(emailFrom, password);
                        smtp.EnableSsl = enableSSL;
                        await smtp.SendMailAsync(mail);
                    }
                }
            }
            catch (Exception ex) { }
        }
    }
}
