import { useUserContext } from "../../context/userContext";

const About = () => {
  const {userInfo} = useUserContext();

  return (
    <div className="section about" id="section-about">
          {/* title */}
          <div className="content content-box">
            {/* image */}
            <div className="image">
              <img src={userInfo?.about?.avatar?.url} alt="" />
            </div>
            {/* desc */}
            <div className="desc">
              <p>
                {userInfo?.about?.description}
              </p>
              <div className="info-list">
                <ul>
                  <li>
                    <strong>Age:</strong> 24
                  </li>
                  <li>
                    <strong>Residence:</strong> {userInfo?.about?.address?.split(',')[1]}
                  </li>
                  <li>
                    <strong>Freelance:</strong> Available
                  </li>
                  <li>
                    <strong>Address:</strong> {userInfo?.about?.address?.split(',')[0]}
                  </li>
                  <li>
                    <strong>Phone:</strong> {userInfo?.about?.phoneNumber}
                  </li>
                  <li>
                    <strong>E-mail:</strong> {userInfo?.email}
                  </li>
                </ul>
              </div>
              <div className="bts">
                <a href="#" className="btn hover-animated">
                  <span className="circle" />
                  <span className="lnk">Download CV</span>
                </a>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
  );
};
export default About;
