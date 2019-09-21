import React from 'react';
import { css } from '@emotion/core';

const style = css`
  height: 100%;
  .video {
    position: relative;
    background-image: url('https://media.giphy.com/media/wzF9L6ENj1pHG/giphy.gif');
    background-size: cover;
    background-position: 50% 50%;
    height: 100%;
  }
  .menubar {
    position: absolute;
    bottom: 0;
    display: flex;
    background-color: rgba(.2, .2, .2, .6);
    height: 2rem;
    width: 100%;
  }

  .button {
    padding: .5rem 1rem;
    transition: all .7s;
    &:hover {
      background-color: rgba(.2, .2, .2, .4);
      cursor: pointer;
    }
  }

  .time {
    margin-left: .5rem;
    padding-top: .5rem;
    font-size: .9rem;
  }

`;
export default function AwesomeVideo(props) {
  return (
    <div css={style} {...props}>
      <div className="video">
        <div className="menubar">
          <i className="button fa fa-step-backward" />
          <i className="button fa fa-pause" />
          <i className="button fa fa-step-forward" />
          <div className="time">
            4:33 / 16:23:14
          </div>
        </div>
      </div>
    </div>
  );
}