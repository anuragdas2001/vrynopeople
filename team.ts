export const TeamsData = [
  {
    id: "1",
    name: "John Doe",
    designation: "Software Engineer",
    email: "johndoe@example.com",
    team: "Backend Development",
    status: "Active",
    joinedDate: "2023-01-15",
    attendance: [
      {
        date: new Date(2025, 0, 15, 9, 0), // January 15, 2025
        start: new Date(2025, 0, 15, 9, 0), // 9:00 AM
        end: new Date(2025, 0, 15, 17, 0), // 5:00 PM
        status: "present",
      },
      {
        date: new Date(2025, 0, 16, 9, 0), // January 16, 2025
        start: new Date(2025, 0, 16, 9, 0), // 9:00 AM
        end: new Date(2025, 0, 16, 17, 0), // 5:00 PM
        status: "present",
      },
      {
        date: new Date(2025, 0, 17, 9, 0), // January 17, 2025
        start: new Date(2025, 0, 17, 9, 0), // 9:00 AM
        end: new Date(2025, 0, 17, 17, 0), // 5:00 PM
        status: "present",
      },
      {
        date: new Date(2025, 0, 20, 9, 0), // January 20, 2025
        start: new Date(2025, 0, 20, 9, 0), // 9:00 AM
        end: new Date(2025, 0, 20, 17, 0), // 5:00 PM
        status: "absent",
      },
    ],
  },
  {
    id: "2",
    name: "Jane Smith",
    designation: "Frontend Developer",
    email: "janesmith@example.com",
    team: "Frontend Development",
    status: "On-leave",
    joinedDate: "2022-11-10",
    attendance: [
      {
        date: new Date(2025, 0, 15, 9, 0), // January 15, 2025
        start: new Date(2025, 0, 15, 9, 0), // 9:00 AM
        end: new Date(2025, 0, 15, 17, 0), // 5:00 PM
        status: "present",
      },
      {
        date: new Date(2025, 0, 16, 9, 0), // January 16, 2025
        start: new Date(2025, 0, 16, 9, 0), // 9:00 AM
        end: new Date(2025, 0, 16, 17, 0), // 5:00 PM
        status: "absent",
      },
      {
        date: new Date(2025, 0, 17, 9, 0), // January 17, 2025
        start: new Date(2025, 0, 17, 9, 0), // 9:00 AM
        end: new Date(2025, 0, 17, 17, 0), // 5:00 PM
        status: "absent",
      },
      {
        date: new Date(2025, 0, 20, 9, 0), // January 20, 2025
        start: new Date(2025, 0, 20, 9, 0), // 9:00 AM
        end: new Date(2025, 0, 20, 17, 0), // 5:00 PM
        status: "absent",
      },
    ],
  },
  {
    id: "3",
    name: "Alice Johnson",
    designation: "UI/UX Designer",
    email: "alicejohnson@example.com",
    team: "Design Team",
    status: "Active",
    joinedDate: "2021-07-25",
    attendance: [], // No attendance records yet
  },
  {
    id: "4",
    name: "Bob Brown",
    designation: "DevOps Engineer",
    email: "bobbrown@example.com",
    team: "Infrastructure",
    status: "Inactive",
    joinedDate: "2020-03-15",
    attendance: [], // No attendance records yet
  },
  {
    id: "5",
    name: "Charlie Davis",
    designation: "Product Manager",
    email: "charliedavis@example.com",
    team: "Product Management",
    status: "Active",
    joinedDate: "2019-09-05",
    attendance: [], // No attendance records yet
  },
];
