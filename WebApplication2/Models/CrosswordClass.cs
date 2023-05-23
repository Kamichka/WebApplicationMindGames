using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    [Table("crossword", Schema = "public")] //атрибут, используемый в Entity Framework, чтобы указать имя таблицы базы данных, к которой относится класс.

    public class CrosswordClass //класс CrosswordClass соответствует таблице с именем "crossword" в схеме "public" в базе данных.
    {
        [Key]
        public int id { get; set; } // Поле id, являющееся первичным ключом таблицы crossword.
        public string topic { get; set; } // Поле topic, представляющее тему кроссворда.
        public int crossword_number { get; set; } // Поле crossword_number, представляющее номер кроссворда.
        public string graphical { get; set; } // Поле graphical, представляющее графическое представление строки таблицы кроссворда в формате wb
        public string word { get; set; } // Поле word, представляяющее расшифровку графического представления

    }
}