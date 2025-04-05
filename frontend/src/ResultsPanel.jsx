import React, { useEffect, useState } from "react";

export default function ResultsPanel({ isLoading, results, error }) {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    if (results) {
      setStatus("success");
    } else if (error) {
      setStatus("error");
    } else if (!isLoading) {
      setStatus(null);
    }
  }, [results, error, isLoading]);

  return (
    <div className="md:col-span-2 bg-white rounded-lg shadow-md p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Test Results</h2>
        {status && (
          <div
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              status === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status === "success"
              ? "Connection Successful"
              : "Connection Failed"}
          </div>
        )}
      </div>

      {isLoading && (
        <div className="text-center py-10">
          <div className="rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto animate-spin"></div>
          <p className="mt-4 text-gray-600">Testing MCP server...</p>
        </div>
      )}

      {results && (
        <div className="animate-fadeIn">
          <div className="border-b pb-3 mb-3">
            <h3 className="font-semibold text-gray-700">Connection Status</h3>
            <div className="mt-2 p-3 bg-gray-50 rounded text-sm">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="font-medium">Connected successfully</span>
              </div>
            </div>
          </div>

          <div className="border-b pb-3 mb-3">
            <h3 className="font-semibold text-gray-700">Generation Test</h3>
            <div className="mt-2 p-3 bg-gray-50 rounded text-sm">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="font-medium">Generation test successful</span>
              </div>
              <div className="mt-2">
                <strong>Response: {results && results.message}</strong>
                <div className="mt-1 p-2 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">Raw Response</h3>
            <pre className="mt-2 p-3 bg-gray-50 rounded text-sm overflow-auto max-h-64">
              {" "}
              {results && JSON.stringify(results)}
            </pre>
          </div>
        </div>
      )}

      {error && (
        <div className="animate-fadeIn">
          <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <h3 className="font-semibold text-red-700">Error</h3>
            <p className="mt-2 text-red-600">{JSON.stringify(error.message)}</p>
            {error.details && (
              <div className="mt-3 p-3 bg-gray-50 rounded text-sm overflow-auto max-h-64">
                {typeof error.details === "string"
                  ? error.details
                  : JSON.stringify(error.details, null, 2)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
