import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CryHeart from '../../assets/cryheart.png';
import CuteEmoji from '../../assets/hoverEmogi.png';

const FavoritesList = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [hoveredItemId, setHoveredItemId] = useState(null);


  useEffect(() => {
    const total = favorites.reduce((acc, item) => {
      return acc + item.price; 
    }, 0);
    setTotal(total);
  }, [favorites]);

  const removeProduct = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    navigate('/favorites')
  };

  if (favorites.length === 0) {
    return (
      <div className="container mt-5 flex flex-col items-center">
        <div className="text-center">
          <img
            src={CryHeart}
            alt="Empty Favorites List Logo"
            className="w-48 h-48 mx-auto"
          />
        </div>
        <p className="text-center text-2xl mb-4" style={{ fontWeight: 'bold' }}>
          Your Favorites List is empty!
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto w-full sm:w-3/4 lg:w-1/2">
        <div className="shadow-md my-10">
          <div className="w-full bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Your Favorites ❤️</h1>
              <h2 className="font-semibold text-2xl">{favorites?.length} Items</h2>
            </div>
            {favorites?.map((favorite) => (
              <div className="hover:bg-gray-100 px-6 py-5 text-center relative"
                key={favorite?.id}
                onMouseEnter={() => setHoveredItemId(favorite?.id)}
                onMouseLeave={() => setHoveredItemId(null)}
              >
                 {hoveredItemId === favorite?.id && (
                   <img
                    src={CuteEmoji}
                    alt="New Heart"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ width: '100px', height: '100px' }}
                  />
                )}
                <div className="w-2/5 mx-auto">
                <Link to={`/products/${favorite?.id}`}>
                    <div>
                      <img className="" src={favorite?.image} alt={favorite?.title} />
                    </div>
                  </Link>
                  <div className="flex flex-col justify-between mt-4">
                    <span className="font-bold text-sm">{favorite?.title}</span>
                    <span className="text-[#00B377] text-xs capitalize">
                      {favorite?.category}
                    </span>
                    <div
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer flex items-center justify-center mt-3"
                      onClick={() => removeProduct(favorite?.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                        />
                        <path
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                        />
                      </svg>{" "}
                      Remove
                    </div>
                  </div>
                </div>
                <hr className="mt-3" />
              </div>
            ))}
        <Link to={"/products"} className="flex font-semibold text-indigo-600 text-sm mt-10 justify-center">
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Continue Shopping
        </Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default FavoritesList