using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using WebApplication2.Models;

namespace WebApplication2.DataContext
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext():base(nameOrConnectionString:"Myconnection")
        {
            // Конструктор класса ApplicationDbContext.
            // Вызывает базовый конструктор с передачей строки подключения "Myconnection".
        }

        public virtual DbSet<QuizViewModel> QuizObjects { get; set; } // DbSet для работы с таблицей QuizObjects в базе данных.
        public virtual DbSet<CrosswordClass> CrosswordObjects { get; set; } // DbSet для работы с таблицей CrosswordObjects в базе данных.
        public virtual DbSet<CrosswordCellsClass> CrosswordCellsObjects { get; set; }// DbSet для работы с таблицей CrosswordCellsObjects в базе данных.
        public virtual DbSet<CrosswordQuestionsClass> CrosswordQuestionObjects { get; set; } // DbSet для работы с таблицей CrosswordQuestionObjects в базе данных.
    }
}
//DbSet - часть Entity Framework, представляеющая коллекцию объектов, которая соответствует определенной таблице в базе данных. 