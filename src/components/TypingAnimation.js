import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useUserContext } from "../../context/userContext";
const TypingAnimation = ({ typingData, extraClassName }) => {
  // Create Ref element.
  const el = useRef(null);

  const { userInfo } = useUserContext();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: typingData
        ? typingData
        : [
          "I develop 3D visuals",
          "I develop user interfaces",
          "I develop web applications"
          ], // Strings to display
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span
      className={`${extraClassName} typing-subtitle`}
      id="subtitle"
      ref={el}
    ></span>
  );
};
export default TypingAnimation;
