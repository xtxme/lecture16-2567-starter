import { DB } from "@lib/DB";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

//GET http://localhost:3000/api/students
//GET http://localhost:3000/api/students?program=CPE ส่งข้อมูลกลับมาเฉพาะ CPE
export const GET = async (request:NextRequest) => {
    
    const program_name = request.nextUrl.searchParams.get('program');
    
    let filtered = DB.students
    if (program_name !== null) {
        filtered = filtered.filter((student) => student.program === program_name);
    }

    return NextResponse.json({
        message: "ok",
        students: filtered
    });
}

//POST http://localhost:3000/api/students

