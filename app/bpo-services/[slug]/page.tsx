import React from 'react';

// 1. Make the function 'async'
// 2. Define params as a Promise
export default async function DynamicServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  
  // 3. Await the params to get the actual slug
  const { slug } = await params;

  // Now slug is a string, so .split('-') will work perfectly
  const formattedTitle = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="min-h-screen bg-white">
      <div className="h-24 bg-slate-50" /> 
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            Service Details
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-6">
            {formattedTitle}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            We are currently updating our detailed service offerings for <strong>{formattedTitle}</strong>. 
            Check back soon for full details or contact us today.
          </p>
        </div>
      </section>
    </main>
  );
}