import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">MCP Server Tester</h1>
        <p className="text-sm opacity-80">
          Test Model Context Protocol servers before integration
        </p>
      </div>
    </header>
  );
}
