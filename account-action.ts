import { LogOut, Network, Settings } from "lucide-react";

export const AccountActions = [
  {
    id: "301",
    name: "Logout",
    icon: LogOut,
    image: null,
    url: "/logout",
  },
  {
    id: "302",
    name: "Org",
    icon: Network,
    image: null,
    url: "/organisation/general",
  },
  {
    id: "303",
    name: "Settings",
    icon: Settings,
    image: null,
    url: "/settings/general",
  },
  {
    id: "304",
    name: "Profile",
    icon: null,
    image:
      "https://res.cloudinary.com/dgz1duuwu/image/upload/v1719236393/nu2oa9upb9n6kwjrjyxq.jpg",
    url: "/profile",
  },
];
