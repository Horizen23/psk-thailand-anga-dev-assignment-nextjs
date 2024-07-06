interface LogoAttributes {
         name: string;
         alternativeText: string | null;
         caption: string | null;
         width: number;
         height: number;
         url: string;
}

interface Button {
         text: string;
         variant: 'outline' | 'default';
}

interface Dropdown {
         text: string;
         dropdownItems: DropdownItem[];
       }
       
interface DropdownItem {
href: string;
text: string;
}
interface DropdownItem {
         href: string;
         text: string;
}

export interface ModelNavbarData {
         createdAt: string;
         updatedAt: string;
         publishedAt: string;
         logo: LogoAttributes;
         buttons: Button[];
         dropdowns: Dropdown[];
}

export function toNavbarData(data: any): ModelNavbarData {
         if (!data || !data.data || !data.data.attributes) {
                  throw new Error('Invalid data format');
         }

         const {  createdAt, updatedAt, publishedAt, buttons, dropdowns } = data.data.attributes;
         const logo = data.data.attributes.logo.data.attributes;

         if (!logo  || !logo.name || !logo.width || !logo.height || !logo.url) {
                  throw new Error('Invalid logo data');
         }

         const {  name, alternativeText, caption, width, height, url } = logo;

         const parsedButtons: Button[] = buttons.map((button: any) => ({
                  text: button.text,
                  variant: button.variant
         }));

         const parsedDropdowns: Dropdown[] = dropdowns.map((dropdown: any) => ({
                  text: dropdown.text,
                  dropdownItems: dropdown?.dropdownItems?.map((item: any) => ({
                           href: item.href,
                           text: item.text,
                  })) ?? []
         }));

         return {
                  createdAt,
                  updatedAt,
                  publishedAt,
                  logo: {
                           name,
                           alternativeText,
                           caption,
                           width,
                           height,
                           url
                  },
                  buttons: parsedButtons,
                  dropdowns: parsedDropdowns
         };
}
