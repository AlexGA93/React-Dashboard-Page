import React, { useEffect } from "react";

// react icons
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
// react popups
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// avatar
import avatar from "../data/avatar.jpg";
// components
import { Cart, Chat, Notification, UserProfile } from ".";
// context provider to deal with the state
import { useStateContext } from "../contexts/ContextProvider";

// sub-component
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCnter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  // take active menu state from context
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor
  } = useStateContext();

  // use useEffect hook to assign a value to the screen state when element renders itself
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    // Everytime We resize the window It calls the method to change the state
    window.addEventListener("resize", handleResize);

    // Calling the method at the first render
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //Runs only on the first render

  // Using a second useEffect hook to apply an effect when variable 'screenSize' is lower than 900 px or higher
  useEffect(() => {
    screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      {/* Sidebar Button */}
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      {/* Cart Button */}
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        {/* Chat Button */}
        <NavButton
          title="Chat"
          fotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        {/* Notification Button */}
        <NavButton
          title="Notifications"
          fotColor="#03C9D7"
          customFunc={() => handleClick("notifications")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        {/* Avatar */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="avatar" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 text-14">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {/* When We push any button the component is called as popup*/}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
