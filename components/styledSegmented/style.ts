import { Segmented } from "antd";
import styled from "styled-components";

export const CustomSegmented = styled(Segmented)`
  .ant-segmented-group {
    padding: 3px !important;
    background-color: #ffffff;
    
  }
  .ant-segmented-item-selected {
    background-color: #0b3f7e;
  }
  .ant-segmented-thumb {
    background-color: #0b3f7e;
  }
  .ant-segmented-item {
    border-radius: 4px;
  }
  :where(.css-dev-only-do-not-override-13a8yko) {
    color: #0b3f7e;
  }
  .ant-segmented-item-selected {
    color: #ffffff;
    transition-duration: 0s;
  }
  :where(.css-dev-only-do-not-override-13a8yko) {
    background-color: transparent;
  }
  .ant-segmented-group {
    border: 1px solid #D4D4D4;
    border-radius: 4px;
    height: 3.3rem;
  }
`;
