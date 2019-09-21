import React from 'react';
import { css } from '@emotion/core';

const ICON_COLORS = [
  '#8DAA9D',
  '#522B47',
  '#7B0828',
  '#B47AEA',
  '#8DAA9D',
  '#8B80F9',
  '#6CD4FF',
  '#C7CB85',
  '#E7A977',
  '#EBBE9B'
]

export default function VideoComment(props) {
  const { user, comment, ...rest } = props;
  const letter = user[0].toUpperCase();
  const colorIdx = Math.floor(Math.random() * ICON_COLORS.length);

  const style = css`
  display: flex;
  flex-direction: column;

  width: 100%;

  .user-container {
    display: flex;
    margin-top: 1rem;
    margin-bottom: .5rem;
  }
  .icon {
    position: relative;
    background-color: ${ICON_COLORS[colorIdx]};
    color: #ffffff;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 100%;

    span {
      font-size: 1rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .username {
    text-align: left;

    margin-top: .2rem;
    margin-left: .3rem;
    font-size: .8rem;
    font-weight: 800;
  }

  .comment {
    font-size: .8rem;
  }
`;
  return (
    <div {...rest} css={style}>
      <div className="user-container">
        <div className="icon">
          <span>{letter}</span>
        </div>
        <div className="username">{user}</div>
      </div>

      <div className="comment">{comment}</div>
    </div>
  );
}