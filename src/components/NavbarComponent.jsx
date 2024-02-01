"use client";
import { Button, Navbar } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="sticky top-0 z-50">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Navbar.Link linkName="What We Do" />
          <Navbar.Link linkName="Road To MBA" />
          <Navbar.Link linkName="Meet Our Mentors" />
        </Navbar.Container>
        <Navbar.Brand>
          <img src="/images/favicon_1.png" alt="keep" width="150" height="40" />
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
          <Navbar.Link linkName="What We Do" />
          <Navbar.Link linkName="Road To MBA" />
          <Navbar.Link linkName="Meet Our Mentors" />
          <Navbar.Link linkName="Webinars" />
          <Navbar.Link linkName="Book A Call" />
          <Navbar.Link linkName="Login" />
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link linkName="Webinars" />
            <Navbar.Link linkName="Book A Call" />
            <Button size="md" type="primary">Login</Button>
          </Navbar.Container>
          <Button size="sm" type="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-metal-600">Search</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
