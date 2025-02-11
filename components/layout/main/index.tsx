// library
import { useState, memo } from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { ContainerLayout } from "./main.style";
import SideBar from "./sideBar";
import { Header } from "./header";

const { Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  // const { i18n } = useTranslation();
  // const isRtl = i18n.language === "fa-IR";
  const { lang } = useAppSelector(state => state.lang);
  const {
    token: { colorBgBase },
  } = theme.useToken();

  return (
    <ContainerLayout
    colorbgcontainer={colorBgBase}
      collapsed={collapsed}
      isrtl={lang}
    >
      <SideBar collapsed={collapsed} onCollapsed={setCollapsed} />
      <Layout className="site">
        <Header collapsed={collapsed} onCollapsed={setCollapsed} />
        <Content className="content">
          <div className="inner-content">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </ContainerLayout>
  );
};

export default memo(MainLayout);
