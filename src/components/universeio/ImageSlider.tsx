import React, { useRef } from 'react';

const ImageSlider = () => {
    const slideRef = useRef(null);

    const handleNext = () => {
        const slide = slideRef.current;
        const items = slide.querySelectorAll('.item');
        slide.appendChild(items[0]);
    };

    const handlePrev = () => {
        const slide = slideRef.current;
        const items = slide.querySelectorAll('.item');
        slide.prepend(items[items.length - 1]);
    };

    return (
        <>
            {/* FontAwesome Link for arrows */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            />

            {/* Outer Box */}
            <div className="box">
                <div className="container">
                    <div className="slide" ref={slideRef}>
                        {/* Slide Items */}
                        <div
                            className="item"
                            style={{
                                backgroundImage: "url('https://i.postimg.cc/g0W4qN2y/Switzerland.jpg')",
                            }}
                        >
                            <div className="content">
                                <div className="name">Switzerland</div>
                                <div className="description">
                                    Renowned for its breathtaking Alpine scenery and precision in craftsmanship
                                </div>
                                <button>See More</button>
                            </div>
                        </div>

                        <div
                            className="item"
                            style={{
                                backgroundImage: "url('https://i.postimg.cc/DZfgR0s8/Finland.jpg')",
                            }}
                        >
                            <div className="content">
                                <div className="name">Finland</div>
                                <div className="description">
                                    Known for its saunas, lakes, and a deep connection to nature
                                </div>
                                <button>See More</button>
                            </div>
                        </div>

                        <div
                            className="item"
                            style={{
                                backgroundImage: "url('https://i.postimg.cc/kX2jn2HS/Iceland.jpg')",
                            }}
                        >
                            <div className="content">
                                <div className="name">Iceland</div>
                                <div className="description">
                                    Famous for its stunning geothermal landscapes, waterfalls, and glaciers
                                </div>
                                <button>See More</button>
                            </div>
                        </div>

                        <div
                            className="item"
                            style={{
                                backgroundImage: "url('https://i.postimg.cc/05WWRYVx/Australia.jpg')",
                            }}
                        >
                            <div className="content">
                                <div className="name">Australia</div>
                                <div className="description">
                                    Distinguished by its diverse ecosystems, ranging from beaches to bushland
                                </div>
                                <button>See More</button>
                            </div>
                        </div>

                        <div
                            className="item"
                            style={{
                                backgroundImage: "url('https://i.postimg.cc/dtg5DqMx/Netherland.jpg')",
                            }}
                        >
                            <div className="content">
                                <div className="name">Netherland</div>
                                <div className="description">
                                    Characterized by its iconic canals, tulip fields, and windmills
                                </div>
                                <button>See More</button>
                            </div>
                        </div>

                        <div
                            className="item"
                            style={{
                                backgroundImage: "url('https://i.postimg.cc/sDGJktB9/Ireland.jpg')",
                            }}
                        >
                            <div className="content">
                                <div className="name">Ireland</div>
                                <div className="description">
                                    Known for its lush green landscapes and rich cultural heritage
                                </div>
                                <button>See More</button>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="button">
                        <button className="prev" onClick={handlePrev}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button className="next" onClick={handleNext}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          text-decoration: none;
        }

        body {
          background: #eaeaea;
        }

        .box {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #cfcfcf;
          padding: 20px;
        }

        .container {
          position: relative;
          width: 1000px;
          height: 600px;
          background: #f5f5f5;
          box-shadow: 0 30px 50px #dbdbdb;
          border-radius: 15px;
          overflow: hidden;
        }

        .slide {
          position: relative;
          height: 100%;
          width: 100%;
        }

        .slide .item {
          width: 200px;
          height: 300px;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          border-radius: 20px;
          box-shadow: 0 30px 50px #505050;
          background-position: center;
          background-size: cover;
          display: inline-block;
          transition: 0.5s;
        }

        .slide .item:nth-child(1),
        .slide .item:nth-child(2) {
          top: 0;
          left: 0;
          transform: translate(0, 0);
          border-radius: 0;
          width: 100%;
          height: 100%;
        }

        .slide .item:nth-child(2) .content {
          display: block;
        }

        .slide .item:nth-child(3) {
          left: 50%;
        }

        .slide .item:nth-child(4) {
          left: calc(50% + 220px);
        }

        .slide .item:nth-child(5) {
          left: calc(50% + 440px);
        }

        .slide .item:nth-child(n + 6) {
          left: calc(50% + 440px);
          overflow: hidden;
        }

        .item .content {
          position: absolute;
          top: 50%;
          left: 100px;
          width: 300px;
          text-align: left;
          color: #eee;
          transform: translate(0, -50%);
          font-family: system-ui;
          display: none;
        }

        .content .name {
          font-size: 40px;
          text-transform: uppercase;
          font-weight: bold;
          opacity: 0;
          animation: animate 1s ease-in-out 1 forwards;
        }

        .content .description {
          margin-top: 10px;
          margin-bottom: 20px;
          opacity: 0;
          animation: animate 1s ease-in-out 0.3s 1 forwards;
        }

        .content button {
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          opacity: 0;
          animation: animate 1s ease-in-out 0.6s 1 forwards;
        }

        @keyframes animate {
          from {
            opacity: 0;
            transform: translate(0, 100px);
            filter: blur(33px);
          }
          to {
            opacity: 1;
            transform: translate(0);
            filter: blur(0);
          }
        }

        .button {
          width: 100%;
          text-align: center;
          position: absolute;
          bottom: 20px;
        }

        .button button {
          width: 40px;
          height: 35px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          margin: 0 5px;
          border: 1px solid #000;
          transition: 0.3s;
        }

        .button button:hover {
          background: #ababab;
          color: #fff;
        }
      `}</style>
        </>
    );
};

export default ImageSlider;
