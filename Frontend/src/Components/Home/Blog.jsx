import React from 'react';

const Blog = () => {
  return (
    <section className="pt-28 pb-16">
      <h1 className="text-center text-3xl font-bold mb-8 text-[#0078B8]">
        Stay Updated with Our Partners' Tweets
      </h1>

      {/* Flexbox Container for Both Twitter Feeds */}
      <div className="flex justify-center gap-8">
        {/* Microsoft Twitter Feed */}
        <div className="w-full max-w-md">
          <h2 className="text-center text-2xl font-semibold mb-4">Microsoft Twitter Feed</h2>
          <div className="h-96 overflow-y-auto border p-4">
            <a 
              className="twitter-timeline"
              href="https://twitter.com/Microsoft?ref_src=twsrc%5Etfw">
              Tweets by Microsoft
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>

        {/* Epicor Twitter Feed */}
        <div className="w-full max-w-md">
          <h2 className="text-center text-2xl font-semibold mb-4">Epicor Twitter Feed</h2>
          <div className="h-96 overflow-y-auto border p-4">
            <a 
              className="twitter-timeline"
              href="https://twitter.com/Epicor?ref_src=twsrc%5Etfw">
              Tweets by Epicor
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
