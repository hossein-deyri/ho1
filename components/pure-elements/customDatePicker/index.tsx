import { Dispatch, SetStateAction } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import { useAppSelector } from "@/redux/hooks";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { DatepickerStyle } from "./style";

interface Iprops {
  value: Value;
  label: string;
  name: string;
  width: string;
  minDate?: string | Date;
  maxDate: string | Date;
  onChangeDate: Dispatch<SetStateAction<string | Date>>;
  disabled?: boolean;
}

const CustomDatePicker = (props: Iprops) => {
  const {
    value,
    label,
    name,
    width,
    minDate,
    maxDate,
    onChangeDate,
    disabled,
  } = props;
  const { lang } = useAppSelector((state) => state.lang);
  const change = (e: DateObject) => {
    onChangeDate(e.format("YYYY-MM-DD"));
  };
  const weekDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];

  return (
    <DatepickerStyle>
      <div style={{ width: width }}>
        <label className="mb-2">{label}</label>
        <div className="mt-2 mb-6">
          <DatePicker
            value={value}
            name={name}
            style={{ padding: "20px 5px" }}
            onChange={(e: DateObject) => change(e)}
            calendar={lang ? persian : gregorian}
            locale={lang ? persian_fa : gregorian_en}
            format="YYYY-MM-DD"
            minDate={minDate}
            maxDate={maxDate}
            disabled={disabled}
            weekDays={weekDays}
          />
        </div>
      </div>
    </DatepickerStyle>
  );
};

export default CustomDatePicker;
