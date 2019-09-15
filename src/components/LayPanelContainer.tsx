/** @jsx jsx */
import { ReactNode } from 'react';
import { css, jsx } from '@emotion/core';

type ContainerProps = {
  className?: string,
  children: ReactNode,
  direction: 'horizontal' | 'vertical'
};

function LayPanelContainer(props: ContainerProps) {
  const {
    children,
    className = '',
    direction = 'vertical'
  } = props;

  const parentCss = css`
    display: flex;
    width: 100%;
    flex: 0 1 auto;
    overflow: hidden;
  `;

  const baseCss = css`
    display: flex;
    flex-direction: ${direction === 'vertical' ? 'column' : 'row'};
    flex: 1;
  `;

  return (
      <div
        className={`${className}`.trim()}
        css={parentCss}>
        <div css={baseCss}>
          {children}
        </div>
      </div>
  );
}

export default LayPanelContainer;