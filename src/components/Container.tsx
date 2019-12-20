import { ReactNode } from 'react';
import { css } from '@emotion/core';

export type ContainerProps = {
  children: ReactNode,
  direction: 'horizontal' | 'vertical'
};

function Container(props: ContainerProps) {
  const {
    children,
    direction = 'vertical',
    ...rest
  } = props;

  const parentCss = css`
    display: flex;
    width: 100%;
    height: 100%;
    flex: 0 1 auto;
    overflow: hidden;
    max-height:100%;
  `;

  const baseCss = css`
    display: flex;
    flex-direction: ${direction === 'vertical' ? 'column' : 'row'};
    flex: 1;
  `;

  return (
      <div
        {...rest}
        css={parentCss}>
        <div css={baseCss}>
          {children}
        </div>
      </div>
  );
}

export default Container;