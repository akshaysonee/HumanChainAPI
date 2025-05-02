export enum Severity {
    Low = "Low",
    Medium = "Medium",
    High = "High"
  }
  
  export interface Incident {
    id: string;
    title: string;
    description: string;
    severity: Severity;
    reported_at?: Date;
  }
  