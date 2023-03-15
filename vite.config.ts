import { defineConfig, resolveBaseUrl } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import { resolve, join } from "path";

export default defineConfig({
  root: process.cwd(),
  base: "/",
  //mode:'development',在配置中指明将会把 serve 和 build 时的模式 都 覆盖掉
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  publicDir: "public",
  cacheDir: "node_modules/.vite", //存储缓存文件的目录
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
    mainFields: ["module", "jsnext:main", "jsnext"],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
      styl: {
        additionalData: `$injectedColor ?= orange`,
      },
    },
    devSourcemap: false, //在开发过程中是否启用 sourcemap
  },
  json: {
    namedExports: true,
    stringify: false,
  },
  server: {
    host: "localhost",
  },

  build: {
    target: "modules",
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        //多文件入口
        main: resolve(__dirname, "index.html"),
        //nested: resolve(__dirname, 'nested/index.html')
      },
    },
  },
  preview: {
    host: "localhost",
    port: 4173,
  },
  optimizeDeps: {},
  ssr: {},
  worker: {},
});
