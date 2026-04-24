import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import cors from "cors";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Define our Email Sending Route
  app.post("/api/order", async (req, res) => {
    try {
      const { customerDetails, orderItems, totalAmount } = req.body;

      // Ensure credentials exist
      const user = process.env.GMAIL_USER;
      const pass = process.env.GMAIL_APP_PASSWORD;

      if (!user || !pass) {
        return res.status(500).json({ 
          error: "Server configuration error: GMAIL_USER or GMAIL_APP_PASSWORD not set in environment." 
        });
      }

      // Create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: user,
          pass: pass,
        },
      });

      // Email formatting
      const mailOptions = {
        from: user,
        to: "order@barakakitchen.com", // Destination email
        subject: `New Order from ${customerDetails.name}`,
        text: `
New Order - Baraka Kitchen

Customer Details:
Name: ${customerDetails.name}
Phone: ${customerDetails.phone}
Address: ${customerDetails.address}

Order Items:
${orderItems}

Total Amount: ${totalAmount}
        `.trim(),
      };

      // Send mail
      await transporter.sendMail(mailOptions);
      
      res.json({ success: true });
    } catch (error) {
      console.error("Failed to send email via NodeMailer:", error);
      res.status(500).json({ error: "Failed to send email. Check server logs." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
