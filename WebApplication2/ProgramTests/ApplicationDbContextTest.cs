using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using NUnit.Framework;
using WebApplication2.DataContext;
using WebApplication2.Models;

namespace WebApplication2.ProgramTests
{
    [TestFixture]
    public class ApplicationDbContextTest
    {
        [Test]
        public void ApplicationDbContext_Constructor_Success()
        {
            // Arrange, Act
            var context = new ApplicationDbContext();

            // Assert
            Assert.IsNotNull(context);
            
        }

        [Test]
        public void ApplicationDbContext_QuizObjects_Available()
        {
            // Arrange
            var context = new ApplicationDbContext();

            // Act
            var quizObjects = context.QuizObjects;

            // Assert
            Assert.IsNotNull(quizObjects);
            Assert.IsInstanceOf<DbSet<QuizViewModel>>(quizObjects);
            
        }
    }
}