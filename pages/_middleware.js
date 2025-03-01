import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function _middleware(req) {
  //Token will exits if  user is logged in

  const token = await getToken({ req, secret: process.env.JWT_SECRET })

  const { pathname } = req.nextUrl

  //	Allow the requests if the following is true...
  //	1) its a request for next-auth session & provider fetvhing
  //	2) the token exists

  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next()
  }

  //	Redirect them to login if they don't have a token AND are requestion a protected route'
  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login')
  }
}
export default _middleware;
