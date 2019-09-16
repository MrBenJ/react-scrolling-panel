import React from 'react';
import { css } from '@emotion/core';
export default function FullscreenLayout({ children, ...rest }) {
  const style = css`
    display: flex;
    height: 100vh;
    width: 100vw;
  `;
  return (
    <div {...rest} css={style}>
      {children}
    </div>
  );
}