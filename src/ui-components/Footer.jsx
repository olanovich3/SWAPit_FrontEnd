import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Palette from '../styles/Palette';
import Anchor from './Anchor';
import DivFlex from './DivFlex';

const FooterStyled = styled.footer`
  height: 20vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #fafafa;
  color: ${Palette.primary};
  padding: 2rem 15rem;
  & img {
    height: 2rem;
    width: auto;
  }
  & a {
    color: ${Palette.primary};
  }
  & a:hover {
    color: ${Palette.highlight};
  }
  & p {
    color: #505050;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <DivFlex gap={'3rem'}>
        <NavLink to="/"><img src="../../public/logo.svg" alt="Swapit logo" /></NavLink>
        <Anchor
          href="https://about.wallapop.com/en/legal-terms-and-conditions/"
          target="_blank"
          rel="noreferrer"
        >
          Terms and Conditions
        </Anchor>
        <Anchor
          href="https://about.wallapop.com/en/privacy-policy/"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </Anchor>
        <NavLink to="/about">About</NavLink>
      </DivFlex>
      <DivFlex justify={'space-between'}>
        <p>Copyright © 2023 SWAPit. All rights reserved.</p>
        <DivFlex gap={'2rem'}>
          <p>Contact us:</p>
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
        </DivFlex>
      </DivFlex>
    </FooterStyled>
  );
};

export default Footer;
