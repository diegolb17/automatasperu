import { NOCODB_CONFIG, API_ENDPOINTS } from './nocodb.config';

// Types for Usuarios table
export interface Usuario {
  Id?: number;
  Nombre: string;
  Correo: string;
  Contraseña: string;
  Fecha: string; // Date string
  CreatedAt?: string;
  UpdatedAt?: string;
}

export interface ApiResponse<T> {
  list: T[];
  pageInfo: {
    totalRows: number;
    page: number;
    pageSize: number;
    isFirstPage: boolean;
    isLastPage: boolean;
  };
}

export interface CreateResponse {
  Id: number;
}

// Helper function for API requests
async function nocodbRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${NOCODB_CONFIG.BASE_URL}${endpoint}`;

  const headers = {
    'xc-token': NOCODB_CONFIG.API_TOKEN,
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.text().catch(() => response.statusText);
    throw new Error(`NocoDB API Error (${response.status}): ${error}`);
  }

  return response.json();
}

// Usuarios Service
export const usuariosService = {
  // Get all usuarios (with pagination)
  async getAll(limit = 1000, offset = 0): Promise<ApiResponse<Usuario>> {
    const endpoint = API_ENDPOINTS.data(NOCODB_CONFIG.PROJECT_ID, NOCODB_CONFIG.TABLE_NAME);
    return nocodbRequest(`${endpoint}?limit=${limit}&offset=${offset}`);
  },

  // Get usuario by ID
  async getById(id: number): Promise<Usuario> {
    const endpoint = API_ENDPOINTS.data(NOCODB_CONFIG.PROJECT_ID, NOCODB_CONFIG.TABLE_NAME);
    const response = await nocodbRequest<any>(`${endpoint}/${id}`);

    // Handle both response formats: single object or ApiResponse
    if (response.list && Array.isArray(response.list)) {
      return response.list[0];
    }
    // If it's a single object (direct response)
    if (response.Id) {
      return response;
    }

    throw new Error(`Invalid response format for user ${id}: ${JSON.stringify(response)}`);
  },

  // Create new usuario
  async create(usuario: Omit<Usuario, 'Id' | 'CreatedAt' | 'UpdatedAt'>): Promise<CreateResponse> {
    const endpoint = API_ENDPOINTS.data(NOCODB_CONFIG.PROJECT_ID, NOCODB_CONFIG.TABLE_NAME);
    return nocodbRequest<CreateResponse>(endpoint, {
      method: 'POST',
      body: JSON.stringify(usuario),
    });
  },

  // Update usuario
  async update(id: number, usuario: Partial<Usuario>): Promise<void> {
    const endpoint = API_ENDPOINTS.data(NOCODB_CONFIG.PROJECT_ID, NOCODB_CONFIG.TABLE_NAME);
    await nocodbRequest(`${endpoint}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(usuario),
    });
  },

  // Delete usuario
  async delete(id: number): Promise<void> {
    const endpoint = API_ENDPOINTS.data(NOCODB_CONFIG.PROJECT_ID, NOCODB_CONFIG.TABLE_NAME);
    await nocodbRequest(`${endpoint}/${id}`, {
      method: 'DELETE',
    });
  },

  // Find usuario by email (for login)
  async findByEmail(email: string): Promise<Usuario | null> {
    const endpoint = API_ENDPOINTS.data(NOCODB_CONFIG.PROJECT_ID, NOCODB_CONFIG.TABLE_NAME);

    // NocoDB supports where clause in query params
    // Format: where=(Correo,eq,email@example.com)
    const whereClause = `(Correo,eq,${encodeURIComponent(email)})`;

    const response = await nocodbRequest<any>(
      `${endpoint}?where=${whereClause}`
    );

    // Handle response format
    if (response.list && Array.isArray(response.list)) {
      return response.list[0] || null;
    }
    // If it's a single object (unlikely but possible)
    if (response.Id) {
      return response;
    }

    return null;
  },

  // Verify login credentials
  async verifyLogin(email: string, password: string): Promise<Usuario | null> {
    const usuario = await this.findByEmail(email);

    if (!usuario) {
      return null;
    }

    // Simple password comparison (in production, use proper hashing)
    if (usuario.Contraseña === password) {
      return usuario;
    }

    return null;
  },

  // Check if email already exists
  async emailExists(email: string): Promise<boolean> {
    const usuario = await this.findByEmail(email);
    return usuario !== null;
  }
};