import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import { useUserContext } from "../context/userContext";

const IndexImage = () => {
  const { userInfo } = useUserContext();

  return (
    <Layout>
      <div className="section started" id="section-started">
        {/* background */}
        <div
          className="video-bg"
          style={{ backgroundImage: "url('https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k')", backgroundPosition: 'center' }}
        >
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        {/* started content */}
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
            <h1 className="h-title">
                Hello, {`I’m`} <strong>{userInfo?.about?.name}</strong>, {userInfo?.about?.title}
                <br /> Based in {userInfo?.about?.address}.
              </h1>
              <TypingAnimation extraClassName={"typed-subtitle"} />
              <span className="typed-subtitle" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default IndexImage;
