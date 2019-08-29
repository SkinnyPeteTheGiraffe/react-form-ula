# react-form-ula [ In Development ]

> A modern, customizable, intuitive React form library. Allowing the painless 
creation of forms in React quickly and easily.

[![NPM](https://img.shields.io/npm/v/react-form-ula.svg)](https://www.npmjs.com/package/react-form-ula) [![JavaScript Style Guide](https://img.shields.io/badge/style-standard-green?logo=appveyor&style=plastic)](https://standardjs.com)

## Install

```bash
npm install --save react-form-ula
```

## Usage

```tsx
import * as React from 'react'

import {FormUla} from "./components/FormUla";
import {FormUlaField} from "./components/FormUlaField";
import {FormUlaRow} from "./components/FormUlaRow";

class Example extends React.Component {
  render () {
    return (
      <FormUla onSubmit={() => {
        alert('Pressed Submit');
      }} onChange={() => {
        console.log('Changed Input')
      }}>
        <FormUlaRow xs={12} lg={4} flexWrap="wrap">
          <FormUlaField name="email" type="email" rounded="xl" sizeVariant="xl" />
          <FormUlaField name="password" type="password" />
        </FormUlaRow>
      </FormUla>
    )
  }
}
```

## License

MIT © [SkinnyPeteTheGiraffe](https://github.com/SkinnyPeteTheGiraffe)
