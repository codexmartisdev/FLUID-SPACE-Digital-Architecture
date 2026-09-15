export type AdminModuleId =
  | "dashboard"
  | "home"
  | "about"
  | "projects"
  | "services"
  | "blog"
  | "contact"
  | "inbox"
  | "media";

export type AdminModuleDependency =
  | "none"
  | "firebase-auth"
  | "firestore"
  | "firebase-storage";

export interface AdminModuleDefinition {
  id: AdminModuleId;
  label: string;
  description: string;
  dependency: AdminModuleDependency;
}

export interface AdminSession {
  uid: string;
  email: string | null;
  emailVerified: boolean;
  secondFactorVerified: boolean;
}

/**
 * Authentication boundary for the administrative area.
 *
 * G11 intentionally defines the contract only. The Firebase implementation is
 * introduced later, after the external Firebase project/App Check configuration
 * is confirmed.
 */
export interface AdminAuthGateway {
  getSession(): Promise<AdminSession | null>;
  signOut(): Promise<void>;
}

export interface AdminConfig {
  shellEnabled: boolean;
  route: "/admin";
  auth: {
    provider: "firebase";
    requireVerifiedEmail: boolean;
    requireSecondFactor: boolean;
    secondFactor: "totp";
  };
  modules: readonly AdminModuleDefinition[];
}
