import { Button } from "antd";
import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";
import { InfoCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { InputRef } from "antd";
import FormDynamicRenderer from "@/components/dynamic-render/Form-Render-Component/Form/Form";
import FormElement from "@/components/dynamic-render/Form-Render-Component/Form/FormElement";
import SuccessModal from "../../../components/pure-elements/successModal/SuccessModal";
import { CustomModal } from "../../../assets/style/styledModal/style";
import { FORM_COMPONENTS } from "@/types/enum/formComponents";
import messages from './messages';
import { useAppSelector } from "@/redux/hooks";

interface Iprops {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setCode: Dispatch<SetStateAction<string>>;
  hasError: boolean;
  openSuccessModal: boolean;
  setOpenSuccessModal: Dispatch<SetStateAction<boolean>>;
  modalTitle: string;
  modalContent: string;
  handlerVerification: (code: string) => void;
}

const VerificationModal = (props: Iprops) => {
  const {
    open,
    setOpen,
    setCode,
    modalTitle,
    modalContent,
    openSuccessModal,
    handlerVerification,
    setOpenSuccessModal,
    hasError,
  } = props;

  const { t } = useTranslation();
  const { lang } = useAppSelector((state) => state.lang);

  // Refs
  const firstInputElementRef = useRef<InputRef>(null);
  const secondInputElementRef = useRef<InputRef>(null);
  const thirdInputElementRef = useRef<InputRef>(null);
  const fourthInputElementRef = useRef<InputRef>(null);
  const fifthInputElementRef = useRef<InputRef>(null);
  const sixthInputElementRef = useRef<InputRef>(null);

  // States
  const [firstInputValue, setFirstInputValue] = useState<string>("");
  const [secondInputValue, setSecondInputValue] = useState<string>("");
  const [thirdInputValue, setThirdInputValue] = useState<string>("");
  const [fourthInputValue, setFourthInputValue] = useState<string>("");
  const [fifthInputValue, setFifthInputValue] = useState<string>("");
  const [sixthInputValue, setSixthInputValue] = useState<string>("");

  let finalCode: string = "";
  const handleCancel = () => {
    setOpen(false);
    setFirstInputValue("");
    setSecondInputValue("");
    setThirdInputValue("");
    setFourthInputValue("");
    setFifthInputValue("");
    setSixthInputValue("");
  };

  const handlerVerify = async () => {
    finalCode =
      firstInputValue +
      secondInputValue +
      thirdInputValue +
      fourthInputValue +
      fifthInputValue +
      sixthInputValue;
    setCode(finalCode);    

    handlerVerification(finalCode);
  };

  useEffect(() => {
    firstInputElementRef.current?.focus();
  }, []);

  const handleSubmitForm = () => {};
  const title = (
    <div>
      {hasError ? (
        <CloseCircleOutlined style={{ color: "red" }} className="ml-1" />
      ) : (
        <InfoCircleOutlined style={{ color: "orange" }} className="ml-1" />
      )}

      <span className="ml-2">{modalTitle}</span>
    </div>
  );

  const clearInputs = () => {
    setFirstInputValue("");
    setSecondInputValue("");
    setThirdInputValue("");
    setFourthInputValue("");
    setFifthInputValue("");
    setSixthInputValue("");
  }

  const contactInformationFormItems = [
    {
      component: FORM_COMPONENTS.INPUT,
      key: 1,
      labelCol: { span: 24 },
      wrapperCol: { span: 22 },
      colSpan: 3,
      propChildren: {
        value: firstInputValue,
        ref: firstInputElementRef,
        maxLength: 1,
        style: { borderColor: hasError ? "red" : "", textAlign: "center" },

        className: "ml-2",
        onChange: (e: any) => {
          secondInputElementRef.current?.focus();
          setFirstInputValue(e.target.value);
        },
      },
    },
    {
      component: FORM_COMPONENTS.INPUT,
      key: 2,
      labelCol: { span: 24 },
      wrapperCol: { span: 22 },
      colSpan: 3,
      propChildren: {
        value: secondInputValue,
        ref: secondInputElementRef,
        maxLength: 1,
        style: { borderColor: hasError ? "red" : "", textAlign: "center" },
        className: "ml-2",
        textAlign: "center",
        onChange: (e: any) => {
          setSecondInputValue(e.target.value);
          thirdInputElementRef.current?.focus();
        },
      },
    },
    {
      component: FORM_COMPONENTS.INPUT,
      key: 3,
      labelCol: { span: 24 },
      wrapperCol: { span: 22 },
      colSpan: 3,
      propChildren: {
        value: thirdInputValue,
        ref: thirdInputElementRef,
        maxLength: 1,
        style: { borderColor: hasError ? "red" : "", textAlign: "center" },
        className: "ml-2",
        textAlign: "center",
        onChange: (e: any) => {
          setThirdInputValue(e.target.value);
          fourthInputElementRef.current?.focus();
        },
      },
    },
    {
      component: FORM_COMPONENTS.INPUT,
      key: 4,
      labelCol: { span: 24 },
      wrapperCol: { span: 22 },
      colSpan: 3,
      propChildren: {
        value: fourthInputValue,
        ref: fourthInputElementRef,
        maxLength: 1,
        style: { borderColor: hasError ? "red" : "", textAlign: "center" },
        className: "ml-2",
        onChange: (e: any) => {
          setFourthInputValue(e.target.value);
          fifthInputElementRef.current?.focus();
        },
      },
    },
    {
      component: FORM_COMPONENTS.INPUT,
      key: 5,
      labelCol: { span: 24 },
      wrapperCol: { span: 22 },
      colSpan: 3,
      propChildren: {
        value: fifthInputValue,
        ref: fifthInputElementRef,
        maxLength: 1,
        style: { borderColor: hasError ? "red" : "", textAlign: "center" },
        className: "ml-2",
        onChange: (e: any) => {
          setFifthInputValue(e.target.value);
          sixthInputElementRef.current?.focus();
        },
      },
    },
    {
      component: FORM_COMPONENTS.INPUT,
      key: 6,
      labelCol: { span: 24 },
      wrapperCol: { span: 22 },
      colSpan: 3,
      propChildren: {
        value: sixthInputValue,
        ref: sixthInputElementRef,
        maxLength: 1,
        style: { borderColor: hasError ? "red" : "", textAlign: "center" },
        className: "ml-2 order-1",
        onChange: (e: any) => {
          setSixthInputValue(e.target.value);
        },
      },
    },
  ];
  
  return (
    <>
      {/* <SuccessModal
        open={openSuccessModal}
        setOpenSuccessModal={setOpenSuccessModal}
        title={t(messages.emailSuccessfullyConfirmed)}
      /> */}
      <CustomModal
        className="w-96 verification-code"
        open={open}
        title={title}
        onCancel={handleCancel}
        afterClose={clearInputs}
      >
        <p className="mb-5">
          {hasError ? t(messages.pleaseEnterCodeCorrectly) : modalContent}
        </p>
        <FormDynamicRenderer
          scrollToFirstError={true}
          name="basic"
          labelAlign="left"
          labelWrap={false}
          size="middle"
          onFinish={handleSubmitForm}
          layout={"vertical"}
          justify={"center"}
          align={"top"}
          onValuesChange={() => {}}
        >
          {lang? (contactInformationFormItems.reverse().map((unit) => (
            <FormElement {...unit} />
          ))) : (contactInformationFormItems.map((unit) => (
            <FormElement {...unit} />
          )))}
          {/* {contactInformationFormItems.map((unit) => (
            <FormElement {...unit} />
          ))} */}

          <div className="mx-auto">
            <Button
              type="primary"
              className="flex items-center bg-primary mb-3"
              htmlType="submit"
              onClick={handlerVerify}
            >
              {t(messages.verificationAndDone)}
            </Button>
          </div>
        </FormDynamicRenderer>
      </CustomModal>
    </>
  );
};

export default VerificationModal;
