import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { settingsData } from "../../../settings";
import SettingsContent from "@/components/SettingsContent";
import SidePanel from "@/components/Sidepanel";
const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [layout, setLayout] = useState("list");
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");
  const [density, setDensity] = useState("comfortable");

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const { type } = router.query;
    const matchedTab = settingsData.find((tab) => tab.id === type);

    if (matchedTab) {
      setActiveTab(matchedTab.id);
    } else if (type !== undefined) {
      router.replace("/settings/general");
    }
  }, [router.isReady, router.query]);

  const handleTabChange = (tabId:any) => {
    setActiveTab(tabId);
    router.push(`/settings/${tabId}`);
  };

  const handleApplyChanges = () => {
    console.log("Applying settings:", {
      layout,
      theme,
      fontSize,
      density,
    });
    // Add your logic to persist these settings
  };

  return (
    <div className="min-h-screen flex">
      <SidePanel
        activeTab={activeTab}
        onTabChange={handleTabChange}
        Data={settingsData}
        Heading="Settings"
        Caption="Manage your preferences"
      />
      <SettingsContent
        activeTab={activeTab}
        layout={layout}
        theme={theme}
        fontSize={fontSize}
        density={density}
        onLayoutChange={(e) => setLayout(e.target.value)}
        onThemeChange={setTheme}
        onFontSizeChange={setFontSize}
        onDensityChange={setDensity}
        onApplyChanges={handleApplyChanges}
      />
    </div>
  );
};

export default Settings;
