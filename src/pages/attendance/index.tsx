import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyAttendanceData from "./mydata";
import TeamAttendance from "./team/reportees/[[...index]]";
import { TeamsData } from "../../../team";

type TabValue = "my-attendance" | "team-attendance";

const AttendanceIndexPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabValue>("my-attendance");
  const [currentView, setCurrentView] = useState<string>("month");

  // Simplified handleTabChange that just updates the state
  const handleTabChange = (newTab: TabValue) => {
    setActiveTab(newTab);
    router.push(
      {
        pathname: router.pathname,
        query: { tab: newTab },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleViewChange = (view: string) => {
    console.log("View changed to:", view);
    setCurrentView(view);
  };

  // Effect to sync URL with tab state on initial load
  useEffect(() => {
    const tabFromUrl = router.query.tab as TabValue;
    if (
      tabFromUrl &&
      (tabFromUrl === "my-attendance" || tabFromUrl === "team-attendance")
    ) {
      setActiveTab(tabFromUrl);
    } else {
      handleTabChange("my-attendance");
    }
  }, [router.isReady]);

  return (
    <div className="p-6">
      <div className="flex justify-center flex-col items-center gap-4">
        <h1 className="text-xl font-bold text-blue-500">Attendance Calendar</h1>
        <p className="text-gray-600 mb-6">
          Track and manage attendance records with ease using the attendance
          calendar.
        </p>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full mb-6"
        defaultValue="my-attendance"
      >
        <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto gap-4">
          <TabsTrigger
            value="my-attendance"
            className="cursor-pointer p-2 text-center rounded-lg hover:bg-gray-100"
          >
            My Attendance
          </TabsTrigger>
          <TabsTrigger
            value="team-attendance"
            className="cursor-pointer p-2 text-center rounded-lg hover:bg-gray-100"
          >
            Team Attendance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-attendance" className="mt-4">
          <MyAttendanceData
            currentView={currentView}
            onViewChange={handleViewChange}
            onDateRangeChange={() => {}}
            events={TeamsData}
          />
        </TabsContent>

        <TabsContent value="team-attendance" className="mt-4">
          <TeamAttendance />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceIndexPage;
