import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function DisclaimerPage() {
  return (
    <div>
      <Header />
      
      {/* Page Title Area */}
      <section className="page-title-area attorney-page-title-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-padding">
                <div className="page-title-content text-center">
                  <h1>Disclaimer</h1> 
                </div>
                <div className="breadcrumbs text-center">
                  <ul className="page-breadcrumbs">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Disclaimer</a></li>
                  </ul>                        
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <div className="privacy-policy-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="privacy-content">
                <div className="privacy-text">
                  <h3><strong>Important Legal Notice</strong></h3>
                  <p>Please read this disclaimer carefully before using Contract Easily's website and services. By accessing and using our platform, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.</p>
                  
                  <h3><strong>Use at Your Own Risk</strong></h3>
                  <p>Your access to, use of and dependence on our sites and services and content accessed through our sites and services is entirely at your own risk. Our sites and services (including, without limitation, the websites, programs, services, forums and content accessed through the websites, programs, services and forums) is provided on an "as is" or "as available" basis without any warranties of any kind.</p>
                  
                  <h3><strong>Disclaimer of Warranties</strong></h3>
                  <p>All express and implied warranties (including, without limitation, warranties of merchantability, fitness for a particular purpose, and non-infringement of proprietary rights) are expressly disclaimed.</p>
                  
                  <h3><strong>Specific Disclaimers</strong></h3>
                  <p>Without limiting the foregoing, we also disclaim all warranties for or with respect to:</p>
                  <p><strong>(a)</strong> The security, reliability, timeliness, accuracy and performance of our sites and services and content accessed through our sites and services;</p>
                  <p><strong>(b)</strong> Computer worms, viruses, spyware, adware and any other malware, malicious code or harmful content or components accessed, received or disseminated through, related to or as a result of our sites and services or content accessed through our sites and services; and/or</p>
                  <p><strong>(c)</strong> Any transactions or potential transactions, goods or services promised or exchanged, information or advice offered or exchanged, or other content, interactions, representations or communications through, related to or as a result of use of our sites and services or content accessed through our sites and services (including, without limitation, accessed through any links on our sites and services or in content).</p>
                  
                  <h3><strong>Legal Limitations</strong></h3>
                  <p>These disclaimers will apply to the fullest extent permitted by law. Some jurisdictions do not allow disclaimer of implied warranties. In such jurisdictions, some of the foregoing disclaimers as to implied warranties may not apply.</p>
                  
                  <h3><strong>No Legal Advice</strong></h3>
                  <p>The information provided on Contract Easily is for general informational purposes only and does not constitute legal advice. While we strive to provide accurate and up-to-date legal document templates and information, we make no representations or warranties about the accuracy, completeness, or suitability of the information for your specific legal needs.</p>
                  
                  <h3><strong>Professional Legal Consultation</strong></h3>
                  <p>You should always consult with a qualified attorney or legal professional before making any legal decisions or using any legal documents. The legal document templates and information provided on our platform should not be used as a substitute for professional legal advice tailored to your specific circumstances.</p>
                  
                  <h3><strong>Document Templates</strong></h3>
                  <p>The legal document templates provided on Contract Easily are general forms that may not be suitable for all situations or jurisdictions. Laws vary by state, country, and locality, and legal requirements change over time. We do not guarantee that our templates comply with the laws of your jurisdiction or that they will be legally binding or enforceable.</p>
                  
                  <h3><strong>User Responsibility</strong></h3>
                  <p>It is your responsibility to:</p>
                  <p>• Ensure that any legal documents you create or use are appropriate for your specific situation</p>
                  <p>• Verify that the documents comply with applicable laws in your jurisdiction</p>
                  <p>• Seek professional legal advice when needed</p>
                  <p>• Review and understand all terms and conditions before using any legal documents</p>
                  
                  <h3><strong>Limitation of Liability</strong></h3>
                  <p>Contract Easily LLP, its owners, employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of our website, services, or any legal documents or information provided therein.</p>
                  
                  <h3><strong>Third-Party Content</strong></h3>
                  <p>Our website may contain links to third-party websites or resources. We do not endorse and are not responsible for the content, accuracy, or opinions expressed on such websites. Access to any other websites linked to from Contract Easily is at your own risk.</p>
                  
                  <h3><strong>Changes to Services</strong></h3>
                  <p>Contract Easily LLP reserves the right to modify, suspend, or discontinue any aspect of our services at any time without notice. We also reserve the right to update or modify this disclaimer at any time without prior notice.</p>
                  
                  <h3><strong>Governing Law</strong></h3>
                  <p>This disclaimer shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under this disclaimer shall be subject to the exclusive jurisdiction of the courts in India.</p>
                  
                  <h3><strong>Contact Information</strong></h3>
                  <p>If you have any questions about this disclaimer, please contact us at:</p>
                  <p><strong>Email:</strong> contracteasily@gmail.com</p>
                  <p><strong>Phone:</strong> +91-9669664421</p>
                  <p><strong>Address:</strong> India</p>
                  
                  <h3><strong>Effective Date</strong></h3>
                  <p>This disclaimer is effective as of the date you first access or use Contract Easily's website and services, and will remain in effect until modified or terminated by us.</p>
                  
                  <p><em>By using Contract Easily LLP's website and services, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
