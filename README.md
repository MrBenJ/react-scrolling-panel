# react-scrolling-panel
### A quick and easy way to creating scrolling panels in React

Many popular web applications take the full height of the window and have "tiles" or "panels" that scroll independently of one another. Sites like YouTube, Twitter, Google Analytics, Robinhood, etc. all use independent scrolling content, whether it's just a sidebar on the left hand side, or a bunch of small windows showing stock trading activity, these views can be indimidating to write with one's own CSS.

I created `react-scrolling-panel` to streamline the experience of making multiple independently scrolling elements that take up the full width and height of the parent, so I don't have to hunt for which one div needs `overflow: auto;` or `overflow: hidden;` anymore. The layout of the page is built semantically, composed with just 2 React Components: `<Container>` and `<Panel>`.

Inspired by using awesome flexbox frameworks and teachings of [Grayson Null](https://github.com/GraysonNull).

## Quick Demo
Insert image here

```js
import React from 'react';
import { Container, Panel } from 'react-scrolling-panel';

import SideBarItem from './components/SideBarItem';
import Post from './components/Post';

export default function IndexPage(props) {
  const { longListOfLinks, longListOfPosts } = props;
  return (
    <div style={{ display: 'flex' }}>
      <Container direction="horizontal">
        <Panel flex={1}>
          Main Navigation
          {longListOfLinks.map( link => <SideBarItem link={link} />)}
        </Panel>
        <Panel flex={3}>
          {longListOfPosts.map( post => <Post data={post} />)}
        </Panel>
      </Container>
    </div>
  )
}
```

## More Robust Demos
Insert robust demos and clones of popular site layouts here

## Prerequisites

* Node v8+
* React v16.3+

**Hey Typescript fans!**  Typescript definitions are included!

## Installation
Install just like any other package:
```bash
$ npm install react-scrolling-panel
```

Or use yarn!
```bash
$ yarn add react-scrolling-panel
```

## Usage

**REQUIRED USAGE INFORMATION**
* The parent element of `<Container>` must have `display: flex;` in its styling.
* The parent element of `<Container>` must have a `max-height` rule set to a fixed value or `100%`.
  * For full browser height/width layouts, use `max-height: 100vh` :)
* `<Panel>` element must be a direct child of a `<Container>`.
* The first `<Container>` element will take the full height and width of its parent element.

### <Container>

The `<Container>` component defines the direction of how the panels are laid out, similar to `flex-direction`. They can have as many `<Panel>` elements as direction children as desired.

Props:
* `direction`: `string` - Defaults to `'vertical'` - one of `'horizontal'` or `'vertical'` - sets the direction of the children panels to stack horizontally or vertically.

Any other valid HTML properties you set on `<Container>` like `className`, `id`, `aria-*`, or `data-*` attributes will be passed in respectively.

### <Panel>

The `<Panel>` component houses content, and can be filled with whatever you like. `<Panel>` will not scroll unless its content is taller or wider than its flexbox alloted size.

Props:
* `size` - `number` - Defaults to `1` - Controls the size via "weight." This number is translated into the value for the `flex` CSS property.

Just like `<Container>`, any other valid HTML properties you set on `<Panel>` like `className`, `id`, `aria-*`, or `data-*` attributes will be passed in respectively.

## Advanced Nested Layouts

Because the library is so light and agnostic of the parent element's attributes, `<Panel>` componets can nest `<Container>` components as children, allowing designers and developers to create beautiful, yet high tech/modern looking user interfaces with semantic JSX.

```js
// Insert super cool example of copying a stock trading platform here
```
