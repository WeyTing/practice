// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/USER/Desktop/%E5%B0%96%E5%85%B5/F2E02/%E6%96%B0%E5%B0%96%E5%85%B5%E8%AA%B2%E7%A8%8B%E9%85%8D%E5%90%88git/0428/vue-course/011-provide/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/USER/Desktop/%E5%B0%96%E5%85%B5/F2E02/%E6%96%B0%E5%B0%96%E5%85%B5%E8%AA%B2%E7%A8%8B%E9%85%8D%E5%90%88git/0428/vue-course/011-provide/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/USER/Desktop/%E5%B0%96%E5%85%B5/F2E02/%E6%96%B0%E5%B0%96%E5%85%B5%E8%AA%B2%E7%A8%8B%E9%85%8D%E5%90%88git/0428/vue-course/011-provide/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/USER/Desktop/%E5%B0%96%E5%85%B5/F2E02/%E6%96%B0%E5%B0%96%E5%85%B5%E8%AA%B2%E7%A8%8B%E9%85%8D%E5%90%88git/0428/vue-course/011-provide/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXERlc2t0b3BcXFxcXHU1QzE2XHU1MTc1XFxcXEYyRTAyXFxcXFx1NjVCMFx1NUMxNlx1NTE3NVx1OEFCMlx1N0EwQlx1OTE0RFx1NTQwOGdpdFxcXFwwNDI4XFxcXHZ1ZS1jb3Vyc2VcXFxcMDExLXByb3ZpZGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFVTRVJcXFxcRGVza3RvcFxcXFxcdTVDMTZcdTUxNzVcXFxcRjJFMDJcXFxcXHU2NUIwXHU1QzE2XHU1MTc1XHU4QUIyXHU3QTBCXHU5MTREXHU1NDA4Z2l0XFxcXDA0MjhcXFxcdnVlLWNvdXJzZVxcXFwwMTEtcHJvdmlkZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVVNFUi9EZXNrdG9wLyVFNSVCMCU5NiVFNSU4NSVCNS9GMkUwMi8lRTYlOTYlQjAlRTUlQjAlOTYlRTUlODUlQjUlRTglQUElQjIlRTclQTglOEIlRTklODUlOEQlRTUlOTAlODhnaXQvMDQyOC92dWUtY291cnNlLzAxMS1wcm92aWRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgdnVlRGV2VG9vbHMoKSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNmQsU0FBUyxlQUFlLFdBQVc7QUFFaGdCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUo2TyxJQUFNLDJDQUEyQztBQU90VCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
