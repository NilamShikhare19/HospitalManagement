using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using WebApplication5.Models;

namespace WebApplication5.Dal
{
    
    public class PatientData:DbContext
    {
        private object constr;
        public PatientData(object constr)
        {
            this.constr = constr;
        }

        public PatientData()
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //Data string
            optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-DFLPJBG;Initial Catalog=PatientDatabase;Integrated Security=True");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PatientModel>().ToTable("tblPatient");
            modelBuilder.Entity<PatientModel>().HasKey(p=>p.ID);
            modelBuilder.Entity<PatientModel>().Property(t => t.ID).ValueGeneratedNever();
        }
        public DbSet<PatientModel> PatientModels { get; set; }

    }
}
