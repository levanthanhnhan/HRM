using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRM.Models;
using HRM.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HRM.Controllers
{
    [Route("api/Staff")]
    [EnableCors("AllowMyOrigin")]
    [ApiController]
    public class StaffController : ControllerBase
    {

        private readonly ILogger<StaffController> _logger;

        public StaffController(ILogger<StaffController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public List<Staff> GetAllStaff()
        {
            var user = new StaffService();
            return user.GetAllStaff();
        }

        [HttpGet("{id}", Name = "Get")]
        public Staff GetStaffById(int id)
        {
            var user = new StaffService();
            return user.GetAllStaff().Where(staff => staff.Id == id).FirstOrDefault();
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet]
        [Route("GetStaffByYear")]
        public object GetStaffByYear()
        {
            var user = new StaffService();
            var results = user.GetAllStaff().GroupBy(staff => staff.StartDate).Select(g => new
            {
                Year = g.Key,
                Count = g.Count()
            });

            return results.OrderBy(x => x.Year).ToList();
        }
    }
}
