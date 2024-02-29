import React from 'react'
import { All_Product } from '../Components';
import { client } from '../lib/client'

const shop = ({ products, BannerData }) => {
  return (
    <div>
    
      <div className='products-heading'>
       
      </div>
      <div className="products-container">
      {products?.map((product) => <All_Product key={product._id}  product={product}/>)
      }
    </div>

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

export default shop;