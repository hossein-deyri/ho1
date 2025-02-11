import { useTranslation } from "react-i18next";
import { ILang } from "@/types/model/etc/lang.model";
import { useEffect, useLayoutEffect } from "react";
import i18next, { t } from "i18next";
import { MdLanguage } from "react-icons/md";
import { Tooltip } from "antd";
import { useAppDispatch, useAppSelector } from "./../../redux/hooks";
import { RootState } from "./../../redux/store";
import {
  changeLanguageStatus,
  LangStatus,
} from "./../../redux/slices/change-lang";

export const languages: ILang[] = [
  {
    code: "fa-IR",
    name: t("name_fa"),
    dir: "rtl",
  },
  {
    code: "en-US",
    name: t("name_en"),
    dir: "ltr",
  },
];

function ChangeLanguage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa-IR";
  const text = (
    <span style={{ fontSize: "12px" }}>
      {isRtl ? t("name_en") : t("name_fa")}
    </span>
  );

  const { lang } = useAppSelector((state: RootState): LangStatus => state.lang);
  const dispatch = useAppDispatch();

  const currentLanguageCode = localStorage.getItem("i18nextLng") || "fa-IR";
  const currentLanguage = languages.find(
    (el) => el.code === currentLanguageCode
  );

  useEffect(() => {
    window.document.body.dir = lang === true ? "rtl" : "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t, lang]);

  useEffect(() => {
    const styleElement = document.createElement("style");
    const cssContent = lang
      ? `
        * {
          font-family: "Vazirmatn FD" !important;
        }
      `
      : `
        * {
          font-family: "Vazirmatn" !important;
        }
      `;

    styleElement.innerHTML = cssContent;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [lang]);

  useLayoutEffect(() => {
    window.document.body.dir = lang === true ? "rtl" : "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t, lang]);

  return (
    <>
      <Tooltip placement="topLeft" title={text}>
        <MdLanguage
          size={20}
          cursor={"pointer"}
          color={"#64748B"}
          onClick={() => {
            if (!isRtl) {
              i18next.changeLanguage("fa-IR");
              i18next.dir("fa-IR");
              dispatch(changeLanguageStatus({ lang: true }));
              // dispatch(changeLanguageStatus({lang : lang === false ? true : false}))
            } else {
              i18next.changeLanguage("en-US");
              i18next.dir("en-US");
              dispatch(changeLanguageStatus({ lang: false }));
              // dispatch(changeLanguageStatus({lang : lang === true ? false : true}))
            }
          }}
        />
      </Tooltip>
    </>
  );
}
export default ChangeLanguage;
