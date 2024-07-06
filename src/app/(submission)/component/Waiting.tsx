'use client'
import LayoutContainer from "@/component/LayoutContainer";
import styled from "styled-components";



 const Waiting: React.FC<{}> = () => {
  return (
         <div style={{height : 'calc(100vh )', background: '#000'}}>
          <LayoutContainerWrapper>
         <p>Waiting to <br/>receive confirmation email ...</p>
          </LayoutContainerWrapper>
         </div>
  );
}
export default Waiting

const LayoutContainerWrapper = styled(LayoutContainer)`
 padding-top: ${({theme})=>theme.size.height.Navbar + 250}px;
 p {
   font-weight: 800;
  font-size: 70px
 }
`;
