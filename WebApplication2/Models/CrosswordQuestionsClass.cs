using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    [Table("crossword_questions", Schema = "public")] //атрибут, используемый в Entity Framework, чтобы указать имя таблицы базы данных, к которой относится класс.

    public class CrosswordQuestionsClass //класс CrosswordClass соответствует таблице с именем "crossword_questions" в схеме "public" в базе данных.
    {
        [Key]
        public int id { get; set; } // Поле id, являющееся первичным ключом таблицы crossword_questions.
        public string topic { get; set; } // Поле topic, представляющее тему кроссворда.
        public int crossword_number { get; set; } // Поле crossword_number, представляющее номер кроссворда.
        public string question { get; set; } // Поле question, представляющее вопрос к кроссворду
        public string layout { get; set; } // Поле layout, представляющее уровень слова, к которому задается вопрос (вертикальный/горизонтальный)


    }
}