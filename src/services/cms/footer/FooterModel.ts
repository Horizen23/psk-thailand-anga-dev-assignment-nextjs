
interface ImageAttributes {
         name: string;
         alternativeText: string | null;
         caption: string | null;
         width: number;
         height: number;
         url: string;
}

interface SocialMedia {
         text: string
         icon: ImageAttributes;
}
interface ContentItem {
         text: string
}
interface Content {
         title: string
         items: ContentItem[]
}

export interface ModelContentFooter {
         header: string;
         placeholder: string;
         buttonTex: string;
         image: ImageAttributes;
         socialMedia: SocialMedia[];
         contents: Content[];
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


export function toSocialMedia(data: any): SocialMedia {
         return {
                  text: data?.text || null,
                  icon: handleImageAttributes(data.icon.data),
                 
         };
}
export function toContents(data: any): Content {
         return {
                  title: data.title,
                  items: data?.items?.map((i:any)=>({
                           text:i.text,
                  }))
         };
}
export function toModelContentFooter(data: any): ModelContentFooter {
         return {
                  header: data.data.attributes.header,
                  placeholder: data.data.attributes.placeholder,
                  buttonTex: data.data.attributes.buttonTex,
                  image: handleImageAttributes(data.data.attributes.image.data),
                  socialMedia: data.data.attributes.socialMedia?.map((s:any)=>toSocialMedia(s)),
                  contents:  data.data.attributes.contents?.map((s:any)=>toContents(s)),
         };
}
