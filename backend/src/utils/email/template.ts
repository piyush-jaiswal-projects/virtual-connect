export function newUserTemplate(value: string | undefined): string {
  return `
      Thanks for signing up to Virtual Connect. Just one last step before you can start using our services for free.
      Here is your OTP for verification: ${value} \n \n
      Regards
      Piyush Jaiswal
      (developer)`;
}

export function welcomeUserTemplate() {
  return `
      Verification success! 
      Please login to start using our real time video communication services and other upcoming features for free. \n

      Regards
      Piyush Jaiswal
      (developer)`;
}
