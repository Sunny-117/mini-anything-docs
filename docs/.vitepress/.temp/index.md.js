import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"mini-anything","text":"迷你前端源码库","image":{"src":"/img.png","alt":"mini-anything"},"actions":[{"theme":"brand","text":"现在开始","link":"./getting-started"},{"theme":"alt","text":"View on GitHub","link":"https://github.com/Sunny-117/mini-anything"}]},"features":[{"title":"🦾 Type Strong","details":"Written in TypeScript"},{"title":"🏆 Closest to the official","details":"Organize in strict accordance with the official library source code, including directories and variable names"},{"title":"😍 Easy to study","details":"Super mini version, separated from the main process of source code library"}]},"headers":[],"relativePath":"index.md","lastUpdated":1672225229000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
