import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Colors, Devices } from "./Theme";
import { useState } from "react";
import Button from "./styled/Button";
import SearchBar from "./Header/SearchBar";
import MobileSearchBar from "./Header/MobileSearchBar";

const HeaderE1 = styled.article`
  color: ${Colors.White};
`;
const Center = styled.div``;
const LogoText = styled.a``;
const Logo = styled.img``;
const Nav = styled.nav``;
const NavItem = styled.span``;
const SearchIcon = styled.span``;
const MenuIcon = styled(SearchIcon)``;
const AuthItems = styled(NavItem)``;

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
        <LogoText href="#">NFT Degen</LogoText>
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
