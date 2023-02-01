import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/mini-anything-docs/assets/vue3.57505927.png";
const __pageData = JSON.parse('{"title":"vue3源码结构","description":"","frontmatter":{},"headers":[{"level":2,"title":"一句话概括","slug":"一句话概括","link":"#一句话概括","children":[]}],"relativePath":"vue3/index.md","lastUpdated":1673098688000}');
const _sfc_main = { name: "vue3/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vue3源码结构" tabindex="-1">vue3源码结构 <a class="header-anchor" href="#vue3源码结构" aria-hidden="true">#</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><ul><li><code>@vue/compiler-sfc</code>：专门解析<code>sfc</code>，转成纯 <code>js</code> 文件浏览器才可以运行(需要用到<code>@vue/compiler-dom</code>和<code>@vue/compiler-core</code>)</li><li><code>@vue/compiler-dom和@vue/compiler-core</code>：结合起来专门处理<code>template</code>，把<code>template</code>处理成<code>render</code>函数</li><li><code>@vue/runtime-dom</code>：专门处理 <code>dom</code> 节点上的东西，底层依赖于 <code>@vue/runtime-core</code></li><li><code>@vue/reactivity</code>：实现 <code>vue</code> 响应式</li></ul><h2 id="一句话概括" tabindex="-1">一句话概括 <a class="header-anchor" href="#一句话概括" aria-hidden="true">#</a></h2><p><code>@vue/compiler-sfc</code>依赖<code>@vue/compiler-dom</code>和<code>@vue/compiler-core</code>解析<code>template</code>，转换成<code>render</code>函数，后面的东西交给运行时来执行</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vue3/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
