import styled from "styled-components";
import { Layout } from "antd";
import { STATIC_SIZE } from "@/types/enum/theme";

export const ContainerLayout = styled(Layout)<{
  colorbgcontainer: string;
  collapsed: boolean | null;
  isrtl: boolean;
}>(
  ({ colorbgcontainer, collapsed, isrtl }) => `
  #components-layout-demo-responsive .logo {
      height: 32px;
      margin: 16px;
      background: rgba(255, 255, 255, 0.2);
    }
    .inner-content {
      background-color: #F1F5F9 !important;
    }
    .sider{
      overflow: auto;
      height: 100vh;
      position: fixed;
      left: ${isrtl ? "none" : 0};
      right : ${isrtl ? 0 : "none"}; 
      top: 0;
      bottom: 0;
      background: ${colorbgcontainer};
      transition:0.6s;
      .ant-layout-sider-trigger{
      transition:0.6s;
  
      }
    }
    .site{
      margin : ${
        isrtl
          ? collapsed
            ? "0 100px 0 0"
            : `0 ${STATIC_SIZE.SIDEBAR_WIDTH} 0 0`
          : collapsed
          ? "0 0 0 100px"
          : `0 0 0 ${STATIC_SIZE.SIDEBAR_WIDTH}`
      };
      transition:0.6s;
    }
  
    .header {
      padding: 0; 
      background: ${colorbgcontainer} ;
      display:flex ;
      flex-direction:row ; 
      justify-content :space-between ; 
      align-items :center ;   
      padding : 0 10px;
  
      .inner-header{
          display:flex ;
          flex-direction:row-reverse ; 
          align-items: center ;
          gap:15px;  
      }
      
      .title-user {
          display:flex ; 
          flex-direction: column; 
          align-items : flex-end ;
          justify-content:center;
          height:25px;
          margin-top:-45px;
  
          .weight-title{
              font-weight :bold;
              color:#000;
          }
          span{
              color:#001D29;
              height:15px;
          }
  
      }
  
      .btn-header{
          font-size: 16px;
          width: 64px;
          height: 64px;
      }
    }
  
    .content{
      margin: 24px 0px 0;
      overflow: initial;

      .inner-content {
          padding: 24px;
          min-height: 83vh;
          background: ${colorbgcontainer} ;
         
      }
  
    }
  
    .footer {
      text-align: center;
    }
  
  `
);
