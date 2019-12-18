import React from 'react'
import { Global, css } from '@emotion/core'

const globalCSS = css`
  :root {
    --calendar-header: #c54e4d;
    --calendar-background: #efefef;
    --todo-font-color: #343434;
    --task-background: #f1f1f1;
  }
`

export function GlobalStyle() {
  return <Global styles={globalCSS} />
}
