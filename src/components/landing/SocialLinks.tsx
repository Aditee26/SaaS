'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  hoverColor: string;
}

export const SocialLinks = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
        </svg>
      ),
      hoverColor: 'hover:text-[#1877f2]',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.05-4.55 4.55 0 .36.03.7.1 1.04-3.8-.2-7.17-2-9.42-4.76-.4.7-.6 1.5-.6 2.36 0 1.6.8 3 2.03 3.8-.74-.02-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.45-.67.18-1.37.2-2.06.08.58 1.8 2.26 3.1 4.25 3.14-1.56 1.22-3.52 1.95-5.66 1.95-.37 0-.73-.02-1.1-.06 2.03 1.3 4.44 2.06 7.04 2.06 8.45 0 13.07-7 13.07-13.07v-.6c.9-.6 1.68-1.36 2.3-2.22z"/>
        </svg>
      ),
      hoverColor: 'hover:text-[#1da1f2]',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zm0-2.16c-3.26 0-3.67.01-4.95.07-4.1.19-5.91 2-6.1 6.1-.06 1.28-.07 1.69-.07 4.95 0 3.26.01 3.67.07 4.95.19 4.1 2 5.91 6.1 6.1 1.28.06 1.69.07 4.95.07 3.26 0 3.67-.01 4.95-.07 4.1-.19 5.91-2 6.1-6.1.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.19-4.1-2-5.91-6.1-6.1-1.28-.06-1.69-.07-4.95-.07zm0 5.76c-3.19 0-5.76 2.57-5.76 5.76s2.57 5.76 5.76 5.76 5.76-2.57 5.76-5.76-2.57-5.76-5.76-5.76zm0 9.52c-2.08 0-3.76-1.68-3.76-3.76 0-2.08 1.68-3.76 3.76-3.76 2.08 0 3.76 1.68 3.76 3.76 0 2.08-1.68 3.76-3.76 3.76zm6.58-9.7c0 .74-.6 1.34-1.34 1.34s-1.34-.6-1.34-1.34.6-1.34 1.34-1.34 1.34.6 1.34 1.34z"/>
        </svg>
      ),
      hoverColor: 'hover:text-[#e4405f]',
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-500 dark:text-gray-400">Follow us:</span>
      <div className="flex gap-3">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              relative group
              text-gray-400 dark:text-gray-500
              transition-all duration-300
              ${link.hoverColor}
              ${hoveredIcon === link.name ? 'scale-110' : 'scale-100'}
            `}
            onMouseEnter={() => setHoveredIcon(link.name)}
            onMouseLeave={() => setHoveredIcon(null)}
            aria-label={`Follow us on ${link.name}`}
          >
            <span className="sr-only">{link.name}</span>
            {link.icon}
            
            {/* Tooltip */}
            <span className="
              absolute -bottom-8 left-1/2 -translate-x-1/2
              px-2 py-1 text-xs
              bg-gray-900 dark:bg-gray-700 text-white
              rounded opacity-0 group-hover:opacity-100
              transition-opacity duration-200
              pointer-events-none whitespace-nowrap
            ">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Also export a compact version for the footer
export const SocialLinksCompact = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
        </svg>
      ),
      hoverColor: 'hover:text-[#1877f2]',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.05-4.55 4.55 0 .36.03.7.1 1.04-3.8-.2-7.17-2-9.42-4.76-.4.7-.6 1.5-.6 2.36 0 1.6.8 3 2.03 3.8-.74-.02-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.45-.67.18-1.37.2-2.06.08.58 1.8 2.26 3.1 4.25 3.14-1.56 1.22-3.52 1.95-5.66 1.95-.37 0-.73-.02-1.1-.06 2.03 1.3 4.44 2.06 7.04 2.06 8.45 0 13.07-7 13.07-13.07v-.6c.9-.6 1.68-1.36 2.3-2.22z"/>
        </svg>
      ),
      hoverColor: 'hover:text-[#1da1f2]',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zm0-2.16c-3.26 0-3.67.01-4.95.07-4.1.19-5.91 2-6.1 6.1-.06 1.28-.07 1.69-.07 4.95 0 3.26.01 3.67.07 4.95.19 4.1 2 5.91 6.1 6.1 1.28.06 1.69.07 4.95.07 3.26 0 3.67-.01 4.95-.07 4.1-.19 5.91-2 6.1-6.1.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.19-4.1-2-5.91-6.1-6.1-1.28-.06-1.69-.07-4.95-.07z"/>
        </svg>
      ),
      hoverColor: 'hover:text-[#e4405f]',
    },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            text-gray-400 dark:text-gray-500
            transition-all duration-300
            ${link.hoverColor}
            hover:scale-110
          `}
          aria-label={`Follow us on ${link.name}`}
        >
          <span className="sr-only">{link.name}</span>
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;