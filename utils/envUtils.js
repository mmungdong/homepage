export function getEnvVar(key, defaultValue = '') {
  const value = process.env[key];
  if (!value) return defaultValue;

  return value.replace(/\/$/, '');
}