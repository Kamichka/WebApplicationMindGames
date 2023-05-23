using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NUnit.Framework;
using WebApplication2.Controllers;

namespace WebApplication2.ProgramTests
{
    [TestFixture]
    public class HomeControllerTest
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

    }
}