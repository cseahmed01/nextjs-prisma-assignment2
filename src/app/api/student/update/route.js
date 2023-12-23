import {NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res){
    try{

        const { searchParams } = new URL(req.url);
        const id = parseInt(searchParams.get('id'));
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        let result = await prisma.user.update({
            where:{id:id},
            data:reqBody
        })
        return NextResponse.json({status:"user Update successfully",data:result})
    }
    catch(error){
        return NextResponse.json({status:"delete fail",data:error})
    }
}