import strapi from "@/strapi/strapi";
import {Course} from "@/types/strapi";

export async function fetchCourse(slug: string) {
    const response = await strapi.find<Course[]>("courses", {
        filters: {
            slug: {
                $eq: slug,
            },
        },
        fields: ["title", "description", "publishedAt", "slug"],
        populate: ["cover"],
    });
    if (response.data.length === 0)
        throw new Error("Course not found");

    return response.data[0];
}

export async function fetchCourses() {
    return (await strapi.find<Course[]>("courses", {
        sort: "publishedAt:desc",
        fields: ["title", "description", "publishedAt", "slug"],
        populate: ["cover"],
    })).data;
}
