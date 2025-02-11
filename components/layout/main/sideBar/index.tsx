import { StyledSideBar } from "./sideBar.style";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { APP_ROUTES } from "@/types/enum/appRoutes";
import MainLogo from "@/components/icons/MainLogo";
import { STATIC_SIZE } from "@/types/enum/theme";
import SmallLogo from "@/components/icons/SmallLogo";
import { useTranslation } from "react-i18next";
import PartyManagementIcon from "@/components/icons/PartyManagementIcon";
import messages from "../../messages";
import RegisterationIcon from "@/components/icons/RegisterationIcon";
import ProductManagementIcon from "@/components/icons/ProductManagementIcone";
import BillingIcon from "@/components/icons/billingIcon";
import { useEffect, useState } from "react";
import StatisticIcon from "@/components/icons/Statistic/StatisticIcon";

interface IsideBarProps {
  collapsed: boolean;
  onCollapsed: (value: React.SetStateAction<boolean>) => void;
}

const SideBar: React.FC<IsideBarProps> = ({ collapsed, onCollapsed }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const [current, setCurrent] = useState<string>(
    location.pathname === "/"
      ? "individual-party"
      : location.pathname.substring(1)
  );
  const [openNav, setOpenNav] = useState<string>(
    location.pathname === "/" ||
      location.pathname.substring(1) === "organization-party"
      ? "party-managment"
      : location.pathname.substring(1) === "catalog" ||
        location.pathname.substring(1) === "category" ||
        location.pathname.substring(1) === "specification" ||
        location.pathname.substring(1) === "product-offering" ||
        location.pathname.substring(1) === "product-offering-price" ||
        location.pathname.substring(1) === "product-inventory"
      ? "product-management"
      : ""
  );

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrent("individual-party");
      setOpenNav("party-managment");
    } else {
      setCurrent(location.pathname.substring(1));
      setOpenNav(
        location.pathname.substring(1) === "individual-party" ||
          location.pathname.substring(1) === "organization-party"
          ? "party-managment"
          : location.pathname.substring(1) === "catalog" ||
            location.pathname.substring(1) === "category" ||
            location.pathname.substring(1) === "specification" ||
            location.pathname.substring(1) === "product-offering" ||
            location.pathname.substring(1) === "product-offering-price" ||
            location.pathname.substring(1) === "product-inventory"
          ? "product-management"
          : ""
      );
    }
  }, [location]);

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuProps["items"] = [
    getItem(
      t(messages.partyManagment),
      "party-managment",
      <PartyManagementIcon />,
      [
        getItem(
          <Link to={APP_ROUTES.ROOT}>{t(messages.individualParty)}</Link>,
          "individual-party"
        ),
        getItem(
          <Link to={APP_ROUTES.ORGANIZATION_PARTY}>
            {t(messages.organizationParty)}
          </Link>,
          "organization-party"
        ),
      ]
    ),
    getItem(
      <Link to={APP_ROUTES.REGISTRATION}>{t(messages.registration)}</Link>,
      "registration",
      <RegisterationIcon />
    ),
    getItem(
      t(messages.productManagement),
      "product-management",
      <ProductManagementIcon />,
      [
        getItem(
          <Link to={APP_ROUTES.CATALOG}>{t(messages.catalog)}</Link>,
          "catalog"
        ),
        getItem(
          <Link to={APP_ROUTES.CATEGORY}>{t(messages.category)}</Link>,
          "category"
        ),
        getItem(
          <Link to={APP_ROUTES.SPECIFICATION}>
            {t(messages.specification)}
          </Link>,
          "specification"
        ),
        getItem(
          <Link to={APP_ROUTES.PRODUCT_OFFERING}>
            {t(messages.productOffering)}
          </Link>,
          "product-offering"
        ),
        getItem(
          <Link to={APP_ROUTES.PRODUCT_OFFERING_PRICE}>
            {t(messages.productOfferingPrice)}
          </Link>,
          "product-offering-price"
        ),
        getItem(
          <Link to={APP_ROUTES.PRODUCT_INVENTORY}>
            {t(messages.inventory)}
          </Link>,
          "product-inventory"
        ),
      ]
    ),
    getItem(
      <Link to={APP_ROUTES.ORDER_MANAGEMENT}>
        {t(messages.orderManagement)}
      </Link>,
      "order-management",
      <BillingIcon />
    ),
    getItem(
      <Link to={APP_ROUTES.STATISTIC}>
        {t(messages.statistic)}
      </Link>,
      "statistic",
      <StatisticIcon />
    ),
  ];

  return (
    <StyledSideBar
      color="white"
      width={STATIC_SIZE.SIDEBAR_WIDTH}
      collapsed={collapsed && collapsed}
      className={"sider"}
      onCollapse={(value) => onCollapsed(value)}
    >
      <div className="main-logo my-10 flex justify-center">
        {collapsed ? <SmallLogo /> : <MainLogo />}
      </div>
      <Menu
        style={{ backgroundColor: "transparent" }}
        theme="light"
        mode="inline"
        items={items}
        selectedKeys={[current]}
        defaultOpenKeys={[openNav]}
      />
    </StyledSideBar>
  );
};

export default SideBar;
