export default function LinkCard({ name, url, icon, description }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-fade-in"
    >
      <div className="flex items-center space-x-4 mb-2">
        {icon}
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </a>
  );
}
