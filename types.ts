export interface Picture {
    url: string;
}

export interface Content {
    html: string;
}

export interface Education {
    title: string;
    institutionName: string;
    period: [string, string];
    location: string;
    id: string;
}

export interface Experience {
    company: string;
    title: string;
    tags: string[];
    stage: string;
    slug: string;
    period: [string, string];
    location: string;
    link: string;
    id: string;
    excerpt: string;
    content: Content;
    date: Date;
    publishedAt: Date;
    updatedAt: Date;
    createdAt: Date;
}

export interface Author {
    title: string;
    name: string;
    biography: string;
    email: string;
    github: string;
    linkedin: string;
    picture: Picture;
    educations: Education[];
    posts: Experience[];
}
