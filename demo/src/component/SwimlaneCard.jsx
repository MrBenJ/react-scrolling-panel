import React from 'react';
import { css } from '@emotion/core';

/**
 * Swimlane card component that displays information about
 * a basic task
 *
 * @param {Object} props - Component Props
 * @param {String} props.title - Card title
 * @param {String} props.description - Short description of the task
 * @param {Number} props.priority - 0 -3 scale of priority
 */
export default function SwimlaneCard({ title, description, priority}) {
  const PRIORITY_COLORS = ['#CC0000', '#00CC00', '#000CCC', '#FFFFFF'];
  const style = css`
    margin: .8rem;
    padding: .8rem;
    font-size: 1rem;
    padding-bottom: 1.2rem;
    border-bottom: .2rem solid ${PRIORITY_COLORS[priority]};
    background-color: #E1DCBF;
    border-radius: .4rem;
    box-shadow: 0 .2rem .5rem rgba(0,0,0,.5);
    transition: all .2s ease-in-out;

    &:hover {
      background-color: #F4FDBF;
      cursor: pointer;
      box-shadow: .2rem .3rem .8rem rgba(0,0,0,.5);
    }
    p {
      margin: 0;
      padding: 0;
    }
    .title {
      font-size: 1rem;
      padding-bottom: .5rem;
      text-align: center;
      border-bottom: .1rem solid rgba(0,0,0,.5);
    }

    .description {
      margin-top: .4rem;
      font-size: 0.8rem;
      max-height: 4rem;
      overflow: auto;
    }
  `;

  return (
    <div css={style}>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  )
}