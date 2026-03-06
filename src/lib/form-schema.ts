export interface FormData {
  // Step 1: Identidad de la Empresa
  companyName: string;
  assistantName: string;
  industry: string;
  brandDescription: string;
  cityCountry: string;
  voiceGender: string;
  languages: string[];
  customLanguage: string;

  // Step 2: Audiencia y Estrategia
  buyerPersona: string;
  salesInstructions: string;

  // Step 3: Personalidad y Tono
  communicationStyle: string;
  salesStyle: string;
  emojiUsage: string;
  forbiddenWords: string;

  // Step 4: Flujo de Mensajes Clave
  welcomeMessage: string;
  saleConfirmation: string;
  humanHandoff: string;

  // Step 5: Información de Pagos
  yape: string;
  plin: string;
  bank: string;
  accountNumber: string;
  accountHolder: string;

  // Step 6: Gestión de Datos y Automatización
  dataRegistration: string;
  sendEmailSummary: boolean;
  summaryEmail: string;
  emailPassword: string;
  scheduleReminder: boolean;
  sendCatalogPDF: boolean;
}

export const initialFormData: FormData = {
  companyName: "",
  assistantName: "",
  industry: "",
  brandDescription: "",
  cityCountry: "",
  voiceGender: "",
  languages: [],
  customLanguage: "",
  buyerPersona: "",
  salesInstructions: "",
  communicationStyle: "",
  salesStyle: "",
  emojiUsage: "",
  forbiddenWords: "",
  welcomeMessage: "",
  saleConfirmation: "",
  humanHandoff: "",
  yape: "",
  plin: "",
  bank: "",
  accountNumber: "",
  accountHolder: "",
  dataRegistration: "",
  sendEmailSummary: false,
  summaryEmail: "",
  emailPassword: "",
  scheduleReminder: false,
  sendCatalogPDF: false,
};

export const steps = [
  { title: "Identidad", subtitle: "Define tu empresa" },
  { title: "Audiencia", subtitle: "Conoce tu mercado" },
  { title: "Personalidad", subtitle: "El carácter de tu IA" },
  { title: "Mensajes", subtitle: "Flujo conversacional" },
  { title: "Pagos", subtitle: "Información comercial" },
  { title: "Automatización", subtitle: "Datos e integraciones" },
];
