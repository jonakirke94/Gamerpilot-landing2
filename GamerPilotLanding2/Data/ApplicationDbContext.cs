using GamerPilotLanding2.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GamerPilotLanding2.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Feedback>().ToTable("Feedback");
            modelBuilder.Entity<User>().ToTable("Subscriptions");

        }

        public DbSet<Feedback> Feedback { get; set; }
        public DbSet<User> Subscriptions { get; set; }

    }
}
