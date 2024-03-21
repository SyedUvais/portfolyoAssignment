import { useUserContext } from "../../context/userContext";

const CustomText = () => {
  const {userInfo} = useUserContext();

  return (
    <div className="section custom-text" id="section-custom-text">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Custom Text</div>
            </div>
            {/* clients items */}
            <div className="content-box">
              <div className="single-post-text">
                <p>
                 {userInfo?.about?.description}
                </p>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
  );
};
export default CustomText;
