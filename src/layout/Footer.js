import { useUserContext } from "../../context/userContext";

const Footer = () => {
  const { userInfo } = useUserContext();

  return (
    <footer className="footer">
      <div className="copy">
        <p>E: {userInfo?.email}</p>
        <p>T: {userInfo?.about?.phoneNumber}</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
        {userInfo?.social_handles?.map((curItem, index, array) =>
          {
            if (curItem.enabled)
            {
              return (
                <a key={index} target="_blank" rel="noreferrer" href={`https://www.${curItem.platform}.com/`}>
                  <span className={`icon fab fa-${curItem.platform.toLowerCase()}`} />
                </a>
              )
            }
          }
        )}
          {/* <a target="_blank" rel="noreferrer" href="https://www.pinterest.com/">
            <span className="icon fab fa-pinterest" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
            <span className="icon fab fa-dribbble" />
          </a> */}
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
