import {
  deliverablesData,
  processSteps,
  projectFormats,
  servicesData,
} from "@/data/services";
import type { ServiceRepository } from "@/lib/data/contracts";
import type {
  DeliverableItem,
  ProcessStep,
  ProjectFormat,
  ServiceItem,
} from "@/lib/domain";

const localServices: readonly ServiceItem[] = servicesData;
const localDeliverables: readonly DeliverableItem[] = deliverablesData;
const localProcessSteps: readonly ProcessStep[] = processSteps;
const localProjectFormats: readonly ProjectFormat[] = projectFormats;

export const localServiceRepository: ServiceRepository = {
  async listServices() {
    return [...localServices];
  },

  async listDeliverables() {
    return [...localDeliverables];
  },

  async listProcessSteps() {
    return [...localProcessSteps];
  },

  async listProjectFormats() {
    return [...localProjectFormats];
  },
};
