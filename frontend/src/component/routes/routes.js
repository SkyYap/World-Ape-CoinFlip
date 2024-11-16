import FaqPage from 'component/faq/FaqPage';
import FlipHistoryPage from 'component/fliphistory/FlipHistoryPage';
import ProfilePage from 'component/profile/ProfilePage';
import StatsPage from 'component/stats/StatsPage';
import Main from 'Main';
import React from 'react'

export const allRoutes = [
  {
    name: "Main",
    layout: "/",
    path: "/",
    component: <Main />,
  },
  {
    name: "Faq",
    layout: "/faq",
    path: "/faq",
    component: <FaqPage />,
  },
  {
    name: "Stats",
    layout: "/stats",
    path: "/stats",
    component: <StatsPage />,
  },
  {
    name: "Flip History",
    layout: "/fliphistory",
    path: "/fliphistory",
    component: <FlipHistoryPage />,
  },
  {
    name: "Profile",
    layout: "/profile",
    path: "/profile",
    component: <ProfilePage />,
  }
];
