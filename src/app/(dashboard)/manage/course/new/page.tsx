import CourseAddNew from "@/components/course/CourseAddNew";
import Heading from "@/components/typography/Heading";
import { getUserInfo } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const { userId } = auth();
  if (!userId) return null;

  const mongoUser = await getUserInfo({ userId });
  if (!mongoUser) return null;
  return (
    <div>
      <Heading>Thêm khóa học</Heading>
      <CourseAddNew user={JSON.parse(JSON.stringify(mongoUser))}></CourseAddNew>
    </div>
  );
};

export default page;
