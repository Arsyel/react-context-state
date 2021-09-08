import { useEffect, useRef, useState } from "react";
import { UserConsumer } from "./context/UserContext";

export const UserMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const avatarRef = useRef();
  
  useEffect(() => {
    document.addEventListener("click", hideMenu);
    return () => {
      document.removeEventListener("click", hideMenu);
    };
  }, []);

  const hideMenu = (e) => {
    if (e.target !== avatarRef.current) {
      setIsOpenMenu(false);
    }
  };

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <UserConsumer>
      {
        ({user, onLogout}) =>
        <div className="user-menu">
          <img
            className="user-menu__avatar"
            alt="avatar"
            src={user.avatar}
            onClick={handleToggleMenu}
            ref={avatarRef}
          />
          {
            isOpenMenu
            && <ul>
              <li onClick={onLogout}>Logout</li>
            </ul>
          }
        </div>
      }
    </UserConsumer>
  );
}