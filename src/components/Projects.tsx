import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderKanban } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      progress: 75,
      status: "In Progress",
      dueDate: "Feb 15, 2025",
      assigned: ["John D.", "Sarah M."],
      priority: "High",
    },
    {
      id: 2,
      name: "Employee Training Program",
      progress: 30,
      status: "In Progress",
      dueDate: "Mar 1, 2025",
      assigned: ["Mike R.", "Lisa K."],
      priority: "Medium",
    },
    {
      id: 3,
      name: "Q1 Performance Reviews",
      progress: 90,
      status: "Review",
      dueDate: "Jan 30, 2025",
      assigned: ["Emma S."],
      priority: "High",
    },
  ];
  const PriorityBadge = ({ priority }: { priority: string }) => {
    const colors: Record<string, string> = {
      High: "bg-red-100 text-red-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Low: "bg-green-100 text-green-800",
    };
  
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${colors[priority] || "bg-gray-100 text-gray-800"}`}
      >
        {priority}
      </span>
    );
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <FolderKanban className="mr-2 h-5 w-5" />
            Active Projects
          </div>
          <button>View All</button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{project.name}</h3>
                <PriorityBadge priority={project.priority} />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className="text-sm flex justify-between text-gray-600">
                <span>{project.progress}% Complete</span>
                <span>Due: {project.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};


export default Projects;