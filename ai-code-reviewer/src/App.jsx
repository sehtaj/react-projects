import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import Code from './components/Code';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [submittedCode, setSubmittedCode] = useState('');

  return (
    <>
      <h1>AI Code Reviewer</h1>

      <div className="screen-split">
        <div className="left-half">
          {submittedCode && <Code userCode={submittedCode} />}
        </div>
        <div className="right-half">
          {result && <Result aiResponse={result} />}
        </div>
      </div>

      <SearchBar 
        setSubmittedCode={setSubmittedCode} 
        setResult={setResult} 
      />
    </>
  );
}

export default App;