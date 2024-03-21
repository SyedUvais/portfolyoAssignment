import { useUserContext } from "../../context/userContext";

const SingleBlog = () => {
  const {userInfo} = useUserContext();

  return (
    <div className="section blog" id="next_section">
      <div className="content content-box">
        <div className="single-post-text">
          {/* portfolio content */}
          <div className="portfolio-info portfolio-cols">
            <div className="description-col">

              <div className="single-post-text">

                {/* gallery */}
                <div className="gallery-item">

                {userInfo?.projects?.slice(0, 3)?.map((curItem, index, array) => {
                return (
                  <div key={index} className="box-item f-gallery f-links f-video f-image f-music f-content">
                    {" "}
                    {/* add class "animate-to-page" if need animated transition to page and delete target="_blank" rel="noreferrer" */}
                    <p>
                      <a href="images/work1.jpg">
                        <img src={curItem.image.url} alt="" style={{borderRadius: '30px'}} />
                      </a>
                    </p>
                  </div>
                )
              })}

                  {/* <p>
                    <a href="images/work2.jpg">
                      <img src="images/work2.jpg" alt="" />
                    </a>
                  </p>
                  <p>
                    <a href="images/work3.jpg">
                      <img src="images/work3.jpg" alt="" />
                    </a>
                  </p> */}
                </div>
              </div>
            </div>
            {userInfo?.blog && (<div className="details-col">
              {/* title */}
              <div className="title">
                <div className="title_inner">Details</div>
              </div>
              {/* details */}
              <ul className="details-list">
                <li>
                  <strong>Categories:</strong> Gallery
                </li>
                <li>
                  <strong>Date:</strong> 10 July 2019
                </li>
                <li>
                  <strong>Client:</strong> Envato
                </li>
                <li>
                  <strong>Live Preview:</strong>{" "}
                  <a
                    href="https://google.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.envato.com
                  </a>
                </li>
              </ul>
            </div>)}
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default SingleBlog;
