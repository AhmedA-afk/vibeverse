'use client';

import { motion } from 'framer-motion';
import JsonLd from './JsonLd';

interface ArticleProps {
  title: string;
  description: string;
  content: string;
  author: string;
  datePublished: string;
  category: string;
  tags: string[];
  imageUrl?: string;
}

export default function Article({
  title,
  description,
  content,
  author,
  datePublished,
  category,
  tags,
  imageUrl
}: ArticleProps) {
  const articleData = {
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: author
    },
    datePublished,
    image: imageUrl,
    articleSection: category,
    keywords: tags.join(', '),
    publisher: {
      '@type': 'Organization',
      name: 'VibeVerse',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vibeverse.tech/logo.png'
      }
    }
  };

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <JsonLd type="Article" data={articleData} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <header className="space-y-4">
          <div className="space-x-4">
            <span className="text-sm text-gray-400">{category}</span>
            <span className="text-sm text-gray-400">{datePublished}</span>
          </div>
          <h1 className="text-4xl font-light tracking-tight text-white">{title}</h1>
          <p className="text-xl text-gray-300">{description}</p>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">By {author}</span>
            <div className="flex items-center space-x-2">
              {tags.map(tag => (
                <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {imageUrl && (
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div 
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </motion.div>
    </article>
  );
} 