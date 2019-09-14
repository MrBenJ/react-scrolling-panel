import React, { ReactNode } from 'react';
import { css } from '@emotion/core';

type LayPanelContextProps = {
  basePrefix: string,
  className?: string,
  children: ReactNode
};

export default function LayPanelContainer(props: LayPanelContextProps) {
  const { basePrefix, children, className } = props;
  const baseCss = css`
    .${basePrefix}-root {

    .${basePrefix}-flex {
        display: flex;
      }

      .${basePrefix}-flex-column {
        display: flex;
        flex-direction: column;
      }
      /* Creates flex-# class where # is value of "flex" up to a max of 12 */
      ${Array(12).map((_,i) =>
        `.${basePrefix}-flex${i} { flex: ${i};}`
      ).join(' ')}
    }
  `;
  return (
      <div className={`${className} ${basePrefix}-root`}>
      {children}
      </div>
  );
}
LayPanelContainer.defaultProps = {
  basePrefix: '__laypanel'
};
