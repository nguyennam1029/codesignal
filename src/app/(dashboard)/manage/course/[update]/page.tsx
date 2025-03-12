import CourseUpdate from "@/components/course/CourseUpdate";
import Heading from "@/components/typography/Heading";
import { getCourseBySlug } from "@/lib/actions/course.actions";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  const findCourse = await getCourseBySlug({ slug: searchParams.slug });
  console.log("🚀 ~ findCourse:", findCourse);
  return (
    <div>
      <Heading>Cập nhật khóa học</Heading>
      <CourseUpdate data={JSON.parse(JSON.stringify(findCourse))} />
    </div>
  );
};

export default page;
