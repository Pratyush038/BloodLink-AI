import DetectionAlertEmail from "@/emails/detection-alert-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, pestDetections, diseaseDetections } = await request.json();

    if (!email) {
      return Response.json({ error: "Email is required." }, { status: 400 });
    }

    const resendRes = await resend.emails.send({
      from: `BloodLink AI <alerts@${process.env.RESEND_DOMAIN}>`,
      to: [email],
      subject: "BloodLink AI - Blood Shortage Alert",
      react: DetectionAlertEmail({ pestDetections, diseaseDetections }),
    });

    if (resendRes.error) {
      return Response.json({ error: resendRes.error }, { status: 500 });
    }

    return Response.json({ data: resendRes.data });

  } catch (error) {
    console.error("Error sending alert email:", error);
    return Response.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
