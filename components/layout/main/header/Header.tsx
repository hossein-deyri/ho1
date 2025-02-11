import { Avatar, Badge, Button } from "antd";
import { StyledHeader } from "./header.style";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { CiUser } from "react-icons/ci";
import { ChangeLanguage, Notification } from "@/components";
import { LoginService } from "@/services/login.service";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logOut } from "@/redux/slices/auth";
import { useTranslation } from "react-i18next";
import messages from "../../messages";

interface IheaderProps {
  collapsed: boolean;
  onCollapsed: (value: React.SetStateAction<boolean>) => void;
}

const userServices = new LoginService();

const Header = (props: IheaderProps) => {
  const { collapsed, onCollapsed } = props;
  const { id_token } = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleLogout = async () => {
    // const res = await userServices.logout();
    window.location.replace(
      `${
        import.meta.env.VITE_AUTH_URL
      }/realms/smartbss/protocol/openid-connect/logout?post_logout_redirect_uri=${
        import.meta.env.VITE_FALLBACK_URL
      }&id_token_hint=${id_token}`
    );
    // dispatch(logOut())
  };

  return (
    <StyledHeader className="header">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => onCollapsed(!collapsed)}
        className="btn-header"
      />
      <div className="inner-header">
        {/* <ChangeLanguage /> */}
        {/* <CiUser size={20} cursor={'pointer'} />
                  <CiLogout size={20} cursor={'pointer'} /> */}

        {/* <Avatar
          style={{ backgroundColor: "#7EA4A8", cursor: "pointer" }}
          shape="circle"
          size="default"
          children={<CiUser color={"#FFFFFF"} size={30} cursor={"pointer"} />}
        /> */}
        <Button onClick={handleLogout}>{t(messages.logout)}</Button>
        {/* <div className="title-user">
          <span className="weight-title">name user</span>
          <span>desc</span>
        </div> */}
        {/* <Badge dot={true} size="small">
          <Avatar
            style={{ backgroundColor: "#EFF4FB", cursor: "pointer" }}
            shape="circle"
            size="small"
            children={<Notification />}
          />
        </Badge> */}

        <Avatar
          style={{ backgroundColor: "#EFF4FB", cursor: "pointer" }}
          shape="circle"
          size="small"
         
          children={<ChangeLanguage />}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
