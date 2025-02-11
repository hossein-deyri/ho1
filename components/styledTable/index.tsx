import { ColumnsType } from "antd/es/table";
import { CustomTable } from "./style";

interface Iprops {
  dataSource: any[];
  columns: ColumnsType<object>;
  loading?: boolean;
  pagination?:object | false 

  
}

const StyledTable = (props: Iprops) => {
  const { columns, dataSource, loading,pagination } = props;
  return (
    <CustomTable
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={pagination}
    ></CustomTable>
  );
};

export default StyledTable;
