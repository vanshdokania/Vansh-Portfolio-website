import React from 'react';

const DSA = () => {
  const platforms = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/VanshDokania/',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362c.56 2.189 2.441 3.76 4.653 3.76a5.5 5.5 0 0 0 2.104-.438l.463-.211.463.211a5.5 5.5 0 0 0 2.104.438c2.212 0 4.093-1.571 4.653-3.76a5.527 5.527 0 0 0 .062-2.362 5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104L16.884 6.226l-5.406-5.788A1.374 1.374 0 0 0 13.483 0zm-2.694 1.178L15.786 6.5l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362c.56 2.189 2.441 3.76 4.653 3.76a5.5 5.5 0 0 0 2.104-.438l.463-.211.463.211a5.5 5.5 0 0 0 2.104.438c2.212 0 4.093-1.571 4.653-3.76a5.527 5.527 0 0 0 .062-2.362 5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104L18.884 6.5l-5.406-5.788A1.374 1.374 0 0 0 10.789 0z"/>
        </svg>
      ),
      color: 'text-yellow-500'
    },
    {
      name: 'Codeforces',
      url: '#',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.327 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9.75 1.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h3c.827 0 1.5-.673 1.5-1.5V10.5c0-.828-.673-1.5-1.5-1.5h-3z"/>
        </svg>
      ),
      color: 'text-blue-500'
    }
  ];

  return (
    <section id="dsa" className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Data Structures & Algorithms</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about solving algorithmic challenges and improving problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="bg-dark-700 rounded-2xl p-8 border border-dark-600">
              <h3 className="text-2xl font-bold mb-6 text-primary-400">
                LeetCode Progress
              </h3>
              <div className="text-center">
                <div className="text-6xl font-bold text-primary-400 mb-4">
                  200+
                </div>
                <p className="text-xl text-gray-300 mb-6">
                  Problems Solved
                </p>
                <div className="w-full bg-dark-600 rounded-full h-3 mb-4">
                  <div className="bg-gradient-to-r from-primary-400 to-primary-600 h-3 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-gray-400">
                  Continuously improving and learning new algorithms
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-100">
              Competitive Programming Platforms
            </h3>
            <div className="space-y-6">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-dark-700 rounded-xl border border-dark-600 hover:border-primary-500 transition-all duration-300 card-hover"
                >
                  <div className={`${platform.color} mr-4`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-100">
                      {platform.name}
                    </h4>
                    <p className="text-gray-400">
                      {platform.name === 'LeetCode' ? 'Active profile with 200+ solutions' : 'Coming soon'}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSA; 