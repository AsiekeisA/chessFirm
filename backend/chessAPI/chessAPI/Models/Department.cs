using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace chessAPI.Models
{
    public class Department
    {
        public int Id { get; set; }

        public string DepName { get; set; }

        public List<DepWorker> DepWorkers { get; set; }

    }
}
