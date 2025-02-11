import React, { useMemo, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { Select, Spin } from "antd";
import type { SelectProps } from "antd/es/select";
import { PartyIndividualServices } from "@/pages/partyManagment/IndividualParty/api";
export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, "options" | "children"> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

const services = new PartyIndividualServices();

function DebounceSelect<
  ValueType extends {
    id?: string;
    key?: string;
    label: React.ReactNode;
    value: string | number;
  } = any
>({
  fetchOptions,
  debounceTimeout = 800,
  ...props
}: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      
      fetchOptions(value).then((newOptions) => {
        const finalOptions = newOptions.filter((option) => option.value != "undefined");
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(finalOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of DebounceSelect
interface UserValue {
  label: string;
  value: string;
  key: string;
  id: string;
}

interface Iprops {
  fetchFunc: (value: string) => Promise<
    {
      label: string;
      value: string;
      key: string;
      id: string;
    }[]
  >;
  isMultiple?: boolean;
  onRemove: (id: string) => void;
  selectFunc: ({
    value,
    queryKey,
  }: {
    value: string;
    queryKey: string;
  }) => Promise<void>;
  queryKey: string;
  label: string;
  ItemDisabled: boolean;
}

const CustomSearch = (props: Iprops) => {
  const {
    fetchFunc,
    selectFunc,
    queryKey,
    label,
    onRemove,
    isMultiple,
    ItemDisabled,
  } = props;
  const [value, setValue] = useState<UserValue[]>([]);

  async function fetchUserList(username: string): Promise<UserValue[]> {
    const payload: any = {};
    payload[queryKey] = username;
    return fetchFunc(username);
  }

  return (
    <DebounceSelect
      // mode={isMultiple ? 'multiple' : 'tags'}
      disabled={ItemDisabled}
      {...(isMultiple ? { mode: "multiple" } : {})}
      showSearch={isMultiple ? true : true}
      value={value}
      placeholder={label}
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue as UserValue[]);
      }}
      style={{ width: "100%" }}
      onSelect={(e) => selectFunc({ value: e.value, queryKey })}
      // notFoundContent={<span>notFound</span>}
      onDeselect={(e) => onRemove(e.key)}
    />
  );
};

export default CustomSearch;
