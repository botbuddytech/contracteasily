import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface Agreement {
  id: string;
  name: string;
  description: string;
  category: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample agreements data
  const agreements: Agreement[] = [
    { id: '1', name: 'Employment Agreement', description: 'Standard employment contract template', category: 'Employment' },
    { id: '2', name: 'Non-Disclosure Agreement (NDA)', description: 'Confidentiality agreement template', category: 'Business' },
    { id: '3', name: 'Service Agreement', description: 'Professional service contract template', category: 'Business' },
    { id: '4', name: 'Rental Agreement', description: 'Property rental contract template', category: 'Real Estate' },
    { id: '5', name: 'Partnership Agreement', description: 'Business partnership contract template', category: 'Business' },
    { id: '6', name: 'Sales Agreement', description: 'Product/service sales contract template', category: 'Sales' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial bot message
      setTimeout(() => {
        addBotMessage("Hello! 👋 Welcome to Contract Easily. I'm here to help you find the perfect legal agreement. What type of agreement are you looking for today?");
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text,
        isBot: true,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      isBot: false,
      timestamp: new Date()
    }]);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addUserMessage(inputValue);
      handleBotResponse(inputValue);
      setInputValue('');
    }
  };

  const handleBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Search for matching agreements
    const matchingAgreements = agreements.filter(agreement => 
      agreement.name.toLowerCase().includes(lowerMessage) ||
      agreement.category.toLowerCase().includes(lowerMessage) ||
      agreement.description.toLowerCase().includes(lowerMessage)
    );

    setTimeout(() => {
      if (matchingAgreements.length > 0) {
        let response = "Great! I found some agreements that might interest you:\n\n";
        matchingAgreements.forEach((agreement, index) => {
          response += `${index + 1}. **${agreement.name}**\n   ${agreement.description}\n\n`;
        });
        response += "Would you like me to help you with any of these agreements? Just let me know which one interests you!";
        addBotMessage(response);
      } else {
        addBotMessage("I understand you're looking for a specific agreement. Here are our most popular categories:\n\n• **Business Agreements** (NDA, Partnership, Service)\n• **Employment Contracts**\n• **Real Estate Agreements**\n• **Sales Contracts**\n\nCould you tell me more about what you need? For example, are you hiring someone, starting a business, or renting property?");
      }
    }, 500);
  };

  const handleQuickReply = (reply: string) => {
    addUserMessage(reply);
    handleBotResponse(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div 
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i className="fa fa-times"></i>
        ) : (
          <i className="fa fa-comments"></i>
        )}
      </div>

      {/* Chatbot Interface */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <img src="/images/horse_new.png" alt="Contract Easily Bot" />
              </div>
              <div className="chatbot-title">
                <h4>Contract Easily Assistant</h4>
                <span className="chatbot-status">Online</span>
              </div>
            </div>
            <button 
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa fa-times"></i>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
              >
                <div className="message-content">
                  {message.text.split('\n').map((line, index) => (
                    <div key={index}>
                      {line.includes('**') ? (
                        <span dangerouslySetInnerHTML={{
                          __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }} />
                      ) : (
                        line
                      )}
                    </div>
                  ))}
                </div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot-message">
                <div className="message-content typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Buttons */}
          <div className="chatbot-quick-replies">
            <button onClick={() => handleQuickReply('Employment Agreement')}>
              Employment
            </button>
            <button onClick={() => handleQuickReply('Business Agreement')}>
              Business
            </button>
            <button onClick={() => handleQuickReply('Rental Agreement')}>
              Rental
            </button>
          </div>

          <div className="chatbot-input">
            <div className="input-container">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="message-input"
              />
              <button 
                onClick={handleSendMessage}
                className="send-button"
                disabled={!inputValue.trim()}
              >
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
