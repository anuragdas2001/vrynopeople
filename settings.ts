import { Calendar, KeyRound, Palette, Settings2, Video,Shield, Lock } from "lucide-react";

export const settingsData = [
  {
    id: "general",
    label: "General",
    icon: Settings2,
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
    id: "privacy",
    label: "Privacy",
    icon: Lock,
    url: "/settings/privacy",
    content: {
      description: "Manage calendar settings and sync preferences.",
      defaults: [],
      noAppsMessage: "No calendar apps are connected yet.",
    },
  },
  {
    id: "conferencing",
    label: "Conferencing",
    icon: Video,
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
    id: "appearance",
    label: "Appearance",
    icon: Palette,
    url: "/settings/appearance",
    content: {
      description: "Customize the appearance of the application.",
      defaults: [],
    },
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    url: "/settings/security",
    content: {
      description: "Manage settings for your account security.",
      defaults: [
        { name: "Your account is managed by Google", value: "Create" },
      ],
    },
  },
];
