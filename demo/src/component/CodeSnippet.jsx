import React, { useState } from "react";
import { css } from '@emotion/core';

import Prism from "@maji/react-prism";

function stripSpace(childrenStrings) {
  return childrenStrings
    .map(s => s.trim())
    .filter(Boolean)
    .join("\n");
}

export default function CodeSnippet(props) {
  const {
    language = 'bash',
    copyText = 'Copy Command',
    onCopyText = 'Copied!',
    copyDelay = 3000,
    canCopy = true,
    children,

  } = props;

  const [ copyState, setCopyState ] = useState(false);

  const style = css`
      padding: .5rem;
      border: .1rem solid #DFDFDF;
      border-radius: .4rem;
      background-color: black;
      color: #F5F8FC;

      .copy {
        color: white;
        font-size: .8rem;

        &:hover {
          cursor: pointer;
          text-decoration: ${copyState ? 'none' : 'underline'};
        }
      }
  `;

  const copySnippet = () => {
    const textToCopy = Array.isArray(children)
      ? children.join("\n")
      : children

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopyState(true);
        setTimeout(() => {
          setCopyState(false);
        }, copyDelay);
      });
    }
  }

  return (
    <div css={style}>
      <Prism language={language}>
        {Array.isArray(children)
          ? this.stripExtraneousSpaces(children)
          : children.trim()
        }
      </Prism>
      { canCopy && (
        <span className="copy" onClick={copySnippet}>
          {copyState
            ? onCopyText
            : copyText
          }
        </span>
      )}
    </div>
  );
}
