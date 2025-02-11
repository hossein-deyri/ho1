import styled from "styled-components";
import { Layout } from "antd";
import { STATIC_SIZE, THEME_COLOR } from "@/types/enum/theme";

const { Sider } = Layout;

export const StyledSideBar = styled(Sider)`
  &.ant-layout-sider {
    background-color: ${THEME_COLOR.primary};
    /* width: ${STATIC_SIZE.SIDEBAR_WIDTH} !important; */
  }
  .ant-menu {
    color: #ffffff !important;
    font-size: 16px;
    .ant-menu-item-group-title {
      color: #ffffff;
    }
    .ant-menu-submenu-title {
      color: #bdbdbd !important;
      display: flex !important;
      align-items: center !important;
      &:hover {
        color: #ffffff !important;
        background-color: #3e6c96 !important;
        svg {
          filter: brightness(0) invert(1);
          transition: ease 0.3s !important;
        }
      }
      &:active {
        color: #ffffff !important;
        background-color: #3e6c96 !important;
      }
      span {
        padding:0 8px !important;
        /* display: block ; */
      }
    }
    .ant-menu-item {
      color: #bdbdbd !important;
      &:hover {
        color: #ffffff !important;
        background-color: #3e6c96 !important;
        svg {
          filter: brightness(0) invert(1);
          transition: ease 0.3s !important;
        }
      }
      &:active {
        color: #ffffff !important;
        background-color: #3e6c96 !important;
        svg {
          filter: brightness(0) invert(1);
        }
      }
      &.ant-menu-item-selected {
        color: #ffffff !important;
        background-color: #3e6c96 !important;
        svg {
          filter: brightness(0) invert(1);
        }
      }
      span {
        padding:0 8px !important;

      }
    }
    .ant-menu-submenu-vertical {
      span {
        display: none;
      }
    }
  }
`;
