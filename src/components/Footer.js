import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import selfie from '../images/me.jpg';

const css = {
  selfie: {
    borderRadius: '100%',
    display: 'inline-block',
    width: '4rem'
  },
  wrapper: {
    backgroundColor: '#172a3a'
  },
  container: {
    margin: '4rem 0',
    padding: '0 1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: "#ffffff"
  },
  p: {
    margin: '0.5rem 0'
  }
};

const Footer = props => {
  const renderSelfie = get(props, 'location.pathname') !== '/';
  return (
    <footer css={css.wrapper}>
      <div css={css.container}>
        {renderSelfie &&
          <img css={css.selfie} src={selfie} title="headforcode" />}
        <p css={css.p}>
          follow us on <a href="https://twitter.com/headforcode/">twitter</a>
        </p>
        <p css={css.p}>
        email us at <a href="mailto:info@headforcode.com">info@headforcode.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;