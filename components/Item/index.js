import React from 'react'

function index() {
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src="/pro2.jpg" className="product-detail-image" />
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>Name</h1>
          <h4>Details: </h4>
          <p>Details</p>
          <h4 className="">Tehnology</h4>
        
          <div>
          </div>
          <div className="buttons">
            <button type="button" className="buy-now" >Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index