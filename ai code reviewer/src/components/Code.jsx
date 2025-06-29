import './Code.css';

function Code({ userCode }) {
  return (
    <div className="chat-bubble user">
      <pre>{userCode}</pre>
    </div>
  );
}

export default Code;