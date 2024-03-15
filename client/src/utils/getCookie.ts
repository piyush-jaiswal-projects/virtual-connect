function getCookie(name: string) {
    const cookies = document.cookie.split(';');
  
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
  
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
  
    return null; // Return null if the cookie with the specified name is not found
}

export function getAllCookies() {
  
  const cookiesObject = {
    name: getCookie("name"),
    email: getCookie("email"),
    uid: getCookie("uid"),
    accesToken: getCookie("accessToken"),
    isVerified: getCookie("isVerified"),
    isLoggedIn: getCookie("isLoggedIn")
  };

  return cookiesObject;
}
  
export default getCookie