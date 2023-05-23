using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class ChessController : Controller
    {
        // GET: Chess
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult OneMoveTask1()
        {
            return View("OneMoveTask1");
        }

        public ActionResult OneMoveTask2()
        {
            return View("OneMoveTask2");
        }

        public ActionResult OneMoveTask3()
        {
            return View("OneMoveTask3");
        }

        public ActionResult OneMoveTask4()
        {
            return View("OneMoveTask4");
        }

        public ActionResult OneMoveTask5()
        {
            return View("OneMoveTask5");
        }

        public ActionResult TwoMoveTask1()
        {
            return View("TwoMoveTask1");
        }

        public ActionResult TwoMoveTask2()
        {
            return View("TwoMoveTask2");
        }

        public ActionResult TwoMoveTask3()
        {
            return View("TwoMoveTask3");
        }

        public ActionResult BestMoveTask1()
        {
            return View("BestMoveTask1");
        }

        public ActionResult BestMoveTask2()
        {
            return View("BestMoveTask2");
        }

        public ActionResult BestMoveTask3()
        {
            return View("BestMoveTask3");
        }

    }
}