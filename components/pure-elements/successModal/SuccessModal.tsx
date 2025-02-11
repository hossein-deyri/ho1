import { Modal } from "antd";
import { Dispatch, SetStateAction, useEffect } from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { CustomModal } from "../../../assets/style/styledModal/style";

interface Iprops {
  open: boolean;
  title: string;
  setOpenSuccessModal: Dispatch<SetStateAction<boolean>>;
}

const SuccessModal = (props: Iprops) => {
  const { open, title, setOpenSuccessModal } = props;

  const handleCancel = () => {
    setOpenSuccessModal(false);
  };

  return (
    <>
      <CustomModal
        className="w-96 verification-code"
        open={open}
        onCancel={handleCancel}
      >
        <div className="text-center">
          <p className="mt-5 pt-5 text-xl">
            <CheckCircleFilled style={{ color: "green" }} />
          </p>
          <p className="mb-5 pb-5">{title}</p>
        </div>
      </CustomModal>
    </>
  );
};

export default SuccessModal;
