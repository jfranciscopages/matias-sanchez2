export interface TButton {
  background: string;
  text: string;
  textColor: string;
  onClick?: boolean;
}

export interface TParagraph {
  title: string;
  texts: string[];
  list?: string[];
}

export interface TPlan {
  background?: boolean;
  short?: boolean;
  usd?: boolean;
  title: string;
  price: number;
  includes: string[];
}

export interface TVideo {
  experience?: boolean;
  source: string;
  height: string;
  width: string;
}

export interface TAccordion {
  title: string;
  content: string;
}
