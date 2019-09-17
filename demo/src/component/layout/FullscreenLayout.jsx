import React from 'react';
import { css } from '@emotion/core';

/**
 * A layout component that expands the full height/width of the user's window.
 * Also adds display: flex;
 * @param {Object} props
 * @param {JSX} props.children - Children to render inside this layout
 */
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
