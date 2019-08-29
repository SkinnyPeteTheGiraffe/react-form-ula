import * as React from 'react';
import {FC} from 'react';
import styled from 'styled-components';

type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextFieldProps = {
  type?: string,
  name?: string,
  rounded?: sizes,
  sizeVariant?: sizes,
  value?: string
}

const getRadiusVariant = (variant: sizes) => {
  switch (variant) {
    case "xs":
      return '0.25rem';
    case "sm":
      return '0.5rem';
    case "md":
      return '0.75rem';
    case "lg":
      return '1rem';
    case "xl":
      return '1.125rem';
    default:
      return 0;
  }
};

const getSizeVariant = (variant: sizes) => {
  switch (variant) {
    case "xs":
      return '0.9rem';
    case "sm":
      return '1rem';
    case "md":
      return '1.125rem';
    case "lg":
      return '1.5rem';
    case "xl":
      return '2rem';
    default:
      return 'auto';
  }
};
const InputContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  height: ${(props: TextFieldProps) => props.sizeVariant ? getSizeVariant(props.sizeVariant) : 'auto'};
  border-radius: ${(props: TextFieldProps) => props.rounded ? getRadiusVariant(props.rounded) : 0};
`;

export const FormUlaField: FC<TextFieldProps> = (props: TextFieldProps) => {
  return (
    <InputContainer className="form-ula-input-container">
      <StyledInput className="form-ula-input" {...props}/>
    </InputContainer>
  );
};
