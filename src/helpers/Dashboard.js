import { FaUser } from "react-icons/fa";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { SiHomeadvisor } from "react-icons/si";
import { MdPending } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { GiUpgrade } from "react-icons/gi";
import ProfileSection from "Components/LayoutComponents/ProfileSection";
import PostedAds from "Components/LayoutComponents/PostedAds";
import PendingAds from "Components/LayoutComponents/PendingAds";
export const ConsumerLinks = [
  {
    key: 1,
    title: "Profile",
    to: "",
    icon: <FaUser />,
  },
  {
    key: 2,
    title: "Chats",
    to: "chats",
    icon: <BsChatSquareDotsFill />,
  },
  {
    key: 3,
    title: "Posted Ads",
    to: "postedads",
    icon: <SiHomeadvisor />,
  },
  {
    key: 4,
    title: "Pending Ads",
    to: "pendingads",
    icon: <MdPending />,
  },
  {
    key: 5,
    title: "Settings",
    to: "settings",
    icon: <GoSettings />,
  },
  {
    key: 6,
    title: "Upgrade Account",
    to: "upgrade-account",
    icon: <GiUpgrade />,
  },
];

export const ConsumerRoutes = [
  {
    key: 1,
    path: "/",
    element: <ProfileSection />,
  },
  {
    key: 2,
    path: "chats",
    element: <p>Chats</p>,
  },
  {
    key: 3,
    path: "postedads",
    element: <PostedAds />,
  },
  {
    key: 4,
    path: "pendingads",
    element: <PendingAds />,
  },
  {
    key: 5,
    path: "settings",
    element: <p>Settings</p>,
  },
  {
    key: 6,
    path: "upgrade-account",
    element: <p>Upgrade</p>,
  },
];

export const adsPostColumn = [
  {
    title: "Property Name",
    dataIndex: "title",
    key: "title",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Intent",
    dataIndex: "propertyIntent",
    key: "propertyIntent",
  },
  {
    title: "Location",
    dataIndex: ["location_data", "name"],
    key: "location",
  },
  {
    title: "City",
    dataIndex: ["city_data", "name"],
    key: "city",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "View",
    dataIndex: "view",
    key: "view",
  },
];

export const pendingAdsColumn = [
  {
    title: "Property Name",
    dataIndex: "title",
    key: "title",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Intent",
    dataIndex: "propertyIntent",
    key: "propertyIntent",
  },
  {
    title: "Location",
    dataIndex: ["location_data", "name"],
    key: "location",
  },
  {
    title: "City",
    dataIndex: ["city_data", "name"],
    key: "city",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];
