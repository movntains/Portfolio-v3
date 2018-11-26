import React, { Component } from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';
import media from '../styles/media';
import mixins from '../styles/mixins';
import Layout from '../components/Layout';
import Main from '../styles/Main';
import Section from '../styles/Section';
import Heading from '../styles/Heading';

const ContactContainer = styled(Section)`
  position: relative;
  min-height: 100vh;
`;

const ContactForm = styled.form`
  width: 80%;
  ${media.desktop`width: 100%;`};

  .hidden {
    display: none;
  }
`;

const NameEmailContainer = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
  ${media.desktop`
    flex-direction: column;
  `};
`;

const NameInput = styled.input`
  width: 45%;
  ${media.desktop`
    width: 100%;
    margin-bottom: 30px;
  `};
`;

const EmailInput = styled.input`
  width: 45%;
  ${media.desktop`width: 100%;`};
`;

const Message = styled.textarea`
  width: 100%;
  margin-bottom: 30px;
`;

const SubmitButton = styled.input`
  width: 50%;
  padding: 10px;
  border: 1px solid ${theme.colors.slate};
  font-weight: 700;
  color: ${theme.colors.teal};
  text-transform: uppercase;
  letter-spacing: 1px;
  ${media.tablet`width: 100%;`};

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.grey};
    color: ${theme.colors.offWhite};
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <Main>
          <ContactContainer>
            <Heading>Get in Touch</Heading>
            <ContactForm
              name="contact"
              method="POST"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <input type="text" name="bot-field" />
              </div>
              <NameEmailContainer>
                <NameInput
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
                <EmailInput
                  type="email"
                  name="_replyto"
                  id="email"
                  placeholder="E-mail"
                  required
                />
              </NameEmailContainer>
              <Message
                name="message"
                id="message"
                placeholder="Message"
                rows="10"
                required
              />
              <SubmitButton type="submit" value="Send" />
            </ContactForm>
          </ContactContainer>
        </Main>
      </Layout>
    );
  }
}

export default ContactPage;
