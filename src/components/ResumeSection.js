import { useUserContext } from "../../context/userContext";

const ResumeSection = () => {
  const {userInfo} = useUserContext()

  return (
    <div className="section resume" id="section-history">
          <div className="content">
            <div className="cols">
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Experience</div>
                </div>
                {/* resume items */}

                <div className="resume-items">
                {userInfo?.timeline?.map((curItem, index, array) => {
                  if (!curItem?.forEducation)
                  {
                    return (
                      <div key={index} className="resume-item content-box active">
                        <div className="date" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p>{curItem?.startDate.split('-')[0]} - {curItem?.endDate.split('-')[0] === '2024' ? 'Present' :  curItem?.endDate.split('-')[0]} </p>
                        <p>{curItem.jobLocation}</p>
                        </div>
                        <div className="name">{curItem.jobTitle} - {curItem.company_name}</div>
                        <div className="text">
                          {curItem.summary}
                        </div>
                      </div>
                    )
                  }
                })}
                  {/* <div className="resume-item content-box">
                    <div className="date">2011 - 2012</div>
                    <div className="name">
                      Front-End Developer - Google Inc.
                    </div>
                    <div className="text">
                      Monitored technical aspects of the front-end delivery for
                      projects.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2009 - 2010</div>
                    <div className="name">Senior Developer - ABC Inc.</div>
                    <div className="text">
                      Optimize your website and apps performance using latest
                      technology.
                    </div>
                  </div> */}
                </div>

              </div>
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Education</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                {userInfo?.timeline?.map((curItem, index, array) => {
                  if (curItem?.forEducation)
                  {
                    return (
                      <div key={index} className="resume-item content-box active">
                      <div className="date" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p>{curItem?.startDate.split('-')[0]} - {curItem?.endDate.split('-')[0] === '2024' ? 'Present' :  curItem?.endDate.split('-')[0]} </p>
                        <p>{curItem.jobLocation}</p>
                        </div>
                        <div className="name">{curItem.jobTitle} - {curItem.company_name}</div>
                        <div className="text">
                          {curItem.summary}
                        </div>
                      </div>
                    )
                  }
                })}
                  {/* <div className="resume-item content-box">
                    <div className="date">2005 - 2006</div>
                    <div className="name">Programming Course - Paris</div>
                    <div className="text">
                      Coursework - Git, WordPress, Javascript, iOS, Android,
                      CSS, and JavaScript.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2004 - 2005</div>
                    <div className="name">Web Design Course - London</div>
                    <div className="text">
                      Converted Photoshop layouts to web pages using HTML, CSS,
                      and JavaScript.
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};
export default ResumeSection;
