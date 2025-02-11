import { DisableButtonStyle } from "./style";

interface Iprops {
  disabled: boolean;
  value: any;
}

export const DisableButton: React.FC<Iprops> = ({ value, disabled }) => {
  return <DisableButtonStyle disabled={disabled}>{value}</DisableButtonStyle>;
};
