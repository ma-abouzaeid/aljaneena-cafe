/**
 * Helper utility to construct correct image paths for both
 * local development (http://localhost:3000/) and production (GitHub Pages with basePath).
 */
export const getImagePath = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/aljaneena-cafe' : '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (basePath && !cleanPath.startsWith(basePath)) {
    return `${basePath}${cleanPath}`;
  }
  return cleanPath;
};
