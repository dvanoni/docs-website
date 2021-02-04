/* eslint-disable react/prop-types */
import React from 'react';
import { Global, css } from '@emotion/core';

const wrapPageElement = ({ element }) => (
  <>
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
      `}
    />
    {element}
  </>
);

export default wrapPageElement;
