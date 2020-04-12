using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRM.Models;

namespace HRM.Services
{
    public class StaffService
    {
        public List<Staff> GetAllStaff()
        {
            Random rnd = new Random();
            List<Staff> listStaff = new List<Staff>();

            for (int i = 1; i < 200; i++)
            {
                Staff staff = new Staff
                {
                    Id = i,
                    Name = "Staff " + i,
                    Age = rnd.Next(20, 40),
                    Address = "TP Hue",
                    Phone = rnd.Next(100000, 999999),
                    StartDate = rnd.Next(2015, 2020)
                };

                listStaff.Add(staff);
            }

            return listStaff;
        }
    }
}
