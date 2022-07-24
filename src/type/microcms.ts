export type Microcms<T> = {
  contents: Array<T>;
  totalCount: number;
  offset: number;
  limit: number;
};

type CommonMicrocms = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type BlogField = CommonMicrocms & {
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  };
};

export type BlogContent = {
  title: BlogField["title"];
  eyecatch: BlogField["eyecatch"];
  category: BlogField["category"]["name"];
};

export type ServiceField = CommonMicrocms & {
  tag: string;
  title: string;
  description: string;
  imageUrl?: string;
  points: {
    fieldId: "point";
    text: string;
  }[];
};
