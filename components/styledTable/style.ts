import { Table } from "antd";
import styled from "styled-components";

export const CustomTable = styled(Table)`
  width: 100%;
  .ant-table-tbody {
    background-color: #ffffff;
  }
  .ant-table-wrapper {
    border-radius: 10px;
  }
  .ant-table {
    border-radius: 10px;
    overflow: hidden;
  }
  .ant-table-thead {
    background: #e9eaf2;
  }
  .ant-table-cell {
    background: transparent !important;
  }
  .ant-table-cell {
    padding-left: 24px !important;
    padding-right: 24px !important;
    &:last-of-type {
      width: 0;
      min-width: 120px;
    }
  }
  .ant-tag-geekblue {
    padding: 0.5rem;
  }
`;
