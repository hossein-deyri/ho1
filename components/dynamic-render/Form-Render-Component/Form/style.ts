import { Form } from "antd";
import styled from "styled-components";

export const StyledFormItem = styled(Form.Item)`
  .ant-picker {
    width: 100%;
  }
  .ant-input {
    padding: 10px;
  }
  .ant-select-selector {
    /* display: none !important; */
    height: 44px !important;
    padding-top: 5px !important;
    padding-bottom: 5px !important;
  }
  .ant-picker {
    height: 44px !important;
  }
  #ordersForm_category {
    width: 100% !important;
  }
  .ant-checkbox-group{
    width: 100% !important;
  }
`;
