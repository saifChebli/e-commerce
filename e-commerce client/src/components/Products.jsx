import React from 'react'
import { CiHeart } from "react-icons/ci";
import Rating from 'react-rating';
import { FaRegStar } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
const Products = () => {
  return (
    <div className='product-container'>
        <h1>Headphones for you</h1>
        <div className="products">
            <div className="card-product">
                <img src="./image1.png"  alt="" className='product-img' />
                <CiHeart className='icon' />
                <div className="title">
                    <h4>Wireless Earbuds</h4>
                    <div className="price">80$</div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="rating">
                <Rating
                    className='stars'
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<IoStar />}
                    />
                </div>
                <button>Add to cart</button>
            </div>
            <div className="card-product">
                <img src="./image2.png"  alt="" className='product-img' />
                <CiHeart className='icon' />
                <div className="title">
                    <h4>Wireless Earbuds</h4>
                    <div className="price">80$</div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="rating">
                <Rating
                    className='stars'
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<IoStar />}
                    />
                </div>
                <button>Add to cart</button>
            </div>
            <div className="card-product">
                <img src="./image1.png"  alt="" className='product-img' />
                <CiHeart className='icon' />
                <div className="title">
                    <h4>Wireless Earbuds</h4>
                    <div className="price">80$</div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="rating">
                <Rating
                    className='stars'
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<IoStar />}
                    />
                </div>
                <button>Add to cart</button>
            </div>
            <div className="card-product">
                <img src="./image2.png"  alt="" className='product-img' />
                <CiHeart className='icon' />
                <div className="title">
                    <h4>Wireless Earbuds</h4>
                    <div className="price">80$</div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="rating">
                <Rating
                    className='stars'
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<IoStar />}
                    />
                </div>
                <button>Add to cart</button>
            </div>
            <div className="card-product">
                <img src="./image1.png"  alt="" className='product-img' />
                <CiHeart className='icon' />
                <div className="title">
                    <h4>Wireless Earbuds</h4>
                    <div className="price">80$</div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="rating">
                <Rating
                    className='stars'
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<IoStar />}
                    />
                </div>
                <button>Add to cart</button>
            </div>
            <div className="card-product">
                <img src="./image2.png"  alt="" className='product-img' />
                <CiHeart className='icon' />
                <div className="title">
                    <h4>Wireless Earbuds</h4>
                    <div className="price">80$</div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="rating">
                <Rating
                    className='stars'
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<IoStar />}
                    />
                </div>
                <button>Add to cart</button>
            </div>
            <div className="card-product">
                <img src="./image1.png"  alt="" className='product-img' />
                <CiHeart className='icon' />
                <div className="title">
                    <h4>Wireless Earbuds</h4>
                    <div className="price">80$</div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="rating">
                <Rating
                    className='stars'
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<IoStar />}
                    />
                </div>
                <button>Add to cart</button>
            </div>
            <div className="card-product">
                <img src="./image2.png"  alt="" className='product-img' />
                <CiHeart className='icon' />
                <div className="title">
                    <h4>Wireless Earbuds</h4>
                    <div className="price">80$</div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="rating">
                <Rating
                    className='stars'
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<IoStar />}
                    />
                </div>
                <button>Add to cart</button>
            </div>
            <div className="card-product">
                <img src="./image1.png"  alt="" className='product-img' />
                <CiHeart className='icon' />
                <div className="title">
                    <h4>Wireless Earbuds</h4>
                    <div className="price">80$</div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="rating">
                <Rating
                    className='stars'
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<IoStar />}
                    />
                </div>
                <button>Add to cart</button>
            </div>
            <div className="card-product">
                <img src="./image2.png"  alt="" className='product-img' />
                <CiHeart className='icon' />
                <div className="title">
                    <h4>Wireless Earbuds</h4>
                    <div className="price">80$</div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="rating">
                <Rating
                    className='stars'
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<IoStar />}
                    />
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Products