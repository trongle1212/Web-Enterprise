using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Common.Helper
{
    public class CommonHelper
    {
        public const string Image200_200 = "http://placehold.it/200x200";

        public const string AvatarImgPath = "~/Uploads/Avatar/{0}";
        public const string ArticleImgPath = "~/Uploads/Blog/{0}";
        public const string ProductImgPath = "~/Uploads/Product/{0}";
        public const string FilePath = "~/Uploads/Files/{0}";
        public static string _PublicImages = "~/Uploads/";
    }
}
