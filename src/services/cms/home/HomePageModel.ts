interface ImageAttributes {
         name: string;
         alternativeText: string | null;
         caption: string | null;
         width: number;
         height: number;
         url: string;
}

interface Award {
         text: string;
         icon: ImageAttributes;
}

interface AboutUs {
         slogan: string;
         title: string;
         description: string;
         image: ImageAttributes;
}

interface Awards {
         title: string;
         awards: Award[];
}

interface OurTeam {
         mainTitle: string;
         mainTitleSpan: string;
         description: string;
         image: ImageAttributes;
}

interface ExpertTeam {
         title: string;
         description: string;
}

interface BusinessPhilosophy {
         heading: string;
         largeParagraph: string;
         smallParagraph: string;
         image: ImageAttributes;
}

interface PartnershipOverview {
         heading: string;
         largeParagraph: string;
         smallParagraph: string;
         image1: ImageAttributes;
         image2: ImageAttributes;
         mainImage: ImageAttributes;
}

interface Statistics {
         heading: string;
         subheading: string;
         organizationsText: string;
         images: ImageAttributes[];
}

interface SmartAgencyPromote {
         heading: string;
         subheading: string;
         inputPlaceholder: string;
         strategyButtonText: string;
         phoneButtonText: string;
         buttonText: string;
         image: ImageAttributes;
}
interface WorkflowSteps {
         completed: number,
         description: string,
         title: string,
         steps: Steps[],
}
interface Steps {
         title: string,
         subTitle: string,
         buttonText?: string,
         image: ImageAttributes,
}

interface MarketingAgencyOverviewProps {
         bgImage: ImageAttributes;
         bgImageMobile: ImageAttributes;
         image: ImageAttributes;
         heading: string;
         subheadings: string[];
}

export interface ModelContentHomePage {
         aboutUs: AboutUs;
         awards: Awards;
         ourTeam: OurTeam;
         expertTeam: ExpertTeam;
         businessPhilosophy: BusinessPhilosophy;
         partnershipOverview: PartnershipOverview;
         statistics: Statistics;
         smartAgencyPromote: SmartAgencyPromote;
         workflowSteps: WorkflowSteps;
         marketingAgencyOverview:MarketingAgencyOverviewProps;
}

function handleImageAttributes(imageData: any): ImageAttributes {
         return {
                  name: imageData.attributes.name,
                  alternativeText: imageData.attributes.alternativeText,
                  caption: imageData.attributes.caption,
                  width: imageData.attributes.width,
                  height: imageData.attributes.height,
                  url: imageData.attributes.url,
         };
}

function handleAwardData(awardData: any): Award {
         return {
                  text: awardData.text,
                  icon: handleImageAttributes(awardData.icon.data),
         };
}

function handleAboutUs(aboutUsData: any): AboutUs {
         return {
                  slogan: aboutUsData.slogan,
                  title: aboutUsData.title,
                  description: aboutUsData.description,
                  image: handleImageAttributes(aboutUsData.image.data),
         };
}

function handleAwards(awardsData: any): Awards {
         return {
                  title: awardsData.title,
                  awards: awardsData.awards.map((award: any) => handleAwardData(award)),
         };
}

function handleOurTeam(ourTeamData: any): OurTeam {
         return {
                  mainTitle: ourTeamData.mainTitle,
                  mainTitleSpan: ourTeamData.mainTitleSpan,
                  description: ourTeamData.description,
                  image: handleImageAttributes(ourTeamData.image.data),
         };
}

function handleExpertTeam(expertTeamData: any): ExpertTeam {
         return {
                  title: expertTeamData.title,
                  description: expertTeamData.description,
         };
}

function handleBusinessPhilosophy(businessPhilosophyData: any): BusinessPhilosophy {
         return {
                  heading: businessPhilosophyData.heading,
                  largeParagraph: businessPhilosophyData.largeParagraph,
                  smallParagraph: businessPhilosophyData.smallParagraph,
                  image: handleImageAttributes(businessPhilosophyData.image.data),
         };
}

function handlePartnershipOverview(partnershipOverviewData: any): PartnershipOverview {
         return {
                  heading: partnershipOverviewData.heading,
                  largeParagraph: partnershipOverviewData.largeParagraph,
                  smallParagraph: partnershipOverviewData.smallParagraph,
                  image1: handleImageAttributes(partnershipOverviewData.image1.data),
                  image2: handleImageAttributes(partnershipOverviewData.image2.data),
                  mainImage: handleImageAttributes(partnershipOverviewData.mainImage.data),
         };
}

function handleStatistics(statisticsData: any): Statistics {
         return {
                  heading: statisticsData.heading,
                  subheading: statisticsData.subheading,
                  organizationsText: statisticsData.organizationsText,
                  images: statisticsData.images.data.map((image: any) => handleImageAttributes(image)),
         };
}

function handleSmartAgencyPromote(smartAgencyPromoteData: any): SmartAgencyPromote {
         return {
                  heading: smartAgencyPromoteData.heading,
                  subheading: smartAgencyPromoteData.subheading,
                  inputPlaceholder: smartAgencyPromoteData.inputPlaceholder,
                  strategyButtonText: smartAgencyPromoteData.strategyButtonText,
                  phoneButtonText: smartAgencyPromoteData.phoneButtonText,
                  buttonText: smartAgencyPromoteData.buttonText,
                  image: handleImageAttributes(smartAgencyPromoteData.image.data),
         };
}
function handleWorkflowSteps(workflowSteps: any): WorkflowSteps {
         return {
                  completed: workflowSteps.completed,
                  description: workflowSteps.description,
                  title: workflowSteps.title,
                  steps: workflowSteps.steps.map((s: any)=>handleWorkflowStep(s)),
         };
}
function handleWorkflowStep(step: any): Steps {
         return {
                  title: step.title,
                  subTitle: step.subTitle,
                  buttonText: step?.buttonText ?? null,
                  image: handleImageAttributes(step.image.data),
         };
}



function handleMarketingAgencyOverviewProps(marketingAgencyOverview: any): MarketingAgencyOverviewProps {
         return {
                  bgImage:  handleImageAttributes(marketingAgencyOverview.bgImage.data),
                  bgImageMobile:  handleImageAttributes(marketingAgencyOverview.bgImageMobile.data),
                  image:  handleImageAttributes(marketingAgencyOverview.image.data),
                  heading:  marketingAgencyOverview.heading,
                  subheadings: [
                           marketingAgencyOverview.subheading1,
                           marketingAgencyOverview.subheading2,
                           marketingAgencyOverview.subheading3,
                  ],
         }
}

export function toModelContentHomePage(data: any): ModelContentHomePage {
         return {
                  aboutUs: handleAboutUs(data.data.attributes.aboutUs),
                  awards: handleAwards(data.data.attributes.awards),
                  ourTeam: handleOurTeam(data.data.attributes.ourTeam),
                  expertTeam: handleExpertTeam(data.data.attributes.expertTeam),
                  businessPhilosophy: handleBusinessPhilosophy(data.data.attributes.businessPhilosophy),
                  partnershipOverview: handlePartnershipOverview(data.data.attributes.partnershipOverview),
                  statistics: handleStatistics(data.data.attributes.statistics),
                  smartAgencyPromote: handleSmartAgencyPromote(data.data.attributes.smartAgencyPromote),
                  workflowSteps: handleWorkflowSteps(data.data.attributes.workflowSteps),
                  marketingAgencyOverview: handleMarketingAgencyOverviewProps(data.data.attributes.marketingAgencyOverview),
         };
}
