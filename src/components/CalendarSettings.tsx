import { Calendar } from "lucide-react";

const CalendarSettings = () => {
    return (
      <div className="flex justify-center items-center flex-col space-y-6 py-8">
        <div className="w-full max-w-3xl rounded-md shadow-sm p-6 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="flex justify-center items-center bg-gray-100 rounded-full p-4">
              <Calendar className="h-10 w-10 text-blue-500" />
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-900 mb-4">
            No Calendar Apps Connected
          </p>
          <p className="text-sm text-gray-500 mb-6">
            You don't have any calendar apps connected yet. Click the button below
            to connect a calendar app.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Connect Calendar Apps
          </button>
        </div>
      </div>
    );
  };
  
  export default CalendarSettings;