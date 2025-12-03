import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const res = NextResponse.next();
  
  // Get affiliate and referral codes from query params
  const affiliateCode = nextUrl.searchParams.get("ac");
  const referralCode = nextUrl.searchParams.get("ref");

  // Set affiliate code cookie if present
  if (affiliateCode) {
    const cookieOptions: any = {
      path: "/",
      maxAge: 60 * 60 * 24 * 90, // 90 days
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    };
    
    // Set domain for production (cross-subdomain cookies)
    if (process.env.NODE_ENV === 'production') {
      cookieOptions.domain = '.mediaweb.app';
    }
    
    res.cookies.set("affiliateCode", affiliateCode, cookieOptions);
  }

  // Set referral code cookie if present
  if (referralCode) {
    const cookieOptions: any = {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    };
    
    // Set domain for production (cross-subdomain cookies)
    if (process.env.NODE_ENV === 'production') {
      cookieOptions.domain = '.mediaweb.app';
    }
    
    res.cookies.set("referralCode", referralCode, cookieOptions);
  }

  return res;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
