import React from "react";

const attendanceData = [
  { date: "2025-01-19", day: "Sunday", status: "NA", isWeekend: true },
  { date: "2025-01-20", day: "Monday", status: "Absent", isWeekend: false },
  { date: "2025-01-21", day: "Tuesday", status: "Present", isWeekend: false },
  { date: "2025-01-22", day: "Wednesday", status: "Late", isWeekend: false },
  { date: "2025-01-23", day: "Thursday", status: "Present", isWeekend: false },
  { date: "2025-01-24", day: "Friday", status: "Present", isWeekend: false },
  { date: "2025-01-25", day: "Saturday", status: "NA", isWeekend: true },
];

const TimelineView = () => {
  return (
    <ol className="w-full m-10 items-center sm:flex">
      {attendanceData.map((event, index) => (
        <li key={index} className="w-full relative mb-6 sm:mb-0">
          {/* Connector Line */}
          <div className="w-full flex items-center">
            <div
              className={`z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white shrink-0 ${
                event.status === "Present"
                  ? "bg-green-100 font-semibold text-green-800 dark:bg-green-900 dark:text-green-300"
                  : event.status === "Absent"
                  ? "bg-red-100 font-semibold text-red-800 dark:bg-red-900 dark:text-red-300"
                  : event.status === "Late"
                  ? "bg-yellow-100 font-semibold text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                  : ""
              } ${
                event.isWeekend
                  ? "border-2 font-semibold border-blue-500 dark:border-blue-400"
                  : ""
              }`}
            >
              {event.isWeekend
                ? "W"
                : event.status === "Present"
                ? "P"
                : event.status === "Absent"
                ? "A"
                : event.status === "Late"
                ? "L"
                : ""}
            </div>
            {index < attendanceData.length - 1 && (
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            )}
          </div>

          {/* Event Content */}
          <div className="mt-3 sm:pe-8">
            <h3
              className={`text-lg font-semibold ${
                event.isWeekend
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {event.day}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {event.date}
            </time>
            <p
              className={`text-base font-normal ${
                event.isWeekend
                  ? "text-blue-500 dark:text-blue-400"
                  : event.status === "Present"
                  ? "text-green-500"
                  : event.status === "Absent"
                  ? "text-red-500"
                  : "text-yellow-500"
              } dark:text-gray-400`}
            ></p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default TimelineView;
