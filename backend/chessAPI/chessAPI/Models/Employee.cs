﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace chessAPI.Models
{
    public class Employee
    {
        public int EmpId { get; set; }
        public string EmpFirstname { get; set; }
        public string EmpLastname { get; set; }
        public string EmpPhone { get; set; }
        public string Department { get; set; }
    }
}