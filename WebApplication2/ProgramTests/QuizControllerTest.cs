using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NUnit.Framework;
using WebApplication2.Controllers;
using WebApplication2.Models;

namespace WebApplication2.ProgramTests
{
    [TestFixture]
    public class QuizControllerTest
    {

        [Test]
        public void Index_ReturnsViewResult()
        {
            // Arrange
            var controller = new HomeController();

            // Act
            var result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual("Index", result.ViewName);
        }


        [Test]
        public void Countries_ReturnsViewResultWithModel()
        {
            // Arrange
            var controller = new QuizController();

            // Act
            var result = controller.Countries() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<List<QuizViewModel>>(result.Model);

        }

        [Test]
        public void Animals_ReturnsViewResultWithModel()
        {
            // Arrange
            var controller = new QuizController();

            // Act
            var result = controller.Animals() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<List<QuizViewModel>>(result.Model);

        }

        [Test]
        public void Maths_ReturnsViewResultWithModel()
        {
            // Arrange
            var controller = new QuizController();

            // Act
            var result = controller.Maths() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<List<QuizViewModel>>(result.Model);

        }

    }
}