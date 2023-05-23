using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using System.Xml.Linq;
using WebApplication2.DataContext;

namespace WebApplication2.Controllers
{
    public class QuizController : Controller
    {
        // Действие для отображения главной страницы викторин
        public ActionResult Index()
        {
            return View("Index");
        }

        // Действие для отображения страницы с викторинами  по теме "Страны"
        public ActionResult Countries()
        {
            // Получение данных из базы данных
            using (var db = new ApplicationDbContext())
            {
                //Преобразование результата запроса в список объектов
                var quizList = db.QuizObjects.ToList();
                return View(quizList);
            }
        }

        // Действие для отображения страницы с викторинами  по теме "Животные"
        public ActionResult Animals()
        {
            // Получение данных из базы данных
            using (var db = new ApplicationDbContext())
            {
                //Преобразование результата запроса в список объектов
                var quizList = db.QuizObjects.ToList();
                return View(quizList);
            }
        }

        // Действие для отображения страницы с викторинами  по теме "Математика"
        public ActionResult Maths()
        {
            // Получение данных из базы данных
            using (var db = new ApplicationDbContext())
            {
                //Преобразование результата запроса в список объектов
                var quizList = db.QuizObjects.ToList();
                return View(quizList);
            }
        }

    }
}