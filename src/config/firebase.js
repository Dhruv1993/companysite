import { initializeApp } from "firebase/app";
import {
  getAnalytics,
  isSupported as isAnalyticsSupported,
} from "firebase/analytics";
import { config as appConfig } from "./env";

const firebaseConfig = {
  apiKey: appConfig.firebase.apiKey,
  authDomain: appConfig.firebase.authDomain,
  projectId: appConfig.firebase.projectId,
  storageBucket: appConfig.firebase.storageBucket,
  messagingSenderId: appConfig.firebase.messagingSenderId,
  appId: appConfig.firebase.appId,
  // measurementId is optional
  ...(appConfig.firebase.measurementId
    ? { measurementId: appConfig.firebase.measurementId }
    : {}),
};

export const firebaseApp = initializeApp(firebaseConfig);

export let analytics = null;

export async function initAnalyticsIfAvailable() {
  if (typeof window === "undefined") return null;
  if (!appConfig.firebase.measurementId) return null;
  try {
    const supported = await isAnalyticsSupported();
    if (supported) {
      analytics = getAnalytics(firebaseApp);
    }
  } catch {
    // no-op if analytics unsupported
  }
  return analytics;
}
