import { CustomCheckbox, CustomRadio } from "./style";

interface Iprops {
  value: any;
  name: any;
  disabled?: boolean;
}

export const StyledRadio: React.FC<Iprops> = ({ value, name, disabled }) => {
  return (
    <CustomRadio disabled={disabled} value={value}>
      {name}
    </CustomRadio>
  );
};

export const StyledCheckbox: React.FC<Iprops> = ({ value, name }) => {
  return <CustomCheckbox value={value}>{name}</CustomCheckbox>;
};
