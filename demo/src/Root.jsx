import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Container, Panel } from 'react-blockpanel';
import { css } from '@emotion/core';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
import FullscreenLayout from './component/layout/FullscreenLayout';
import SwimlaneCard from './component/SwimlaneCard';
import AwesomeVideo from './component/AwesomeVideo';
import VideoComment from './component/VideoComment';
import SuggestedVideo from './component/SuggestedVideo';
import File from './component/File';
import CodeSnippet from './component/CodeSnippet';

import AgileBoard from './data/AgileBoard.json';
import VideoComments from './data/VideoComments.json';
import VideoSuggestions from './data/VideoSuggestions.json';
import FileList from './data/FileList.json';

const EXAMPLE_CODE =
`
<Container direction="vertical">
  <Panel size={1}>
    { /* Bobbing head cat video is in this first panel*/}
    <AwesomeVideo />
  </Panel>
  <Panel size={1}>
    { /* Nested container splits the bottom panel here! */}
    <Container direction="horizontal">
      <Panel size={2}>
        { VideoComments.map( data => (
          <VideoComment
            key={data.comment}
            user={data.user}
            comment={data.comment} />
          )
        )}
      </Panel>
      <Panel size={3}>
        { VideoSuggestions.map( data => (
          <SuggestedVideo
            key={data.title}
            title={data.title}
            img={data.img} />
          )
        )}
      </Panel>
    </Container>
  </Panel>
</Container>
`

const SECOND_EXAMPLE_CODE =
`
  <Container direction="horizontal">
    <Panel className="padded-panel" size={1}>
      Leave your layout worries in the past, and start building scrollable
      user interfaces that can be as simple or complex as your heart desires!
      <br />
      Experiement, play, and enjoy every part of the process :)
      <br />
      <br />
      Created with lots of {\`<3 <3 <3\`} and humor from <br/>
      <a target="_blank" rel="noreferrer nofollow" href="https://www.github.com/MrBenJ">
        Ben Junya <i className="fa fa-github" />
      </a><br/>
      <a target="_blank" rel="noreferrer nofollow" href="https://www.twitter.com/MrBenJ5">
        Follow me on Twitter! <i style={{ color: 'blue' }} className="fa fa-twitter" />
      </a><br/>
      <a target="_blank" rel="noreferrer nofollow" href="https://www.medium.com/@MrBenJ">
        Read my Medium Articles: <i style={{ color: 'green' }} className="fa fa-medium" />
      </a><br/>
      <a target="_blank" rel="noreferrer nofollow" href="https://modernjsbyexample.net/">
        Check out my awesome (free) book on JS! <i className="fa fa-book" />
      </a><br/>
    </Panel>
    <Panel className="padded-panel" size={1}>
      Install with the following command:
      <CodeSnippet canCopy={true}>
        npm install react-blockpanel --save
      </CodeSnippet>
      <br/>
      Or with yarn:
      <CodeSnippet canCopy={true}>
        yarn add react-blockpanel
      </CodeSnippet>
      <p>
        View source on
        <a target="_blank" rel="noreferrer nofollow" href="https://www.github.com/MrBenJ/react-blockpanel">
          Github <i className="fa fa-github" />
        </a>
      </p>
    </Panel>
  </Container>
`;

function Root() {
  const style = css`
    background-color: smokewhite;

    textarea:focus {
      outline: none;
    }

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

    .padded-panel {
      padding: 1rem;
    }

    .section-scoped {
      background-color: #DBE4EE;
      flex-direction: column;

      a, a:visited {
        color: black;
        text-decoration: underline;
      }
    }

    .scope-parent {
      margin: 0 auto;
      height: 50vh;
      width: 90%;
      transition: all .8s;
    }

    .scope-container {
      background-color: white;

      box-shadow: -6px .6px .2px -3px rgba(100, 100, 100, .1);
      transition: all .8s;

      border: .1rem solid #DFDFDF;


    }

    .scope-sidebar {
      background-color: #054A91;
      color: whitesmoke;
      padding: .8rem;
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
              With react-blockpanel, you can quickly create flexbox-based responsive layouts with individual panels that scroll based on the length of the content.
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
        <LiveProvider code={EXAMPLE_CODE} scope={{
          Panel,
          Container,
          AwesomeVideo,
          VideoComment,
          VideoComments,
          SuggestedVideo,
          VideoSuggestions }}>
          <Container direction="horizontal">
            <Panel size={1}>
              <Container direction="vertical">
                <Panel
                  className="padded-panel"
                  size={1}
                >
                  <div className="section-split-explanation">
                    Seamlessly build windowed panels semantically. Nest {`<Container>`}'s inside a {`<Panel>`} to build simple, but complex looking user experiences.
              </div>
                </Panel>
                <Panel size={4}>
                  <LiveEditor />
                </Panel>
                <Panel size={2}>
                  <LiveError />
                </Panel>
              </Container>
            </Panel>
            <Panel size={1}>
              <LivePreview style={{ height: "100%" }} />
            </Panel>
          </Container>
        </LiveProvider>
      </FullscreenLayout>
      <FullscreenLayout className="section-scoped">
        <LiveProvider code={SECOND_EXAMPLE_CODE} scope={{
          Panel,
          Container,
          CodeSnippet
        }}>
          { /* TODO: Don't use an inline style here. I am lazy */}
          <h2 style={{ textAlign: 'center' }}>Scoped to container for maximum flexibility</h2>
          <div className="scope-parent">
            <Container className="scope-container" direction="horizontal">
              <Panel
                className="scope-sidebar"
                size={1}>
                  {FileList.map( (data, i) => (
                    <File key={i} name={data.name} />
                  ))}
              </Panel>
              <Panel size={5}>
                <LiveEditor />
              </Panel>
            </Container>
          </div>
          <div>
            <LivePreview />
          </div>
        </LiveProvider>
      </FullscreenLayout>
    </div>
  );
}

export default hot(Root);
