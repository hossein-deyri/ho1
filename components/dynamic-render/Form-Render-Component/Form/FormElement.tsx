import { CreateObjectLiterals } from "@/tools/pure-function/object-literal";
import {
  Input,
  Checkbox,
  Button,
  Col,
  InputNumber,
  Switch,
  Slider,
  Rate,
  Radio,
  Select,
  Upload,
  DatePicker as antdDatePicker,
  Cascader,
  AutoComplete,
  TimePicker,
  TreeSelect,
} from "antd";
import { ReactNode } from "react";
import { StyledFormItem } from "./style";
import { useAppSelector } from "@/redux/hooks";
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import type{Value} from "react-multi-date-picker"
import {useState} from 'react';
import { FORM_COMPONENTS } from "@/types/enum/formComponents";
import { ComponentMaping, FormElementProps } from "./types";


const { TextArea } = Input;
const { RangePicker } = antdDatePicker;

export enum Type_List_Component {
  Form = "Form",
}



function FormElement(props: FormElementProps) {
  const {
    component,
    label,
    rules,
    name,
    dependencies,
    hasFeedback,
    hidden,
    labelAlign,
    labelCol,
    messageVariables,
    noStyle,
    tooltip,
    trigger,
    htmlFor,
    wrapperCol,
    valuePropName,
    validateTrigger,
    validateStatus,
    preserve,
    initialValue,
    help,
    normalize,
    shouldUpdate,
    getValueProps,
    getValueFromEvent,
    extra,
    colon,
    validateFirst,
    colSpan = 12,
    propChildren,
    title,
    children,
  } = props;

  const { lang } = useAppSelector(state => state.lang);

  const componentMapping: ComponentMaping = {
    input: <Input {...propChildren} r />,
    password: <Input.Password {...propChildren} />,
    checkbox: (
      <Checkbox {...propChildren} defaultChecked={propChildren?.defaultValue}>
        {label}
      </Checkbox>
    ),
    button: <Button {...propChildren}>{title}</Button>,
    number: <InputNumber {...propChildren} />,
    switch: <Switch {...propChildren} />,
    slider: <Slider {...propChildren} />,
    rate: <Rate {...propChildren} />,
    radioGroup: <Radio.Group {...propChildren}>{children}</Radio.Group>,
    checkboxGroup: <Checkbox.Group {...propChildren}>{children}</Checkbox.Group>,
    select: <Select {...propChildren}>{children}</Select>,
    textArea: <TextArea {...propChildren} />,
    // datePicker: <DatePicker locale={lang? faLocale : enLocale} {...propChildren} pla format="YYYY-MM-DD"  />,
    rangePicker: <RangePicker {...propChildren} />,
    upload: <Upload {...propChildren}>{children}</Upload>,
    uploadDrager: <Upload.Dragger {...propChildren}>{children}</Upload.Dragger>,
    cascader: <Cascader {...propChildren} />,
    autoComplete: <AutoComplete {...propChildren}>{children}</AutoComplete>,
    timePicker: <TimePicker {...propChildren} />,
    treeSelect: <TreeSelect {...propChildren} />,
  };

  // RangePicker
  // DatePicker

  // const Component = componentMapping[component];
  const FinalObjectRendered: JSX.Element = CreateObjectLiterals(
    componentMapping,
    component,
    componentMapping["input"]
  );

  return (
    <Col span={colSpan}>
      <StyledFormItem
        label={!(component === "checkbox") && label}
        name={name}
        rules={rules}
        initialValue={initialValue}
        colon={colon}
        labelAlign={labelAlign}
        hasFeedback={hasFeedback}
        dependencies={dependencies}
        hidden={hidden}
        labelCol={labelCol}
        messageVariables={messageVariables}
        noStyle={noStyle}
        tooltip={tooltip}
        trigger={trigger}
        htmlFor={htmlFor}
        wrapperCol={wrapperCol}
        valuePropName={valuePropName}
        validateTrigger={validateTrigger}
        validateStatus={validateStatus}
        shouldUpdate={shouldUpdate}
        preserve={preserve}
        normalize={normalize}
        help={help}
        getValueFromEvent={getValueFromEvent}
        getValueProps={getValueProps}
        extra={extra}
        validateFirst={validateFirst}
      >
        {/* <Component /> */}
        {FinalObjectRendered}
      </StyledFormItem>
    </Col>
  );
}
export default FormElement;
