import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Booking email endpoint
  app.post("/api/send-booking", async (req, res) => {
    try {
      const { package: selectedPackage, startDate, endDate, travelers, firstName, lastName, email, phone, country, specialRequests } = req.body;

      // Validate required fields
      if (!selectedPackage || !startDate || !email || !firstName || !lastName) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Format email content
      const emailContent = `
        <h2>New Safari Booking Request</h2>
        <p><strong>Package:</strong> ${selectedPackage}</p>
        <p><strong>Travel Dates:</strong> ${startDate} to ${endDate}</p>
        <p><strong>Number of Travelers:</strong> ${travelers}</p>
        <p><strong>Guest Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Special Requests:</strong> ${specialRequests || 'None'}</p>
        <p><strong>Booking Time:</strong> ${new Date().toLocaleString()}</p>
      `;

      // In a real application, you would send this email using a service like SendGrid, Nodemailer, etc.
      // For now, we'll just log it and return success
      console.log("Booking Request:", {
        package: selectedPackage,
        startDate,
        endDate,
        travelers,
        firstName,
        lastName,
        email,
        phone,
        country,
        specialRequests,
        timestamp: new Date().toISOString()
      });

      // Send success response
      res.json({ 
        success: true, 
        message: "Booking request received. We will contact you shortly.",
        bookingRef: `DUCIEL-${Date.now()}`
      });
    } catch (error) {
      console.error("Booking error:", error);
      res.status(500).json({ error: "Failed to process booking request" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
