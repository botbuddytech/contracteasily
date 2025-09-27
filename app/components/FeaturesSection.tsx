import React, { useState } from 'react';

interface TabData {
  id: string;
  title: string;
  icon: string;
  content: {
    title: string;
    description: string;
    image: string;
    features: string[];
  };
}

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('ai-powered');

  const tabs: TabData[] = [
    {
      id: 'ai-powered',
      title: 'AI-Powered',
      icon: 'fa fa-robot',
      content: {
        title: 'AI-Powered Document Generation',
        description: 'Create professional legal documents in minutes using our advanced AI technology that understands legal requirements and generates customized agreements.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+',
        features: [
          'Intelligent document analysis and generation',
          'Customizable templates based on your needs',
          'Real-time legal compliance checking',
          'Automated clause suggestions and improvements'
        ]
      }
    },
    {
      id: 'templates',
      title: 'Templates',
      icon: 'fa fa-file-text',
      content: {
        title: 'Extensive Template Library',
        description: 'Access 2000+ professionally crafted legal document templates covering all major business and personal legal needs.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+',
        features: [
          '500+ professionally crafted templates',
          'Regular updates with new document types',
          'Industry-specific agreements',
          'Easy customization and personalization'
        ]
      }
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      icon: 'fa fa-users',
      content: {
        title: 'Real-time Collaboration',
        description: 'Work together with your team, lawyers, and clients in real-time. Share documents securely and track changes with version control.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+',
        features: [
          'Real-time document editing and sharing',
          'Secure client collaboration tools',
          'Version control and change tracking',
          'Comment and review system'
        ]
      }
    },
    {
      id: 'security',
      title: 'Security',
      icon: 'fa fa-shield-alt',
      content: {
        title: 'Enterprise-Grade Security',
        description: 'Your documents are protected with bank-level security. All data is encrypted and stored securely with compliance to international standards.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+',
        features: [
          'Bank-level encryption and security',
          'GDPR and SOC 2 compliance',
          'Secure document storage and sharing',
          'Audit trails and access controls'
        ]
      }
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: 'fa fa-chart-line',
      content: {
        title: 'Document Analytics & Insights',
        description: 'Track document performance, get insights on legal trends, and monitor your agreement portfolio with comprehensive analytics.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+',
        features: [
          'Document performance tracking',
          'Legal trend analysis and insights',
          'Agreement portfolio monitoring',
          'Custom reporting and dashboards'
        ]
      }
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section className="features-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <h2>Why Choose Contract Easily?</h2>
              <p>Discover the powerful features that make legal document creation effortless and professional</p>
            </div>
          </div>
        </div>

        <div className="features-container">
          {/* Tab Navigation */}
          <div className="features-tabs">
            <div className="tab-navigation">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="tab-icon">
                    <i className={tab.icon}></i>
                  </div>
                  <span className="tab-text">{tab.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="features-content">
            <div className="content-header">
            </div>
            
            <h3 className="content-title">{activeTabData.content.title}</h3>
            
            <div className="content-body">
              <div className="content-image">
                <img 
                  src={activeTabData.content.image} 
                  alt={activeTabData.content.title}
                  className="feature-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <p>{activeTabData.content.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="content-features">
                <h4>Key Features:</h4>
                <ul className="features-list">
                  {activeTabData.content.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fa fa-check-circle"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
