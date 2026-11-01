"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Cloud, CloudDownload, CloudUpload, LogOut, Mail, ShieldCheck } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { collectProgressSnapshot, markLocalProgressChanged, restoreProgressSnapshot, type ProgressSnapshot } from "@/lib/cloud-progress";
import { getSupabaseBrowserClient, supabaseConfigured } from "@/lib/supabase";
import { saveStudentDisplayName, useStudentDisplayName } from "@/lib/student-profile";

export function CloudAccount() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const storedName = useStudentDisplayName();
  const [displayName, setDisplayName] = useState("");
  const configured = supabaseConfigured();

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    client.auth.getUser().then(({ data }) => setUser(data.user));
    const { data } = client.auth.onAuthStateChange((_event, session) => setUser(session?.user ?? null));
    const mark = () => markLocalProgressChanged();
    window.addEventListener("hsc2plus-progress", mark);
    return () => { data.subscription.unsubscribe(); window.removeEventListener("hsc2plus-progress", mark); };
  }, []);

  useEffect(() => { setDisplayName(storedName); }, [storedName]);

  const saveName = async () => {
    const name = saveStudentDisplayName(displayName);
    setDisplayName(name);
    const client = getSupabaseBrowserClient();
    const { error } = user && client ? await client.auth.updateUser({ data: { display_name: name } }) : { error: null };
    setNotice(error ? `নাম সংরক্ষণ হয়নি: ${error.message}` : name ? "তোমার নাম সংরক্ষণ হয়েছে।" : "নাম সরানো হয়েছে।");
  };

  const sendLink = async () => {
    const client = getSupabaseBrowserClient();
    if (!client || !email.trim()) return;
    setBusy(true); setNotice("");
    const { error } = await client.auth.signInWithOtp({ email: email.trim(), options: { emailRedirectTo: `${window.location.origin}/account` } });
    setNotice(error ? error.message : "Login link পাঠানো হয়েছে। Inbox ও Spam folder দেখো।");
    setBusy(false);
  };

  const upload = async () => {
    const client = getSupabaseBrowserClient();
    if (!client || !user) return;
    setBusy(true); setNotice("");
    const snapshot = collectProgressSnapshot();
    const { error } = await client.from("student_progress").upsert({ user_id: user.id, snapshot, updated_at: snapshot.updatedAt }, { onConflict: "user_id" });
    if (!error) window.localStorage.setItem("hsc2plus-cloud-updated-at", snapshot.updatedAt);
    setNotice(error ? `Sync হয়নি: ${error.message}` : "এই ডিভাইসের অগ্রগতি Cloud-এ সংরক্ষিত হয়েছে।");
    setBusy(false);
  };

  const download = async () => {
    const client = getSupabaseBrowserClient();
    if (!client || !user) return;
    setBusy(true); setNotice("");
    const { data, error } = await client.from("student_progress").select("snapshot").eq("user_id", user.id).maybeSingle();
    if (error) setNotice(`Restore হয়নি: ${error.message}`);
    else if (!data?.snapshot) setNotice("এই account-এ এখনো কোনো Cloud backup নেই।");
    else { restoreProgressSnapshot(data.snapshot as ProgressSnapshot); setNotice("Cloud backup এই ডিভাইসে ফিরেছে। Page refresh করলে সব জায়গায় দেখা যাবে।"); }
    setBusy(false);
  };

  if (!configured) return <section className="cloud-account-card"><Cloud size={28}/><div><span>YOUR PROFILE</span><h1>নামটি শুধু তোমার জন্য</h1><p>নাম না দিলে dashboard-এ নিরপেক্ষ greeting দেখাবে। এই device-এ রাখা নাম অন্য শিক্ষার্থীর জন্য দেখাবে না।</p></div><label><span>তোমার নাম (ঐচ্ছিক)</span><input value={displayName} onChange={(event)=>setDisplayName(event.target.value)} autoComplete="name" placeholder="যেমন: নাবিলা" maxLength={60}/></label><button type="button" onClick={saveName}><CheckCircle2 size={16}/>নাম সংরক্ষণ</button>{notice&&<p role="status" className="cloud-notice">{notice}</p>}<small>Cloud login চালু করলে নাম ও progress একাধিক device-এ রাখা যাবে।</small></section>;

  if (!user) return <section className="cloud-account-card"><Mail size={28}/><div><span>STUDENT LOGIN</span><h1>একটি email, কোনো password নয়</h1><p>Secure magic link দিয়ে login করো। Login বাধ্যতামূলক নয়—Guest হিসেবে পড়া ও offline progress আগের মতোই থাকবে।</p></div><label><span>Email address</span><input type="email" autoComplete="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="student@example.com"/></label><button type="button" disabled={busy||!email.trim()} onClick={sendLink}><Mail size={16}/>{busy?"পাঠানো হচ্ছে…":"Login link পাঠাও"}</button>{notice&&<p role="status" className="cloud-notice">{notice}</p>}</section>;

  return <section className="cloud-account-card signed-in"><CheckCircle2 size={28}/><div><span>CLOUD SAVE READY</span><h1>{user.email}</h1><p>কোন data Cloud-এ যাবে তা তুমি নিয়ন্ত্রণ করবে।</p></div><label><span>তোমার নাম (ঐচ্ছিক)</span><input value={displayName} onChange={(event)=>setDisplayName(event.target.value)} autoComplete="name" placeholder="যেমন: নাবিলা" maxLength={60}/></label><button type="button" disabled={busy} onClick={saveName}><CheckCircle2 size={16}/>নাম সংরক্ষণ</button><div className="cloud-actions"><button type="button" disabled={busy} onClick={upload}><CloudUpload size={16}/>Backup now</button><button type="button" disabled={busy} onClick={download}><CloudDownload size={16}/>Restore</button><button type="button" disabled={busy} onClick={()=>getSupabaseBrowserClient()?.auth.signOut()}><LogOut size={16}/>Sign out</button></div><small><ShieldCheck size={13}/>প্রতিটি student কেবল নিজের row পড়তে ও পরিবর্তন করতে পারে।</small>{notice&&<p role="status" className="cloud-notice">{notice}</p>}</section>;
}

