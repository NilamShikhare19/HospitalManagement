using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication5.Models
{
    public class PatientModel
    {
        public int ID { get; set; }
        [Required]
        [RegularExpression("^[a-z][A-Z]{1,10}$")]
        public string PatientName { get; set; }
        [Required]
        public string PatientProblem { get; set; }
    }
}
