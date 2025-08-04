import React from 'react';

const MachineLearning = () => {
  const tools = [
    { name: 'Python', color: 'text-blue-500' },
    { name: 'NumPy', color: 'text-green-500' },
    { name: 'Pandas', color: 'text-purple-500' },
    { name: 'Matplotlib', color: 'text-orange-500' },
    { name: 'Scikit-learn', color: 'text-red-500' },
    { name: 'Seaborn', color: 'text-pink-500' }
  ];

  const projects = [
    {
      title: 'House Price Prediction',
      description: 'Built a machine learning model to predict house prices using linear regression and feature engineering techniques.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib']
    },
    {
      title: 'Customer Segmentation',
      description: 'Implemented K-means clustering to segment customers based on purchasing behavior and demographics.',
      tech: ['Python', 'Scikit-learn', 'NumPy', 'Seaborn']
    }
  ];

  const learningGoals = [
    'Deep Learning with Neural Networks',
    'Natural Language Processing',
    'Computer Vision',
    'Kaggle Competitions',
    'Advanced ML Algorithms'
  ];

  return (
    <section id="ml" className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Machine Learning</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exploring the fascinating world of AI and building intelligent systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-up">
            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
              <h3 className="text-2xl font-bold mb-6 text-primary-400">
                Education & Certification
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100">
                      Andrew Ng's Machine Learning Course
                    </h4>
                    <p className="text-gray-400">
                      Completed Andrew Ng's Machine Learning course covering supervised/unsupervised learning, neural networks, and ML best practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100">
                      IIIT-Delhi ECE Curriculum
                    </h4>
                    <p className="text-gray-400">
                      Studying machine learning fundamentals as part of B.Tech program
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
              <h3 className="text-2xl font-bold mb-6 text-primary-400">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <div key={tool.name} className={`${tool.color} font-medium`}>
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-100">
            Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-dark-800 rounded-xl p-6 border border-dark-700 card-hover">
                <h4 className="text-xl font-semibold mb-3 text-primary-400">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-dark-700 rounded-full text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary-400">
            Current Learning Goals
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningGoals.map((goal, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span className="text-gray-300">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineLearning; 