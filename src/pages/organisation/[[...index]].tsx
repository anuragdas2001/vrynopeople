import { useState } from "react";
import SidePanel from "@/components/Sidepanel";
import { OrganisationData } from "../../../organisation";

const Organisation = () => {
    const [activeTab, setActiveTab] = useState(OrganisationData[0].id);
  
    return (
      <div className="min-h-screen flex">
        <SidePanel
          activeTab={activeTab}
          onTabChange={setActiveTab}
          Data={OrganisationData}
          Heading="Organisation"
          Caption="Manage your organisation settings"
        />
      </div>
    );
  };
  

export default Organisation;
