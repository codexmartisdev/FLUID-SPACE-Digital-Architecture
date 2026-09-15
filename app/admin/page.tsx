import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminConfig } from "@/config/admin.config";

export const metadata: Metadata = {
  title: "Administração · LaR Arquitetura e Interiores",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

/**
 * Dormant administrative route.
 *
 * G11 deliberately keeps this route unavailable until the real Firebase Auth
 * + MFA gate is implemented. The shell can be developed and typechecked now
 * without exposing an unauthenticated administrative surface in production.
 */
export default function AdminPage() {
  if (!adminConfig.shellEnabled) {
    notFound();
  }

  return <AdminShell />;
}
