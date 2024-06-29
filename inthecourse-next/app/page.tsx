import clsx from "clsx";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { subtitle, title } from "@/components/primitives";
import { fetchCourses } from "@/strapi/courses";
import CoursesGrid from "@/components/courses/coursesGrid";

export default async function Home() {
  const courses = await fetchCourses();

  return (
    <>
      <section
        className={"flex flex-wrap justify-center items-center gap-16 mb-32"}
      >
        <div className={"text-9xl"}>📖</div>
        <div className={"text-center md:text-left"}>
          <h1 className={title()}>in the course</h1>
          <h2 className={clsx(subtitle(), "mb-4")}>{"intheloop's courses"}</h2>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button
              as={Link}
              href={"https://donate.stripe.com/cN2cNGczL6Rx0pOdQQ"}
            >
              Donate
            </Button>
            <Button as={Link} href={"https://tiscacatalin.com/about"}>
              About me
            </Button>
          </div>
        </div>
      </section>

      <section className={"mb-16"}>
        <h2 className={"text-3xl mb-8"}>Recent courses</h2>
        <CoursesGrid courses={courses} />
      </section>
    </>
  );
}
