import {NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res){
    try{
        //const reqBody = await req.json();
        const prisma = new PrismaClient();
        let result = await prisma.user.findMany()
        return NextResponse.json({status:"success",data:result})
    }
    catch(error){
        return NextResponse.json({status:"success",data:error})
    }
}