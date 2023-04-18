using Authentication;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Core.WEB.MVC.Controllers
{
    public class ApplicationController : Controller
    {
        public string locale = CultureInfo.CurrentCulture.Name;
        public ApplicationController()
        {
        }
    }
}