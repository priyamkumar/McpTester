# 🧪 MCP Tester
MCP Tester is a lightweight web application that allows users to test the connectivity and functionality of a custom MCP server using a configuration file. Designed for developers and system admins, it provides fast, visual feedback on the status of your MCP server setup.

## 🚀 Features
🔧 Accepts MCP server configuration via a user-friendly UI

🛠 Verifies connectivity and endpoint functionality

📊 Displays detailed result reports with statuses

💡 Useful for testing and debugging MCP setups

## 🏗 Tech Stack
Frontend: React

Backend: Node.js, Express.js

Deployment: Vercel

## ⚙️ How It Works
1. User uploads or pastes MCP configuration.

2. The app sends test requests to the specified server.

3. Backend validates server responses and connection health.

4. Results are rendered in a readable format on the front end.

## 📦 Installation (For Local Development)
1. git clone https://github.com/yourusername/mcp-tester.git

2. cd mcp-tester

3. npm install

4. npm start

Frontend will be available at http://localhost:3000 (or your configured port)

## 🛡️ Security Considerations
Basic input validation is performed

Ensure the server being tested is safe and under your control

## 📄 License
MIT License
