import { Select, SelectProps } from "antd";
import { SpecificationRes } from "@/types/model/redux/specification";
import { CrudTmForumService } from "@/services/_crud-tm-service";
import { ProductOfferingServices } from "@/pages/productManagment/productOffering/api";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface IProps extends SelectProps<any> {
  lableTitle: string;
  defaultValues?: [];
  placeholder?: string;
  onChangeHandle: (ids: string[]) => void;
  optionItems?: any[];
  service?: any;
}

const { Option } = Select;

const CustomeSelectBox = (props: IProps) => {
  const {
    lableTitle,
    mode,
    defaultValues,
    placeholder,
    onChangeHandle,
    optionItems,
    service,
  } = props;

  const [items, seItems] = useState<any[]>();

  // const { data, isLoading } = useQuery({
  //   queryFn: async () => {
  //     const data = await service.getList({});
  //     return data.data;
  //   },
  // });

  useEffect(() => {
    const fetchItems = async () => {
      const data = await service?.getList({});
      seItems(data?.data);
    };
    fetchItems();
  }, []);


  return (
    <>
      <label className="mb-1"> {lableTitle}</label>
      <Select
        mode={mode}
        defaultValue={defaultValues?.map((item: any) => item.name)}
        style={{ width: "100%" }}
        placeholder={placeholder}
        onChange={(a,b) => console.log(a,b)}

        // loading={isLoading}
      >
        {items?.map((item: any, index: number) => (
          <Option value={item.id} key={index}>
            {item.name}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default CustomeSelectBox;
