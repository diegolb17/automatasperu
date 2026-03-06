// NocoDB Configuration
export const NOCODB_CONFIG = {
  BASE_URL: 'https://bases-de-datos-nocodb.kwng4i.easypanel.host',
  API_TOKEN: 'qdPgueathj8TmPejIyjbq0Iiy5hdTrZHhJHj07JH',
  PROJECT_ID: 'prrtnvx3c7cvem2', // Los Automatas Web project
  TABLE_NAME: 'Usuarios',
  TABLE_ID: 'mybzi94tn4oht3s'
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  // Data API v1
  data: (projectId: string, tableName: string) =>
    `/api/v1/db/data/v1/${projectId}/${tableName}`,

  // Meta API
  tables: (projectId: string) =>
    `/api/v1/db/meta/projects/${projectId}/tables`,

  // Specific table
  table: (projectId: string, tableId: string) =>
    `/api/v1/db/meta/tables/${tableId}`,
} as const;