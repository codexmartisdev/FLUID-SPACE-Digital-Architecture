export type ContactStatus = "new" | "read" | "archived";

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  whatsapp?: string;
  city?: string;
  projectType?: string;
  area?: string;
  message: string;
  status: ContactStatus;
  createdAt?: string;
}

export interface QuoteRequest {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  service?: string;
  propertyType?: string;
  areaSize?: string;
  location?: string;
  details?: string;
  status: ContactStatus;
  createdAt?: string;
}
