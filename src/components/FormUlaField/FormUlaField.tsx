import * as React from 'react';
import {FC} from 'react';
import styled from 'styled-components';
import { materialUla } from './styles/materialUla';
import {Color} from "csstype";

type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type styles = 'material:outline';

export type FormUlaFieldProps = {
  type?: string,
  name?: string,
  backgroundColor?: Color,
  borderColor?: Color,
  rounded?: sizes,
  sizeVariant?: sizes,
  styleVariant?: styles,
  placeholder?: string,
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
  padding: 0.25rem 1.125rem;
  background-color: ${(props: FormUlaFieldProps) => props.backgroundColor ? props.backgroundColor : '#e8e8e8'};
  height: ${(props: FormUlaFieldProps) => props.sizeVariant ? getSizeVariant(props.sizeVariant) : 'auto'};
  border-radius: ${(props: FormUlaFieldProps) => props.rounded ? getRadiusVariant(props.rounded) : 0};
  ${(props: FormUlaFieldProps) => props.styleVariant &&
    props.styleVariant === "material:outline" && materialUla.material.outline(props)
  }
`;

export const FormUlaField: FC<FormUlaFieldProps> = (props: FormUlaFieldProps) => {
  return (
    <InputContainer className="form-ula-input-container">
      <StyledInput className="form-ula-input" {...props}/>
    </InputContainer>
  );
};
