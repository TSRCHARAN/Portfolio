import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogBySlug, getCategoryById } from '../data/blogsData';
import ReactMarkdown from 'react-markdown';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  // If blog not found, redirect to blogs page
  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const category = getCategoryById(blog.category);

  return (
    <div className="min-h-screen pt-20 pb-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 font-medium transition-colors"
        >
          <span>←</span> Back to Blogs
        </Link>

        {/* Category Badge */}
        <div className="mb-6">
          <span className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-semibold shadow-lg`}>
            <span>{category.icon}</span>
            {category.name}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-xl"></span>
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⏱️</span>
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg border border-gray-300 dark:border-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:text-gray-900 dark:prose-headings:text-white
          prose-p:text-gray-700 dark:prose-p:text-gray-300
          prose-a:text-blue-600 dark:prose-a:text-blue-400
          prose-strong:text-gray-900 dark:prose-strong:text-white
          prose-code:text-blue-600 dark:prose-code:text-blue-400
          prose-code:bg-gray-100 dark:prose-code:bg-gray-800
          prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950
          prose-pre:text-gray-100
          prose-ol:text-gray-700 dark:prose-ol:text-gray-300
          prose-ul:text-gray-700 dark:prose-ul:text-gray-300
          prose-li:text-gray-700 dark:prose-li:text-gray-300
        ">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Share this article
          </h3>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Twitter
            </button>
            <button className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors">
              LinkedIn
            </button>
            <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Copy Link
            </button>
          </div>
        </div>

        {/* Back to Blogs */}
        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            ← Read More Articles
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
