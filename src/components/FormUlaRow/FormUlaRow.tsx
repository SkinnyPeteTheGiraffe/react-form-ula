import * as React from 'react';
import {FC, ReactNode} from "react";
import { breakpoints } from '../../utils'
import styled from 'styled-components'

type columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface FormUlaRowProps {
  justify?: string,
  gutter?: number,
  children: ReactNode | ReactNode[],
  flexWrap: string,
  xs?: columns,
  sm?: columns,
  md?: columns,
  lg?: columns,
  xl?: columns
}

const FormRow = styled.div`
  display: flex;
  flex-wrap: ${(props: FormUlaRowProps) => props.flexWrap || 'nowrap'}
  justify-content: ${(props: FormUlaRowProps) => props.justify || 'center'};
  .form-ula-input-container {
    .form-ula-input {
      margin: ${(props: FormUlaRowProps) => (props.gutter || 1) / 2}rem;
    }
    ${(props: FormUlaRowProps) => props.xs && `
      ${breakpoints.xs} {
        width: ${(props.xs / 12) * 100}%;
      }
    `}
    ${(props: FormUlaRowProps) => props.sm && `
      ${breakpoints.sm} {
        width: ${(props.sm / 12) * 100}%;
      }
    `}
    ${(props: FormUlaRowProps) => props.md && `
      ${breakpoints.md} {
        width: ${(props.md / 12) * 100}%;
      }
    `}
    ${(props: FormUlaRowProps) => props.lg && `
      ${breakpoints.lg} {
        width: ${(props.lg / 12) * 100}%;
      }
    `}
    ${(props: FormUlaRowProps) => props.xl && `
      ${breakpoints.xl} {
        width: ${(props.xl / 12) * 100}%;
      }
    `}
     ${(props: FormUlaRowProps) => !props.xs && !props.sm && !props.md && !props.lg && !props.xl && `
      ${breakpoints.md} {
        width: ${props.children && Array.isArray(props.children) ? 100 / props.children.length : 100}%;
      }
    `}
  }
`;

export const FormUlaRow: FC<FormUlaRowProps> = (props: FormUlaRowProps) => {
  const { children } = props;
  return (
    <FormRow {...props}>
      {children}
    </FormRow>
  );
};
