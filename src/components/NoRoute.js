import React from 'react'
import Subscribe from './Subscribe'

export default function NoRoute() {
  return (
    <>
        <section id="aa-error">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="aa-error-area">
                        <h2>404</h2>
                        <span>Sorry! Page Not Found</span>
                        <p>Sorry this content has been moved Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, amet perferendis, nemo facere excepturi quis.</p>
                        <a href="#"> Go to Homepage</a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <Subscribe/>
    </>
  )
}
