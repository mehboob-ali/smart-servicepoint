// frontend/src/middleware.js
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // force Node runtime

export function middleware(req) {
  const url = req.nextUrl.clone();

  // if(url.pathname === "/admin"){
  //   const token = req.cookies.get("admin-token");
    
  //   if(!token){
  //     url.pathname = "/";
  //     console.log("Unauthorized access to /admin, redirecting to /login");
  //     return NextResponse.redirect(url);
  //   }
  // }
  console.log("*********** Middleware HIT ***********");
  console.log("Request URL:", req.url);
  return NextResponse.next();
}

export const config = {
  matcher: "/admin", // apply to all routes
};
