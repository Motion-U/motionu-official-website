// ── Contentful CMS types ──

export interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface ContentfulProjectEntry {
  sys: { id: string };
  fields: {
    title: string;
    date?: string;
    image: ContentfulImage;
    link: string;
    description: string;
    credit?: string;
  };
}

export interface ContentfulNewsEntry {
  sys: { id: string };
  fields: {
    title: string;
    date: string;
    description: string;
    image: ContentfulImage;
    content?: unknown;
  };
}
