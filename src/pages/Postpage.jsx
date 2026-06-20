import { Link, useLocation } from "react-router-dom";

function Page() {
  // Use location hook to extract state variables passed during router transition steps
  const location = useLocation();
  const clickedPost = location.state?.post;

  // Fallback structural data settings if the page is reloaded or accessed directly
  const post = clickedPost || {
    title:
      "Mastering Design Systems: Scalable UI Workflows in Figma and Adobe XD",
    img: "post-4.jpg",
    desc: "Building a robust design system requires more than just compiling custom buttons and layout typography values into a project library file. It requires creating structurally sound component frameworks.",
  };

  return (
    <div className="bg-white min-h-screen text-[#172317] antialiased font-sans transition-colors duration-300 dark:bg-[#1a1e21] dark:text-white">
      {/* --- HERO BANNER SECTION (Now adaptive to Light/Dark modes) --- */}
      <section className="bg-gray-100 dark:bg-[#1a1e21] pt-32 pb-44 md:pt-40 md:pb-52 text-center px-4 transition-colors duration-300">
        <div className="max-w-200 mx-auto w-full flex flex-col items-center">
          {/* Navigation link to safely redirect back to home route state */}
          <Link
            to="/"
            className="text-[#fd8f44] text-sm font-medium hover:underline transition-all mb-4"
          >
            Back To Home
          </Link>
          {/* Main dynamic publication article headline */}
          <h1 className="text-3xl md:text-[2.6rem] font-bold text-[#172317] dark:text-white tracking-tight mb-6 leading-tight max-w-[95%] transition-colors duration-300">
            {post.title}
          </h1>
        </div>
      </section>

      {/* --- FEATURED HERO IMAGE CONTAINER (Renders dynamic image path) --- */}
      <div className="max-w-200 mx-auto w-full px-4 -mt-28 md:-mt-36">
        <div className="overflow-hidden rounded-xl shadow-xl border border-gray-200/50 dark:border-gray-700/30 bg-white dark:bg-[#24292d] group transition-colors duration-300">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-70 md:h-107.5 object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* --- ARTICLE BODY CONTENT SECTION --- */}
      <section className="max-w-200 mx-auto w-full px-4 mt-16 md:mt-24 animate-fadeIn">
        {/* Core Concept Header */}
        <h2 className="text-xl md:text-2xl font-bold text-[#172317] dark:text-white mt-8 mb-4">
          Understanding Core Engineering Overview Specifications
        </h2>
        <p className="text-[#172317] dark:text-gray-300 text-base leading-7 text-justify mb-4">
          {post.desc} This comprehensive overview outlines the critical
          processes behind modern technological updates and structural interface
          ecosystems. By standardizing basic modular structures, design
          engineers can ensure scalable performance benchmarks across target
          device layouts.
        </p>
        <p className="text-[#172317] dark:text-gray-300 text-base leading-7 text-justify mb-6">
          When scaling interfaces for large application systems, modular system
          layouts become critical assets. This methodology breaks down complex
          view elements into basic building blocks, allowing developers to
          safely change styles globally without breaking deep parent inheritance
          structures during live production deployment lifecycles.
        </p>

        {/* Technical Implementation */}
        <h2 className="text-xl md:text-2xl font-bold text-[#172317] dark:text-white mt-8 mb-4">
          Advanced Variable Management & Multi-Theme Mapping
        </h2>
        <p className="text-[#172317] dark:text-gray-300 text-base leading-7 text-justify mb-4">
          Modern software interface portals must look pristine regardless of
          user device preferences. Utilizing native token parameters inside
          build configurations allows engineering groups to create shared
          semantic design libraries that map smoothly between light background
          frames and dark high-contrast viewports.
        </p>
        <p className="text-[#172317] dark:text-gray-300 text-base leading-7 text-justify mb-6">
          By referencing named system layout aliases rather than absolute static
          hardcoded values, active engineering branches can implement updates
          globally. This maintains strict contrast layouts while reducing
          overall system maintenance code footprints.
        </p>
      </section>

      {/* --- SOCIAL SYNDICATION SHARE LINK UTILITIES --- */}
      <div className="max-w-200 mx-auto w-full px-4 py-8 flex flex-col items-center gap-4 mt-12">
        <span className="text-[1.1rem] font-medium text-[#172317] dark:text-white">
          Share This Article
        </span>
        <div className="flex items-center gap-5 text-[1.4rem] text-[#172317] dark:text-gray-300">
          <Link
            to="#"
            className="hover:text-[#fd8f44] dark:hover:text-[#fd8f44] hover:-translate-y-1 transform transition-all duration-300"
          >
            <i className="fab fa-facebook"></i>
          </Link>
          <Link
            to="#"
            className="hover:text-[#fd8f44] dark:hover:text-[#fd8f44] hover:-translate-y-1 transform transition-all duration-300"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            to="#"
            className="hover:text-[#fd8f44] dark:hover:text-[#fd8f44] hover:-translate-y-1 transform transition-all duration-300"
          >
            <i className="fab fa-instagram"></i>
          </Link>
          <Link
            to="#"
            className="hover:text-[#fd8f44] dark:hover:text-[#fd8f44] hover:-translate-y-1 transform transition-all duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>
      </div>

      {/* --- FOOTER ATOM COPYRIGHT BLOCK --- */}
      <footer className="border-t border-gray-100 dark:border-gray-800 py-8 mt-12 max-w-267 mx-auto w-full px-4 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.938rem] text-gray-500 dark:text-gray-400">
            &copy; My Blogs. All Right Reserved
          </p>
          <div className="flex items-center gap-4 text-[1.4rem] text-[#172317] dark:text-gray-300">
            <Link
              to="#"
              className="hover:text-[#fd8f44] dark:hover:text-[#fd8f44] transition-colors duration-300"
            >
              <i className="fab fa-facebook"></i>
            </Link>
            <Link
              to="#"
              className="hover:text-[#fd8f44] dark:hover:text-[#fd8f44] transition-colors duration-300"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              to="#"
              className="hover:text-[#fd8f44] dark:hover:text-[#fd8f44] transition-colors duration-300"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="#"
              className="hover:text-[#fd8f44] dark:hover:text-[#fd8f44] transition-colors duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;
