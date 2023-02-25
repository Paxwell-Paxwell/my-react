import React from 'react'

export default function ProductCard({items,onAdd}) {
  return (
    <>
        <div className="card h-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG/1200px-Capybara_%28Hydrochoerus_hydrochaeris%29.JPG" className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title">{items?.title}</h5>
                        <p className="card-text">{items?.price}</p>
                        <h6> {items?.category}</h6>
                        <h6>Rating: {items?.rating?.count}</h6>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary" onClick={onAdd}>Add to cart</button>
                    </div>
                </div>

        </div>
    </>
  )
}
