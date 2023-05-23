using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    [Table("quiz",Schema ="public")] //атрибут, используемый в Entity Framework, чтобы указать имя таблицы базы данных, к которой относится класс.

    public class QuizViewModel //Класс QuizViewModel представляет модель представления (view model) для отображения викторин
    {
        [Key]
        public int id { get; set; } // Поле id, являющееся первичным ключом таблицы quiz.
        public string topic { get; set; } // Поле topic, представляющее тему викторины.
        public string question { get; set; } // Поле question, представляющее вопрос викторины.
        public string answer1 { get; set; } // Поле answer1, представляющее первый вариант ответа на вопрос
        public string answer2 { get; set; } // Поле answer2, представляющее второй вариант ответа на вопрос
        public string answer3 { get; set; } // Поле answer3, представляющее третий вариант ответа на вопрос
        public string correct_answer_num { get; set; } // Поле correct_answer_num, представляющее верный ответ на вопрос


    }
}