export interface HistoryItem {
  id: number;
  title: string;
  value: string;
  check: boolean;
}

export interface Vitals {
  height: number;
  weight: number;
  bodyMass: number;
  temperature: number;
  breathingFrequency: number;
  bloodPresure: number;
  hearthRate: number;
}

export interface Allergies {
  medicaments: string[];
  others: string[];
}

export interface ClinicHistoryData {
  vitals: Vitals;
  allergies: Allergies;
  pathologicHistory: HistoryItem[];
  psychiatricHistory: HistoryItem[];
  nutritionalDiet: HistoryItem[];
  medicaments: string[];
}

export type ClinicHistoryState = ClinicHistoryData;
