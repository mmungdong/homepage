'use client';
import { useState } from 'react';
import LinkCard from './LinkCard';

export default function CategoryNavigator({ categories }) {
  const [selectedMainCategory, setSelectedMainCategory] = useState(Object.keys(categories)[0]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(categories[selectedMainCategory].subCategories[0].title);

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
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">技术导航</h1>
          <div className="flex space-x-4 overflow-x-auto border-b border-gray-200">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => handleMainCategoryChange(category)}
                className={`px-4 py-2 text-lg font-medium ${
                  category === selectedMainCategory
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {categories[category].title}
              </button>
            ))}
          </div>
        </div>

        {currentMainCategory.subCategories.length > 1 && (
          <div className="mb-6">
            <div className="flex space-x-4 overflow-x-auto border-b border-gray-200">
              {currentMainCategory.subCategories.map((subCategory) => (
                <button
                  key={subCategory.title}
                  onClick={() => handleSubCategoryChange(subCategory.title)}
                  className={`px-4 py-2 text-base ${
                    subCategory.title === selectedSubCategory
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {subCategory.title}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSubCategory.links.map((link, index) => (
              <LinkCard 
                key={`${selectedMainCategory}-${selectedSubCategory}-${index}`}
                name={link.name} 
                url={link.url} 
                icon={<span className={`material-icons text-${link.color}`}>{link.iconName}</span>} 
                description={link.description} 
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}