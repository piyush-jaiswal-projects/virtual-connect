import { LoginCookie } from "../types/LoginCookie.types";

export default function setCookies(cookies: LoginCookie[]) {
  
    cookies.forEach(cookie => {
      let cookieString = `${cookie.name}=${cookie.value};`;
  
      // Add optional attributes
      if (cookie.maxAge) {
        cookieString += `max-age=${cookie.maxAge};`;
      }
  
      if (cookie.path) {
        cookieString += `path=${cookie.path};`;
      }
  
      if (cookie.domain) {
        cookieString += `domain=${cookie.domain};`;
      }
  
      if (cookie.secure) {
        cookieString += 'secure;';
      }
  
      if (cookie.httpOnly) {
        cookieString += 'HttpOnly;';
      }
  
      document.cookie = cookieString;
    });
  }

  