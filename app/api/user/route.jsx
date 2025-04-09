import { usersTable } from "../../../configs/schema.js"
import { db } from "../../../configs/db.js"
import { NextResponse } from "next/server"
import {eq} from "drizzle-orm"

export async function POST(req) {

    const {user} = await req.json()
    const userData=await db.select().from(usersTable).where(eq(usersTable.email, user?.primaryEmailAddress.emailAddress))

    if(userData?.length<=0){
        // if the user does not exist
        const result=await db.insert(usersTable).values({
            name:user?.fullName,
            email:user?.primaryEmailAddress.emailAddress,
            image:user?.imageUrl,
        }).returning(usersTable)
        return NextResponse.json(result[0])
    }
    return NextResponse.json(userData[0]) 
}