import { Dashboard } from "@/components/dashboard";

export const metadata = {
  title: "Arts & Humanities — HSC2Plus",
  description: "HSC মানবিক: অর্থনীতি, পৌরনীতি, ইতিহাস, ভূগোল, যুক্তিবিদ্যা, পরিসংখ্যান, বাংলা, ইংরেজি ও ICT-এর lesson, practice ও model test।",
};

export default function HumanitiesPage() { return <Dashboard group="humanities" />; }
