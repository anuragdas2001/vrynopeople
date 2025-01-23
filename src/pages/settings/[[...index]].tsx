import React, { useState } from "react";
import { useRouter } from "next/router";
import { Settings2, Calendar, Video, Palette, KeyRound, Shield, Lock } from "lucide-react";
import SettingsSidebar from "@/components/Sidepanel";
import SettingsContent from "@/components/SettingsContent";

const settings = [
  {
    id: 1,
    name: "General",
    url: "/settings/general",
    content: {
      description: "Manage general settings like your profile and preferences.",
      defaults: [
        { name: "Language", value: "English" },
        { name: "Time Zone", value: "Asia/Kolkata" },
        { name: "Time format", value: "12 hour" },
        { name: "Start of week", value: "Sunday" },
        { name: "Email Notifications", value: "Enabled" },
      ],
    },
  },
  {
    id: 2,
    name: "Calenders",
    url: "/settings/calenders",
    content: {
      description: "Manage calendar settings and sync preferences.",
      defaults: [],
      noAppsMessage: "No calendar apps are connected yet.",
    },
  },
  {
    id: 3,
    name: "Conferencing",
    url: "/settings/conferencing",
    content: {
      description: "Configure video conferencing options.",
      defaults: [
        { name: "Default Platform", value: "Zoom" },
        { name: "Meeting Duration", value: "30 Minutes" },
        { name: "Waiting Room", value: "Enabled" },
      ],
    },
  },
  {
    id: 4,
    name: "Appearance",
    url: "/settings/appearance",
    content: {
      description: "Customize the appearance of the application.",
      defaults: [],
    },
  },
  {
    id: 5,
    name: "password",
    url: "/settings/password",
    content: {
      description: "Manage settings for your account passwords",
      defaults: [
        { name: "Your account is managed by Google", value: "Create" },
      ],
    },
  },
];

const tabs = [
  { id: "general", label: "General", icon: <Settings2 /> },
  { id: "security", label: "Security", icon: <Shield /> },
  { id: "privacy", label: "Privacy", icon: <Lock /> },
  { id: "appearance", label: "Appearance", icon: <Palette /> },
  { id: "password", label: "Password", icon: <KeyRound /> },
];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");
  const router = useRouter();

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    router.push(`/settings/${tabId}`);
  };

  return (
    <div className="min-h-screen flex">
      <SettingsSidebar
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <SettingsContent settings={settings} tabs={tabs} />
    </div>
  );
};

export default SettingsPage;
