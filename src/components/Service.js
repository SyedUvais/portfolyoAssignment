import { useUserContext } from "../../context/userContext";

const Service = () => {
  const {userInfo} = useUserContext();

  return (
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
                      <div className="service-col">
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
  );
};
export default Service;
