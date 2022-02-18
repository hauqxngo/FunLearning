import React, { useContext, useState } from "react";
import UserContext from "../../UserContext";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";

/** Shows up on every page.
 *
 * When user is logged in, shows Categories, Profile, & Logout tabs
 * Otherwise, shows Login & Sign Up tabs
 *
 * App -> NavBar
 */

const NavBar = ({ logout }) => {
  // toggle burger menu at small dimensions
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((open) => !open);
  };

  // authentication stuff
  const { currentUser } = useContext(UserContext);

  const loggedInNav = () => {
    return (
      <div>
        <Navbar color="success" dark expand="md" light>
          <i class="fas fa-suitcase"></i>
          <NavbarBrand href="/">Fun Learning</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/categories">Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login" onClick={logout}>
                  Logout, {currentUser.username}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  };
  const loggedOutNav = () => {
    return (
      <div>
        <Navbar color="success" dark expand="md" light>
          <NavbarBrand href="/">Fun Learning</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  };

  return <div>{currentUser ? loggedInNav() : loggedOutNav()}</div>;
};

export default NavBar;
