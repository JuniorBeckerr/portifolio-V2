import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
    return (
        <div className="work-experience-card">
            <h6>
                <a href={details.iframeSrc} target="_blank" rel="noopener noreferrer">
                    {details.title}
                </a>
            </h6>
            <div className="work-duration">{details.date}</div>
            <ul>
                {details.responsibilities.map((item, index) => (
                    <li key={index}>
                        <a href={details.url} rel="noopener noreferrer">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="iframe-container">
                {details.block && (
                    <div className="maintenance-overlay">
                        <iframe
                            src="https://lottie.host/embed/6a4a3b55-7e39-48cd-a642-5a519d6b92b8/vsQMjCmBzv.json"
                            title="Maintenance Animation"
                        ></iframe>
                    </div>
                )}
                <iframe src={details.iframeSrc} title={details.title} />
            </div>
        </div>
    );
};

export default ExperienceCard;
