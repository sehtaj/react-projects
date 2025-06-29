import './Result.css';

function Result({ aiResponse }) {
  return (
    <div className="chat-bubble ai">
      <pre>{aiResponse}</pre>
    </div>
  );
}

export default Result;