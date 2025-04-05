import { useState } from 'react'
import './App.css'
import Documentation from './Documentation';
import ResultsPanel from './ResultsPanel';
import ConfigPanel from './ConfigPanel';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [error, setError] = useState(null);
  
  const handleTestServer = async (serverConfig) => {
    setIsLoading(true);
    setTestResults(null);
    setError(null);
    
    try {
      const response = await fetch('/api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serverConfig)
      });
      const data = await response.json();
      if (data.success) {
        setTestResults(data);
      } else {
        setError({
          message: data.error,
          details: data.message
        });
      }
    } catch (error) {
      
      setError({
        message: 'Failed to connect to test server',
        details: error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
       <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="container mx-auto py-8 px-4 flex-grow">
        <div className="grid md:grid-cols-3 gap-6">
          <ConfigPanel 
            onTestServer={handleTestServer}
          />
          
          <ResultsPanel  
            isLoading={isLoading}
            results={testResults}
            error={error}
          />
        </div>
        
        <Documentation />
      </main>
      
      <Footer />
    </div>
    </>
  )
}

export default App
