export default function LinkCard({ name, url, icon, description }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
      <div className="flex items-center mb-4">
        {icon}
        <span className="ml-3 text-xl font-semibold">{name}</span>
      </div>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </a>
  );
}