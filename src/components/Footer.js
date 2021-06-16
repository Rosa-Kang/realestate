import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-bottom: 24px;
  padding: 24px;
  color: #fff;

  p {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  .heading {
    margin-bottom: 24px;
    font-size: 24px;
  }

  .text {
    margin-bottom: 24px;
    font-size: 20px;
  }
`;

const InputAreas = styled.div`
  .footer-input {
    padding: 8px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 18px;
    margin-bottom: 16px;
    border: 1px solid #fff;
  }
`;

const FooterLink = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
`;

const LinkWrapper = styled.div`
  display: flex;

  .footer-link-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
  }

  .footer-link-items h2 {
    margin-bottom: 16px;
  }

  .footer-link-items > h2 {
    color: #fff;
  }

  .footer-link-items a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
  }

  .footer-link-items a:hover {
    color: #e9e9e9;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  .social-media {
    max-width: 1000px;
    width: 100%;
  }
`;

const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .social-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .website-rights {
    color: #fff;
    margin: 12px 0px 0px 63px;
  }
`;

const FooterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-input {
    margin-top: 1rem;
  }

  .footer-input::placeholder {
    color: #b1b1b1;
  }
`;

function Footer() {
  return (
    <Container>
      <Subscription>
        <p className="heading">Let's find your Dream Home</p>
        <p className="text">You can unsubscribe at any time.</p>
        <InputAreas>
          <FooterForm>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Contact us</Button>
          </FooterForm>
        </InputAreas>
      </Subscription>
      <FooterLink>
        <LinkWrapper>
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </LinkWrapper>
        <LinkWrapper>
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </LinkWrapper>
      </FooterLink>
      <SocialMedia>
        <SocialMediaWrap>
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              ELIXR <i class="fab fa-squarespace"></i>
            </Link>
          </div>
          <small class="website-rights">ELIXR © 2021</small>
        </SocialMediaWrap>
      </SocialMedia>
    </Container>
  );
}

export default Footer;
