import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Pink Jacket',
      price: '$260',
      image: '..//Cart.png', // Replace with actual image paths
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Gucci Bag',
      price: '$960',
      image: '..//Frame.png', // Replace with actual image paths
      rating: 4,
    },
    {
      id: 3,
      name: 'Cooler System',
      price: '$160',
      image: '..//Cart1.png', // Replace with actual image paths
      rating: 4.5,
    },
    {
      id: 4,
      name: 'Wooden Shelf',
      price: '$360',
      image: '..//Cart2.png', // Replace with actual image paths
      rating: 5,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-red-500 mb-2">This Month</h2>
            <h3 className="text-xl text-gray-700">Best Selling Products</h3>
          </div>
          {/* View All Button */}
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-300">
            View All
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                <p className="text-xl text-red-600 mt-2">{product.price}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < product.rating ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 17.75l-3.13 1.645 1.125-3.755-3.03-2.252 3.875-.03L12 8.25l1.125 3.625 3.875.03-3.03 2.252 1.125 3.755L12 17.75z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
