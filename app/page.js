"use client";

const Home = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full shadow-2xl border border-white/20">
        <div className="flex justify-center mb-8">
          <div className="animate-pulse">
            <div className="bg-yellow-400/90 p-6 rounded-full rotate-45 animate-spin-slow">
              <svg
                className="w-16 h-16 text-white -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          施工中
        </h1>

      </div>
    </div>
  );
};

export default Home;