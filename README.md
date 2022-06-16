# @pronestor/react-zoom-pan-pinch

Super fast and light react Node.js package for zooming, panning and pinching html elements in easy way.

This is a fork of [react-zoom-pan-pinch](https://github.com/prc5/react-zoom-pan-pinch) originally created in order to fix [the issue with build errors because of missing source files](https://github.com/prc5/react-zoom-pan-pinch/issues/265).

## Documentation

[Storybook for `@pronestor/react-zoom-pan-pinch`](https://pronestoraps.github.io/react-zoom-pan-pinch/).

## Quick Start

### Installation

```shell
yarn add @pronestor/react-zoom-pan-pinch
```

or

```shell
npm install @pronestor/react-zoom-pan-pinch
```

### Usage

Basic usage:

```jsx
import {
  TransformComponent,
  TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";

export const SimpleExample = () => (
  <TransformWrapper>
    <TransformComponent>
      <img src="image.jpg" alt="test" />
    </TransformComponent>
  </TransformWrapper>
);
```

With controls:

```jsx
import {
  TransformComponent,
  TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";

export const ExampleWithZoomControls = () => (
  <TransformWrapper
    initialPositionX={200}
    initialPositionY={100}
    initialScale={1}
  >
    {({ zoomIn, zoomOut, ...rest }) => (
      <>
        <div className="tools">
          <button onClick={() => zoomIn()}>+</button>
          <button onClick={() => zoomOut()}>-</button>
        </div>
        <TransformComponent>
          <img src="image.jpg" alt="test" />
          <div>Example text</div>
        </TransformComponent>
      </>
    )}
  </TransformWrapper>
);
```

## License

MIT © [Pronestor](https://github.com/proNestorAps)
