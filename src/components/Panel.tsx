/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx, css } from '@emotion/core';

type PanelProps = {
  size: number,
  className?: string,
  children: ReactNode
};

export default function Panel(props: PanelProps) {
  const { size = 0, className = '', children } = props;
  const style = css`
    flex: ${size};
    overflow: auto;
    min-height: 100%;
    max-height: 100%;
  `;

  return (
    <div className={className} css={style}>
      {children}
    </div>
  );
}