import {Course} from "@/types/strapi";
import {CourseCard} from "@/components/courses/courseCard";
import {tv} from "tailwind-variants";

export const courseGrid = tv({
    base: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
});

export default function CoursesGrid({courses}: { courses: Course[] }) {
    if (courses.length === 0)
        return (
            <p className="text-center">
                Currently, there are no available courses.
            </p>
        );
    return (
        <div className={courseGrid()}>
            {courses.map((course, index) => (
                <CourseCard course={course} key={index} />
            ))}
        </div>
    );
}