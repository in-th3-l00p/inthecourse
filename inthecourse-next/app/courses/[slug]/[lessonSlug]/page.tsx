import {subtitle, title} from "@/components/primitives";
import {fetchCourse} from "@/strapi/courses";
import {fetchLesson} from "@/strapi/lessons";
import PageBreadcrumbs from "@/components/pageBreadcrumbs";
const { BlocksRenderer } =  require("@strapi/blocks-react-renderer"); // weird bug without commonjs import

export default async function Lesson({ params }: {
    params: {
        slug: string;
        lessonSlug: string;
    }
}) {
    const course = await fetchCourse(params.slug);
    const lesson = await fetchLesson(params.lessonSlug);

    return (
        <>
            <PageBreadcrumbs path={[
                { name: "Home", href: "/" },
                { name: "Courses", href: "/courses" },
                { name: course.attributes.title, href: "/courses/" + params.slug },
                { name: lesson.attributes.title }
            ]} />
            <section className="text-center mb-16">
                <h1 className={title()}>{lesson.attributes.title}</h1>
                <h2 className={subtitle()}>{lesson.attributes.description}</h2>
                <p>
                    Published at:{" "}
                    {new Date(lesson.attributes.publishedAt).toLocaleDateString()}
                </p>
            </section>

            {lesson.attributes.content && (
                <BlocksRenderer
                    content={lesson.attributes.content}
                />
            )}
        </>
    );
}