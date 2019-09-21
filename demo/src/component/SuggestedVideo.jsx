import React from 'react';
import { css } from '@emotion/core';

export default function SuggestedVideo(props) {
  const { img, title, ...rest } = props;
  const style = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: all .3s;

    padding: .8rem .5rem;


    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, .3);
    }

    .vid {
      position: relative;
      background-image: url(${img});
      background-size: cover;
      background-position: 50% 50%;
      height: 4rem;
      width: 9rem;
    }

    .fa.fa-play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgba(255,255,255, .8);
    }

    .title {
      font-size: .8rem;
      margin-top: 1.4rem;
      margin-right: 1rem;
    }
`;
  return (
    <div {...rest} css={style}>
      <div className="vid">
        <i className="fa fa-play" />
      </div>
      <div className="title">
        {title}
      </div>
    </div>
  )
}