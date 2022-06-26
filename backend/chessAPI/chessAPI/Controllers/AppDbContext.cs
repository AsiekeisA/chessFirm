using chessAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace chessAPI.Controllers
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DepWorker>()
                .HasOne(e => e.Employee)
                .WithMany(w => w.DepWorkers)
                .HasForeignKey(ei => ei.EmpId);

            modelBuilder.Entity<DepWorker>()
                .HasOne(e => e.Department)
                .WithMany(w => w.DepWorkers)
                .HasForeignKey(ei => ei.DepId);
        }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<Department> Departments{ get; set; }

        public DbSet<DepWorker> DepWorkers{ get; set; }


    }
}
