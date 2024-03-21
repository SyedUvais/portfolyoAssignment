import { useUserContext } from "../../context/userContext";

const Clients = () => {
  const {userInfo} = useUserContext();

  return (
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
  );
};
export default Clients;
