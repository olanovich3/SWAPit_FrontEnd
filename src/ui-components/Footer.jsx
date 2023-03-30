import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Palette from '../styles/Palette';
import Anchor from './Anchor';

const FooterStyled = styled.footer`
  height: 18vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #fafafa;
  color: ${Palette.primary};
  padding: 0 6rem;
  & a {
    color: ${Palette.primary};
  }
  & .footer1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  & .footer2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  & .footer3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    grid-column: 3/ 4;
    grid-row: 1 / 2;
  }
  & .footerLogo {
    font-family: 'Caveat Brush', cursive;
    font-size: 3rem;
    color: ${Palette.secondary};
  }
  & .footericons img {
    height: 1.5rem;
    width: auto;
    padding-right: 1.5rem;
    filter: saturate(0%);
  }
  & .footericons img:hover {
    filter: saturate(100%);
  }
  @media (max-width: 450px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    & .footerLogo {
      display: none;
    }
    & .footer2 {
      display: flex;
      flex-direction: row;
    }
    & .footer3 {
      display: flex;
      align-items: center;
      gap: 0.9rem;
    }
    & .footericons img {
      padding-right: 0;
      margin: 0 0.5rem;
    }
  }
  @media (max-width: 850px) {
    & .footericons img {
      padding: 0 1rem 0 0;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer1">
        <NavLink to="/">
          <h1 className="footerLogo">Swap it</h1>
        </NavLink>
      </div>
      <div className="footer2">
        <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        <NavLink className={'aboutNav'} to="/about">
          About
        </NavLink>
      </div>
      <div className="footer3">
        <p className="footerterms">Copyright © 2023 Swap it.</p>
        <p>All rights reserved.</p>
        <div className="footericons">
          <Anchor
            href="https://github.com/olanovich3?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328484/Social%20Media/1200px-Octicons-mark-github.svg_aajitx.png"
              alt="Github icon"
            />
          </Anchor>
          <Anchor href="https://instagram.com" target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328544/Social%20Media/1200px-Instagram_icon_g8vrbb.png"
              alt="Instagram icon"
            />
          </Anchor>
          <Anchor href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328926/Social%20Media/LinkedIn_logo_initials_ajo1vm.png"
              alt="Linkedin icon"
            />
          </Anchor>
          <Anchor href="https://facebook.com" target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328683/Social%20Media/1200px-Facebook_Logo__282019_29_cz1vfx.png"
              alt="Facebook icon"
            />
          </Anchor>
          <Anchor href="https://twitter.com" target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328794/Social%20Media/2491px-Twitter-logo.svg_lj87qt.png"
              alt="Twitter icon"
            />
          </Anchor>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
