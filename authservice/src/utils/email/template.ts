export default function getEmailTemplate(
  type: string,
  value: string | undefined
): string {
  if (type === "send otp") {
    return `
      Thanks for signing up to Virtual Connect. \n  
      Here is your OTP for verification: ${value} \n\n 
      Regards \n
      Piyush Jaiswal \n
      (developer)`;
  }

  return "";
}
