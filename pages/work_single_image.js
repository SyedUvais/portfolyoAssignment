import { ImagePageBanner } from "../src/components/PageBanner";
import SingleBlog from "../src/components/SingleBlog";
import Layout from "../src/layout/Layout";
const WorkSingleImg = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a> / <a href="#">Works</a> / Shot in Iceland </span>`,
  ];
  return (
    <Layout>
      <ImagePageBanner
        pageName={"Shot in Iceland"}
        typingData={typingAnimation}
        bannerImg="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285347449-dniw0h"
      />
      <SingleBlog />
    </Layout>
  );
};
export default WorkSingleImg;
