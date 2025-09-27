import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
  views: number;
}

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Understanding Legal Contracts: A Comprehensive Guide",
      excerpt: "Learn the fundamentals of legal contracts and how to create effective agreements that protect your interests.",
      content: "Legal contracts are the foundation of business relationships...",
      author: "Legal Team",
      date: "2024-01-15",
      category: "Legal Education",
      tags: ["Contracts", "Legal Basics", "Business"],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop&crop=center",
      readTime: "5 min read",
      views: 1250
    },
    {
      id: 2,
      title: "Employment Agreements: Best Practices for Employers",
      excerpt: "Discover the essential elements of employment agreements and how to draft contracts that benefit both parties.",
      content: "Employment agreements are crucial for establishing clear expectations...",
      author: "HR Legal Team",
      date: "2024-01-12",
      category: "Employment Law",
      tags: ["Employment", "HR", "Contracts"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=center",
      readTime: "7 min read",
      views: 980
    },
    {
      id: 3,
      title: "Non-Disclosure Agreements: Protecting Your Business Secrets",
      excerpt: "Learn how NDAs can safeguard your confidential information and intellectual property.",
      content: "Non-disclosure agreements are essential for protecting sensitive business information...",
      author: "IP Legal Team",
      date: "2024-01-10",
      category: "Intellectual Property",
      tags: ["NDA", "Confidentiality", "IP Protection"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop&crop=center",
      readTime: "6 min read",
      views: 1100
    },
    {
      id: 4,
      title: "Real Estate Contracts: What Every Property Owner Should Know",
      excerpt: "Navigate the complexities of real estate agreements with our comprehensive guide.",
      content: "Real estate transactions involve numerous legal considerations...",
      author: "Real Estate Legal Team",
      date: "2024-01-08",
      category: "Real Estate",
      tags: ["Real Estate", "Property", "Contracts"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop&crop=center",
      readTime: "8 min read",
      views: 850
    },
    {
      id: 5,
      title: "Partnership Agreements: Building Strong Business Relationships",
      excerpt: "Create effective partnership agreements that establish clear roles and responsibilities.",
      content: "Partnership agreements are vital for defining the terms of business relationships...",
      author: "Business Legal Team",
      date: "2024-01-05",
      category: "Business Law",
      tags: ["Partnership", "Business", "Agreements"],
      image: "https://images.unsplash.com/photo-1521791136064-7986b292a6b0?w=400&h=200&fit=crop&crop=center",
      readTime: "6 min read",
      views: 920
    },
    {
      id: 6,
      title: "Service Agreements: Protecting Your Professional Services",
      excerpt: "Learn how to draft service agreements that protect your business and set clear expectations.",
      content: "Service agreements are essential for professional service providers...",
      author: "Service Legal Team",
      date: "2024-01-03",
      category: "Service Law",
      tags: ["Services", "Professional", "Contracts"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&crop=center",
      readTime: "5 min read",
      views: 750
    }
  ];

  const categories = ['All', 'Legal Education', 'Employment Law', 'Intellectual Property', 'Real Estate', 'Business Law', 'Service Law'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-page">
      <Header />
      
      {/* Page Header */}
      <section className="page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-padding">
                <div className="page-title-content text-center">
                  <h1>Legal Blog</h1>
                  <p>Expert insights, legal guidance, and industry updates</p>
                </div>
                <div className="breadcrumbs text-center">
                  <ul className="page-breadcrumbs">
                    <li><a href="/" title="Home">Home</a></li>
                    <li><a href="#" title="Current Page">Blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content-section">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-4">
              <div className="blog-sidebar">
                <div className="sidebar-widget">
                  <h3>Search Blog</h3>
                  <div className="search-form">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="form-control"
                    />
                    <button type="button" className="search-btn">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <h3>Categories</h3>
                  <ul className="category-list">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button
                          className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                          <span className="post-count">
                            {category === 'All' ? blogPosts.length : 
                             blogPosts.filter(post => post.category === category).length}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h3>Popular Tags</h3>
                  <div className="tag-cloud">
                    {['Contracts', 'Legal Basics', 'Business', 'Employment', 'NDA', 'Real Estate', 'Partnership', 'Services'].map((tag, index) => (
                      <span key={index} className="tag-item">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="sidebar-widget">
                  <h3>Recent Posts</h3>
                  <div className="recent-posts">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="recent-post-item">
                        <div className="recent-post-image">
                          <img src={post.image} alt={post.title} />
                        </div>
                        <div className="recent-post-content">
                          <h4>{post.title}</h4>
                          <span className="post-date">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9 col-md-8">
              <div className="blog-main-content">
                {filteredPosts.length > 0 ? (
                  <div className="blog-posts-grid">
                    {filteredPosts.map((post) => (
                      <article key={post.id} className="blog-post-card">
                        <div className="post-image">
                          <img src={post.image} alt={post.title} />
                          <div className="post-category">{post.category}</div>
                        </div>
                        <div className="post-content">
                          <div className="post-meta">
                            <span className="post-author">
                              <i className="fa fa-user"></i> {post.author}
                            </span>
                            <span className="post-date">
                              <i className="fa fa-calendar"></i> {post.date}
                            </span>
                            <span className="post-read-time">
                              <i className="fa fa-clock-o"></i> {post.readTime}
                            </span>
                            <span className="post-views">
                              <i className="fa fa-eye"></i> {post.views} views
                            </span>
                          </div>
                          <h2 className="post-title">{post.title}</h2>
                          <p className="post-excerpt">{post.excerpt}</p>
                          <div className="post-tags">
                            {post.tags.map((tag, index) => (
                              <span key={index} className="tag">{tag}</span>
                            ))}
                          </div>
                          <div className="post-footer">
                            <button className="btn btn-primary">Read More</button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="no-posts">
                    <i className="fa fa-search"></i>
                    <h3>No Articles Found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
