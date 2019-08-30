import {FormUlaFieldProps} from "../FormUlaField";

const applyRoboto = (props: FormUlaFieldProps) => {
  if (props.styleVariant === "material:outline") {
    import('typeface-roboto/index.css')
  }
};

export const materialUla = {
  material: {
    outline: (props: FormUlaFieldProps) => {
      applyRoboto(props);
      return `
          font-family: Roboto, "Open Sans", serif;
          font-size: 0.9rem;
          ${!props.rounded && 'border-radius: 0.25rem;'}
          border: 1px solid ${props.borderColor || '#5f5f5f'}
          ${!props.backgroundColor && 'background-color: #fefefe;'}
      `
    }
  }
};
