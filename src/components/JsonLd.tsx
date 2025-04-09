'use client';

import React from 'react';

export interface JsonLdProps {
  type: string;
  data: Record<string, any>;
}

const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          ...data,
          "@type": type,
        }),
      }}
    />
  );
};

export default JsonLd;