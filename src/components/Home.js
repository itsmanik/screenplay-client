import React, { useState } from "react";
import "./styles/Home.css";

const SpeechToText = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcripts, setTranscripts] = useState([]);

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
    } else {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        setTranscripts((prevTranscripts) => [...prevTranscripts, result]);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
      setIsRecording(true);
    }
  };

  const handleSubmit = () => {
    console.log("Transcripts:", transcripts);
  };

  return (
    <div className="speech-to-text-container">
      <h1>Scene Title</h1>
      <br />
      <textarea
        value={transcripts.join(" ")}
        onChange={(e) => setTranscripts([e.target.value])}
        placeholder="Transcript will appear here"
        rows={13}
        cols={50}
        className="transcript-textarea"
      />
      <br />
      <div className="buttons">
        <div></div>
        <div className="buttonsInnerDiv">
          <button onClick={handleSubmit} className="submit-button">Convert ✨</button>
          <button
            onClick={toggleRecording}
            className={`record-button ${isRecording ? "recording" : ""}`}
          >
            {isRecording ? (
              <>🛑</>
            ) : (
              <>
                <span role="img" aria-label="start-icon">
                  🎤
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;
