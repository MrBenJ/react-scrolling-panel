import React from 'react';
import { css } from '@emotion/core';

export default function File(props) {
  const { name, ...rest } = props;

  const style = css`
    font-size: .8rem;
    padding: .2rem;
    transition: all .3s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      cursor: pointer;
    }
  `;

  return (
    <div {...rest} css={style}>
      {name}
    </div>
  );
}