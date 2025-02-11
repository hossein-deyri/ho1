import { ComponentType, ReactNode } from "react";
import { Form, FormInstance, Row } from "antd";

type LabelAlign = "right" | "left";
type LabelLayout = "horizontal" | "vertical" | "inline";
type Formsize = "small" | "middle" | "large";
type FormAlignment = "top" | "middle" | "bottom" | "stretch";
type FormJustify =
  | "start"
  | "end"
  | "center"
  | "space-around"
  | "space-between"
  | "space-evenly";

export interface ConfigFormProps {
  name: string;
  children?: JSX.Element | React.ReactNode | React.ReactElement;
  layout?: LabelLayout;
  // fields?: FieldData[];
  colon?: boolean;
  disabled?: boolean;
  component?: ComponentType | false;
  form?: FormInstance<any> | undefined;
  initialValues?: object;
  labelAlign?: LabelAlign;
  labelWrap?: boolean;
  labelCol?: object;
  preserve?: boolean;
  requiredMark?: boolean;
  scrollToFirstError?: boolean | any;
  size?: Formsize;
  validateMessages?: any;
  validateTrigger?: string | string[];
  wrapperCol?: object;
  onFieldsChange?: (changedFields: any, allFields: any) => any;
  onFinish?: (values: any) => any;
  onFinishFailed?: ({ values, errorFields, outOfDate }: any) => any;
  onValuesChange?: (changedValues: any, allValues: any) => any;
  style?: object;
  align?:
    | FormAlignment
    | { [key in "xs" | "sm" | "md" | "lg" | "xl" | "xxl"]: FormAlignment };
  justify?:
    | FormJustify
    | { [key in "xs" | "sm" | "md" | "lg" | "xl" | "xxl"]: FormJustify }
    | any;
  wrap?: boolean;
  gutter?: [number, number];
  addonAfter?: ReactNode;
}

export default function FormDynamicRenderer(props: ConfigFormProps) {
  const {
    children,
    name,
    layout,

    colon,
    disabled,
    component,
    // fields,
    form,
    initialValues,
    labelAlign,
    labelWrap,
    labelCol,
    preserve,
    requiredMark,
    scrollToFirstError,
    size,
    validateMessages,
    validateTrigger,
    wrapperCol,
    onFieldsChange,
    onFinish,
    onFinishFailed,
    onValuesChange,
    style,
    align = "middle",
    justify = "center",
    wrap = true,
    gutter,
    addonAfter,
  } = props;

  return (
    <>
      <Form
        name={name}
        layout={layout}
        colon={colon}
        disabled={disabled}
        component={component}
        // fields={fields}
        form={form}
        initialValues={initialValues}
        labelAlign={labelAlign}
        labelWrap={labelWrap}
        labelCol={labelCol}
        preserve={preserve}
        requiredMark={requiredMark}
        scrollToFirstError={scrollToFirstError}
        size={size}
        validateMessages={validateMessages}
        validateTrigger={validateTrigger}
        wrapperCol={wrapperCol}
        onFieldsChange={onFieldsChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
        style={style}
      >
        <Row gutter={gutter} align={align} justify={justify} wrap={wrap}>
          {children}
        </Row>
      </Form>
    </>
  );
}
