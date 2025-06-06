/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  tailwind: true,
  postcss: true,
  serverModuleFormat: "cjs",
  serverDependenciesToBundle: [/^.*\.(md|mdx)$/],
  watchPaths: ["./app/posts/**/*.md", "./app/posts/**/*.mdx"],
  future: {
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  }
};