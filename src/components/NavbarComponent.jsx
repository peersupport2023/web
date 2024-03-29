"use client";
import { Button, Navbar } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const NavbarComponent = () => {
  const { user, logOut } = useUserAuth(); // Ensure logOut is available
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleLogout2 = () => {
    // Check if either user token or access token exists in local storage
    const userTokenExists = localStorage.getItem("userToken");
    const accessTokenExists = localStorage.getItem("accessToken");

    // Remove both tokens from local storage if they exist
    if (userTokenExists) {
      localStorage.removeItem("userToken");
    }
    if (accessTokenExists) {
      localStorage.removeItem("accessToken");
    }

    // Redirect to the login or signup page
    // You can replace '/login' with the appropriate path
    window.location.href = "/";
  };
  const userTokenExists = localStorage.getItem("userToken");
  const accessTokenExists = localStorage.getItem("accessToken");
  console.log(accessTokenExists);
  console.log(userTokenExists);
  return (
    <>
      <Navbar fluid={true} className="sticky top-0 z-50">
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8 font-black"
          >
            <Navbar.Link linkName="What We Do" />
            <Link to='/roadtomba'>
            <Navbar.Link linkName="Road To MBA" />
            </Link>
            <Link to='/Meetmentors'>
                <Navbar.Link linkName="Meet Our Mentors" />
            </Link>
          </Navbar.Container>
          <Link to='/'>
          <Navbar.Brand className="lg:items-center">
            <img
              src="/images/Peer Support.png"
              alt="keep"
              width="140"
              height="100"
            />
          </Navbar.Brand>
          </Link>

          <Navbar.Collapse collapseType="sidebar" className="">
            <Navbar.Container tag="ul" className="flex flex-col gap-5 ">
              <Navbar.Link linkName="What We Do" />
              <Link to='/roadtomba'>
              <Navbar.Link linkName="Road To MBA" />
              </Link>
              <Link to='/Meetmentors'>
                <Navbar.Link linkName="Meet Our Mentors" />
              </Link>
              <Link to='/webinars'>
              <Navbar.Link linkName="Webinars" />
              </Link>
              <NavLink to='/resources'>
                <Navbar.Link linkName="Resources"/>
              </NavLink>
              <Navbar.Link linkName="Book A Mock Interview" />
              {!userTokenExists && !accessTokenExists ? (
                <Link to="/login">
                  <Navbar.Link linkName="Login" />
                </Link>
              ) : (
                <Button size="md" type="text" onClick={handleLogout2}>
                  Logout
                </Button>
              )}
            </Navbar.Container>
          </Navbar.Collapse>

          <Navbar.Container className="flex items-center gap-3">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-5"
            >
              <NavLink to='/resources'>
                <Navbar.Link linkName="Resources"/>
              </NavLink>
              <Link to='/webinars'>
              <Navbar.Link linkName="Webinars" />
              </Link>
              <Navbar.Link linkName="Book A Mock Interview" />
              {!userTokenExists && (
                <Link to="/login">
                  <Button size="md" type="primary">
                    Login
                  </Button>
                </Link>
              )}
              {userTokenExists && (
                <Button size="md" type="primary" onClick={handleLogout2}>
                  Logout
                </Button>
              )}
            </Navbar.Container>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </>
  );
};
export default NavbarComponent;
