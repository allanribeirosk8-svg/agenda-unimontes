/**
 * CourseCard Component
 * Design: Clean card displaying course information with visual hierarchy
 */

import { Clock, MapPin, User } from "lucide-react";
import type { CourseSchedule } from "@/lib/coursesData";

interface CourseCardProps {
  course: CourseSchedule;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div
      className={`${course.color} border-l-4 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200`}
    >
      {/* Course Name */}
      <h3 className="font-bold text-gray-900 text-lg mb-3">{course.name}</h3>

      {/* Course Details */}
      <div className="space-y-2 text-sm">
        {/* Time */}
        <div className="flex items-center gap-2 text-gray-700">
          <Clock size={16} className="flex-shrink-0" />
          <span>
            {course.startTime} - {course.endTime}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-700">
          <MapPin size={16} className="flex-shrink-0" />
          <span>{course.room}</span>
        </div>

        {/* Professor */}
        <div className="flex items-center gap-2 text-gray-700">
          <User size={16} className="flex-shrink-0" />
          <span>{course.professor}</span>
        </div>
      </div>

      {/* Period Badge */}
      <div className="mt-3 inline-block">
        <span className="text-xs font-semibold text-gray-600 bg-white px-2 py-1 rounded">
          {course.period}º período
        </span>
      </div>
    </div>
  );
}
