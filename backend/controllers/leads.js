const Lead = require('../models/Lead');
const factory = require('./handlerFactory');
const sendEmail = require('../utils/sendEmail');

exports.getAll = factory.getAll(Lead);
exports.getOne = factory.getOne(Lead);
exports.updateOne = factory.updateOne(Lead);
exports.deleteOne = factory.deleteOne(Lead);

// Custom createOne for Leads to trigger email notifications
exports.createOne = async (req, res, next) => {
  try {
    const doc = await Lead.create(req.body);

    // ==========================================
    // 1. ADMIN NOTIFICATION EMAIL (HTML)
    // ==========================================
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background-color: #18181b; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">VEGLUX MEDIA</h2>
            <p style="color: #a1a1aa; margin: 5px 0 0 0; font-size: 14px;">New Lead Acquired</p>
          </div>
          
          <div style="padding: 30px;">
            <h3 style="color: #27272a; margin-top: 0; border-bottom: 2px solid #f4f4f5; padding-bottom: 10px;">Lead Details</h3>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #52525b; width: 120px;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #18181b;">${doc.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #52525b;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #18181b;"><a href="mailto:${doc.email}" style="color: #2563eb; text-decoration: none;">${doc.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #52525b;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #18181b;">${doc.phone || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #52525b;"><strong>Company:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #18181b;">${doc.company || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #52525b;"><strong>Service:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; color: #18181b; text-transform: capitalize;">
                  <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 13px; font-weight: bold;">
                    ${doc.service}
                  </span>
                </td>
              </tr>
            </table>

            <h3 style="color: #27272a; margin-top: 30px; border-bottom: 2px solid #f4f4f5; padding-bottom: 10px;">Message</h3>
            <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #3b82f6; color: #334155; font-style: italic; line-height: 1.6;">
              ${doc.message}
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${doc.email}" style="display: inline-block; background-color: #18181b; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: bold; letter-spacing: 0.5px;">REPLY TO LEAD</a>
            </div>
          </div>
          
          <div style="background-color: #f4f4f5; padding: 15px; text-align: center; color: #a1a1aa; font-size: 12px;">
            Automated message from Veglux Media Backend System
          </div>
        </div>
      </body>
      </html>
    `;

    // ==========================================
    // 2. USER AUTO-REPLY EMAIL (HTML)
    // ==========================================
    const userHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #111111; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border-radius: 12px; overflow: hidden; border: 1px solid #333333;">
          
          <!-- Header -->
          <div style="padding: 40px 30px; text-align: center; border-bottom: 1px solid #333333;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 2px;">VEGLUX<span style="color: #3b82f6;">MEDIA</span></h1>
            <p style="color: #888888; margin: 10px 0 0 0; font-size: 15px; letter-spacing: 1px;">ELEVATING BRANDS TO DOMINANCE</p>
          </div>
          
          <!-- Body -->
          <div style="padding: 40px 30px;">
            <h2 style="color: #ffffff; margin-top: 0; font-size: 22px; font-weight: normal;">Hello <span style="color: #3b82f6; font-weight: bold;">${doc.name}</span>,</h2>
            
            <p style="color: #cccccc; line-height: 1.8; font-size: 16px;">
              Thank you for reaching out to us. We have successfully received your inquiry regarding <strong>${doc.service}</strong>.
            </p>
            
            <p style="color: #cccccc; line-height: 1.8; font-size: 16px;">
              At Veglux Media, we don't just run campaigns—we architect growth engines. Our Director, Lucky Joshi, or a dedicated Senior Strategist will review your requirements and reach out to you within the next <strong>2 hours</strong> to discuss the blueprint for your brand.
            </p>
            
            <div style="background-color: #222222; border-left: 4px solid #3b82f6; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
              <p style="margin: 0 0 10px 0; color: #888888; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Your Message Copy</p>
              <p style="margin: 0; color: #aaaaaa; font-style: italic; line-height: 1.6;">"${doc.message}"</p>
            </div>
            
            <p style="color: #cccccc; line-height: 1.8; font-size: 16px;">
              We look forward to scaling your vision.
            </p>
            
            <div style="margin-top: 40px;">
              <p style="margin: 0; color: #ffffff; font-weight: bold; font-size: 16px;">Best Regards,</p>
              <p style="margin: 5px 0 0 0; color: #3b82f6; font-weight: bold; font-size: 16px;">The Veglux Team</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #000000; padding: 20px; text-align: center;">
            <p style="color: #666666; font-size: 12px; margin: 0;">
              Veglux Media | Udaipur, Rajasthan, India <br>
              <a href="https://vegluxmedia.com" style="color: #3b82f6; text-decoration: none;">www.vegluxmedia.com</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    try {
      // Send to Admin
      await sendEmail({
        email: process.env.SMTP_EMAIL,
        subject: `New Lead: ${doc.name} - ${doc.service}`,
        html: adminHtml,
      });

      // Auto-Reply to User
      await sendEmail({
        email: doc.email,
        subject: 'Inquiry Received - Veglux Media',
        html: userHtml,
      });

    } catch (err) {
      console.error('Error sending email:', err);
    }

    res.status(201).json({ success: true, data: doc });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
