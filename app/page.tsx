'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-24">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <div className="mb-6 inline-block">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-5xl font-bold glow">
                AI
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-fade-in">
              AI/ML Engineer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              First Year Student | ZCOER
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="px-4 py-2 glass-effect rounded-full text-sm">Artificial Intelligence</span>
              <span className="px-4 py-2 glass-effect rounded-full text-sm">Machine Learning</span>
              <span className="px-4 py-2 glass-effect rounded-full text-sm">Deep Learning</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-2xl p-8 hover:glow transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Passionate Artificial Intelligence and Machine Learning Engineer currently pursuing my degree at ZCOER.
              Dedicated to exploring cutting-edge AI technologies, building intelligent systems, and solving complex
              problems through innovative machine learning solutions. Constantly learning and adapting to the rapidly
              evolving landscape of AI and its applications.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-8 gradient-text">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Machine Learning', skills: ['Supervised Learning', 'Unsupervised Learning', 'Model Optimization', 'Feature Engineering'] },
              { title: 'Deep Learning', skills: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers'] },
              { title: 'Programming', skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'] },
              { title: 'Data Science', skills: ['Data Analysis', 'Visualization', 'Pandas', 'NumPy'] },
              { title: 'NLP', skills: ['Text Processing', 'Sentiment Analysis', 'Language Models', 'Tokenization'] },
              { title: 'Computer Vision', skills: ['Image Classification', 'Object Detection', 'Image Segmentation', 'OpenCV'] },
            ].map((category, idx) => (
              <div
                key={idx}
                className="glass-effect rounded-xl p-6 hover:glow transition-all duration-300 animate-float"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-8 gradient-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Image Classification Model',
                description: 'Built a CNN-based image classifier with 95% accuracy on custom dataset',
                tags: ['PyTorch', 'CNN', 'Computer Vision']
              },
              {
                title: 'Sentiment Analysis Tool',
                description: 'NLP model for analyzing sentiment in social media posts and reviews',
                tags: ['NLP', 'BERT', 'Python']
              },
              {
                title: 'Predictive Analytics System',
                description: 'Machine learning pipeline for forecasting trends using time series data',
                tags: ['Scikit-learn', 'Time Series', 'ML']
              },
              {
                title: 'AI Chatbot',
                description: 'Conversational AI assistant using transformer architecture',
                tags: ['Transformers', 'NLP', 'TensorFlow']
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="glass-effect rounded-xl p-6 hover:glow transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-3 py-1 bg-purple-900/30 rounded-full text-xs text-purple-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-8 gradient-text">Education</h2>
          <div className="glass-effect rounded-xl p-8 hover:glow transition-all duration-300">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-2">
                  Zeal College of Engineering and Research (ZCOER)
                </h3>
                <p className="text-xl text-gray-300 mb-2">
                  B.Tech in Artificial Intelligence and Machine Learning
                </p>
                <p className="text-gray-400">First Year | Current</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold gradient-text mb-2">1st</div>
                <p className="text-gray-400">Year</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={`mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Let's Connect</h2>
            <p className="text-gray-300 mb-6">
              Interested in collaborating or discussing AI/ML projects? Feel free to reach out!
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full font-semibold hover:glow transition-all duration-300 transform hover:scale-105">
                Email Me
              </button>
              <button className="px-6 py-3 glass-effect rounded-full font-semibold hover:glow transition-all duration-300 transform hover:scale-105">
                LinkedIn
              </button>
              <button className="px-6 py-3 glass-effect rounded-full font-semibold hover:glow transition-all duration-300 transform hover:scale-105">
                GitHub
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm">
          <p>&copy; 2024 AI/ML Engineer Portfolio. Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>
    </main>
  )
}
