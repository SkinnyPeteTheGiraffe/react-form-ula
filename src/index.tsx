/**
 * @class ExampleComponent
 */

import * as React from 'react'

import styles from './styles.css'
import {FormUla} from "./components/FormUla";
import {FormUlaField} from "./components/FormUlaField";
import {FormUlaRow} from "./components/FormUlaRow";

export type Props = { text: string }

export default class ExampleComponent extends React.Component<Props> {
  render() {
    return (
      <div className={styles.test}>
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
      </div>
    )
  }
}
