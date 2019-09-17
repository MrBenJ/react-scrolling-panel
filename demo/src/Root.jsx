import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Container, Panel } from 'react-blockpanel';
import { css } from '@emotion/core';
import {
  LiveProvider,
  LiveEditor,
  // LiveError,
  LivePreview
} from 'react-live';

import AgileBoard from './data/AgileBoard.json';
import FullscreenLayout from './component/layout/FullscreenLayout';
import SwimlaneCard from './component/SwimlaneCard';

const EXAMPLE_CODE =
`
<Container direction="vertical">
  <Panel
    className="section-split-window"
    size={1}
  >
    Hello!
  </Panel>
  <Panel
    className="section-split-window"
    size={1}
  >
    Hi there
  </Panel>
</Container>
`

function Root() {
  const style = css`
    background-color: smokewhite;

    .flex-centered {}


    .section-intro {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: teal;
    }

    .section-example-swimlane {
      background-color: lightblue;

      .swimlane-sidebar {
        padding: 1.8rem;
        max-width: 15rem;
      }

      .swimlane {
        padding: 0 1rem;
      }

      .swimlane-title {
        margin: 0;
        padding: 1rem;
        width: 100%;
        background-color: lightblue;
        font-size: 1rem;
        text-align: center;
        position: sticky;
        top: 0;
        box-shadow: 0.1rem 0.1rem 0.9rem 0rem rgba(0,0,0,.5);
      }

    }

    .section-split {
      background-color: #011627;
      color: whitesmoke;
    }

    .section-split-window {
      padding: 1rem;
    }


  `;
  return (
    <div css={style}>
      <FullscreenLayout className="section-intro">
        <div className="intro-content">
          <h1>react-blockpanel</h1>
          <p>Create scrollable window-like experiences with just 2 lightweight components!</p>
          <div>A Quick demonstration</div>
        </div>
      </FullscreenLayout>
      <FullscreenLayout className="section-example-swimlane">
        <Container direction="horizontal">
          <Panel size={2} className="swimlane-sidebar">
            <div className="swimlane-sidebar-content">
              With react-blockpanel, you can quickly create flexbox-based responsive layouts with individual panels that scroll, all based on the content inside.
            </div>
          </Panel>
          <Panel size={1}>
            <div className="swimlane">
              <p className="swimlane-title">Todo</p>
              {AgileBoard.todo.map( (props, idx) =>
                <SwimlaneCard {...props} key={idx}/>
              )}
            </div>
          </Panel>
          <Panel size={1}>
            <div className="swimlane">
              <p className="swimlane-title">In Progress</p>
              {AgileBoard.in_progress.map((props, idx) =>
                <SwimlaneCard {...props} key={idx} />
              )}
            </div>
          </Panel>
          <Panel size={1}>
            <div className="swimlane">
              <p className="swimlane-title">Qa Todo</p>
              {AgileBoard.qa_todo.map((props, idx) =>
                <SwimlaneCard {...props} key={idx} />
              )}
            </div>
          </Panel>
          <Panel size={1}>
            <div className="swimlane">
              <p className="swimlane-title">Qa In Progress</p>
              {AgileBoard.qa_in_progress.map((props, idx) =>
                <SwimlaneCard {...props} key={idx} />
              )}
            </div>
          </Panel>
          <Panel size={1}>
            <div className="swimlane">
              <p className="swimlane-title">Done</p>
              {AgileBoard.done.map((props, idx) =>
                <SwimlaneCard {...props} key={idx} />
              )}
            </div>
          </Panel>
        </Container>
      </FullscreenLayout>
      <FullscreenLayout className="section-split">
        <LiveProvider code={EXAMPLE_CODE} scope={{ Panel, Container }}>
          <Container direction="horizontal">
            <Panel size={1}>
              <Container direction="vertical">
                <Panel
                  className="section-split-window"
                  size={1}
                >
                  <div className="section-split-explanation">
                    Seamlessly build desktop app-like user experiences by nesting elements together
                  </div>
                </Panel>
                <Panel
                  className="section-split-window"
                  size={4}
                >
                  <LiveEditor />
                </Panel>
              </Container>
            </Panel>
            <Panel
              className="section-split-window"
              size={1}
            >
            <LivePreview style={{ height: "100%" }} />
              { /*

              */}
            </Panel>
          </Container>
        </LiveProvider>
      </FullscreenLayout>
    </div>
  );
}

export default hot(Root);
