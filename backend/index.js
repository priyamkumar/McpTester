import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/api/test", async (req, res) => {
  const { serverUrl, apiKey, installationCode } = req.body;
  
  let mcpServerUrl = serverUrl;
  if (installationCode && !serverUrl) {
    mcpServerUrl = `https://smithery.ai/server/${installationCode}`;
  }
  
  if (!mcpServerUrl) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please provide either a server URL or installation code' 
    });
  }

  try {
    new URL(mcpServerUrl);

    const connectivityTest = await axios.head(mcpServerUrl, {
      timeout: 5000,
      headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : {},
    });

    const functionalityTest = await axios.post(mcpServerUrl, {}, {
      headers: {
        "Content-Type": "application/json",
        ...(apiKey && { Authorization: `Bearer ${apiKey}` }),
      },
    });

    return res.json({
      success: true,
      message: "MCP server is functioning correctly",
      connectivity: {
        status: connectivityTest.status,
        statusText: connectivityTest.statusText,
      },
      functionality: {
        status: functionalityTest.status,
        response: functionalityTest.data,
      },
    });
  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Failed to test MCP server",
      error: error.response
        ? {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data,
          }
        : { message: error.message },
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;