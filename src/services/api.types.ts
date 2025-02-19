export interface ApiConfig {
  baseUrl: string;
  apiKey: string;
}

export interface ApiService {
  getAutomationRules?: () => Promise<any>;
  createAutomationRule?: (data: any) => Promise<any>;
}
