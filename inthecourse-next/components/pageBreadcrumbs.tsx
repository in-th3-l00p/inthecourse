"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";

export default function PageBreadcrumbs({
  path,
}: {
  path: {
    name: string;
    href?: string;
  }[];
}) {
  return (
    <div className="mb-8 flex justify-center">
      <Breadcrumbs>
        {path.map(({ name, href }) => (
          <BreadcrumbItem key={name} href={href}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
}
