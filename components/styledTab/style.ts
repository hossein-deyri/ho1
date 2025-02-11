import { Tabs } from "antd";
import styled from "styled-components";

export const CustomTab = styled(Tabs)`
  .ant-tabs-nav-list {
    gap: 0.75rem;

    .ant-tabs-tab {
      padding: 0.5rem 1.5rem;
      background-color: #fff;
      color: #0b3f7e;
      font-weight: 500;
      font-size: .80rem;
    }

    .ant-tabs-tab.ant-tabs-tab-active {
      background-color: #0b3f7e;

      .ant-tabs-tab-btn {
        color: #fff;
      }
    }
  }
`;
