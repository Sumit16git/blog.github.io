import { useState } from "react";
import { Link } from "react-router-dom";

// 1. Dynamic Post Data Array holding realistic blog information and text descriptions
const initialPosts = [
  {
    id: 1,
    category: "Mobile",
    title: "The Shift to Minimalist OS: User Experience in Modern Smartphones",
    img: "post-1.jpg",
    date: "12 FEB 2026",
    desc: "Discover how smartphone developers are trimming down heavy operating system skins to boost memory runtime performance and bring distraction-free interfaces to global consumers.",
    author: "Marques Brownlee",
    profileImg: "profile-1.jpg",
  },
  {
    id: 2,
    category: "Tech",
    title: "Next-Gen AI Hardware Acceleration: Breaking Processing Barriers",
    img: "post-2.jpg",
    date: "18 FEB 2026",
    desc: "An in-depth look into new local system neural architecture units built directly on custom chip chipsets designed to compute billions of operational instructions within fractions of a second.",
    author: "Linus TechTips",
    profileImg: "profile-2.jpg",
  },
  {
    id: 3,
    category: "Mobile",
    title:
      "Evaluating Foldable Screen Durability in the Current Year Lifecycle",
    img: "post-3.jpg",
    date: "24 FEB 2026",
    desc: "We run comprehensive strain tests across current mobile screen hinge engineering mechanisms to figure out if foldable form factors can withstand intensive multi-year operational wear.",
    author: "Arun Maini",
    profileImg: "profile-3.jpg",
  },
  {
    id: 4,
    category: "Design",
    title:
      "Mastering Design Systems: Scalable UI Workflows in Figma and Adobe XD",
    img: "post-4.jpg",
    date: "02 MAR 2026",
    desc: "Learn the core methodologies for building complex component libraries, variable color tokens, and responsive web grids that empower massive cross-functional engineering branches.",
    author: "Sarah Drasner",
    profileImg: "profile-1.jpg",
  },
  {
    id: 5,
    category: "Tech",
    title: "The Rise of Quantum Edge Processing Modules in Cloud Frameworks",
    img: "post-5.jpg",
    date: "09 MAR 2026",
    desc: "Exploring the migration patterns of high-performance localized edge processing units as decentralized data infrastructures replace massive centralized monolithic servers.",
    author: "Linus TechTips",
    profileImg: "profile-2.jpg",
  },
  {
    id: 6,
    category: "Mobile",
    title: "Why Solid-State Solid Haptic Buttons Are Reshaping Flagship Models",
    img: "post-6.jpg",
    date: "15 MAR 2026",
    desc: "An analytical breakdown detailing why mechanical click mechanisms are being phased out in modern hardware configurations to secure complete atmospheric waterproof seals.",
    author: "Arun Maini",
    profileImg: "profile-3.jpg",
  },
  {
    id: 7,
    category: "Design",
    title:
      "Micro-interactions: Crafting Interactive Animations for Mobile Portals",
    img: "post-7.jpg",
    date: "22 MAR 2026",
    desc: "Tiny contextual transition behaviors can dramatically improve functional product user feedback parameters. Learn how subtle state feedback loops build premium product experiences.",
    author: "Sarah Drasner",
    profileImg: "profile-1.jpg",
  },
  {
    id: 8,
    category: "Tech",
    title: "Open-Source Protocols Stabilizing the Future Matrix of Smart Homes",
    img: "post-8.jpg",
    date: "29 MAR 2026",
    desc: "A look into unified framework protocols that bridge connectivity dependencies between disparate hardware providers, allowing automated environments to run seamlessly offline.",
    author: "Linus TechTips",
    profileImg: "profile-2.jpg",
  },
  {
    id: 9,
    category: "Design",
    title: "Accessibility Standards: Designing High-Contrast Dark Mode Visuals",
    img: "post-9.jpg",
    date: "05 APR 2026",
    desc: "Dark interfaces require strict text contrast balancing configurations to prevent digital eye strain. We outline best practices for picking accessible color spaces.",
    author: "Arun Maini",
    profileImg: "profile-3.jpg",
  },
];

function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filtering logic to render cards based on selected active tab
  const filteredPosts =
    activeFilter === "all"
      ? initialPosts
      : initialPosts.filter(
          (post) => post.category.toLowerCase() === activeFilter,
        );

  return (
    <div className="bg-white min-h-screen text-[#172317] antialiased font-sans transition-colors duration-300 dark:bg-[#1a1e21] dark:text-white">
      {/* --- HERO BANNER SECTION (Fixed to adapt between Light and Dark modes) --- */}
      <section className="bg-gray-100 dark:bg-[#1a1e21] pt-36 pb-28 text-center px-4 transition-colors duration-300">
        <div className="max-w-267 mx-auto w-full">
          <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#172317] dark:text-white mb-2 transition-colors duration-300">
            My Blogs
          </h2>
          <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-light tracking-wide uppercase transition-colors duration-300">
            Your Source Of Great Content
          </span>
        </div>
      </section>

      {/* --- CATEGORY FILTER BAR --- */}
      <div className="max-w-267 mx-auto w-full px-4 flex justify-center items-center gap-6 md:gap-16 my-10">
        {["all", "design", "tech", "mobile"].map((cat) => (
          <span
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`font-semibold capitalize cursor-pointer text-[0.95rem] transition-all duration-300 ${
              activeFilter === cat
                ? "bg-[#fd8f44] text-white px-3 py-1 rounded shadow-sm scale-105"
                : "text-[#172317] dark:text-gray-300 hover:text-[#fd8f44] dark:hover:text-[#fd8f44]"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* --- RECONSTRUCTED POST GRID SECTION WITH ANIMATION --- */}
      <section className="max-w-267 mx-auto w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-16 min-h-100">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-[#24292d] p-4 rounded-lg shadow-[0_4px_14px_rgba(35,15,15,0.08)] hover:scale-[1.03] hover:shadow-[0_10px_20px_rgba(35,15,15,0.12)] transition-all duration-500 ease-in-out flex flex-col justify-between border border-gray-100 dark:border-gray-800 opacity-100 animate-fadeIn"
          >
            <div>
              {/* Post Image Container */}
              <div className="overflow-hidden rounded-md mb-3 group">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-50 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Category Badge */}
              <h2 className="text-xs font-semibold uppercase text-[#fd8f44] mb-1 tracking-wider">
                {post.category}
              </h2>

              {/* Title Redirects to the Post Page - Now passes the dynamic data state */}
              <Link
                to="/post"
                state={{ post: post }}
                className="text-lg font-bold text-[#172317] dark:text-white line-clamp-2 hover:text-[#fd8f44] dark:hover:text-[#fd8f44] transition-colors leading-snug"
              >
                {post.title}
              </Link>

              {/* Publication Date */}
              <span className="block text-[0.75rem] text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-2 mb-2">
                {post.date}
              </span>

              {/* Description Snippet */}
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4 text-justify">
                {post.desc}
              </p>
            </div>

            {/* Author Profile Information */}
            <div className="flex items-center gap-2.5 border-t border-gray-50 dark:border-gray-700 pt-3">
              <img
                src={post.profileImg}
                alt={post.author}
                className="w-9 h-9 rounded-full object-cover border-2 border-[#fd8f44]"
              />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {post.author}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* --- PREMIUM CONTACT FORM SECTION --- */}
      <section className="bg-gray-50 dark:bg-[#1a1e21] border-t border-b border-gray-100 dark:border-gray-800 py-16 px-4">
        <div className="max-w-125 mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-[#172317] dark:text-white text-left mb-2">
            Contact <span className="text-[#fd8f44]">Us!</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            If you have any questions or suggestions. Feel free to get in touch
            with me using the contact information below:
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wide"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-2.5 bg-white dark:bg-[#24292d] border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd8f44]/20 focus:border-[#fd8f44] transition-all text-sm dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wide"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-2.5 bg-white dark:bg-[#24292d] border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd8f44]/20 focus:border-[#fd8f44] transition-all text-sm dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wide"
              >
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full p-2.5 bg-white dark:bg-[#24292d] border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd8f44]/20 focus:border-[#fd8f44] transition-all text-sm dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wide"
              >
                Message:
              </label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full p-2.5 bg-white dark:bg-[#24292d] border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd8f44]/20 focus:border-[#fd8f44] resize-none transition-all text-sm dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#fd8f44] text-white font-medium rounded-lg hover:bg-[#e2762f] shadow-md hover:shadow-lg -translate-y-0.5 hover:-translate-y-1 transform transition-all duration-300 uppercase text-xs tracking-wider"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="max-w-267 mx-auto w-full px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.938rem] text-gray-500 dark:text-gray-400">
            &copy; My Blogs. All Right Reserved
          </p>
          <div className="flex items-center gap-4 text-[1.4rem] text-[#172317] dark:text-white">
            <Link
              to="#"
              className="hover:text-[#fd8f44] transition-all duration-300"
            >
              <i className="fab fa-facebook"></i>
            </Link>
            <Link
              to="#"
              className="hover:text-[#fd8f44] transition-all duration-300"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              to="#"
              className="hover:text-[#fd8f44] transition-all duration-300"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="#"
              className="hover:text-[#fd8f44] transition-all duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
