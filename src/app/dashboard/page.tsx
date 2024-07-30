"use client";
import { useAuthContext } from "@/context/AuthContext/AuthContext";

const getTimeOfDayGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good morning";
  } else if (currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

export default function Dashboard() {
  const greeting = getTimeOfDayGreeting();
  const { user } = useAuthContext();
  return (
    <div>
      <p>Wlecome to Dashboard</p>
      <p>
        {greeting} {user?.username}
      </p>
    </div>
  );
}
