import { ReactNode } from 'react';
import { css } from '@emotion/core';

export type PanelProps = {
  size: number,
  children: ReactNode
};

export default function Panel(props: PanelProps) {
  const {
    size = 1,
    children,
    ...rest
  } = props;

  const style = css`
    flex: ${size};
    overflow: auto;
  `;

  return (
    <div {...rest} css={style}>
      {children}
    </div>
  );
}