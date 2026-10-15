import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CloudAccount } from "@/components/cloud-account";

export const metadata: Metadata = { title: "Student Account | HSC2Plus", description: "Optional student login and cross-device progress backup for HSC2Plus." };

export default function AccountPage() {
  return <main className="account-page"><div className="account-shell"><Link href="/" className="account-back"><ArrowLeft size={16}/>HSC2Plus</Link><CloudAccount/><section className="cloud-privacy-note"><strong>Simple by design</strong><p>Notes, exams and practice do not require an account. Login only adds encrypted authentication and a private progress backup. Uploaded CQ PDFs are not included in this snapshot.</p></section></div></main>;
}

