import { notFound } from "next/navigation";
import { SubjectPage } from "@/components/subject-page";
import { subjectsByGroup } from "@/lib/academic-data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return (["commerce","humanities"] as const).flatMap((group)=>subjectsByGroup[group].map((subject)=>({group,subjectId:subject.id})));
}

export async function generateMetadata({ params }: { params: Promise<{ group: string; subjectId: string }> }): Promise<Metadata> {
  const { group, subjectId } = await params;
  if (group !== "commerce" && group !== "humanities") return {};
  const subject = subjectsByGroup[group].find((item) => item.id === subjectId);
  if (!subject) return {};
  const title = subject.id === "english" ? subject.name : (subject.nameBn ?? subject.name);
  return {
    title: `${title} notes, practice & revision — HSC2Plus`,
    description: `${title}-এর chapter-wise detailed lessons, revision, last-minute review, worked examples এবং HSC board-pattern practice।`,
  };
}

export default async function Page({ params }: { params: Promise<{ group: string; subjectId: string }> }) {
  const { group, subjectId } = await params;
  if ((group !== "commerce" && group !== "humanities") || !subjectsByGroup[group].some((item)=>item.id===subjectId)) notFound();
  return <SubjectPage group={group} subjectId={subjectId}/>;
}
