import {Course} from "@/types/strapi";
import {Card, CardHeader} from "@nextui-org/card";
import {Link} from "@nextui-org/link";
import clsx from "clsx";
import Image from "next/image";
import {strapiApiUrl} from "@/strapi/strapi";
import {themeShadow} from "@/components/primitives";

export function CourseCard({course}: { course: Course }) {
    const CARD_WIDTH = 410;
    const CARD_HEIGHT = 231;

    return (
        <Card
            as={Link}
            href={`/courses/${course.attributes.slug}`}
            className={clsx(themeShadow({ hover: true }),
                "transition-all mx-auto"
            )}
        >
            <CardHeader className={clsx(
                "absolute z-10 bottom-0 flex flex-col text-left",
                "bg-black bg-opacity-30 rounded-t-none"
            )}>
                <h3 className={"text-lg text-white"}>{course.attributes.title}</h3>
            </CardHeader>

            <Image
                src={strapiApiUrl + course.attributes.cover.data.attributes.url}
                alt={course.attributes.cover.data.attributes.alternativeText}
                width={CARD_WIDTH}
                height={CARD_HEIGHT}
            />
        </Card>
    );
}