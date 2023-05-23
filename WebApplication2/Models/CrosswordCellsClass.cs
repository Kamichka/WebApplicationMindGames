using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    [Table("crossword_cells", Schema = "public")] //атрибут, используемый в Entity Framework, чтобы указать имя таблицы базы данных, к которой относится класс.

    public class CrosswordCellsClass//класс CrosswordCellsClass соответствует таблице с именем "crossword_cells" в схеме "public" в базе данных.
    {
        [Key]
        public int id { get; set; } // Поле id, являющееся первичным ключом таблицы crossword_cells.
        public string topic { get; set; } // Поле topic, представляющее тему кроссворда.
        public int crossword_number { get; set; }  // Поле crossword_number, представляющее номер кроссворда.
        public string cell_coordinates { get; set; } // Поле cell_coordinates, представляющее координаты ячейки кроссворда с номером слова.
        public string word_number { get; set; } // Поле word_number, представляющее номер слова в кроссворде.


    }
}