export type WorkPost = {
  readonly templateKey: string;
  readonly slug: string;
  readonly title: string;
  readonly overview: string;
  readonly description: string;
  readonly methodology: string;
  readonly challenges: string;
  readonly results: string;
  readonly tags: string[];
  readonly date: string;
  readonly featured: boolean;
  readonly thumbnail: string;
  readonly images: string[];
  readonly points: string[];
  readonly content: string; // markdown
  readonly links: LinkPost[];
  readonly tools: string[];
};

export type LinkPost = {
  readonly label: string;
  readonly url: string;
  readonly featured: boolean;
  readonly icon: string;
};

export type ArtPost = {
  readonly templateKey: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly tags: string[];
  readonly date: string;
  readonly featured: boolean;
  readonly thumbnail: string;
  readonly images: ImagePost[];
  readonly content: string; // markdown
};

export type ImagePost = {
  readonly image: string;
  readonly title: string;
  readonly description: string;
};

export type BlogPost = {
  readonly templateKey: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly tags: string[];
  readonly date: string;
  readonly featured: boolean;
  readonly thumbnail: string;
  readonly content: string; // markdown
};
