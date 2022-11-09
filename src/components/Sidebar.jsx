import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// data links
import { links } from "../data/dummy";
// state by context provider
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  // local state
  // const activeMenu = true;
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  // function to handle close or open sidebar
  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // classNames templates
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';


  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            {/* settings button toclose sodebar */}
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          {/* links as list */}
          <div className="mt-100">
            {links.map((item) => (
              <div key={item.title}>
                {/* TITLES */}
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {/* NAVLINKS */}
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    // when pressed state isActive change and it causes that It style changes too
                    style={ ({isActive}) => ({
                      backgroundColor: isActive ? currentColor : ''
                    }) }
                    // When We push a link We want to close the sidebar ONLY if screen is lower than 900 px
                    onClick={handleCloseSideBar}
                    className={({ isActive }) => isActive ? activeLink : normalLink}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
