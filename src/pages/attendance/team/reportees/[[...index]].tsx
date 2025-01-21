import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { TeamsData } from "../../../../../team"; // Import your teams data
import TeamAttendanceSidePanel from "../../teamattendancesidepanel"; // Assuming you have this component
const AttendanceStatus = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
    console.log("Selected status:", status);
  };

  const handleTimeSelect = (time: Date) => {
    setSelectedTime(time);
    console.log("Selected time:", moment(time).format("HH:mm"));
  };

  const handleSubmit = () => {
    console.log("Submitting attendance:", {
      status: selectedStatus,
      time: selectedTime,
    });
    // Add your submit logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Mark Attendance
      </h3>

      <div className="space-y-6">
        {/* Status Selection */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Status</h4>
          <div className="grid gap-3">
            {["Present", "Absent", "Late"].map((status) => (
              <button
                key={status}
                id={`status-${status.toLowerCase()}`}
                className={`p-2 hover:bg-blue-50 hover:border-blue-500 rounded-xl transition-colors border ${
                  selectedStatus === status
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
                onClick={() => handleStatusSelect(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        {selectedStatus === "Late" && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Time In</h4>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded-xl"
              onChange={(e) =>
                handleTimeSelect(
                  moment(e.target.value, "HH:mm").toDate() // Convert to Date object
                )
              }
            />
          </div>
        )}

        {/* Submit Button */}
        {selectedStatus && (
          <button
            id="submit-attendance"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium p-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            onClick={handleSubmit}
          >
            Submit Attendance
          </button>
        )}
      </div>
    </div>
  );
};

const mLocalizer = momentLocalizer(moment);

const TeamAttendance = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(TeamsData[0]);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    // Map the selected employee's attendance to calendar events
    const employeeAttendance = selectedEmployee.attendance.map(
      (attendance) => ({
        id: attendance.date.toString(),
        title: `${selectedEmployee.name} - ${attendance.status}`,
        start: attendance.start,
        end: attendance.end,
        status: attendance.status,
        description:
          attendance.status === "present"
            ? `Worked from ${attendance.start.toLocaleTimeString()} to ${attendance.end.toLocaleTimeString()}`
            : "No work hours",
      })
    );
    setEvents(employeeAttendance);
  }, [selectedEmployee]);

  const handleEmployeeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selected = TeamsData.find(
      (employee) => employee.name === event.target.value
    );
    if (selected) setSelectedEmployee(selected);
  };

  // Event style getter to customize colors based on attendance status
  const eventStyleGetter = (event: any) => {
    let backgroundColor = "#3B82F6"; // Default color: blue for the event
    switch (event.status) {
      case "present":
        backgroundColor = "#22C55E"; // Green for present
        break;
      case "absent":
        backgroundColor = "#EF4444"; // Red for absent
        break;
      default:
        backgroundColor = "#3B82F6"; // Default to blue if not specified
    }
    return { style: { backgroundColor } };
  };

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* SidePanel */}
      <div className="col-span-12 lg:col-span-2">
        <TeamAttendanceSidePanel
          employee={selectedEmployee}
          employees={TeamsData}
          onEmployeeChange={handleEmployeeChange}
        />
      </div>

      {/* Calendar */}
      <div className="col-span-12 lg:col-span-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
        <Calendar
          localizer={mLocalizer}
          events={events}
          defaultView="month"
          style={{ height: 700 }}
          eventPropGetter={eventStyleGetter} // Apply the event styling
          components={{
            event: ({ event }) => (
              <div
                className={`p-1 text-sm font-medium ${
                  event.status === "present" ? "text-white" : "text-white"
                }`}
              >
                {event.status === "absent" ? (
                  <span className="text-white">Absent</span>
                ) : (
                  <>
                    {moment(event.start).format("h:mm A")} -{" "}
                    {moment(event.end).format("h:mm A")}
                  </>
                )}
              </div>
            ),
          }}
        />
      </div>

      {/* Attendance Status */}
      <div className="col-span-12 lg:col-span-2">
        <AttendanceStatus />
      </div>
    </div>
  );
};

export default TeamAttendance;
