import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface Document {
  id: number;
  title: string;
  description: string;
  category: string;
  type: 'Agreement' | 'Affidavit' | 'Form' | 'Petition' | 'Deed';
  act?: string;
  section?: string;
  price: number;
  isPopular?: boolean;
  downloadCount: number;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

const categories: Category[] = [
  { id: 'general', name: 'General Agreements', slug: 'general', count: 45 },
  { id: 'affidavits', name: 'Affidavits', slug: 'affidavits', count: 23 },
  { id: 'corporate', name: 'Corporate Agreements', slug: 'corporate', count: 38 },
  { id: 'petitions', name: 'Petitions', slug: 'petitions', count: 15 },
  { id: 'forms', name: 'Forms', slug: 'forms', count: 67 },
  { id: 'deeds', name: 'Deeds', slug: 'deeds', count: 29 },
  { id: 'banking', name: 'Banking', slug: 'banking', count: 31 },
];

const sampleDocuments: Document[] = [
  {
    id: 1,
    title: 'Employment Agreement',
    description: 'Comprehensive employment agreement template for hiring employees with all necessary clauses.',
    category: 'General Agreements',
    type: 'Agreement',
    act: 'Industrial Disputes Act, 1947',
    price: 299,
    isPopular: true,
    downloadCount: 1250
  },
  {
    id: 2,
    title: 'Non-Disclosure Agreement (NDA)',
    description: 'Standard NDA template to protect confidential information and trade secrets.',
    category: 'Corporate Agreements',
    type: 'Agreement',
    price: 199,
    isPopular: true,
    downloadCount: 2100
  },
  {
    id: 3,
    title: 'Affidavit of Identity',
    description: 'Affidavit to establish identity for various legal and official purposes.',
    category: 'Affidavits',
    type: 'Affidavit',
    price: 99,
    downloadCount: 850
  },
  {
    id: 4,
    title: 'Partnership Deed',
    description: 'Comprehensive partnership deed for business partnerships with profit-sharing clauses.',
    category: 'Deeds',
    type: 'Deed',
    act: 'Indian Partnership Act, 1932',
    price: 399,
    downloadCount: 675
  },
  {
    id: 5,
    title: 'Rent Agreement',
    description: 'Standard rental agreement for residential and commercial properties.',
    category: 'General Agreements',
    type: 'Agreement',
    act: 'Transfer of Property Act, 1882',
    price: 149,
    isPopular: true,
    downloadCount: 3200
  },
  {
    id: 6,
    title: 'Loan Agreement',
    description: 'Personal and business loan agreement with interest and repayment terms.',
    category: 'Banking',
    type: 'Agreement',
    price: 249,
    downloadCount: 1100
  },
  {
    id: 7,
    title: 'Power of Attorney',
    description: 'General and specific power of attorney for various legal representations.',
    category: 'General Agreements',
    type: 'Agreement',
    act: 'Power of Attorney Act, 1882',
    price: 199,
    downloadCount: 950
  },
  {
    id: 8,
    title: 'Divorce Petition',
    description: 'Petition for divorce under Hindu Marriage Act with all necessary grounds.',
    category: 'Petitions',
    type: 'Petition',
    act: 'Hindu Marriage Act, 1955',
    price: 499,
    downloadCount: 450
  },
  {
    id: 9,
    title: 'Company Registration Form',
    description: 'Form for registering a new company with all required details and declarations.',
    category: 'Forms',
    type: 'Form',
    price: 99,
    downloadCount: 1800
  },
  {
    id: 10,
    title: 'Sale Deed',
    description: 'Property sale deed with all necessary clauses for property transfer.',
    category: 'Deeds',
    type: 'Deed',
    act: 'Transfer of Property Act, 1882',
    price: 349,
    downloadCount: 750
  },
  {
    id: 11,
    title: 'Service Agreement',
    description: 'Agreement for service providers with terms, conditions, and payment clauses.',
    category: 'General Agreements',
    type: 'Agreement',
    price: 199,
    downloadCount: 1200
  },
  {
    id: 12,
    title: 'Bank Guarantee',
    description: 'Bank guarantee form for financial security in business transactions.',
    category: 'Banking',
    type: 'Agreement',
    price: 299,
    downloadCount: 600
  }
];

export function LegalDocumentLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>(sampleDocuments);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('name');

  // Filter and search documents
  useEffect(() => {
    let filtered = sampleDocuments;

    // Filter by category
    if (selectedCategory !== 'all') {
      const category = categories.find(cat => cat.id === selectedCategory);
      if (category) {
        filtered = filtered.filter(doc => doc.category === category.name);
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doc.act && doc.act.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort documents
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price':
          return a.price - b.price;
        case 'popularity':
          return b.downloadCount - a.downloadCount;
        default:
          return 0;
      }
    });

    setFilteredDocuments(filtered);
  }, [searchQuery, selectedCategory, sortBy]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as 'name' | 'price' | 'popularity');
  };

  return (
    <div className="legal-document-library">
      <Header />
      {/* Page Header */}
      <section className="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-padding">
                <div className="page-title-content text-center">
                  <h1>Legal Documents Library</h1>
                  <p>Browse our comprehensive collection of legal documents and templates</p>
                </div>
                <div className="breadcrumbs text-center">
                  <ul className="page-breadcrumbs">
                    <li><a href="/" title="Home">Home</a></li>
                    <li><a href="#" title="Current Page">Legal Documents Library</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="legal-library-content">
        <div className="container">
          <div className="row">
            {/* Sidebar - Categories */}
            <div className="col-lg-3 col-md-4">
              <div className="library-sidebar">
                <div className="sidebar-section">
                  <h3>Categories</h3>
                  <div className="category-list">
                    <button
                      className={`category-item ${selectedCategory === 'all' ? 'active' : ''}`}
                      onClick={() => handleCategoryClick('all')}
                    >
                      <span className="category-name">All Documents</span>
                      <span className="category-count">{sampleDocuments.length}</span>
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        <span className="category-name">{category.name}</span>
                        <span className="category-count">{category.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-lg-9 col-md-8">
              <div className="library-main-content">
                {/* Search and Filter Bar */}
                <div className="search-filter-bar">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="search-box">
                        <div className="search-input-wrapper">
                          <i className="fa fa-search"></i>
                          <input
                            type="text"
                            placeholder="Search documents..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="search-input"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="filter-controls">
                        <div className="sort-dropdown">
                          <label htmlFor="sort-select">Sort by:</label>
                          <select
                            id="sort-select"
                            value={sortBy}
                            onChange={handleSortChange}
                            className="sort-select"
                          >
                            <option value="name">Name</option>
                            <option value="price">Price</option>
                            <option value="popularity">Popularity</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="results-info">
                  <p>
                    Showing {filteredDocuments.length} of {sampleDocuments.length} documents
                    {selectedCategory !== 'all' && (
                      <span> in {categories.find(cat => cat.id === selectedCategory)?.name}</span>
                    )}
                  </p>
                </div>

                {/* Documents Grid */}
                <div className="documents-grid">
                  {filteredDocuments.length > 0 ? (
                    filteredDocuments.map((document) => (
                      <div key={document.id} className="document-card">
                        <div className="document-header">
                          <div className="document-type-badge">
                            {document.type}
                          </div>
                          {document.isPopular && (
                            <div className="popular-badge">
                              <i className="fa fa-star"></i> Popular
                            </div>
                          )}
                        </div>
                        <div className="document-content">
                          <h3 className="document-title">{document.title}</h3>
                          <p className="document-description">{document.description}</p>
                          <div className="document-meta">
                            <span className="document-category">{document.category}</span>
                            {document.act && (
                              <span className="document-act">{document.act}</span>
                            )}
                          </div>
                          <div className="document-stats">
                            <span className="download-count">
                              <i className="fa fa-download"></i> {document.downloadCount} downloads
                            </span>
                          </div>
                        </div>
                        <div className="document-footer">
                          <div className="document-price">
                            <span className="price-currency">₹</span>
                            <span className="price-amount">{document.price}</span>
                          </div>
                          <div className="document-actions">
                            <button className="btn btn-primary btn-sm">
                              <i className="fa fa-eye"></i> Preview
                            </button>
                            <button className="btn btn-outline-primary btn-sm">
                              <i className="fa fa-robot"></i> Make with AI
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-results">
                      <i className="fa fa-search"></i>
                      <h3>No documents found</h3>
                      <p>Try adjusting your search terms or browse different categories.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
