import React from 'react';
import { JournalBookmarkFill, Globe, Hash } from "react-bootstrap-icons";

function ResearchAndPublications() {
  const researches = [
    {
      researchName: "Prediction and classification of IoT sensor faults using hybrid deep learning model",
      description: "A proactive deep learning approach to enhance IoT system reliability by predicting sensor faults before they impact critical operations.",
      Publisher: "Springer Nature",
      DOI: "10.1007/s42452-024-05633-7",
      url: "https://link.springer.com/article/10.1007/s42452-024-05633-7"
    },
  ];

  return (
    <div className="researches-container">
      {researches.map((research, index) => (
        <div className="research-item-v2" key={index}>
          <div className="research-journal-badge">
            <JournalBookmarkFill size={20} className="me-2" /> Publication
          </div>
          <h3 className="research-title-v2">{research.researchName}</h3>
          <p className="research-desc-v2">{research.description}</p>

          <div className="research-divider"></div>

          <div className="research-footer-v2">
            <div className="research-meta-v2">
              <div className="meta-item">
                <Globe size={14} className="me-2 text-primary" />
                <span><strong>Publisher:</strong> {research.Publisher}</span>
              </div>
              <div className="meta-item">
                <Hash size={14} className="me-2 text-info" />
                <span><strong>DOI:</strong> {research.DOI}</span>
              </div>
            </div>
            <a href={research.url} target="_blank" rel="noopener noreferrer" className="btn-publication">
              View Journal
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResearchAndPublications;