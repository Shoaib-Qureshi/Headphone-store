import React from 'react'
import {  FootBanner, HeroBanner,All_Product } from '../Components';
import { client } from '../lib/client'

const Home = ({ products, BannerData }) => {
  return (
    <div>
      < HeroBanner  heroBanner={BannerData.length && BannerData[0] }/>
    
      <div className='products-heading'>
        <h2>Best Selling</h2>
        <p>Headphone of various kinds </p>
      </div>
      <div className="products-container">
      {products?.map((product) => <All_Product key={product._id}  product={product}/>)
      }
    </div>

      <FootBanner  footerBanner={BannerData && BannerData[0]}/>
    </div>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const BannerQuery = '*[_type == "banner"]';
  const BannerData = await client.fetch(BannerQuery);

  return {
    props: { products, BannerData }
  }
}

export default Home;