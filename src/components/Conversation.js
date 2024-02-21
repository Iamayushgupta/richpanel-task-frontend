import React from 'react';
import pic1 from "../pictures/rc-1.PNG"
import pic2 from "../pictures/rc-2.PNG"
import pic3 from "../pictures/rc-3.PNG"
import pic4 from "../pictures/rc-4.PNG"
import pic5 from "../pictures/rc-5.PNG"

function MessageUI() {
  const conversations = [
    { name: "Amit RG", message: "Hey There! I probably did one of the best...", time: "10m", source: "Facebook DM" },
    { name: "Hiten Saxena", message: "Hi do you have any T-Shirt available in store...", time: "10m", source: "Facebook Post" },
  ];

  const messages = [
    {
      text: "Is it in stock right now?",
      time: "Mar 05, 2:22 AM",
      sender: "Amit RG",
      isCustomer: true,
    },
    {
      text: "We've 3 left in stock!",
      time: "Mar 05, 2:22 AM",
      sender: "Richard Panel",
      isCustomer: false,
    },
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="top-images">
          <img src={pic1} alt="" />
          <img src={pic2} alt=""/>
          <img src={pic3} alt=""/>
          <img src={pic4} alt=""/>
        </div>

        <div className="bottom-image">
          <img src={pic5} alt=""/>
        </div>
      </aside>

      <div className="conversations-column">
      <div className="conversations-header">
        <h2>Conversations</h2>
      </div>
      <div className="conversations-list">
        {conversations.map((conversation, index) => (
          <div key={index} className="conversation-item">
            <div className="conversation-content">
              <h3>{conversation.name}</h3>
              <p className="conversation-source">{conversation.source}</p>
              <p className="conversation-message">{conversation.message}</p>
            </div>
            <div className="conversation-time">
              <span>{conversation.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="conversation-view">
      <h2>Amit RG</h2>
      <div className="messages-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isCustomer ? 'customer' : 'support'}`}>
            <p>{message.text}</p>
            <span className="time">{message.time}</span>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input type="text" placeholder="Message Hiten Saxena" />
      </div>
    </div>

    <div class="customer-header">
      <img src={pic5} alt="Customer Avatar" class="customer-avatar"/>
      <div class="customer-status">
        <h3>Amit RG</h3>
        <p>Offline</p>
      </div>
      <div class="customer-actions">
        <button class="call-button">Call</button>
        <button class="profile-button">Profile</button>
      </div>
      <div class="customer-info">
        <h4>Customer details</h4>
        <p>Email: amit@richpanel.com</p>
        <p>First Name: Amit</p>
        <p>Last Name: RG</p>
        <button class="details-button">View more details</button>
      </div>
    </div>
    
  </div>
  );
  
}

export default MessageUI;
