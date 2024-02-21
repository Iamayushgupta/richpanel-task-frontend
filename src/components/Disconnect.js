import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageIntegration() {
    const navigate = useNavigate();
    const handleDeleteIntegration = () => {
        navigate('/login'); 
    }

    const handleReplyToMessages = () => {
        navigate('/conversations'); 
    };

    return (
        <div className="form-container">
        <div className="content-container">
            <h2>Facebook Page Integration</h2>
            <p className="integrated-page">Integrated Page: Amazon Business</p>
            <div className="button-container">
            <button className="delete-btn" onClick={handleDeleteIntegration}>
                Delete Integration
            </button>
            <button className="reply-btn" onClick={handleReplyToMessages}>
                Reply To Messages
            </button>
            </div>
        </div>
        </div>
    );
}

export default PageIntegration;
