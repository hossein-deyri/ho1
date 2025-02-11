import { TabsType } from "antd/es/tabs";
import { CustomTab } from "./style";

interface PageProps {
  onChange?: ((activeKey: string) => void) | undefined;
  type?: TabsType | undefined;
  children: React.ReactNode;
}
const StyledTab: React.FC<PageProps> = ({ onChange, type, children }) => {
  return <CustomTab {...{ onChange, type }}>{children}</CustomTab>;
};

export default StyledTab;
