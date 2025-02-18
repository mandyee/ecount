﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ex24_Array_Param
{
    class Person { 
    
    }
    class Test { 
    
        public void method(int i) {  
            //함수의 parameter  로 1. 값타입  2.참조타입 (사용자 클래스 , 배열)
        
        }
        public void method2(Person p) {  //Person 객체의 [주소]를 받겠다
        
        }

        public Person method4() { //Person객체의 주소를 리턴하겠다
            Person p = new Person();
            return p; //주소값 리턴
        }


        public void method3(int[] arr) { //배열의 주소를 받겠다
        
        }
    }

    class paramArray {
        public int[] CopyArray(int[] source) {
            
            int[] target = new int[source.Length];

            for (int i = 0; i < source.Length; i++)
            {
                target[i] = source[i] + 1;
            }
            
            return target;
        }

        public int[] CopyArray2(int[] source, int[] source2) {
            int[] ta = new int[source.Length];

            for (int i = 0; i < ta.Length; i++)
            {
                if (ta.Length == source2.Length)
                {
                    ta[i] = source2[i];
                }
                else {
                    ta[i] = source[i];
                } 
                
            }
  
            return ta;
        }
    
    }


    class Param {
        public void sample(params int[] arr) { //params 사용하면 배열의 주소를 받지 않아도 된다
                                               //나열된 값을  parameter  전달하면 인정  sample(10,20,30)
            for (int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            paramArray pa = new paramArray();
            
            int[] p = new int[] {100,200,300,400,500};

            int[] so = pa.CopyArray(p);//주소값 전달

            foreach (int item in so)
            {
                Console.WriteLine("so Array:{0}",item);
            }

            int[] p2 = new int[] { 1, 2, 3, 4, 5 };
            int[] p3 = new int[] { 6, 7, 8, 9, 10 };

            int[] so3 = pa.CopyArray2(p2, p3);
            foreach (int item in so3)
            {
                Console.WriteLine("so3 Array:{0}", item);
            }

            Param p4 = new Param();
            p4.sample(10,20,30,40);
        }
    }
}
