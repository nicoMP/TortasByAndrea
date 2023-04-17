import nodemailer from "nodemailer"

let mailman = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "tortasbyandreabucara@gmail.com@gmail.com",
    accessToken: "ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x",
  },
});
mailman.set("oauth2_provision_cb", (user, renew, callback) => {
  let accessToken = accessToken[user];
  if (!accessToken) {
    return callback(new Error("Unknown user"));
  } else {
    return callback(null, accessToken);
  }
});
interface EmailOptions {
    from: string;
    to: string;
    subject: string;
    text: string;
    html?: string;
  }
  
async function sendEmail(options: EmailOptions) {
    await mailman.sendMail(options);
  }
export{sendEmail};
