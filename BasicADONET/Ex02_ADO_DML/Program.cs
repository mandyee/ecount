﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data;
using System.Data.SqlClient;
using DBCONNLIB;
namespace Ex02_ADO_DML
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //DML
            string insertsql = "insert into emp(empno, ename,sal) values(9999,'홍길동',1000)";
            string updatesql = "update emp set ename='김유신' where empno=9999";
            string deletesql = "delete from emp where empno =9999";


            using (SqlConnection conn = new SqlConnection(DBCONN.Constr)) {
                //SqlCommand cmd = conn.CreateCommand();  
                SqlCommand cmd = new SqlCommand(deletesql, conn);
                //cmd.CommandText = insertsql;
                //cmd.Connection = conn;
                //cmd.CommandType = CommandType.Text;
                conn.Open();
                //반영된 행의 개수 리턴
                int affectedRow = cmd.ExecuteNonQuery();

                Console.WriteLine("{0}의 행이 반영되었습니다" , affectedRow);

            }    
        }
    }
}
