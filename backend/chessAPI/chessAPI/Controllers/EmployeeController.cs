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
    public class EmployeeController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        public EmployeeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @" select Id, EmpFirstname, EmpLastname, EmpPhone from dbo.Employee";

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

        [HttpGet("{id}")]
        public JsonResult GetList(int id)
        {
            string query = @"  select DepName from Department where Id in (select DepId from DepWorker where EmpId = @id)";

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

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Employee emp)
        {
            string query = @" insert into dbo.Employee
                            (EmpFirstname, EmpLastname, EmpPhone)
                            values (@EmpFirstname, @EmpLastname, @EmpPhone)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myComa = new SqlCommand(query, myCon))
                {
                    myComa.Parameters.AddWithValue("@EmpFirstname", emp.EmpFirstname);
                    myComa.Parameters.AddWithValue("@EmpLastname", emp.EmpLastname);
                    myComa.Parameters.AddWithValue("@EmpPhone", emp.EmpPhone);
                    //myComa.Parameters.AddWithValue("@Department", emp.Department);
                    myReader = myComa.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Add");
        }

        [HttpPut]
        public JsonResult Put(Employee emp)
        {
            string query = @" update dbo.Employee set 
                            EmpFirstname = @EmpFirstname, 
                            EmpLastname = @EmpLastname, 
                            EmpPhone = @EmpPhone, 
                            where Id=@Id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myComa = new SqlCommand(query, myCon))
                {
                    myComa.Parameters.AddWithValue("@Id", emp.Id);
                    myComa.Parameters.AddWithValue("@EmpFirstname", emp.EmpFirstname);
                    myComa.Parameters.AddWithValue("@EmpLastname", emp.EmpLastname);
                    myComa.Parameters.AddWithValue("@EmpPhone", emp.EmpPhone);
                    //myComa.Parameters.AddWithValue("@Department", emp.Department);
                    myReader = myComa.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Update");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @" delete from dbo.Employee where Id=@Id";

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
