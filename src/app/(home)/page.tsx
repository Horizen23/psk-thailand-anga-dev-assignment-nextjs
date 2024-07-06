
import Image from 'next/image';
import Navbar, { NavbarProps } from '@/component/Navbar';
import AboutUs from './component/AboutUs';
import Awards from './component/Awards';
import OurTeam from './component/OurTeam';
import BusinessPhilosophy from './component/BusinessPhilosophy';
import PartnershipOverview from './component/PartnershipOverview';
import OurStatistics from './component/OurStatistics';
import SmartAgencyPromo from './component/SmartAgencyPromo';
import WorkflowSteps from './component/WorkflowSteps';
import { AboutSelection, BusinessSelection, BusinessSelection2, BusinessSelection3, ContentSection, WrapImageBG, WrapImageBGEnd } from './component/Styled';
import { services } from '@/services';
import { API_CONFIG } from '@/config/api-config';
import MarketingAgencyOverview from './component/MarketingAgencyOverview';

export default async function Home() {
  const contentHomePage = await services.CMSService.getContentHomePage()
  const aboutUs = contentHomePage.aboutUs
  const awards = contentHomePage.awards
  const ourTeam = contentHomePage.ourTeam
  const expertTeam = contentHomePage.expertTeam
  const businessPhilosophy = contentHomePage.businessPhilosophy
  const partnershipOverview = contentHomePage.partnershipOverview
  const statistics = contentHomePage.statistics
  const smartAgencyPromote = contentHomePage.smartAgencyPromote
  const workflowSteps = contentHomePage.workflowSteps
  const marketingAgencyOverview = contentHomePage.marketingAgencyOverview
  const getUrlImage = (path: string) => {
    if (typeof path != 'string') return ''
    return API_CONFIG.IMAGE_DOMAIN + path
  }

  const awardProps = {
    title: awards.title,
    awards:  awards?.awards?.map(a=>({
        text: a.text,
        icon: <Image
          src={getUrlImage(a.icon.url) ?? ''}
          alt={a.icon.alternativeText ?? ''}
          width={85.01}
          height={106.26}
          priority
            />,
      })) ?? []
  }

  const ourTeamProps = {
    mainTitle: ourTeam.mainTitle,
    mainTitleSpan: ourTeam.mainTitleSpan,
    description:ourTeam.description,
    imageUrl: getUrlImage(ourTeam.image.url),
  };

  const expertTeamProps = {
    expertTeamTitle: expertTeam.title,
    expertTeamDescription:expertTeam.description,
  };
  const businessPhilosophyProps = {
    heading: businessPhilosophy.heading,
    largeParagraph:businessPhilosophy.largeParagraph,
    smallParagraph:businessPhilosophy.smallParagraph,
    imageUrl:getUrlImage(businessPhilosophy.image.url),
  };

  const partnershipOverviewProps = {
    heading:partnershipOverview.heading,
    largeParagraph:partnershipOverview.largeParagraph,
    smallParagraph:partnershipOverview.smallParagraph,
    images: {
      mainImageUrl: getUrlImage(partnershipOverview.mainImage.url),
      imagesInText: {
        imageUrl1: getUrlImage(partnershipOverview.image1.url),
        imageUrl2: getUrlImage(partnershipOverview.image2.url),
      },
    },
  };

  const statisticsProps = {
    heading: statistics.heading,
    subheading: statistics.subheading,
    organizationsText: statistics.organizationsText,
    images: statistics.images.map(i=>getUrlImage(i.url)),
  };

  const promoProps = {
    imageSrc: getUrlImage(smartAgencyPromote.image.url),
    heading: smartAgencyPromote.heading,
    subheading: smartAgencyPromote.subheading,
    inputPlaceholder: smartAgencyPromote.inputPlaceholder,
    strategyButtonText: smartAgencyPromote.strategyButtonText,
    phoneButtonText: smartAgencyPromote.phoneButtonText,
    buttonText: smartAgencyPromote.buttonText,
  };

  const workflowStepsProps = {
    completed: workflowSteps.completed,
    steps: workflowSteps.steps.map(s=>({
        title: s.title,
        subTitle: s.subTitle,
        buttonText: s.buttonText,
        image: getUrlImage(s.image.url),
    })),
   
    description: workflowSteps.description,
    title: workflowSteps.title
  }
  const marketingAgencyOverviewProps = {
    bgImage: getUrlImage(marketingAgencyOverview.bgImage.url),
    bgImageMobile: getUrlImage(marketingAgencyOverview.bgImageMobile.url),
    image: getUrlImage(marketingAgencyOverview.image.url),
    heading: marketingAgencyOverview.heading,
    subheadings: marketingAgencyOverview.subheadings,
  }


  return (
      <>
      <AboutSelection>
        <WrapImageBG />
        <WrapImageBGEnd />
        <ContentSection>
          <AboutUs slogan={aboutUs.slogan} mainTitle={aboutUs.title} description={aboutUs.description} imageUrl={getUrlImage(aboutUs.image.url)} />
          <Awards title={awardProps.title} awards={awardProps.awards} />
          <OurTeam
            mainTitle={ourTeamProps.mainTitle}
            mainTitleSpan={ourTeamProps.mainTitleSpan}
            description={ourTeamProps.description}
            imageUrl={ourTeamProps.imageUrl}
            expertTeam={expertTeamProps}
          />
        </ContentSection>
      </AboutSelection>
      <BusinessSelection>
        <BusinessPhilosophy
          imageUrl={businessPhilosophyProps.imageUrl}
          heading={businessPhilosophyProps.heading}
          largeParagraph={businessPhilosophyProps.largeParagraph}
          smallParagraph={businessPhilosophyProps.smallParagraph}
        />
        <PartnershipOverview
          heading={partnershipOverviewProps.heading}
          largeParagraph={partnershipOverviewProps.largeParagraph}
          smallParagraph={partnershipOverviewProps.smallParagraph}
          images={partnershipOverviewProps.images} />
      </BusinessSelection>
      <BusinessSelection2>
        <OurStatistics
          heading={statisticsProps.heading}
          subheading={statisticsProps.subheading}
          organizationsText={statisticsProps.organizationsText}
          images={statisticsProps.images}
        />
        <SmartAgencyPromo
          imageSrc={promoProps.imageSrc}
          heading={promoProps.heading}
          subheading={promoProps.subheading}
          inputPlaceholder={promoProps.inputPlaceholder}
          strategyButtonText={promoProps.strategyButtonText}
          phoneButtonText={promoProps.phoneButtonText}
          buttonText={promoProps.buttonText}
        />
      </BusinessSelection2>
      <BusinessSelection3>
        <WorkflowSteps completed={workflowStepsProps.completed} steps={workflowStepsProps.steps} description={workflowStepsProps.description} title={workflowStepsProps.title} />
      </BusinessSelection3>
      <MarketingAgencyOverview 
        bgImage={marketingAgencyOverviewProps.bgImage}
        image={marketingAgencyOverviewProps.image}
        heading={marketingAgencyOverviewProps.heading}
        subheadings={marketingAgencyOverviewProps.subheadings}
         bgImageMobile={marketingAgencyOverviewProps.bgImageMobile}      />
        
      </>
         
  );
}

