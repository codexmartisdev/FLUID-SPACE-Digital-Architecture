import type { AdminConfig } from "@/lib/admin/types";

/**
 * Administrative feature boundary.
 *
 * G11 keeps the shell disabled until Firebase Authentication + MFA are wired.
 * Do not turn this on merely to preview the UI in production.
 */
export const adminConfig: AdminConfig = {
  shellEnabled: false,
  route: "/admin",
  auth: {
    provider: "firebase",
    requireVerifiedEmail: true,
    requireSecondFactor: true,
    secondFactor: "totp",
  },
  modules: [
    {
      id: "dashboard",
      label: "Visão geral",
      description: "Estado operacional do conteúdo e das integrações administrativas.",
      dependency: "none",
    },
    {
      id: "home",
      label: "Início",
      description: "Conteúdo editorial e imagens da página inicial.",
      dependency: "firestore",
    },
    {
      id: "about",
      label: "Sobre",
      description: "Texto institucional, fundadoras e imagens do escritório.",
      dependency: "firebase-storage",
    },
    {
      id: "projects",
      label: "Projetos",
      description: "Cadastro, edição, ordenação e galeria dos projetos.",
      dependency: "firebase-storage",
    },
    {
      id: "services",
      label: "Serviços",
      description: "Gestão dos serviços e de seus conteúdos editoriais.",
      dependency: "firestore",
    },
    {
      id: "blog",
      label: "Blog",
      description: "Artigos, categorias, publicação e imagens de capa.",
      dependency: "firebase-storage",
    },
    {
      id: "contact",
      label: "Contato",
      description: "Dados públicos de contato e presença digital da LaR.",
      dependency: "firestore",
    },
    {
      id: "inbox",
      label: "Caixa de entrada",
      description: "Mensagens e solicitações recebidas pelos formulários.",
      dependency: "firestore",
    },
    {
      id: "media",
      label: "Mídia",
      description: "Biblioteca de imagens, logos e uploads administráveis.",
      dependency: "firebase-storage",
    },
  ],
};
