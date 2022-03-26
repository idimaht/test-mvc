## MVC : Node.js

- **Controller** ประสานงาน models กับ views
    - indexController จาก views/index แล้ว render ไปแสดงหน้าแรก
    - scoreController มีนำข้อมูลคะแนน จาก model/scoreModel ไปใช้แสดง (ยังไม่เสร็จ) แล้ว render
- **Model** เก็บ logic นำข้อมูลจาก database มาใช้
    - scoreModel มีการสุ่มค่า Reach และ query
- **Views** หน้า User Interface
    - partial folder ส่วนเสริม navbar footer head จะอยู่ในนี้
    - index.ejs เป็นหน้าหลัก หรือแรก เมื่อเข้า http://localhost:3000
    - add-score.ejs เป็นหน้าเพิ่มคะแนน (ยังทำไม่เสร็จ) TT
