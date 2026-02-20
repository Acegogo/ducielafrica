// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
async function startServer() {
  const app = express();
  const server = createServer(app);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  const staticPath = process.env.NODE_ENV === "production" ? path.resolve(__dirname, "public") : path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath));
  app.post("/api/send-booking", async (req, res) => {
    try {
      const { package: selectedPackage, startDate, endDate, travelers, firstName, lastName, email, phone, country, specialRequests } = req.body;
      if (!selectedPackage || !startDate || !email || !firstName || !lastName) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const emailContent = `
        <h2>New Safari Booking Request</h2>
        <p><strong>Package:</strong> ${selectedPackage}</p>
        <p><strong>Travel Dates:</strong> ${startDate} to ${endDate}</p>
        <p><strong>Number of Travelers:</strong> ${travelers}</p>
        <p><strong>Guest Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Special Requests:</strong> ${specialRequests || "None"}</p>
        <p><strong>Booking Time:</strong> ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
      `;
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
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
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
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
  const port = process.env.PORT || 3e3;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
startServer().catch(console.error);
