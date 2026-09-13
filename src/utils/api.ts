import { Capacitor } from '@capacitor/core';

export const getApiUrl = (endpoint: string): string => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  if (typeof window !== 'undefined') {
    const isNative = Capacitor.isNativePlatform();
    const hostname = window.location.hostname;
    const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '';
    const isVercelHost = hostname.includes('vercel.app') || hostname.includes('ap-exam-five');

    // If running in web browser on localhost or Vercel, use relative endpoint
    if (!isNative && (isLocalhost || isVercelHost)) {
      return cleanEndpoint;
    }
  }

  let baseUrl = (import.meta.env.VITE_API_BASE_URL || 'https://ap-exam-five.vercel.app').trim();
  if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(0, -1);
  }

  return `${baseUrl}${cleanEndpoint}`;
};

export const getBattleApiUrl = (endpoint: string): string => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  if (typeof window !== 'undefined') {
    const target = localStorage.getItem('BATTLE_SERVER_TARGET');
    if (target === 'cloud') {
      return `https://ap-exam-five.vercel.app${cleanEndpoint}`;
    }
    if (target === 'local') {
      return cleanEndpoint;
    }
  }

  return getApiUrl(cleanEndpoint);
};

export const getBattleServerTarget = (): 'cloud' | 'local' | 'auto' => {
  if (typeof window === 'undefined') return 'auto';
  const target = localStorage.getItem('BATTLE_SERVER_TARGET');
  if (target === 'cloud' || target === 'local') return target;
  return 'auto';
};

export const setBattleServerTarget = (target: 'cloud' | 'local' | 'auto') => {
  if (typeof window === 'undefined') return;
  if (target === 'auto') {
    localStorage.removeItem('BATTLE_SERVER_TARGET');
  } else {
    localStorage.setItem('BATTLE_SERVER_TARGET', target);
  }
};

