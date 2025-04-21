// // Chatbot.js
// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/chatbot.css";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hi! I'm your assistant. How can I help you today?" },
//   ]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     try {
//       const res = await axios.post("http://localhost:5001/chat", {
//         message: input,
//       });

//       const botMessage = { sender: "bot", text: res.data.reply };
//       setMessages((prev) => [...prev, botMessage]);
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chat-window">
//         {messages.map((msg, idx) => (
//           <div key={idx} className={`message ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="input-area">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask me anything..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

















// Chatbot.js
// import React, { useState } from "react";
// import "../styles/chatbot.css";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const Chatbot = () => {
//   const genAI = new GoogleGenerativeAI("AIzaSyAP8d4SvQBdNwBEqtOMjbv1ieYgAVITrX4"); // Replace with your Gemini API Key

//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hi! I'm your assistant. How can I help you today?" },
//   ]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     try {
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//       const result = await model.generateContent(input);
//       const response = await result.response;
//       const text = await response.text();

//       const botMessage = { sender: "bot", text };
//       setMessages((prev) => [...prev, botMessage]);
//     } catch (err) {
//       console.error("Error with Gemini API:", err);
//       const botMessage = {
//         sender: "bot",
//         text: "Sorry, something went wrong. Please try again.",
//       };
//       setMessages((prev) => [...prev, botMessage]);
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chat-window">
//         {messages.map((msg, idx) => (
//           <div key={idx} className={`message ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="input-area">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask me anything..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;












// import React, { useState } from "react";
// import "../styles/chatbot.css";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import axios from "axios"; // Import axios for sending requests to the backend

// const Chatbot = () => {
//   const genAI = new GoogleGenerativeAI("AIzaSyAP8d4SvQBdNwBEqtOMjbv1ieYgAVITrX4"); // Replace with your Gemini API Key

//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hi! I'm your assistant. How can I help you today?" },
//   ]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     try {
//       // Check for website-specific queries first
//       const response = await axios.post("http://localhost:5000/chat", { message: input });

//       if (response.data.reply) {
//         const botMessage = { sender: "bot", text: response.data.reply };
//         setMessages((prev) => [...prev, botMessage]);
//       } else {
//         // If no specific match, use Gemini API for a more general response
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//         const result = await model.generateContent(input);
//         const response = await result.response;
//         const text = await response.text();

//         const botMessage = { sender: "bot", text };
//         setMessages((prev) => [...prev, botMessage]);
//       }
//     } catch (err) {
//       console.error("Error with Gemini API or backend:", err);
//       const botMessage = {
//         sender: "bot",
//         text: "Sorry, something went wrong. Please try again.",
//       };
//       setMessages((prev) => [...prev, botMessage]);
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chat-window">
//         {messages.map((msg, idx) => (
//           <div key={idx} className={`message ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="input-area">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask me anything..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

//this above code is alos correct but without heading











import React, { useState } from "react";
import "../styles/chatbot.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

const Chatbot = () => {
  const genAI = new GoogleGenerativeAI("AIzaSyAP8d4SvQBdNwBEqtOMjbv1ieYgAVITrX4");

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/chat", { message: input });

      if (response.data.reply) {
        const botMessage = { sender: "bot", text: response.data.reply };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(input);
        const response = await result.response;
        const text = await response.text();

        const botMessage = { sender: "bot", text };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (err) {
      console.error("Error:", err);
      const botMessage = { sender: "bot", text: "Sorry, something went wrong. Please try again." };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  return (
    <div className="chatbot-container">
      <h2 className="chatbot-title">🧵 SewSmart Chatbot Assistant</h2>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
//code with chatbot assisatant heading