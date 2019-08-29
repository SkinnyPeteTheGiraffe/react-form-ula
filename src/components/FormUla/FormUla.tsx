import * as  React from 'react';
import {FC, ReactNode} from "react";
import {FormUlaField} from "../FormUlaField";

export type FormUlaProps = {
  onSubmit: VoidFunction,
  onChange: VoidFunction,
  children: ReactNode
}
interface EnrichedChildren {
  onChange(): void,
  children?: React.ReactNode
}

const enrichElements = (children: ReactNode, onChange: VoidFunction) => (
  React.Children.map(children, child => {
    if (!React.isValidElement<EnrichedChildren>(child)) {
      return child
    }

    let elementChild: React.ReactElement<EnrichedChildren> = child
    if (child.props.children) {
      elementChild = React.cloneElement<EnrichedChildren>(elementChild, {
        children: enrichElements(elementChild.props.children, onChange),
      })
    }
    if (elementChild.type && elementChild.type['name'] === FormUlaField.name) {
      return React.cloneElement(elementChild, {
        onChange
      })
    } else {
      return elementChild
    }
  })
);

export const FormUla: FC<FormUlaProps> = (props: FormUlaProps) => {
  const { onSubmit, onChange, children } = props;
  const enrichedChildren = enrichElements(children, onChange);
  return (
    <form onSubmit={onSubmit}>
      {enrichedChildren}
      <button type="submit"> Submit </button>
    </form>
  );
};
