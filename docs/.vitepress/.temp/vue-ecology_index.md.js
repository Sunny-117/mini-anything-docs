import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Vue.js 生态周边","description":"","frontmatter":{},"headers":[{"level":2,"title":"📝 mini-vue-router3","slug":"📝-mini-vue-router3","link":"#📝-mini-vue-router3","children":[]},{"level":2,"title":"📝 mini-vuex4","slug":"📝-mini-vuex4","link":"#📝-mini-vuex4","children":[]},{"level":2,"title":"📝 mini-mini-vuex3 100行写一个 vuex","slug":"📝-mini-mini-vuex3-100行写一个-vuex","link":"#📝-mini-mini-vuex3-100行写一个-vuex","children":[]},{"level":2,"title":"📝 mini-pinia","slug":"📝-mini-pinia","link":"#📝-mini-pinia","children":[]},{"level":2,"title":"📝 mini-mini-pinia 40行写一个 pinia","slug":"📝-mini-mini-pinia-40行写一个-pinia","link":"#📝-mini-mini-pinia-40行写一个-pinia","children":[]}],"relativePath":"vue-ecology/index.md","lastUpdated":1673762141000}');
const _sfc_main = { name: "vue-ecology/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vue-js-生态周边" tabindex="-1">Vue.js 生态周边 <a class="header-anchor" href="#vue-js-生态周边" aria-hidden="true">#</a></h1><p>TODO: 添加简短描述</p><h2 id="📝-mini-vue-router3" tabindex="-1">📝 mini-vue-router3 <a class="header-anchor" href="#📝-mini-vue-router3" aria-hidden="true">#</a></h2><h2 id="📝-mini-vuex4" tabindex="-1">📝 mini-vuex4 <a class="header-anchor" href="#📝-mini-vuex4" aria-hidden="true">#</a></h2><h2 id="📝-mini-mini-vuex3-100行写一个-vuex" tabindex="-1">📝 mini-mini-vuex3 100行写一个 vuex <a class="header-anchor" href="#📝-mini-mini-vuex3-100行写一个-vuex" aria-hidden="true">#</a></h2><h2 id="📝-mini-pinia" tabindex="-1">📝 mini-pinia <a class="header-anchor" href="#📝-mini-pinia" aria-hidden="true">#</a></h2><h2 id="📝-mini-mini-pinia-40行写一个-pinia" tabindex="-1">📝 mini-mini-pinia 40行写一个 pinia <a class="header-anchor" href="#📝-mini-mini-pinia-40行写一个-pinia" aria-hidden="true">#</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vue-ecology/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
