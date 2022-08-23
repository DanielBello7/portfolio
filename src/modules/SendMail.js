


async function SendMail(name, body, email) {
  const myHeaders = new Headers();
  myHeaders.append("x-trustifi-key", process.env.REACT_APP_TRUSTIFI_KEY);
  myHeaders.append("x-trustifi-secret", process.env.REACT_APP_TRUSTIFI_SECRET);
  myHeaders.append("Content-Type", "application/json");

  const jsonOptions = JSON.stringify({
    recipients: [
      {
        email: "gokebello@gmail.com", 
        name: 'Goke Bello', 
        phone: {
          country_code: "+234",
          phone_number: "8071749618"
        }
      }
    ],
    lists: [],
    attachments: [],
    title: `Website Email from ${name}`,
    html: `${body}. From: ${name} - ${email}`,
    methods: {
      postmark: false,
      secureSend: false,
      encryptContent: false,
      secureReply: false
    }
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: jsonOptions,
    redirect: 'follow'
  }
  const sendMail = await fetch("https://be.trustifi.com/api/i/v1/email", requestOptions);
  const response = await sendMail.json();
  
  return response;
}

export default SendMail;