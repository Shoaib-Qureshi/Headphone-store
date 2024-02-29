import React, { useState, useEffect } from 'react';
import Link from 'next/link'
const Canceled = () => {
  return (
    <div className="success-wrapper">
        <div className="success">
        <h2>You've have been Canceled the order.</h2>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
        </div>
      </div>
    
  )
}

export default Canceled