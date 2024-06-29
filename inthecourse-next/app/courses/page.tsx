import { fetchCourses } from "@/strapi/courses";
import { title } from "@/components/primitives";
import CoursesGrid from "@/components/courses/coursesGrid";
import PageBreadcrumbs from "@/components/pageBreadcrumbs";

export default async function Courses() {
  const courses = await fetchCourses();

  return (
    <>
      <PageBreadcrumbs
        path={[{ name: "Home", href: "/" }, { name: "Courses" }]}
      />
      <section className={"mb-16"}>
        <div className="mb-8 text-center">
          <h1 className={title()}>Courses</h1>
        </div>

        <CoursesGrid courses={courses} />
      </section>
    </>
  );
}
