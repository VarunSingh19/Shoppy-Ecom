import React from 'react'
import { Link } from 'react-router-dom'

const featureCardText = [
  {
    id:1,
    para: "Explore the cutting-edge world of electronics at our online store. From sleek smartphones to powerful laptops and innovative gadgets, discover a range of high-quality electronic devices that seamlessly blend technology with style. Elevate your digital experience with our curated selection of top-tier electronics."
  },
  {
    id:2,
    para: "Indulge in timeless elegance with our exquisite jewelry collection. From dazzling diamonds to captivating gemstones, each piece is meticulously crafted to adorn you with sophistication and grace. Elevate your style and make a statement with our carefully curated selection of jewelry that reflects the beauty of every moment."
  },
  {
    id:3,
    para: "Step into style with our men's clothing collection, where fashion meets comfort. From casual essentials to sharp formal wear, our curated selection ensures you're dressed to impress on every occasion. Explore quality craftsmanship and on-trend designs, redefining your wardrobe with effortless sophistication."
  },
  {
    id:4,
    para: "Experience the epitome of feminine grace with our women's clothing line. Embrace versatile fashion with a curated selection that transitions seamlessly from casual chic to glamorous elegance. Elevate your wardrobe with our diverse range, where each piece is a celebration of contemporary style and timeless sophistication."
  },

]

const FeatureCard = ({cards = [1, 2, 3]}) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-[#00B377] tracking-widest font-medium title-font mb-1">CATEGORIES</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Popular Categories</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            cards?.map((card) => {
              return (
                <Link to={`/categories/${card}`} className="p-4 md:w-1/3 cursor-pointer">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#00B377] text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium capitalize">{card || 'Example card'}</h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base"> Whether you're in search of the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, we've got you covered.</p>
                      <a className="mt-3 text-[#00B377] inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FeatureCard