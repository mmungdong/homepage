'use client';
import { useState } from 'react';
import LinkCard from './LinkCard';

export default function CategoryNavigator({ categories }) {
  const [selectedMainCategory, setSelectedMainCategory] = useState(Object.keys(categories)[0]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    categories[Object.keys(categories)[0]].subCategories[0].title
  );

  const handleMainCategoryChange = (category) => {
    setSelectedMainCategory(category);
    const firstSubCategory = categories[category].subCategories[0].title;
    setSelectedSubCategory(firstSubCategory);
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const currentMainCategory = categories[selectedMainCategory];
  const currentSubCategory = currentMainCategory.subCategories.find(
    (subCat) => subCat.title === selectedSubCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex space-x-4 overflow-x-auto border-b border-gray-200 dark:border-gray-700">
            {Object.keys(categories).map((category) => {
              const isActive = category === selectedMainCategory;
              return (
                <button
                  key={category}
                  onClick={() => handleMainCategoryChange(category)}
                  className={`relative px-4 py-2 text-lg font-medium whitespace-nowrap transition-colors duration-300 ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {categories[category].title}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {currentMainCategory.subCategories.length > 1 && (
          <div className="mb-6">
            <div className="flex space-x-4 overflow-x-auto border-b border-gray-200 dark:border-gray-700">
              {currentMainCategory.subCategories.map((subCategory) => {
                const isActive = subCategory.title === selectedSubCategory;
                return (
                  <button
                    key={subCategory.title}
                    onClick={() => handleSubCategoryChange(subCategory.title)}
                    className={`relative px-4 py-2 text-base whitespace-nowrap transition-colors duration-300 ${
                      isActive
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {subCategory.title}
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {currentSubCategory.links.map((link, index) => (
            <LinkCard
              key={`${selectedMainCategory}-${selectedSubCategory}-${index}`}
              name={link.name}
              url={link.url}
              icon={
                <span className={`material-icons text-${link.color}`}>
                  {link.iconName}
                </span>
              }
              description={link.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
