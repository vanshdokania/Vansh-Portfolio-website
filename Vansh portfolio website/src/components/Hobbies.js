import React from 'react';

const Hobbies = () => {
  return (
    <section id="hobbies" className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Hobbies & Interests</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Beyond coding and algorithms, here's what I enjoy in my free time
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-800 rounded-2xl p-8 md:p-12 border border-dark-700">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">
                Stock Market & Investing
              </h3>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                In my free time, I study the stock market and practice long-term investing. I enjoy analyzing trends, reading about finance, and tracking global markets.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">Market Analysis</h4>
                  <p className="text-gray-400 text-sm">
                    Studying market trends and economic indicators
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">Long-term Investing</h4>
                  <p className="text-gray-400 text-sm">
                    Building a diversified portfolio for the future
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">Financial Education</h4>
                  <p className="text-gray-400 text-sm">
                    Reading books and articles about finance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies; 