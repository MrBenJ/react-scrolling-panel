import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Container, Panel } from 'react-blockpanel';
import { css } from '@emotion/core';

import FullscreenLayout from './component/layout/FullscreenLayout';

function Root() {
  const style = css`
    background-color: smokewhite;

    .section-intro {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: teal;
    }

    .section-example-swimlane {
      background-color: lightblue;

      .sidebar {
        padding: 1.8rem;
      }

      .swimlane {
        padding: .9rem;
      }

      .swimlane-title {
        font-size: 1rem;
        text-align: center;
      }

      .card {

      }


    }
  `;
  return (
    <div css={style}>
      <FullscreenLayout className="section-intro">
        <div className="intro-content">
          <h1>react-blockpanel</h1>
          <p>Create scrollable window-like experiences with just 2 lightweight components!</p>
        </div>
      </FullscreenLayout>
      <FullscreenLayout className="section-example-swimlane">
        <Container direction="horizontal">
          <Panel size={2}>
            <div className="sidebar">
              Sidebar
            </div>
          </Panel>
          <Panel size={1}>
            <div className="swimlane">
              <p className="swimlane-title">Todo</p>
            </div>
          </Panel>
          <Panel size={1}>
            <div className="swimlane">
              <p className="swimlane-title">In Progress</p>
            </div>
          </Panel>
          <Panel size={1}>

            <div className="swimlane">
              <p className="swimlane-title">Qa Todo</p>
            </div>
          </Panel>
          <Panel size={1}>
            <div className="swimlane">
              <p className="swimlane-title">Qa In Progress</p>
            </div>
          </Panel>
          <Panel size={1}>
            <div className="swimlane">
              <p className="swimlane-title">Done</p>
            </div>
          </Panel>
        </Container>
      </FullscreenLayout>
    </div>
  );
}

export default hot(Root);
