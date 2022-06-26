using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using chessAPI.Models;

namespace chessAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepWorkerController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public DepWorkerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @" select Id, DepId, EmpId from dbo.DepWorker";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myComa = new SqlCommand(query, myCon))
                {
                    myReader = myComa.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(DepWorker dwor)
        {
            string query = @" insert into dbo.DepWorker (DepId, EmpId) values (@DepId, @EmpId)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myComa = new SqlCommand(query, myCon))
                {
                    myComa.Parameters.AddWithValue("@DepId", dwor.DepId);
                    myComa.Parameters.AddWithValue("@EmpId", dwor.EmpId);
                    myReader = myComa.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Add");
        }

        //usun edycja tu nie potrzebna
/*        [HttpPut]
        public JsonResult Put(DepWorker dwor)
        {
            string query = @" update dbo.DepWorker set DepName =(@DepName) where DepId=@DepId";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myComa = new SqlCommand(query, myCon))
                {
                    myComa.Parameters.AddWithValue("@DepId", dep.DepId);
                    myComa.Parameters.AddWithValue("@DepName", dep.DepName);
                    myReader = myComa.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Update");
        }*/

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @" delete from dbo.DepWorker where Id=@Id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myComa = new SqlCommand(query, myCon))
                {
                    myComa.Parameters.AddWithValue("@Id", id);
                    myReader = myComa.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Delete");
        }
    }
}
