import { SegmentedValue } from "antd/es/segmented";
import { CustomSegmented } from "./style";

interface PageProps {
  onChange?: ((value: SegmentedValue) => void) | undefined;
  options?: any;
}
const StyledSegmented = (props: PageProps) => {
  const { onChange, options } = props;
  return (
    <CustomSegmented onChange={onChange} options={options}></CustomSegmented>
  );
};

export default StyledSegmented;
