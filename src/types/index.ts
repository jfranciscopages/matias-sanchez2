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
  background?: number;
  short?: boolean;
  usd?: boolean;
  title: string;
  benefits?: string[];
  price?: number;
  includes?: string[];
}

export interface TVideo {
  experience?: boolean;
  source: string;
  height: string;
  width: string;
  mutedVideo: boolean;
}

export interface TAccordion {
  title: string;
  content: string;
}
