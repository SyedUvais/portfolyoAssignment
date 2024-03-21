import dynamic from "next/dynamic";
import { useEffect } from "react";
import { CodingSkills } from "../src/components/Skills";
import Testimonials from "../src/components/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});
import { useUserContext } from "../context/userContext";

const IndexOnePage = () => {
  const { userInfo } = useUserContext();

  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  let fname, lname = undefined;

  if (userInfo.about && userInfo.about.name) {
    [fname, lname] = userInfo.about.name.split(' ');
  }

  return (
    <Layout noHeader>
      <header className="header">
        <div className="head-top">
          {/* menu button */}
          <a href="#" className="menu-btn">
            <span />
          </a>
          {/* logo */}
          <div className="logo hover-masks-logo">
            <a href="#">
              <span className="mask-lnk">
                {fname} <strong>{lname}</strong>
              </span>
              <span className="mask-lnk mask-lnk-hover">
                Download <strong>CV</strong>
              </span>
            </a>
          </div>
          {/* top menu */}
          <div className="top-menu hover-masks">
            <div className="top-menu-nav">
              <div className="menu-topmenu-container">
                <ul className="menu">
                  <li className="menu-item current-menu-item">
                    <a href="#section-started">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-about">Resume</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-portfolio">Works</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-contacts">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Wrapper */}
      <div className="wrapper">
        {/* Section Started */}
        <div className="section started" id="section-started">
          {/* background */}
          <div
            className="video-bg jarallax"
            style={{ backgroundImage: "url(images/started_image_p.jpg)" }}
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
          {/* mosue button */}
          <a href="#" className="mouse_btn" style={{ display: "none" }}>
            <span className="icon fas fa-chevron-down" />
          </a>
        </div>
        {/* Section About */}
        <div className="section about" id="section-about">
          {/* title */}
          <div className="title">
            <div className="title_inner">About</div>
          </div>
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
        {/* Section Service */}
        <div className="section service" id="section-services">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Services</div>
            </div>
            {/* service items */}
            <div className="service-items">
            {userInfo?.services?.map((curItem, index, array) =>
              {
                if (curItem.enabled)
                {
                    return (
                      <div key={index} className="service-col">
                    <div className="service-item content-box">
                      <div className="icon">
                        <img src={curItem.image.url} height={80} width={80} style={{borderRadius: 10}} alt="" />
                      </div>
                      <div className="name">{curItem.charge}</div>
                      <div className="name">{curItem.name}</div>
                      <div className="text">
                        {curItem.desc}
                      </div>
                    </div>
                  </div>
                    )
                }
              }
            )}

              {/* <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-music" />
                  </div>
                  <div className="name">Music Writing</div>
                  <div className="text">
                    Music copying, writing, creating, transcription, arranging
                    and services.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-ad" />
                  </div>
                  <div className="name">Advetising</div>
                  <div className="text">
                    Advertising services include television, radio, print, mail,
                    and web apps.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-gamepad" />
                  </div>
                  <div className="name">Game Development</div>
                  <div className="text">
                    Developing memorable and unique mobile android, ios and
                    video games.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-camera" />
                  </div>
                  <div className="name">Photography</div>
                  <div className="text">
                    Our in-house photography services team made up of
                    professional photographers.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-mobile-alt" />
                  </div>
                  <div className="name">Android Application</div>
                  <div className="text">
                    Games, playing music, handle network transactions,
                    interacting content etc.
                  </div>
                </div>
              </div> */}
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Pricing */}
        {userInfo?.pricing && (<div className="section pricing" id="section-pricing">
          <div key={Math.random()} className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Pricing Table</div>
            </div>
            {/* pricing items */}
            <div className="pricing-items">
              <div className="pricing-col">
                <div className="pricing-item content-box">
                  <div className="icon">
                    <span className="fas fa-star" />
                  </div>
                  <div className="name">Basic</div>
                  <div className="amount">
                    <span className="number">
                      <span className="dollar">$</span>
                      <span>39</span>
                      <span className="period">hour</span>
                    </span>
                  </div>
                  <div className="feature-list">
                    <ul>
                      <li>Web Development</li>
                      <li>Advetising</li>
                      <li>Game Development</li>
                      <li className="disable">Music Writing</li>
                      <li className="disable">Photography</li>
                    </ul>
                  </div>
                  <div className="bts">
                    <a href="#" className="btn hover-animated">
                      <span className="circle" />
                      <span className="lnk">Buy Now</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pricing-col">
                <div className="pricing-item content-box">
                  <div className="icon">
                    <span className="fas fa-rocket" />
                  </div>
                  <div className="name">Premium</div>
                  <div className="amount">
                    <span className="number">
                      <span className="dollar">$</span>
                      <span>59</span>
                      <span className="period">hour</span>
                    </span>
                  </div>
                  <div className="feature-list">
                    <ul>
                      <li>Web Development</li>
                      <li>Advetising</li>
                      <li>Game Development</li>
                      <li>Music Writing</li>
                      <li>
                        Photography <strong>new</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="bts">
                    <a href="#" className="btn hover-animated">
                      <span className="circle" />
                      <span className="lnk">Buy Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}
        {/* Section Resume */}
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
        {/* Section Design Skills */}
        <div className="section skills" id="section-skills">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Technical Skills</div>
            </div>
            {/* skills items */}
            <div className="skills percent content-box">
              <ul>
              {userInfo?.skills?.map((curItem, index, array) => {
                if(curItem?.enabled)
                {
                  return (
                    <li key={index}>
                    <div className="name">{curItem?.name}</div>
                    <div className="progress ">
                      <div className="percentage" style={{ width: `${curItem?.percentage}%` }}>
                        <span className="percent">{curItem?.percentage}</span>
                      </div>
                    </div>
                  </li>
                  )
                }
              })}
                {/* <li>
                  <div className="name">Illustrations</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "70%" }}>
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </li> */}
                {/* <li>
                  <div className="name">Photoshop</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "95%" }}>
                      <span className="percent">95%</span>
                    </div>
                  </div>
                </li> */}
                {/* <li>
                  <div className="name">Graphic Design</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "85%" }}>
                      <span className="percent">85%</span>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* Section Languages Skills */}
        {userInfo?.languageSkills && (<div className="section skills" id="section-skills-lang">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Languages Skills</div>
            </div>
            {/* skills items */}
            <div className="skills percent content-box">
              <ul>
                <li>
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }}>
                      <span className="percent">90%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">German</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "70%" }}>
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Italian</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "55%" }}>
                      <span className="percent">55%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">French</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "85%" }}>
                      <span className="percent">85%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>)}
        {/* Section Coding Skills */}
        <CodingSkills />
        {/* Section Knowladge Skills */}
        <div className="section skills" id="section-skills-know">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Knowledge</div>
            </div>
            {/* skills */}
            <div className="skills list content-box">
              <ul>
              {userInfo?.services?.map((curItem, index, array) => {
                if (curItem.enabled)
                {
                  return(
                    <li key={index}>
                      <div className="name">{curItem?.name}</div>
                    </li>
                  )
                }
              })}
                {/* <li>
                  <div className="name">iOS and android apps</div>
                </li>
                <li>
                  <div className="name">Create logo design</div>
                </li>
                <li>
                  <div className="name">Design for print</div>
                </li>
                <li>
                  <div className="name">Modern and mobile-ready</div>
                </li>
                <li>
                  <div className="name">Advertising services include</div>
                </li>
                <li>
                  <div className="name">Graphics and animations</div>
                </li> */}
                {/* <li>
                  <div className="name">Search engine marketing</div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* Section Interests */}
        {userInfo?.interests && (<div className="section service" id="section-interests">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Interests</div>
            </div>
            {/* interests items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-baseball-ball" />
                  </div>
                  <div className="name">Basketball</div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-campground" />
                  </div>
                  <div className="name">Camping</div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-chess-knight" />
                  </div>
                  <div className="name">Chess</div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-headphones" />
                  </div>
                  <div className="name">Music</div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>)}
        {/* Section Team */}
        {userInfo?.team && (<div className="section team" id="section-team">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Our Team</div>
            </div>
            {/* team items */}
            <div className="team-items">
              <div className="team-col">
                <div className="team-item content-box">
                  <div className="image">
                    <img src="images/team1.jpg" alt="" />
                  </div>
                  <div className="desc">
                    <div className="name">Alejandro Abeyta</div>
                    <div className="category">Web Developer</div>
                    <div className="soc">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.pinterest.com/"
                      >
                        <span className="icon fab fa-pinterest" />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/"
                      >
                        <span className="icon fab fa-instagram" />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://dribbble.com/"
                      >
                        <span className="icon fab fa-dribbble" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-col">
                <div className="team-item content-box">
                  <div className="image">
                    <img src="images/team2.jpg" alt="" />
                  </div>
                  <div className="desc">
                    <div className="name">Peter Green</div>
                    <div className="category">Back-end Developer</div>
                    <div className="soc">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.pinterest.com/"
                      >
                        <span className="icon fab fa-pinterest" />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/"
                      >
                        <span className="icon fab fa-instagram" />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://dribbble.com/"
                      >
                        <span className="icon fab fa-dribbble" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}
        {/* Section Testimonials */}
        <Testimonials />
        {/* Section Clients */}
        <div className="section clients" id="section-clients">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Clients</div>
            </div>
            {/* clients items */}
            <div className="content-box">
              <div className="clients-items" style={{display: 'flex', columnGap: '30px', flexWrap: 'wrap', paddingLeft: '30px'}}>
              {userInfo?.timeline?.map((curItem, index, array) => {

                    return (
                      <div key={index} className="" style={{}}>
                        <div className="">
                          <a target="_blank" rel="noreferrer" href="#">
                            <h1 style={{color:'white', fontSize: '18px'}}>{curItem.company_name}</h1>
                          </a>
                        </div>
                      </div>
                    )
                })}
                {/* <div className="clients-col">
                  <div className="clients-item">
                    <a target="_blank" rel="noreferrer" href="#">
                      <img src="images/client3.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="clients-col">
                  <div className="clients-item">
                    <a target="_blank" rel="noreferrer" href="#">
                      <img src="images/client2.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="clients-col">
                  <div className="clients-item">
                    <a target="_blank" rel="noreferrer" href="#">
                      <img src="images/client4.png" alt="" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Custom Text */}
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
        {/* Works */}
        <div className="section works" id="section-portfolio">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Portfolio</div>
            </div>
            <ItemIsotope />
            <div className="clear" />
          </div>
        </div>
        {/* Section Contacts Info */}
        <div className="section contacts" id="section-contacts">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Contacts</div>
            </div>
            {/* contacts items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-phone" />
                  </div>
                  <div className="name">Phone</div>
                  <div className="text">{userInfo?.about?.phoneNumber}</div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="name">Email</div>
                  <div className="text">
                    <a href={`mailto:${userInfo?.email}`}>
                    {userInfo?.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="name">Address</div>
                  <div className="text">{userInfo?.about?.address}</div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-user-tie" />
                  </div>
                  <div className="name">Freelance Available</div>
                  <div className="text">I am available for Freelance hire</div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Contacts Form */}
        <div className="section contacts" id="section-contacts-form">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Hire Me</div>
            </div>
            {/* form */}
            <div className="contact_form content-box">
              <form id="cform" method="post">
                <div className="group-val">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="group-val">
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="group-val ct-gr">
                  <textarea
                    name="message"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="group-bts">
                  <button type="submit" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">Send Message</span>
                  </button>
                </div>
              </form>
              <div className="alert-success">
                <p>Thanks, your message is sent successfully.</p>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
        {/* Section Started */}
        <div className="section started section-title" id="section-map">
          {/* background */}
          <div className="video-bg">
            <div className="map" id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className="video-bg-mask" />
            <div className="video-bg-texture" id="grained_container" />
          </div>
        </div>
      </div>

    </Layout>
  );
};
export default IndexOnePage;
