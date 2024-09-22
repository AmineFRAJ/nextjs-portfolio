import { mailOptions, transporter } from "@/config/nademailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.firstname ||
      !data.lastname ||
      !data.email ||
      !data.phone ||
      !data.message
    ) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
        await transporter.sendMail({
            ...mailOptions,
            from: data.email,
            subject: "Contact Form Submission",
            text: `Name: ${data.firstname} ${data.lastname}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`,
        });
        res.status(200).json({success:true});
        

    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: "Bad request" });
};
export default handler;
