import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Colors, Devices } from "./Theme";
import { useState } from "react";
import Button from "./styled/Button.styled";
import SearchBar from "./Header/SearchBar";
import MobileSearchBar from "./Header/MobileSearchBar";

const HeaderE1 = styled.article`
  color: ${Colors.White};
  z-index: 10;
  display: flex;
  width: 100%;
  align-items: center;
  height: 10%;
  
  color:
  gap: 1rem;
  padding: 1rem 1.5rem;
  top: 0;
  bacground-color: ${Colors.Background};
  position: sticky;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoText = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: #bbbbbb;
`;

const Logo = styled.img`
  width: 45px;
  border-right: 1px solid ${Colors.Gray};
  padding-right: 1rem;
`;

const Nav = styled.nav`
  margin-left: auto;
  border-right: 1px solid ${Colors.Gray};
  padding-right: 1rem;
  display: none;

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
  }

  @media ${Devices.Laptop} {
    display: block;
  }
`;

const NavItem = styled.span`
  font-size: 1rem;
  font-weigth: 400;
`;

const SearchIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${Devices.Laptop} {
    display: none;
  }
`;

const MenuIcon = styled(SearchIcon)``;
const AuthItems = styled(NavItem)`
  font-size: 1rem;
  display: none;

  @media ${Devices.Laptop} {
    display: inherit;
  }
`;

export default function Header({ mobileMenu }) {
  const [SearchIsOpen, setSearchIsOpen] = useState(false);
  const { MobileMenuIsOpen, setMobileMenuIsOpen } = mobileMenu;

  function toggleMenu() {
    setMobileMenuIsOpen(!MobileMenuIsOpen);
  }

  return (
    <HeaderE1>
      <MenuIcon>
        {MobileMenuIsOpen ? (
          <IoClose
            style={{ fontSize: "2.5rem" }}
            color={Colors.Primary}
            onClick={() => {
              toggleMenu();
            }}
          />
        ) : (
          <FiMenu
            onClick={() => {
              toggleMenu();
            }}
          />
        )}
      </MenuIcon>
      <Center>
        <Logo src="/logoapedegen_resized.png" />
        <LogoText href="#">Degen</LogoText>
        <SearchBar />
        <Nav>
          <ul>
            <li>
              <NavItem href="#">Marketplace</NavItem>
            </li>
            <li>
              <NavItem href="#">Drops</NavItem>
            </li>
            <li>
              <NavItem href="#">Brands</NavItem>
            </li>
            <li>
              <Button>Create</Button>
            </li>
          </ul>
        </Nav>
      </Center>
      {SearchIsOpen ? (
        <MobileSearchBar
          SearchIsOpen={SearchIsOpen}
          setSearchIsOpen={setSearchIsOpen}
        />
      ) : (
        ""
      )}
      <AuthItems href="#">Sign In</AuthItems>
      <AuthItems href="#">Sign Up</AuthItems>
      <SearchIcon>
        <CgSearch
          onClick={() => {
            setSearchIsOpen(!SearchIsOpen);
          }}
        />
      </SearchIcon>
    </HeaderE1>
  );
}
