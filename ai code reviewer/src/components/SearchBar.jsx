import { useState } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';
import './SearchBar.css';
import { fetchCohereResponse } from '../fetchData';

function SearchBar({ setSubmittedCode, setResult }) {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseTime, setResponseTime] = useState(null);

  const addPrompt = (code) => {
    return `Analyze this code and provide feedback:\n` +
      `1. Code quality issues\n` +
      `2. Performance suggestions\n` +
      `3. Security warnings\n` +
      `4. Best practices\n\n` +
      `Code:\n${code}`;
  };

  const handleAnalyze = async () => {

    setIsLoading(true);
    setSubmittedCode(question);
    setQuestion('');

    try {
      const startTime = performance.now();
      const promptedInput = addPrompt(question);
      const output = await fetchCohereResponse(promptedInput);
      setResponseTime(performance.now() - startTime);
      setResult(output);
    } catch (error) {
      setResult("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='search-bar'>
      <TextField
        placeholder="Enter your code here..."
        multiline
        maxRows={500}
        variant="outlined"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        disabled={isLoading}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAnalyze}
        disabled={isLoading}
        className={isLoading ? 'search-bar-loading' : ''}
      >
        {isLoading ? (
          <>
            <CircularProgress size={20} className="search-bar-spinner" />
            Analyzing...
          </>
        ) : 'Analyze'}
      </Button>
      {responseTime && (
        <div className="search-bar-response-time">
          API response: {responseTime.toFixed(0)}ms
        </div>
      )}
    </div>
  );
}

export default SearchBar;