export const getDeviceCategory = (innerWidth: number) => {
  if (innerWidth >= 1536) return '2xl';
  if (innerWidth >= 1280) return 'xl';
  if (innerWidth >= 1024) return 'lg';
  if (innerWidth >= 768) return 'md';

  return 'sm';
};
