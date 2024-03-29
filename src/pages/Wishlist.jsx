import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'

const Wishlist = () => {
  return (
    <>
     <Meta title={"Wishlist"} />
            <BreadCrumb title={"Wishlist"} />
            <Container class1="wishlist-wrappper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                            <img 
                                src="images/cross.svg"
                                 alt="cross" 
                                 className='position-absolute cross img-fluid'
                                 />
                                <div className="wishlist-card-image ">
                                    <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                                </div>
                                <div className='px-3 py-3'>
                                <h5 className="title">Honor T1 7.0 1GB RAM 8GB ROM 7 INCH With wifi+3g Tablet</h5>
                                <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                            <img 
                                src="images/cross.svg"
                                 alt="cross" 
                                 className='position-absolute cross img-fluid'
                                 />
                                <div className="wishlist-card-image ">
                                    <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                                </div>
                                <div className='px-3 py-3'>
                                <h5 className="title">Honor T1 7.0 1GB RAM 8GB ROM 7 INCH With wifi+3g Tablet</h5>
                                <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                            <img 
                                src="images/cross.svg"
                                 alt="cross" 
                                 className='position-absolute cross img-fluid'
                                 />
                                <div className="wishlist-card-image ">
                                    <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                                </div>
                                <div className='px-3 py-3'>
                                <h5 className="title">Honor T1 7.0 1GB RAM 8GB ROM 7 INCH With wifi+3g Tablet</h5>
                                <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                            <img 
                                src="images/cross.svg"
                                 alt="cross" 
                                 className='position-absolute cross img-fluid'
                                 />
                                <div className="wishlist-card-image ">
                                    <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                                </div>
                                <div className='px-3 py-3'>
                                <h5 className="title">Honor T1 7.0 1GB RAM 8GB ROM 7 INCH With wifi+3g Tablet</h5>
                                <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>

    </>
  )
}

export default Wishlist