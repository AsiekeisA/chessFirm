using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace chessAPI.Models
{
    public class DepWorker
    {

        public int Id { get; set; }

        public int DepId { get; set; }
        public Department Department { get; set; }

        public int EmpId { get; set; }
        public Employee Employee { get; set; }



    }
}
