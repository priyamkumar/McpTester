import React, { useEffect, useState } from "react";

export default function ConfigPanel({ onTestServer }) {
  const [configType, setConfigType] = useState("url");
  const [serverUrl, setServerUrl] = useState("");
  const [installationCode, setInstallationCode] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);
  const [selectedInstallationCode, setSelectedInstallationCode] =
    useState(null);

  useEffect(() => {
    if (selectedInstallationCode) {
      setConfigType("code");
      setInstallationCode(selectedInstallationCode);
      setSelectedInstallationCode(null);
    }
  }, [selectedInstallationCode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (configType === "url" && !serverUrl) {
      alert("Please enter a server URL");
      return;
    }

    if (configType === "code" && !installationCode) {
      alert("Please enter an installation code");
      return;
    }

    onTestServer({
      serverUrl: configType === "url" ? serverUrl : "",
      installationCode: configType === "code" ? installationCode : "",
      apiKey,
    });
  };

  return (
    <div className="md:col-span-1 bg-white rounded-lg shadow-md p-5">
      <h2 className="text-xl font-semibold mb-4">Server Configuration</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Configuration Method
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="url"
                checked={configType === "url"}
                onChange={() => setConfigType("url")}
                className="form-radio"
              />
              <span className="ml-2">Direct URL</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="code"
                checked={configType === "code"}
                onChange={() => setConfigType("code")}
                className="form-radio"
              />
              <span className="ml-2">Installation Code</span>
            </label>
          </div>
        </div>

        {configType === "url" && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="serverUrl"
            >
              MCP Server URL
            </label>
            <input
              type="text"
              id="serverUrl"
              value={serverUrl}
              onChange={(e) => setServerUrl(e.target.value)}
              placeholder="https://example.com/mcp-server"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {configType === "code" && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="installationCode"
            >
              Installation Code (from Smithery)
            </label>
            <input
              type="text"
              id="installationCode"
              value={installationCode}
              onChange={(e) => setInstallationCode(e.target.value)}
              placeholder="@smithery-ai/server-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="apiKey"
          >
            API Key
            <span className="text-xs text-gray-500 ml-1">(if required)</span>
          </label>
          <div className="relative">
            <input
              type={showApiKey ? "text" : "password"}
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Smithery API key"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowApiKey(!showApiKey)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showApiKey ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                    clipRule="evenodd"
                  />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          >
            Test MCP Server
          </button>
        </div>
      </form>
    </div>
  );
}
