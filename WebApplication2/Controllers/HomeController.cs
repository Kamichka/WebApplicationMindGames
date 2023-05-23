using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {
        // Действие для отображения главной страницы сайта
        public ActionResult Index()
        {
            return View("Index");
        }
        
    }
}