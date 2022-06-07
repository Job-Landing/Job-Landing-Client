# React Starter Quick Setup

## Notes
Help user to quick start the React project

## UI library
[Material UI](https://mui.com/)

## Installation

- git clone the project
- navigate to the folder
- run `npm start && npm install`(you can also use `pnpm start && pnpm install` if you have `pnpm` install)

## [pnpm](https://pnpm.io/installation)
```
pnpm is an alternative package manager for Node.js.
It is a drop-in replacement for npm, but faster and more efficient.
```
```
pnpm install -g pnpm
brew install pnpm
```


## Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
import { FiUsers, FiUserPlus } from 'react-icons/fi';
<FiUsers className='nameOfTheClass'> </FiUsers>;
```

#### Current React Version

```
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-scripts": "4.0.0",
```

#### Alternative fix

.env file in the root
FAST_REFRESH=FALSE