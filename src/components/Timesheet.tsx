import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, LogIn, LogOut } from "lucide-react";

const Timesheet = ({
  isCheckedIn,
  checkInTime,
  checkOutTime,
  timeLog,
  handleCheckIn,
  handleCheckOut,
}: {
  isCheckedIn: boolean;
  checkInTime: Date | null;
  checkOutTime: Date | null;
  timeLog: {
    date: string;
    checkIn: string;
    checkOut: string;
    duration: string;
  }[];
  handleCheckIn: () => void;
  handleCheckOut: () => void;
}) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="mr-2 h-10 w-8" />
          Time Sheet
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Check In/Out Status */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Current Status
              </p>
              <p
                className={`text-lg font-bold ${
                  isCheckedIn ? "text-green-600" : "text-gray-600"
                }`}
              >
                {isCheckedIn ? (
                  "Checked In"
                ) : (
                  <span className="text-amber-500">Yet to Check-In</span>
                )}
              </p>
              {checkInTime && isCheckedIn && (
                <p className="text-sm text-gray-500">
                  Since
                  {checkInTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              )}
            </div>
            <div>
              {!isCheckedIn ? (
                <button
                  onClick={handleCheckIn}
                  className="bg-green-600 text-white rounded-xl p-3 flex items-center justify-center space-x-2 hover:bg-green-700 transition-all transform hover:scale-105"
                >
                  <LogIn className="h-5 w-5" />
                  <span className="font-semibold text-lg">Check In</span>
                </button>
              ) : (
                <button
                  onClick={handleCheckOut}
                  className="bg-red-600 text-white rounded-xl p-3 flex items-center justify-center space-x-2 hover:bg-red-700 transition-all transform hover:scale-105"
                >
                  <LogIn className="h-5 w-5" />
                  <span className="font-semibold text-lg">Check Out</span>
                </button>
              )}
            </div>
          </div>

          {/* Time Log */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-3">
              Recent Time Log
            </h3>
            <div className="space-y-3">
              {timeLog.map((log, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{log.date}</p>
                    <p className="text-gray-500">
                      {log.checkIn} - {log.checkOut}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{log.duration}</p>
                    <p className="text-xs text-green-600">Completed</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default Timesheet;
