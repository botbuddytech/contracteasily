import React from 'react';

export function PracticeSection() {
  const categories = [
    { name: 'EMPLOYMENT AGREEMENT', count: 15, icon: '👔' },
    { name: 'RENTAL AGREEMENT', count: 12, icon: '🏠' },
    { name: 'BUSINESS AGREEMENT', count: 20, icon: '💼' },
    { name: 'PARTNERSHIP AGREEMENT', count: 8, icon: '🤝' },
    { name: 'SERVICE AGREEMENT', count: 18, icon: '⚙️' },
    { name: 'SALES AGREEMENT', count: 10, icon: '💰' },
    { name: 'LOAN AGREEMENT', count: 14, icon: '💳' },
    { name: 'LEASE AGREEMENT', count: 9, icon: '📋' },
    { name: 'NON-DISCLOSURE AGREEMENT', count: 16, icon: '🔒' },
    { name: 'CONSULTING AGREEMENT', count: 11, icon: '💡' },
    { name: 'LICENSING AGREEMENT', count: 7, icon: '📜' },
    { name: 'FRANCHISE AGREEMENT', count: 5, icon: '🏪' },
    { name: 'DISTRIBUTION AGREEMENT', count: 13, icon: '🚚' },
    { name: 'SUPPLY AGREEMENT', count: 6, icon: '📦' },
    { name: 'MAINTENANCE AGREEMENT', count: 4, icon: '🔧' },
    { name: 'INSURANCE AGREEMENT', count: 3, icon: '🛡️' }
  ];

  const handleCategoryClick = (categoryName: string) => {
    // In a real app, this would navigate to the category page
    console.log(`Clicked on ${categoryName}`);
  };

  return (
    <div className="section section-padding">
      <div className="container">
        <div className="row">
          <div className="practice-content clearfix">
            {categories.map((category, index) => (
              <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 no-padding">
                <div className="p-c-details text-center">
                  <div className="p-c-default pc-custom-defult">
                    <i style={{ fontSize: '56px' }}>{category.icon}</i>
                    <br /><br />
                    <h5 className="line"></h5>
                    <h4 
                      className="agreement-name" 
                      style={{ 
                        height: '20px', 
                        whiteSpace: 'nowrap', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis' 
                      }}
                    >
                      <a 
                        href="javascript:;" 
                        onClick={() => handleCategoryClick(category.name)}
                      >
                        {category.name}
                      </a>
                    </h4>
                    <h4 className="title" style={{ height: '10px' }}>
                      ({category.count})
                    </h4>
                  </div>
                  <div className="p-c-hover text-center">
                    <i style={{ fontSize: '56px' }}>{category.icon}</i>
                    <br /><br />
                    <h5 className="line"></h5>
                    <h4 
                      className="agreement-name" 
                      style={{ 
                        height: '20px', 
                        whiteSpace: 'nowrap', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis' 
                      }}
                    >
                      <a 
                        href="javascript:;" 
                        onClick={() => handleCategoryClick(category.name)}
                      >
                        {category.name}
                      </a>
                    </h4>
                    <h4 className="title" style={{ height: '10px' }}>
                      ({category.count})
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
