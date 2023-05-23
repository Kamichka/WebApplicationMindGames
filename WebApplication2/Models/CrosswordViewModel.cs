using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class CrosswordViewModel //Класс CrosswordViewModel представляет модель представления (view model) для отображения кроссвордов 
    {
        public List<CrosswordClass> Crosswords { get; set; } // Список объектов типа CrosswordClass, представляющих кроссворды.
        public List<CrosswordCellsClass> CrosswordCells { get; set; }  // Список объектов типа CrosswordCellsClass, представляющих ячейки кроссвордов.
        public List<CrosswordQuestionsClass> CrosswordQuestions { get; set; } // Список объектов типа CrosswordQuestionsClass, представляющих вопросы кроссвордов.
    }
}