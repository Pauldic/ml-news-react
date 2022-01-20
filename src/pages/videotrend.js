import { Fragment, useState } from "react";
import AppHeader from "components/AppHeader";
import Footer from "components/Footer";

import Slider from "react-slick";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import SmileReact from "images/junggl-icons-homepage/like-dislike-share/smile1.svg";
import SadReact from "images/junggl-icons-homepage/like-dislike-share/smile2.svg";
import SimilarNewsButton from "images/junggl-icons-homepage/related-articles-button/similar-articles.svg";
import SimilarNewsCancelButton from "images/junggl-icons-homepage/related-articles-button/similar-articles-cancel-button.svg";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
};

const VideoTrends = () => {
  const [similarNews, setSimilarNews] = useState(false);

  const handleShowSimilarNews = () => {
    setSimilarNews(!similarNews);
  };

  return (
    <Fragment>
      <div style={{ margin: "10px" }}>
        <AppHeader
          text='Video Trends'
          link='/trending-videos'
          icon='fa fa-search'
        />

        <h5 style={{ marginTop: "20px" }}>Trending videos for you</h5>
        <h3 style={{ fontWeight: "bold" }}>
          Check the most <br></br> hyped videos
        </h3>

        <div
          style={{
            borderRadius: "10px",
            backgroundColor: "#f7f7f7",
            border: "",
            boxShadow: "0 5px 5px -5px #757575",
            overflow: "hidden",
          }}
        >
          <div style={{ overflow: "hidden", position: "relative" }}>
            <div
              onClick={() => handleShowSimilarNews()}
              style={{
                position: "absolute",
                top: "8px",
                right: "10px",
                display: "flex",
              }}
            >
              <img
                src={similarNews ? SimilarNewsCancelButton : SimilarNewsButton}
                alt=''
              ></img>
            </div>
            <img
              width='100%'
              height='100%'
              src='https://cdn2.unrealengine.com/fortnite-meowscles-and-kit-1920x1080-864336574.jpg'
            ></img>
          </div>

          <div style={{ margin: "10px" }}>
            <h6 style={{ fontWeight: "bold", color: "#0B0B1E" }}>
              Apple Does Not Need to Return Fortnite to App Store
            </h6>
            <p style={{ fontSize: "13px", color: " #959CAB" }}>
              The New York Times <span>●</span> 09.21.2020
            </p>

            <SlideDown className={"my-dropdown-slidedown"}>
              <div
                className={similarNews ? "fadeIn" : "fadeOut"}
                style={{ overflowX: "hidden", overflowY: "hidden" }}
              >
                <hr></hr>
                <h6 style={{ fontWeight: "bold", marginBottom: "12px" }}>
                  Similar Articles
                </h6>
                <div>
                  <div>
                    <Slider {...settings}>
                      <div>
                        <div>
                          <img
                            alt=''
                            width='130px'
                            height='80px'
                            style={{ borderRadius: "10px" }}
                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-6s-202009?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1599936770000'
                          ></img>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              marginTop: "8px",
                            }}
                          >
                            The New Apple Watch measures Your..
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img
                            alt=''
                            width='130px'
                            height='80px'
                            style={{ borderRadius: "10px" }}
                            src='https://cdn.guidingtech.com/media/assets/2020/10/_1200x630_crop_center-center_82_none/Top-best-Clear-Cases-for-the-Apple-iPhone-12-FI_2020-10-23-060539.jpg?mtime=1603433140'
                          ></img>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              marginTop: "8px",
                            }}
                          >
                            The New Apple Watch measures Your..
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img
                            alt=''
                            width='130px'
                            height='80px'
                            style={{ borderRadius: "10px" }}
                            src='https://www.gizbot.com/img/600x40/img/2016/12/google-lead-image-06-1481008764.jpg'
                          ></img>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              marginTop: "8px",
                            }}
                          >
                            Google Trusted Contacts Emergency..
                          </p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
                <hr></hr>
              </div>
            </SlideDown>

            <div className='row' style={{ marginBottom: "10px" }}>
              <div style={{ marginLeft: "4%" }}>
                <div
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "white",
                    padding: "6px 6px",
                    color: "#266DD1",
                    fontSize: "13px",
                    fontWeight: "bold",
                    boxShadow: "0 7px 20px 10px rgba(138,135,135,0.15)",
                  }}
                >
                  fortnite
                </div>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <div
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "white",
                    padding: "6px 6px",
                    color: "#266DD1",
                    fontSize: "13px",
                    fontWeight: "bold",
                    boxShadow: "0 7px 20px 10px rgba(138,135,135,0.15)",
                  }}
                >
                  apple
                </div>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <div
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "white",
                    padding: "6px 6px",
                    color: "#266DD1",
                    fontSize: "13px",
                    fontWeight: "bold",
                    boxShadow: "0 7px 20px 10px rgba(138,135,135,0.15)",
                  }}
                >
                  app store
                </div>
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  borderRadius: "50%",
                  paddingLeft: "7px",
                  paddingRight: "7px",
                  paddingTop: "2px",
                  boxShadow: "0 7px 20px 10px rgba(138,135,135,0.15)",
                }}
              >
                <img src={SmileReact} alt=''></img>
              </div>
              <div
                style={{
                  marginLeft: "7px",
                  borderRadius: "50%",
                  paddingLeft: "7px",
                  paddingRight: "7px",
                  paddingTop: "2px",
                  boxShadow: "0 7px 20px 10px rgba(138,135,135,0.15)",
                }}
              >
                <img src={SadReact} alt=''></img>
              </div>
              <div
                style={{
                  marginRight: "5%",
                  marginLeft: "7px",
                  borderRadius: "50%",
                  paddingLeft: "7px",
                  paddingRight: "7px",
                  paddingTop: "4px",
                  boxShadow: "0 7px 20px 10px rgba(138,135,135,0.15)",
                }}
              >
                <i style={{ color: "grey" }} className='fas fa-share'></i>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderRadius: "10px",
            backgroundColor: "#f7f7f7",
            border: "",
            boxShadow: "0 5px 5px -5px #757575",
            overflow: "hidden",
          }}
        >
          <div style={{ overflow: "hidden", position: "relative" }}>
            <div
              onClick={() => handleShowSimilarNews()}
              style={{
                position: "absolute",
                top: "8px",
                right: "10px",
                display: "flex",
              }}
            >
              <img
                src={similarNews ? SimilarNewsCancelButton : SimilarNewsButton}
                alt=''
              ></img>
            </div>
            <img
              width='100%'
              height='100%'
              src='https://cdn2.unrealengine.com/fortnite-meowscles-and-kit-1920x1080-864336574.jpg'
            ></img>
          </div>

          <div
            style={{
              marginTop: "12px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <h6 style={{ fontWeight: "bold", color: "#0B0B1E" }}>
              Apple Does Not Need to Return Fortnite to App Store
            </h6>
            <p style={{ fontSize: "13px", color: " #959CAB" }}>
              The New York Times <span>●</span> 09.21.2020
            </p>

            <SlideDown className={"my-dropdown-slidedown"}>
              <div
                className={similarNews ? "fadeIn" : "fadeOut"}
                style={{ overflowX: "hidden", overflowY: "hidden" }}
              >
                <hr></hr>
                <h6 style={{ fontWeight: "bold", marginBottom: "12px" }}>
                  Similar Articles
                </h6>
                <div>
                  <div>
                    <Slider {...settings}>
                      <div>
                        <div>
                          <img
                            alt=''
                            width='130px'
                            height='80px'
                            style={{ borderRadius: "10px" }}
                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-6s-202009?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1599936770000'
                          ></img>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              marginTop: "8px",
                            }}
                          >
                            The New Apple Watch measures Your..
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img
                            alt=''
                            width='130px'
                            height='80px'
                            style={{ borderRadius: "10px" }}
                            src='https://cdn.guidingtech.com/media/assets/2020/10/_1200x630_crop_center-center_82_none/Top-best-Clear-Cases-for-the-Apple-iPhone-12-FI_2020-10-23-060539.jpg?mtime=1603433140'
                          ></img>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              marginTop: "8px",
                            }}
                          >
                            The New Apple Watch measures Your..
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img
                            alt=''
                            width='130px'
                            height='80px'
                            style={{ borderRadius: "10px" }}
                            src='https://www.gizbot.com/img/600x40/img/2016/12/google-lead-image-06-1481008764.jpg'
                          ></img>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              marginTop: "8px",
                            }}
                          >
                            Google Trusted Contacts Emergency..
                          </p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
                <hr></hr>
              </div>
            </SlideDown>

            <div className='row' style={{ marginBottom: "10px" }}>
              <div style={{ marginLeft: "4%" }}>
                <div
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "white",
                    padding: "6px 6px",
                    color: "#266DD1",
                    fontSize: "13px",
                    fontWeight: "bold",
                    boxShadow: "0 7px 20px 10px rgba(138,135,135,0.15)",
                  }}
                >
                  fortnite
                </div>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <div
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "white",
                    padding: "6px 6px",
                    color: "#266DD1",
                    fontSize: "13px",
                    fontWeight: "bold",
                    boxShadow: "0 7px 20px 10px rgba(138,135,135,0.15)",
                  }}
                >
                  apple
                </div>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <div
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "white",
                    padding: "6px 6px",
                    color: "#266DD1",
                    fontSize: "13px",
                    fontWeight: "bold",
                    boxShadow: "0 7px 20px 10px rgba(138,135,135,0.15)",
                  }}
                >
                  app store
                </div>
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  borderRadius: "50%",
                  paddingLeft: "7px",
                  paddingRight: "7px",
                  paddingTop: "2px",
                  boxShadow: "0 7px 20px 10px rgba(138,135,135,0.15)",
                }}
              >
                <img src={SmileReact} alt=''></img>
              </div>
              <div
                style={{
                  marginLeft: "7px",
                  borderRadius: "50%",
                  paddingLeft: "7px",
                  paddingRight: "7px",
                  paddingTop: "2px",
                  boxShadow: "0 7px 20px 10px rgba(138,135,135,0.15)",
                }}
              >
                <img src={SadReact} alt=''></img>
              </div>
              <div
                style={{
                  marginRight: "5%",
                  marginLeft: "7px",
                  borderRadius: "50%",
                  paddingLeft: "7px",
                  paddingRight: "7px",
                  paddingTop: "4px",
                  boxShadow: "0 7px 20px 10px rgba(138,135,135,0.15)",
                }}
              >
                <i style={{ color: "grey" }} className='fas fa-share'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default VideoTrends;
