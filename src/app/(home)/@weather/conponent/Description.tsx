'use client'
import { styled } from "styled-components";



export default  function Description() {
  return (
         <WrapperText>

      <h1>
        Realtime Weather API จาก WeatherAPI.com เป็นบริการที่ให้ข้อมูลสภาพอากาศแบบเรียลไทม์
      </h1>
      <ul>
         <li>
         <p>Connecting to the API</p> เพื่อแสดงข้อมูลสภาพอากาศปัจจุบันและพยากรณ์ในอนาคตได้ ผู้ใช้สามารถเชื่อมต่อ API
        โดยการส่งคำขอ HTTP GET ไปยัง URL ของ API พร้อมกับการระบุตำแหน่งที่ต้องการข้อมูล
        สภาพอากาศ เช่น latitude และ longitude หรือชื่อเมืองที่ต้องการค้นหา จาก 
        <a href={"https://rapidapi.com/weatherapi/api/weatherapi-com/playground/apiendpoint_d85e9c6f-fa09-410e-9068-763abecae008"}>
          Search/Autocomplete API
          </a>
         </li>
         <li>
         <p>Authentication </p>ผู้ใช้ต้องระบุหัวข้อของคำขอ HTTP พร้อมกับคีย์ API (API Key) ที่ได้รับจาก RapidAPI เพื่อให้ระบบสามารถตรวจสอบสิทธิ์การเข้าถึงและตอบคำขอได้อย่างถูกต้อง.
         </li>
         <li>
         <p>Request  </p>API จะประมวลผลคำขอและค้นหาข้อมูลสภาพอากาศตามตำแหน่งที่ระบุ หรือชื่อเมืองที่ระบุในพารามิเตอร์ของคำขอ.
         </li>
      </ul>
     
         </WrapperText>
  );
}


const WrapperText = styled.div`
    color: #000;
    padding: 40px 0px ;
    h1 {
         font-size: 20px;
         font-weight: 500;
    }
    > ul{
         margin-top : 20px;
    }
    * > p  {
    font-weight: 500;
    } 
    * > a  {
    color: #008cb2dd;
    text-decoration-line: underline;
    padding: 0px 10px ;
    } 
`