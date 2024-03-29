import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "aghedohannah@yahoo.com", // Your email where you'll receive emails
      from: "maduekenonso5@gmail.com", // your website email address here
      subject: `Message from ${req.body.fname} ${req.body.lname} \n Phone: ${req.body.phone} \n Email: ${req.body.email}`,
      html: `${req.body.message} .Email: ${req.body.email}`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
