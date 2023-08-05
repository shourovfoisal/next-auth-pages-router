import { getToken } from "next-auth/jwt";
import {withAuth} from "next-auth/middleware" 
import { NextRequest, NextResponse } from "next/server";
const urlBase = "http://localhost:3000"

export default withAuth(
    
    async function middleware(req: NextRequest) {
    
        const token = await getToken({req});
        console.log(new Date().toLocaleTimeString());
        console.log(`Token status is: ${token?.status}`);
        console.log(`---------`);

        const path = req.nextUrl.pathname;
        if(!token?.status && path !== "/signIn") {
            return NextResponse.redirect(`${urlBase}/signIn`);
        }
        else if(token?.status === "OTP_REQUIRED" && path !== "/twoFactor") {
            return NextResponse.redirect(`${urlBase}/twoFactor?user=${token?.name}`);
        }
    }, 
    {
        callbacks: {
            authorized: () => true
        }
    }
);

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}