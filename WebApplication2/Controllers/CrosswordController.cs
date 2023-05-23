using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication2.DataContext;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class CrosswordController : Controller
    {

       // Общий метод для получения данных кроссворда из базы данных, избегаем дублирования кода
       private CrosswordViewModel GetCrosswordData()
       {
           // Получение данных из базы данных
           using (var db = new ApplicationDbContext())
           {
              var crosswords = db.CrosswordObjects.ToList();
              var crosswordCells = db.CrosswordCellsObjects.ToList();
              var crosswordQuestions = db.CrosswordQuestionObjects.ToList();

              // Создание модели представления и передача данных в представление
              var viewModel = new CrosswordViewModel
              {
                Crosswords = crosswords,
                CrosswordCells = crosswordCells,
                CrosswordQuestions = crosswordQuestions,
              };

               return viewModel;
           }
       }

        // Действие для отображения главной страницы кроссвордов
        public ActionResult Index()
        {
             return View("Index");
        }

        // Действие для отображения кроссворда с тематикой "Природа"
        public ActionResult Nature()
        {
            var viewModel = GetCrosswordData();
            return View(viewModel);
        }

        // Действие для отображения кроссворда с тематикой "Страны"
        public ActionResult Countries()
        {
            var viewModel = GetCrosswordData();
            return View(viewModel);
        }

        // Действие для отображения кроссворда с тематикой "Математика"
        public ActionResult Maths()
        {
            var viewModel = GetCrosswordData();
            return View(viewModel);
        }


    }
}