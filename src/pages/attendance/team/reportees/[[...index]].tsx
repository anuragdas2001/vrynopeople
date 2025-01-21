import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { TeamsData } from "../../../../../team"; // Import your teams data

const TeamAttendance = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {TeamsData.map((team) => (
        <Card key={team.id} className="border p-4 rounded-md shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{team.name}</CardTitle>
            <p className="text-sm text-gray-500">{team.designation}</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Team: {team.team}</p>
            <p className="text-sm text-gray-600">Email: {team.email}</p>
            <p
              className={`text-sm ${
                team.status === "active" ? "text-green-500" : "text-red-500"
              }`}
            >
              Status: {team.status}
            </p>
            <p className="text-sm text-gray-500">Joined: {team.joinedDate}</p>
          </CardContent>
          <CardFooter>
            {/* Additional actions can go here, like a button for more details */}
            <button className="text-blue-600">View Details</button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default TeamAttendance;
