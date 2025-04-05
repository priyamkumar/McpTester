import React from "react";

export default function Documentation() {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-5">
      <h2 className="text-xl font-semibold mb-4">About MCP Server Testing</h2>

      <div className="prose max-w-none">
        <p>
          Model Context Protocol (MCP) is a framework that enables AI models to
          access specialized capabilities through standardized interfaces. This
          tool helps you test MCP servers before integration.
        </p>

        <h3 className="text-lg font-medium mt-4">How to Use This Tool</h3>
        <ol className="list-decimal list-inside space-y-2 pl-5">
          <li>
            Select a configuration method (direct URL or installation code)
          </li>
          <li>
            Enter the MCP server URL or Smithery installation code (e.g.,{" "}
            <code>@smithery-ai/server-sequential-thinking</code>)
          </li>
          <li>
            Click "Test MCP Server" to verify connectivity and functionality
          </li>
        </ol>

        <h3 className="text-lg font-medium mt-4">About MCP Servers</h3>
        <p>
          MCP servers provide additional capabilities to AI models, such as:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-5">
          <li>Information retrieval</li>
          <li>Structured reasoning</li>
          <li>External tool interactions</li>
          <li>Enhanced capabilities (e.g., sequential thinking)</li>
        </ul>

        <p className="mt-4">
          For more information about Model Context Protocol, visit{" "}
          <a
            href="https://modelcontextprotocol.io/introduction"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            modelcontextprotocol.io
          </a>
          .
        </p>
      </div>
    </div>
  );
}
