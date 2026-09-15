export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface DeliverableItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProjectFormat {
  id: string;
  title: string;
  description: string;
}
