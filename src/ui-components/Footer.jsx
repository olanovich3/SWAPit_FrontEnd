import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Palette from '../styles/Palette';
import Anchor from './Anchor';
import DivFlex from './DivFlex';

const FooterStyled = styled.footer`
  height: 20vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #fafafa;
  color: ${Palette.primary};
  padding: 2rem;
  & .footergrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .footerLogo {
    font-family: 'Caveat Brush', cursive;
    color: #07689f;
    font-size: 2.5rem;
  }
  & img {
    height: 2rem;
    width: auto;
  }
  & a {
    color: ${Palette.primary};
    transition: all 0.2s ease-in-out;
  }
  & a:hover {
    color: ${Palette.highlight};
  }
  & p {
    color: #505050;
    font-size: 13px;
  }
  & .aboutNav {
  }
  & .footericons {
    width: 20px;
    height: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footergrid">
        <DivFlex justify={'flex-start'}>
          <NavLink to="/">
            <h1 className="footerLogo">Swap it</h1>
          </NavLink>
        </DivFlex>
        <DivFlex>
          <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink className={'aboutNav'} to="/about">
            About
          </NavLink>
        </DivFlex>
        <DivFlex>
          <p className="footerterms">Copyright © 2023 Swap it. All rights reserved.</p>

          <p>Contact us:</p>
          <Anchor
            href="https://github.com/olanovich3?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footericons"
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328484/Social%20Media/1200px-Octicons-mark-github.svg_aajitx.png"
              alt="Github icon"
            />
          </Anchor>
          <Anchor href="https://instagram.com" target="_blank" rel="noreferrer">
            <img
              className="footericons"
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328544/Social%20Media/1200px-Instagram_icon_g8vrbb.png"
              alt="Instagram icon"
            />
          </Anchor>
          <Anchor href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img
              className="footericons"
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328926/Social%20Media/LinkedIn_logo_initials_ajo1vm.png"
              alt="Linkedin icon"
            />
          </Anchor>
          <Anchor href="https://facebook.com" target="_blank" rel="noreferrer">
            <img
              className="footericons"
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328683/Social%20Media/1200px-Facebook_Logo__282019_29_cz1vfx.png"
              alt="Facebook icon"
            />
          </Anchor>
          <Anchor href="https://twitter.com" target="_blank" rel="noreferrer">
            <img
              className="footericons"
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328794/Social%20Media/2491px-Twitter-logo.svg_lj87qt.png"
              alt="Twitter icon"
            />
          </Anchor>
        </DivFlex>
      </div>
    </FooterStyled>
  );
};

export default Footer;
