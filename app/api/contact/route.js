// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, number, city, object, message, project } =
      await req.json();

    // Nodemailer transport setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "privaradevelopers@gmail.com", // Your Gmail address
        pass: "kylwrwhoxdazffwi", // Use Gmail App-specific password
      },
    });

    const mailOptions = {
      from: email,
      to: "privaradevelopers@gmail.com", // The recipient email
      subject: `Enquiry from ${name} for ${project}`,
      text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nCity: ${city}\nProject: ${project}\nType: ${object}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error sending email",
        error: error.toString(),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
