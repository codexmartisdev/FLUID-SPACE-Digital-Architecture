'use client';

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BookOpenText,
  Building2,
  FolderKanban,
  Home,
  Image,
  Inbox,
  LayoutDashboard,
  LockKeyhole,
  MessageSquareText,
  Settings2,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { adminConfig } from "@/config/admin.config";
import { siteConfig } from "@/config/client.config";
import type {
  AdminModuleDefinition,
  AdminModuleDependency,
  AdminModuleId,
} from "@/lib/admin/types";

const moduleIcons: Record<AdminModuleId, LucideIcon> = {
  dashboard: LayoutDashboard,
  home: Home,
  about: UserRound,
  projects: FolderKanban,
  services: Building2,
  blog: BookOpenText,
  contact: MessageSquareText,
  inbox: Inbox,
  media: Image,
};

const dependencyCopy: Record<AdminModuleDependency, string> = {
  none: "Estrutura pronta",
  "firebase-auth": "Aguarda autenticação",
  firestore: "Aguarda Firestore",
  "firebase-storage": "Aguarda Firestore + Storage",
};

const dependencyTone: Record<AdminModuleDependency, string> = {
  none: "border-emerald-400/25 bg-emerald-400/10 text-emerald-200",
  "firebase-auth": "border-amber-400/25 bg-amber-400/10 text-amber-100",
  firestore: "border-amber-400/25 bg-amber-400/10 text-amber-100",
  "firebase-storage": "border-amber-400/25 bg-amber-400/10 text-amber-100",
};

function ModuleStatus({ module }: { module: AdminModuleDefinition }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${dependencyTone[module.dependency]}`}
    >
      {dependencyCopy[module.dependency]}
    </span>
  );
}

export function AdminShell() {
  const [activeId, setActiveId] = useState<AdminModuleId>("dashboard");
  const activeModule =
    adminConfig.modules.find((module) => module.id === activeId) ??
    adminConfig.modules[0];

  return (
    <div className="min-h-screen bg-[#111312] text-[#F4F1EA]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-white/10 bg-[#0B0D0C] px-5 py-6 lg:border-b-0 lg:border-r lg:px-6 lg:py-8">
          <div className="flex items-start justify-between gap-4 lg:block">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                Área administrativa
              </p>
              <h1 className="mt-2 text-2xl font-medium tracking-[-0.04em]">
                {siteConfig.name}
              </h1>
              <p className="mt-1 text-xs text-white/45">
                Arquitetura e Interiores
              </p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] lg:mt-6">
              <LockKeyhole className="h-4 w-4 text-white/60" aria-hidden="true" />
            </div>
          </div>

          <nav className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1" aria-label="Módulos administrativos">
            {adminConfig.modules.map((module) => {
              const Icon = moduleIcons[module.id];
              const selected = module.id === activeId;
              return (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => setActiveId(module.id)}
                  aria-current={selected ? "page" : undefined}
                  className={`flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                    selected
                      ? "bg-[#F4F1EA] text-[#111312]"
                      : "text-white/58 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">{module.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 lg:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Segurança prevista
            </div>
            <p className="mt-2 text-[11px] leading-5 text-white/40">
              Firebase Authentication, e-mail verificado e TOTP antes da liberação do painel.
            </p>
          </div>
        </aside>

        <section className="px-5 py-7 sm:px-8 lg:px-10 lg:py-10 xl:px-14">
          <header className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                G11 · Fundação administrativa
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.045em] sm:text-4xl">
                {activeModule.label}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                {activeModule.description}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] text-white/52">
              <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
              Infraestrutura desconectada
            </div>
          </header>

          {activeId === "dashboard" ? (
            <div className="py-8">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <Settings2 className="h-5 w-5 text-white/55" aria-hidden="true" />
                  <p className="mt-5 text-sm font-medium">Arquitetura modular</p>
                  <p className="mt-2 text-xs leading-5 text-white/42">
                    O painel foi separado do site público e dos provedores externos.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <ShieldCheck className="h-5 w-5 text-white/55" aria-hidden="true" />
                  <p className="mt-5 text-sm font-medium">Gate ainda fechado</p>
                  <p className="mt-2 text-xs leading-5 text-white/42">
                    Nenhum login ou permissão é simulado antes do Firebase real.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <FolderKanban className="h-5 w-5 text-white/55" aria-hidden="true" />
                  <p className="mt-5 text-sm font-medium">Domínio preparado</p>
                  <p className="mt-2 text-xs leading-5 text-white/42">
                    Projetos, artigos e serviços já possuem contratos de dados próprios.
                  </p>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                <div className="border-b border-white/10 bg-white/[0.025] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                    Módulos planejados
                  </p>
                </div>
                <div className="divide-y divide-white/10">
                  {adminConfig.modules
                    .filter((module) => module.id !== "dashboard")
                    .map((module) => {
                      const Icon = moduleIcons[module.id];
                      return (
                        <button
                          key={module.id}
                          type="button"
                          onClick={() => setActiveId(module.id)}
                          className="grid w-full gap-3 px-5 py-4 text-left transition-colors hover:bg-white/[0.025] sm:grid-cols-[32px_1fr_auto] sm:items-center"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                            <Icon className="h-4 w-4 text-white/55" aria-hidden="true" />
                          </span>
                          <span>
                            <span className="block text-sm font-medium">{module.label}</span>
                            <span className="mt-1 block text-xs leading-5 text-white/40">
                              {module.description}
                            </span>
                          </span>
                          <span className="sm:justify-self-end">
                            <ModuleStatus module={module} />
                          </span>
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-8">
              <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                <ModuleStatus module={activeModule} />
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.035em]">
                  Estrutura pronta para integração
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/48">
                  Este módulo existe apenas como fronteira administrativa no G11. As operações de leitura, escrita, upload e autenticação serão conectadas somente quando os serviços Firebase correspondentes estiverem configurados e protegidos.
                </p>
                <div className="mt-7 rounded-2xl border border-white/10 bg-black/10 p-4 text-xs leading-6 text-white/42">
                  Nenhuma ação desta tela persiste dados, altera conteúdo público ou simula permissões administrativas.
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
