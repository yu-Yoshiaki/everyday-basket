export type Microcms = {
  contents: MicrocmsField[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type MicrocmsField = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
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
  title: MicrocmsField["title"];
  eyecatch: MicrocmsField["eyecatch"];
  category: MicrocmsField["category"]["name"];
};
