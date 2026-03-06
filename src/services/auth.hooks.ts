import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { usuariosService, Usuario } from './nocodb.service';
import { useToast } from '@/components/ui/use-toast';

// Authentication types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Keys for React Query
export const authKeys = {
  all: ['auth'] as const,
  usuarios: () => [...authKeys.all, 'usuarios'] as const,
  usuario: (id: number) => [...authKeys.usuarios(), id] as const,
  currentUser: () => [...authKeys.all, 'current'] as const,
};

// Authentication Hooks
export function useLogin() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      const usuario = await usuariosService.verifyLogin(
        credentials.email,
        credentials.password
      );

      if (!usuario) {
        throw new Error('Credenciales inválidas');
      }

      return usuario;
    },
    onSuccess: (usuario) => {
      try {
        // Validate usuario has required fields
        if (!usuario || !usuario.Id || !usuario.Correo) {
          console.error('Invalid usuario object:', usuario);
          throw new Error('Usuario object is invalid');
        }

        const userString = JSON.stringify(usuario);
        localStorage.setItem('currentUser', userString);
        console.log('User saved to localStorage:', { id: usuario.Id, email: usuario.Correo });

        // Update cache
        queryClient.setQueryData(authKeys.currentUser(), usuario);

        toast({
          title: 'Inicio de sesión exitoso',
          description: `Bienvenido ${usuario.Nombre || usuario.Correo}`,
        });

        // Redirect to settings page after a short delay
        setTimeout(() => {
          console.log('Redirecting to /settings');
          window.location.href = '/settings';
        }, 1500);
      } catch (error) {
        console.error('Error saving user:', error);
        toast({
          title: 'Error al guardar sesión',
          description: 'Hubo un problema al iniciar sesión. Intenta nuevamente.',
          variant: 'destructive',
        });
      }
    },
    onError: (error: Error) => {
      toast({
        title: 'Error de inicio de sesión',
        description: error.message || 'Credenciales inválidas',
        variant: 'destructive',
      });
    },
  });
}

export function useRegister() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: RegisterData) => {
      // Check if email already exists
      const exists = await usuariosService.emailExists(data.email);
      if (exists) {
        throw new Error('El correo electrónico ya está registrado');
      }

      // Create new usuario
      const fecha = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

      const newUsuario = await usuariosService.create({
        Nombre: data.name,
        Correo: data.email,
        Contraseña: data.password,
        Fecha: fecha,
      });

      // Get the complete usuario object
      const usuarioCompleto = await usuariosService.getById(newUsuario.Id);

      return usuarioCompleto;
    },
    onSuccess: (usuario) => {
      // Store user in localStorage
      localStorage.setItem('currentUser', JSON.stringify(usuario));

      // Update cache
      queryClient.setQueryData(authKeys.currentUser(), usuario);

      toast({
        title: 'Cuenta creada exitosamente',
        description: `Bienvenido ${usuario.Nombre || usuario.Correo}`,
      });

      // Redirect to settings page after a short delay
      setTimeout(() => {
        window.location.href = '/settings';
      }, 1500);
    },
    onError: (error: Error) => {
      toast({
        title: 'Error al crear cuenta',
        description: error.message || 'Ocurrió un error al crear la cuenta',
        variant: 'destructive',
      });
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return () => {
    localStorage.removeItem('currentUser');
    queryClient.setQueryData(authKeys.currentUser(), null);
    queryClient.clear();

    toast({
      title: 'Sesión cerrada',
      description: 'Has cerrado sesión correctamente',
    });
  };
}

export function useCurrentUser() {
  return useQuery({
    queryKey: authKeys.currentUser(),
    queryFn: () => {
      try {
        const stored = localStorage.getItem('currentUser');
        console.log('Reading from localStorage:', stored ? 'found' : 'not found');
        if (!stored) return null;
        const user = JSON.parse(stored) as Usuario;
        console.log('Parsed user:', { id: user?.Id, email: user?.Correo });
        return user;
      } catch (error) {
        console.error('Error reading user from localStorage:', error);
        return null;
      }
    },
  });
}

export function useCheckAuth() {
  const { data: user } = useCurrentUser();
  return !!user;
}

// Usuarios management hooks
export function useUsuarios() {
  return useQuery({
    queryKey: authKeys.usuarios(),
    queryFn: () => usuariosService.getAll(1000, 0),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}