import React from 'react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vanshdokania',
      icon: (
        <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vansh-dokania-5346451b6/',
      icon: (
        <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/VanshDokania/',
      icon: (
        <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362c.56 2.189 2.441 3.76 4.653 3.76a5.5 5.5 0 0 0 2.104-.438l.463-.211.463.211a5.5 5.5 0 0 0 2.104.438c2.212 0 4.093-1.571 4.653-3.76a5.527 5.527 0 0 0 .062-2.362 5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104L16.884 6.226l-5.406-5.788A1.374 1.374 0 0 0 13.483 0zm-2.694 1.178L15.786 6.5l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362c.56 2.189 2.441 3.76 4.653 3.76a5.5 5.5 0 0 0 2.104-.438l.463-.211.463.211a5.5 5.5 0 0 0 2.104.438c2.212 0 4.093-1.571 4.653-3.76a5.527 5.527 0 0 0 .062-2.362 5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104L18.884 6.5l-5.406-5.788A1.374 1.374 0 0 0 10.789 0z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect! Feel free to reach out for collaborations, opportunities, or just to say hello.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <div className="bg-dark-700 rounded-2xl p-8 border border-dark-600">
                <h3 className="text-2xl font-bold mb-6 text-primary-400">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">Email</h4>
                                    <a
                href="mailto:vansh24600@iiitd.ac.in"
                className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                vansh24600@iiitd.ac.in
              </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">Resume</h4>
                                             <a 
                         href="/2024600 resume.pdf"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                       >
                         Download Resume
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="bg-dark-700 rounded-2xl p-8 border border-dark-600">
                <h3 className="text-2xl font-bold mb-6 text-primary-400">
                  Connect With Me
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-dark-600 rounded-lg hover:bg-dark-500 transition-all duration-300 card-hover"
                    >
                      <div className="text-primary-400">
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-100">
                          {social.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Follow me on {social.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 