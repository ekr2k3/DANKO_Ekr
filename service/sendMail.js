// const { google } = require('googleapis');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const CUSTOMER_ID = process.env.CUSTOMER_ID;
// const CUSTOMER_SECRET_CODE = process.env.CUSTOMER_SECRET_CODE;
// const REDIRECT_URL = process.env.REDIRECT_URL;
// // const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
// // dell hiểu sao không lấy đc ref_token phải đưa thẳng nó vào thay vì lấy qua env
// const REFRESH_TOKEN = "1//04Oqtcs6T2biCCgYIARAAGAQSNwF-L9Ir9T5qEEdZ06oTNMAYr-O_Cmr7-4j12yW8sOJHcTKTAOOP8w2Xr1ShnV5MRv0Fkv4q76E";
// const oAuth2Client = new google.auth.OAuth2(CUSTOMER_ID, CUSTOMER_SECRET_CODE, REDIRECT_URL);
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
// const sendMail = async (name, email, phone_number, address, comment) => {
//     try {
//         const accessToken = await oAuth2Client.getAccessToken();

//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: '22a1001d0222@students.hou.edu.vn',
//                 clientId: CUSTOMER_ID,
//                 clientSecret: CUSTOMER_SECRET_CODE,
//                 refreshToken: REFRESH_TOKEN,
//                 accessToken: accessToken
//             }
//         });

//         const info = await transporter.sendMail({
//             from: '"Enkarin_ 👻" <22a1001d0222@students.hou.edu.vn>', // sender address
//             to: "hoangnam12a2003km2@gmail.com", // list of receivers
//             subject: "Hello ✔", // Subject line
//             text: "Hello world?", // plain text body
//             html: `
//                 <p>name : ${name}</p>
//                 <p>email : ${email}</p>
//                 <p>phone : ${phone_number}</p>
//                 <p>address : ${address}</p>
//                 <p>comment : ${comment}</p>
//                 <p style="color:red"> : ${REFRESH_TOKEN}</p>
//                 `
//             // html body
//         });

//         console.log('Message sent: %s', info);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// };

// module.exports.mail = sendMail;




/*
Error sending email: Error: connect ETIMEDOUT 74.125.23.108:465
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1595:16) {
  errno: -4039,
  code: 'ESOCKET',
  syscall: 'connect',
  address: '74.125.23.108',
  port: 465,
  command: 'CONN'



  đại khái là Lỗi ETIMEDOUT cho biết rằng ứng dụng của bạn
   không thể kết nối tới máy chủ SMTP của Gmail trong khoảng
   thời gian quy định


lúc ko lỗi
html:
                `<p>name : ${name}</p>
                <p>email : ${email}</p>
                <p>phone : ${phone_number}</p>
                <p>address : ${address}</p>
                <p>comment : ${comment}</p>`, // html body
}*/

/*Đúng vậy, OAuth 2.0 là một giao thức ủy quyền (authorization protocol) cho phép người dùng cấp quyền truy cập cho ứng dụng của bên thứ ba mà không cần phải chia sẻ mật khẩu của tài khoản người dùng. Các điểm chính của OAuth 2.0 như sau:

Không Chia Sẻ Mật Khẩu: Người dùng không cần cung cấp mật khẩu cho ứng dụng bên thứ ba, giảm nguy cơ lộ thông tin.

Cấp Quyền Truy Cập An Toàn: Thay vì mật khẩu, người dùng cấp cho ứng dụng bên thứ ba quyền truy cập vào tài nguyên của họ thông qua các token (access token và refresh token).

Access Token và Refresh Token:

Access Token: Được sử dụng để truy cập vào các tài nguyên của người dùng (ví dụ: đọc email, gửi email).
Refresh Token: Được sử dụng để làm mới access token khi nó hết hạn, thường có thời hạn sống dài hơn access token.
Phạm Vi (Scope): Người dùng có thể chỉ định phạm vi (scope) của quyền truy cập mà họ muốn cấp cho ứng dụng bên thứ ba (ví dụ: chỉ truy cập vào danh sách email mà không có quyền gửi email).

Quản Lý Quyền Truy Cập: Người dùng có thể quản lý và thu hồi các quyền truy cập đã cấp cho các ứng dụng bên thứ ba từ trang quản lý tài khoản của nhà cung cấp dịch vụ (ví dụ: Google Account Permissions).

Được Sử Dụng Rộng Rãi: Là một tiêu chuẩn được sử dụng phổ biến trên các nền tảng web, di động và desktop, giúp các ứng dụng tương tác an toàn và hiệu quả với nhau.

Với OAuth 2.0, người dùng có thể tin tưởng rằng thông tin cá nhân của họ được bảo vệ một cách an toàn khi sử dụng các dịch vụ của bên thứ ba mà không cần lo lắng về việc lộ mật khẩu. */

// nói chung ko nhất thiết có oauth 2.0 để dùng nodemailer
/*
1. import nodemailer, dotenv
2. lấy mail pass của email
3. 
    const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",  // nới email được gửi tới
    port: 587,  // cổng để kết nối với ethereal hay host
    secure: false, // Use `true` for port 465, `false` for all other ports [ xác định lại cổng sẽ dùng ]
      auth: {
     user: "maddison53@ethereal.email", // email
     pass: "jn7jnAPss4f63QBp6D",  // mật khẩu email hoặc 1 đoạn mã hóa từ mật khẩu [ở đây là đoạn mã hóa - cách để có - keyword to find :App password ]
  },
4. phần còn lại thì y hệt
});
*/




const nodemailer = require('nodemailer');

const sendMail = async (name, email, phone_number, address, comment) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: "22a1001d0222@students.hou.edu.vn",
                pass: "wtvx dyrt rvrd oewx", // bỏ space cũng vẫn được nha
            },
        });

        const info = await transporter.sendMail({
            from: '"Enkarin_ 👻" <22a1001d0222@students.hou.edu.vn>', // sender address
            to: "hoangnam12a2003km2@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: `
                <p>name : ${name}</p>
                <p>email : ${email}</p>
                <p>phone : ${phone_number}</p>
                <p>address : ${address}</p>
                <p>comment : ${comment}</p>
                <p style="color:red">I wanna say : Hello World</p>
            `, // html body
        });
    } catch (error) {
        console.error('Error sending email:', error);
        throw error; // Re-throw the error to propagate it if needed
    }
};

module.exports.mail = sendMail;
/*1 số lỗi cách lấy console.error('Error sending email:', error);
Invalid login: 534-5.7.9 Application-specific password required. For more information, go to
    [nó yêu cầu dùng mật khẩu app password lấy từ phần quản lý tài khoản google trong xác minh 2 bước]
Error: Invalid login: 535-5.7.8 Username and Password not accepted. For more information, go to
    [sai pass or email]
Error: Invalid login: 535 Authentication failed
    [cách sửa đổi smtp.ethereal.email thành smtp.gmail.com]
Error sending email: Error: getaddrinfo ENOTFOUND smtp.gmail.com
    [đúng cổng sai port đổi thành port 587 và secure là false]
Error: connect ETIMEDOUT 95.216.108.161:465
    [ sai cổng và port đổi thành smtp.gmail.com và secure: false, port 587]
 */
