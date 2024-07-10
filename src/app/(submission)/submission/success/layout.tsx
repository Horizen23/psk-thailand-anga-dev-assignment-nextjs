import Footer from "@/component/FooterContainer";
import Navbar, { NavbarProps } from "@/component/Navbar";
import { API_CONFIG } from "@/config/api-config";
import { services } from '@/services';

import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}




const Layout = async (props: LayoutProps) => {
  const contentNavbar = await services.CMSService.getContentNavbar()
  const contentFooter = await services.CMSService.getContentFooter()
  const getUrlImage = (path: string) => {
    if (typeof path != 'string') return ''
    return API_CONFIG.IMAGE_DOMAIN + path
  }
  const navbarProps: NavbarProps = {
    logoSrc: getUrlImage(contentNavbar.logo.url),
    logoAlt: contentNavbar.logo.alternativeText ?? 'logo',
    dropdowns: contentNavbar.dropdowns,
    buttons: contentNavbar.buttons,
  };

  return (
    <main>
    <Navbar logoSrc={navbarProps.logoSrc} logoAlt={navbarProps.logoAlt} dropdowns={navbarProps.dropdowns} buttons={navbarProps.buttons}
      />
    {props.children}
    <Footer 
        contents={contentFooter.contents} 
        header={contentFooter.header} 
        image={getUrlImage(contentFooter.image.url)} 
        placeholder={contentFooter.placeholder} 
        buttonTex={contentFooter.buttonTex} 
        socialMedia={contentFooter.socialMedia.map((s)=>({
          text: s.text,
          icon: getUrlImage(s.icon.url),
        }))}
        />
   </main>
  );
}

export default Layout