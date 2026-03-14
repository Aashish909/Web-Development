import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
        <div className="col-span-2 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">
              auto_stories
            </span>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
             <span className='text-blue-500'>Re</span>Blog
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
            The professional publishing platform designed for growth, discovery,
            and community engagement.
          </p>
          <div className="flex items-center gap-4">
            <a
              className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
              </svg>
            </a>
            <a
              className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <a
              className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-slate-900 dark:text-slate-100 font-bold">
            Platform
          </h4>
          <nav className="flex flex-col gap-2">
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Features
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Showcase
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Integrations
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-slate-900 dark:text-slate-100 font-bold">
            Resources
          </h4>
          <nav className="flex flex-col gap-2">
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Documentation
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Tutorials
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              API Reference
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Community
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-slate-900 dark:text-slate-100 font-bold">
            Company
          </h4>
          <nav className="flex flex-col gap-2">
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              About Us
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Careers
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Blog
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-slate-900 dark:text-slate-100 font-bold">
            Legal
          </h4>
          <nav className="flex flex-col gap-2">
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Privacy
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Terms
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
              href="#"
            >
              Cookies
            </a>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-xs">
          © 2026 ReBlog Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer