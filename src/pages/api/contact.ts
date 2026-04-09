import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const smtpUser = import.meta.env.ZOHO_SMTP_USER;
  const smtpPass = import.meta.env.ZOHO_SMTP_PASS;
  const smtpHost = import.meta.env.ZOHO_SMTP_HOST ?? 'smtp.zoho.eu';

  if (!smtpUser || !smtpPass) {
    return json({ error: 'Email service not configured' }, 500);
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ error: 'Invalid request' }, 400);
  }

  const name        = str(data.get('name'));
  const email       = str(data.get('email'));
  const company     = str(data.get('company'));
  const projectType = str(data.get('project_type'));
  const budget      = str(data.get('budget'));
  const message     = str(data.get('message'));

  if (!name || !email || !message) {
    return json({ error: 'Name, email and message are required' }, 400);
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: 587,
    secure: false,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:6px 0;color:#64748B;font-size:13px;white-space:nowrap;width:130px">${label}</td>
           <td style="padding:6px 0;color:#1E293B;font-weight:500">${value}</td>
         </tr>`
      : '';

  const html = `
    <div style="font-family:Inter,system-ui,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
      <div style="background:linear-gradient(135deg,#FF6B00,#FFB800);padding:24px 32px">
        <h1 style="margin:0;font-size:20px;color:#fff;font-weight:700">New enquiry via vonkify.nl</h1>
      </div>
      <div style="padding:28px 32px">
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          ${row('Name', name)}
          ${row('Email', `<a href="mailto:${email}" style="color:#FF6B00">${email}</a>`)}
          ${row('Company', company)}
          ${row('Project type', projectType)}
          ${row('Budget', budget)}
        </table>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 20px">
        <h3 style="margin:0 0 10px;font-size:14px;text-transform:uppercase;letter-spacing:.05em;color:#94A3B8">Message</h3>
        <p style="margin:0;color:#334155;line-height:1.7;white-space:pre-wrap">${message}</p>
      </div>
      <div style="padding:16px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:12px;color:#94A3B8">
        Sent from the contact form at vonkify.nl — reply directly to respond to ${name}
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Vonkify Contact" <${smtpUser}>`,
      to: 'ahmed@vonkify.nl',
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ''}`,
      html,
    });

    return json({ success: true }, 200);
  } catch (err) {
    console.error('[contact] SMTP error', err);
    return json({ error: 'Failed to send email. Please try again.' }, 500);
  }
};

function str(v: FormDataEntryValue | null): string {
  return v?.toString().trim() ?? '';
}

function json(body: object, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
