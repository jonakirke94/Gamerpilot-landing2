﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GamerPilotLanding2.Models
{
    public class Feedback
    {
        public int Id { get; set; }

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime Created { get; set; }

        [Required]
        public string Name { get; set; }

        [DataType(DataType.EmailAddress), Required]
        public string Email { get; set; }

        [Required]
        public string Comment { get; set; }
    }
}
