import strapi from "@/strapi/strapi";
import {Lesson} from "@/types/strapi";

export async function fetchLesson(slug: string) {
    const response = await strapi.find<Lesson[]>("lessons", {
        filters: {
            slug: {
                $eq: slug,
            },
        },
        fields: ["title", "description", "publishedAt", "slug", "content"],
    });
    if (response.data.length === 0)
        throw new Error("Course not found");

    return response.data[0];
}

export async function fetchLessons(courseId: number) {
    return (await strapi.find<Lesson[]>("lessons", {
        filters: {
            course: {
                $eq: courseId
            }
        },
        fields: ["title", "description", "publishedAt", "slug"],
        sort: "publishedAt:asc"
    })).data
}
