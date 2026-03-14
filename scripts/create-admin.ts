import "dotenv/config";
import { db } from "@/lib/db";
import { users } from "@/schema";
import argon2 from "argon2";


async function main(){
    const password = await argon2.hash("Abhirup@2203");
    await db.insert(users).values({
        email:"codewithabhi2024@gmail.com",
        password
    });
    console.log("Admin user created");
}

main();