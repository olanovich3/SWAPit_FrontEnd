import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  height: 20vh;
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-wrap: wrap;
  background-color: #fafafa;
  color: black;
  padding: 1rem 7rem;
`;

const Footer = ({ justify, align }) => {
  return (
    <FooterStyled justify={justify} align={align}>
      <div className="footer-container">
        <div className="navlinks">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/register">REGISTER</NavLink>
            </li>
            <li>
              <NavLink to="/login">LOGIN</NavLink>
            </li>
            <li>
              <NavLink to="/profile">PROFILE</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li>
              <a
                href="https://about.wallapop.com/en/legal-terms-and-conditions/"
                target="_blank"
                rel="noreferrer"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="https://about.wallapop.com/en/privacy-policy/"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <p>Copyright © 2023 SWAPit. All rights reserved.</p>
        <div className="contact">
          <p>Contact us:</p>
          <ul>
            <li>
              <a
                href="https://github.com/olanovich3?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328484/Social%20Media/1200px-Octicons-mark-github.svg_aajitx.png"
                  alt="Github icon"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <img
                  src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328926/Social%20Media/LinkedIn_logo_initials_ajo1vm.png"
                  alt="Linkedin icon"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="socialmedia">
          <ul>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328544/Social%20Media/1200px-Instagram_icon_g8vrbb.png"
                  alt="Instagram icon"
                />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img
                  src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328683/Social%20Media/1200px-Facebook_Logo__282019_29_cz1vfx.png"
                  alt="Facebook icon"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img
                  src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679328794/Social%20Media/2491px-Twitter-logo.svg_lj87qt.png"
                  alt="Twitter icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
