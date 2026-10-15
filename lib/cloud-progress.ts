export type ProgressSnapshot = {
  schemaVersion: 1;
  updatedAt: string;
  values: Record<string, string>;
};

const CLOUD_TIMESTAMP_KEY = "hsc2plus-cloud-updated-at";

export function collectProgressSnapshot(): ProgressSnapshot {
  const values: Record<string, string> = {};
  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index);
    if (key?.startsWith("hsc2plus-") && key !== CLOUD_TIMESTAMP_KEY) {
      const value = window.localStorage.getItem(key);
      if (value !== null) values[key] = value;
    }
  }
  return { schemaVersion: 1, updatedAt: new Date().toISOString(), values };
}

export function restoreProgressSnapshot(snapshot: ProgressSnapshot) {
  if (snapshot.schemaVersion !== 1 || !snapshot.values || typeof snapshot.values !== "object") throw new Error("Unsupported progress backup");
  Object.entries(snapshot.values).forEach(([key, value]) => {
    if (key.startsWith("hsc2plus-") && typeof value === "string") window.localStorage.setItem(key, value);
  });
  window.localStorage.setItem(CLOUD_TIMESTAMP_KEY, snapshot.updatedAt);
  window.dispatchEvent(new Event("hsc2plus-progress"));
}

export function markLocalProgressChanged() {
  window.localStorage.setItem(CLOUD_TIMESTAMP_KEY, new Date().toISOString());
}

