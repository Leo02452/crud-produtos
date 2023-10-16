import { createContext, useCallback, useEffect, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { useQueryClient } from 'react-query';

import { useToast } from '@chakra-ui/react';
import UnauthorizedException from '../application/exceptions/unauthorized.exception';

import ApiClient from '../providers/api-client.provider';

import QueryClientConfig from '../constants/query-client.constant';

export type AuthContextProps = {
  token: string;
  isAuthenticated: boolean;
  logout(): void;
  authenticate(token: string): Promise<void>;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const queryClient = useQueryClient();

  const toast = useToast({
    position: 'top-right',
  });

  const [cookies, setCookie, delCookie] = useCookies(['token']);

  const logout = useCallback(async () => {
    ApiClient.defaults.headers.common.Authorization = '';

    queryClient.setDefaultOptions({ ...QueryClientConfig.defaultOptions });

    delCookie('token', {
      path: '/',
    });
  }, [delCookie, queryClient]);

  const authenticate = useCallback(
    async (token: string) => {
      ApiClient.defaults.headers.common.Authorization = token;

      queryClient.setDefaultOptions({
        mutations: {
          onError: (err: any) => {
            if (err instanceof UnauthorizedException) {
              toast({
                title: 'Sessão expirada!',
                description:
                  'Sua sessão expirou, por favor, faça login novamente.',
                status: 'error',
              });
              logout();
            }
          },
        },
        queries: {
          ...QueryClientConfig.defaultOptions?.queries,
          onError: (err: any) => {
            if (err instanceof UnauthorizedException) {
              toast({
                title: 'Sessão expirada!',
                description:
                  'Sua sessão expirou, por favor, faça login novamente.',
                status: 'error',
              });
              logout();
            }
          },
        },
      });

      setCookie('token', token, {
        path: '/',
        sameSite: 'none',
      });
    },
    [logout, setCookie, queryClient, toast],
  );

  const isAuthenticated = useMemo(() => !!cookies.token, [cookies]);

  useEffect(() => {
    if (isAuthenticated) {
      ApiClient.defaults.headers.common.Authorization = cookies.token;

      ApiClient.interceptors.response.use(
        (response) => response,
        (err) => {
          if (err instanceof UnauthorizedException) {
            logout();
          }
        },
      );
    }
  }, [cookies, isAuthenticated, logout]);

  const value = useMemo(
    () => ({
      token: cookies.token as string,
      isAuthenticated,
      authenticate,
      logout,
    }),
    [cookies, isAuthenticated, authenticate, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
