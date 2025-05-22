import React from 'react';

const blogPosts = [
  {
    title: 'Starting and Growing a Career in Web Design',
    date: 'Apr 8, 2022',
    read: '6 min read',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Create a Landing Page That Performs Great',
    date: 'Mar 15, 2022',
    read: '5 min read',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'How Can Designers Prepare for the Future?',
    date: 'Feb 28, 2022',
    read: '7 min read',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
  },
];

const BlogInsights = () => (
  <>
    <style>{`
      .blog-section {
          background-color:transperant;
          padding: 64px 48px;
          border-radius: 1.5rem;
          max-width: 78rem;
          margin: 0 auto;      }

      .blog-title {
          font-size: 3.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-align: start;
          max-width:600px;
      }

      .blog-title span {
          color: #a855f7;
      }

      .blog-subtitle {
          text-align: start;
          color: #9ca3af;
          max-width: 42rem;
          margin: 0 0 2rem 0;
          font-size: 1rem;
      }

      .blog-grid {
        display: grid;
        gap: 2rem;
        max-width: 96rem;
        margin: 0 auto;
      }

      @media (min-width: 768px) {
        .blog-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .blog-card {
        background-color: #23232b;
        border-radius: 0.75rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 0;
      }

      .blog-card img {
        width: 100%;
        height: 12rem;
        object-fit: cover;
      }

      .blog-card-content {
        padding: 1.5rem;
      }

      .blog-card-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: white;
        margin-bottom: 0.5rem;
      }

      .blog-meta {
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        color: #9ca3af;
      }

      .blog-meta span {
        margin-right: 0.5rem;
      }

      .blog-meta span.dot {
        margin: 0 0.5rem;
      }

      .read-more-container {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
      }

      .btn-secondary {
        background-color: #8a2be2;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        border: none;
      }

      .btn-secondary:hover{
        background-color:#6a1cb2;
      }
    `}</style>

    <section className="blog-section" id="blog">
      <h2 className="blog-title">
        Stay Inspired with Our Latest <span>Insights</span>
      </h2>
      <p className="blog-subtitle">
        Dive into our blog for the latest trends, tips, and insights in the world of design and AI technology. Whether you're looking for inspiration, tutorials, or industry news, our articles are crafted to keep you informed and inspired.
      </p>

      <div className="blog-grid">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="blog-card">
            <img src={post.image} alt={post.title} />
            <div className="blog-card-content">
              <h3 className="blog-card-title">{post.title}</h3>
              <div className="blog-meta">
                <span>{post.date}</span>
                <span className="dot">•</span>
                <span>{post.read}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="read-more-container">
        <button className="btn-secondary">Read More</button>
      </div>
    </section>
  </>
);

export default BlogInsights;
