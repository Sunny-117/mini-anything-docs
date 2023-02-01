import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"vue-router3","description":"","frontmatter":{},"headers":[],"relativePath":"vue-ecology/vue-router3.md","lastUpdated":1673762141000}');
const _sfc_main = { name: "vue-ecology/vue-router3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vue-router3" tabindex="-1">vue-router3 <a class="header-anchor" href="#vue-router3" aria-hidden="true">#</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vue-ecology/vue-router3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vueRouter3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vueRouter3 as default
};
