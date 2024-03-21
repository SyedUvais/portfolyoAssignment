import { CreativePageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});

const WorksCreative = () => {
  const typingData = [
    "<p>I develop 3D visuals</p>",
    "<p>I develop user interfaces</p>",
    "<p>I develop web applications</p>",
  ];

  return (
    <Layout>
      <CreativePageBanner pageName={"works"} extraClass="typed-subtitle" typingData={typingData} />
      <div className="section works" id="section-portfolio">
        <div className="content">
          <ItemIsotope />
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};
export default WorksCreative;
