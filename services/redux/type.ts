export interface ContactPayload {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  countryName: string;
  description: string;
  services: string[];
  file: File | null;
}
