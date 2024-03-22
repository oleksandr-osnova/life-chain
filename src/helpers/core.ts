import nextConfig from "../../next.config.mjs";

export const prepareSrc = src => {
  const { basePath = '' } = nextConfig
  return `${basePath}${src}`
}
