import Image from "next/image";
import clsx from "clsx";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";

import { fetchLessons } from "@/strapi/lessons";
import { subtitle, themeShadow, title } from "@/components/primitives";
import { strapiApiUrl } from "@/strapi/strapi";
import { fetchCourse } from "@/strapi/courses";
import PageBreadcrumbs from "@/components/pageBreadcrumbs";

export default async function Course({ params }: { params: { slug: string } }) {
  const IMAGE_WIDTH = 410;
  const IMAGE_HEIGHT = 231;
  const course = await fetchCourse(params.slug);
  const lessons = await fetchLessons(course.id);

  return (
    <>
      <PageBreadcrumbs
        path={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses" },
          { name: course.attributes.title },
        ]}
      />
      <section className={"grid grid-cols-1 gap-16 mb-16"}>
        <Image
          alt={course.attributes.cover.data.attributes.alternativeText}
          className={clsx(
            "rounded-2xl max-w-[400px] mx-auto w-full",
            themeShadow(),
          )}
          height={IMAGE_HEIGHT}
          src={strapiApiUrl + course.attributes.cover.data.attributes.url}
          width={IMAGE_WIDTH}
        />

        <div className={"text-center self-center"}>
          <h1 className={title()}>{course.attributes.title}</h1>
          <h2 className={subtitle()}>{course.attributes.description}</h2>

          <p className={"mt-4"}>
            Published at:{" "}
            {new Date(course.attributes.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </section>
      <section className={"mb-16"}>
        <h2 className={"text-3xl mb-8"}>Lessons</h2>
        {lessons.length === 0 && (
          <p className={"text-center"}>No lessons available for this course.</p>
        )}

        <div className="flex flex-col gap-8">
          {lessons.map((lesson, index) => (
            <Card
              key={lesson.id}
              as={Link}
              href={"/courses/" + params.slug + "/" + lesson.attributes.slug}
            >
              <CardHeader>
                <h3
                  className={subtitle()}
                >{`${index + 1}. ${lesson.attributes.title}`}</h3>
              </CardHeader>
              <CardBody>
                <p>{lesson.attributes.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
