import { Radio, Checkbox } from "antd";
import styled from "styled-components";

export const CustomRadio = styled(Radio)`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* margin-right: 50px; */
  span:first-of-type {
    /* order: 1; */
    transform: scale(1.1);
    padding-right: 8px;
  }
`;

export const CustomCheckbox = styled(Checkbox)`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* margin-right: 50px; */

  span:first-of-type {
    /* order: 1; */
    transform: scale(1.1);
  }
  span:last-of-type {
    padding-left: 12px;
  }
`;
