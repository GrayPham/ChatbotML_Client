import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/webscript.png";
import user from "../../assets/user.jpg";
import './SideMenu.css';
import MenuItem from "./MenuItem";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {signOut} from "../../reducers/userSlice"
/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Home Page",
    exact: true,
    to: "/",
    iconClassName: <AiIcons.AiFillHome />,
  },
  {
    name: "Contact Page",
    exact: true,
    to: `/content`,
    iconClassName: <FaIcons.FaEnvelopeOpenText />,
  },
  { name: "Design", to: `/design`, iconClassName: <IoIcons.IoIosPaper /> }
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  const dispatch = useDispatch();
  const handleLogout = () => {
    
    //dispatch(signOut)
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    setCustomer(null);
  }

  const [customer, setCustomer] = useState();
  

  useEffect(() => {
    
    const items = JSON.parse(localStorage.getItem('user'));
    if (items) {
      setCustomer(items);
      console.log(items);
        
    }
    }, []);
  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="webscript" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
              </svg>
            </i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                </svg>
            </i>
          )}
        </div>
      </div>



      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                console.log("inactive",inactive)
                if (inactive) {
                  setInactive(false);
                }
                else{
                  setInactive(true);
                }
              }}
            />
          ))}
          {
            customer?(
              <li>
              <Link className={`menu-item`}  
                  exact to={"/profile"}
                  onClick={(e) => {
                    if (inactive) {
                      setInactive(false);
                    }
                    else{
                      setInactive(true);
                    } 
                  }}
                >
                    <div className="menu-icon">
                    {<IoIcons.IoIosPaper />}
                  </div> 
                  <span>Profile</span>
                </Link>
                <div className={`menu-item`} onClick= {handleLogout}>
                  <div className="menu-icon">
                    {<IoIcons.IoMdLogIn />}
                  </div>
                  <span>Logout</span>
                </div>
              </li>
            ):(
              <li>
                <Link className={`menu-item`}  
                  exact to={"/login"}
                  onClick={(e) => {
                  if (inactive) {
                    setInactive(false);
                  }
                  else{
                    setInactive(true);
                  }
                }}
                  >
                {console.log("Login", customer)}
                  <div className="menu-icon">
                    {<IoIcons.IoMdLogIn />}
                  </div>
                  <span>Login / Register</span>
                </Link>
              </li>
            )
          }

        </ul>
      </div>
      {
        customer?(
          <div className="side-menu-footer">
            <div className="avatar">
              <img src={user} alt="user" />
            </div>
            <div className="user-info">
              <h5>Username: {customer.username}</h5>
              <i>{customer.email}</i>
            </div>
            </div>
          ):<div></div>
    }
    </div>

  );
};

export default SideMenu;
