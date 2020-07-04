using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WebApplication5.Dal;
using WebApplication5.Models;

namespace WebApplication5.Controllers
{
    [Authorize]
    [EnableCors("AllowOriginRule")]
    [Route("api/[controller]")]
    [ApiController]
    public class PatientApiController : ControllerBase
    {
        string constr = "";
        public PatientApiController(IConfiguration configuration)
        {
            constr = configuration["ConnStr"];
        }
        

        // GET: api/PatientApi
        [HttpGet]
        public IActionResult Get(string PatientName)
        {
            PatientData dal = new PatientData(constr);
            List<PatientModel> search = (from temp in dal.PatientModels
                                         where temp.PatientName == PatientName
                                         select temp)
                                      .ToList<PatientModel>();
            return Ok(search);
        }

        // POST: api/PatientApi
        [HttpPost]
        public IActionResult Post([FromBody]PatientModel obj)
        {
            var context = new ValidationContext(obj, null, null);
            var result = new List<ValidationResult>();
            var isValid = Validator.TryValidateObject(obj, context, result, true);
            if (result.Count == 0)
            {
                PatientData dal = new PatientData();
                dal.Database.EnsureCreated();
                dal.Add(obj); //add in memory
                dal.SaveChanges();//physical memory
                List<PatientModel> recs = dal.PatientModels.ToList<PatientModel>();
                return StatusCode(200,recs);
               

            }
            else
            {
                return StatusCode(500,(result));
            }
        }

        // PUT: api/PatientApi/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
