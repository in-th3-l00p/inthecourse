import {type BlocksContent} from "@strapi/blocks-react-renderer";

type StrapiMedia = {
    data: {
        id: number;
        attributes: {
            name: string;
            alternativeText: string;
            url: string;
            size: number;
            width: number;
            height: number;
        }
    }
}

export type Course = {
    id: number;
    attributes: {
        title: string;
        description: string;
        cover: StrapiMedia;
        publishedAt: string;
        slug: string;
    }
}

export type Lesson = {
    id: number;
    attributes: {
        title: string;
        description: string;
        publishedAt: string;
        slug: string;
        content?: BlocksContent;
    }
}