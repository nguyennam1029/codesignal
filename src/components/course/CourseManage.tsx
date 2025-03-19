"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { commonClassNames, courseStatus } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { IconDelete, IconEdit, IconEye, IconStudy } from "../icons";
import Heading from "../common/Heading";
import { ICourse } from "@/database/course.model";
import Swal from "sweetalert2";
import { updateCourse } from "@/lib/actions/course.actions";
import { ECourseStatus } from "@/types/enums";
import { toast } from "react-toastify";
const CourseManage = ({ courses }: { courses: ICourse[] }) => {
  const handleDeleteCourse = (slug: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await updateCourse({
          slug,
          updateData: {
            status: ECourseStatus.PENDING,
            _destroy: true,
          },
        });
        toast.success("Xóa khóa học thành công!");
      }
    });
  };
  return (
    <div>
      <Heading className="mb-10">Quản lý khóa học</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Thông tin</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.length > 0 &&
            courses.map((course) => {
              return (
                <TableRow key={course._id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Image
                        alt=""
                        src={course.image}
                        width={80}
                        height={80}
                        className="flex-shrink-0 size-16 rounded-lg object-cover"
                      />
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-base">{course.title}</h3>
                        <h4 className="text-sm text-slate-500">
                          {new Date(course.created_at).toLocaleDateString(
                            "vi-VI"
                          )}
                        </h4>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="fcourseont-bold text-base">
                      {course.price?.toLocaleString("vi-VN")}đ
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        commonClassNames.status,
                        courseStatus.find(
                          (item) => item.value === course.status
                        )?.className
                      )}
                    >
                      {
                        courseStatus.find(
                          (item) => item.value === course.status
                        )?.title
                      }
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-3">
                      <Link
                        href="/manage/course/update-content?slug=khoa-hoc-photoshop"
                        className={commonClassNames.action}
                      >
                        <IconStudy />
                      </Link>
                      <Link
                        href="/course/khoa-hoc-photoshop"
                        target="_blank"
                        className={commonClassNames.action}
                      >
                        <IconEye />
                      </Link>
                      <Link
                        href="/manage/course/update?slug=khoa-hoc-photoshop"
                        className={commonClassNames.action}
                      >
                        <IconEdit />
                      </Link>
                      <button
                        className={commonClassNames.action}
                        onClick={() => handleDeleteCourse(course.slug)}
                      >
                        <IconDelete />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseManage;
