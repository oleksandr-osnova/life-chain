import nextConfig from "../../next.config.mjs";

export const prepareSrc = (src: string) => {
  const { basePath = '' } = nextConfig
  return `${basePath}${src}`
}
