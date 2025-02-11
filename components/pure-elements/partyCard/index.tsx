import { IndividualRelatedParty } from "@/types/model/redux/individualParty";
import { Card, Tag } from "antd";
import { IoIosRemoveCircleOutline } from "react-icons/io";

interface Props extends IndividualRelatedParty {
  onRemove: (id: string) => void;
}

const PartyCard = (props: Props) => {
  const { onRemove } = props;
  return (
    <Card
      // extra={<IoIosRemoveCircleOutline />}
      headStyle={{ height: "20px" }}
      bodyStyle={{
        padding: "10px",
      }}
      className="shadow-md"
    >
      <div className="flex justify-end border-b border-gray pb-2">
        <span className="cursor-pointer" onClick={() => onRemove(props.id)}>
          <IoIosRemoveCircleOutline />
        </span>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex gap-2">
          <span className="text-iconColor">Name : </span>
          <span>{props.name}</span>
        </div>
        {/* <div className="flex gap-2">
          <span className="text-iconColor">Role : </span>
          <span>{props.role}</span>
        </div> */}
        <div className="flex gap-2">
          <span className="text-iconColor">Party Type : </span>
          <span>
            <Tag color="magenta">{props["@referredType"].toUpperCase()}</Tag>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default PartyCard;
