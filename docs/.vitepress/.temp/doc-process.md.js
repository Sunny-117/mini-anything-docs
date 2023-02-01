import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"文档进度","description":"","frontmatter":{},"headers":[{"level":2,"title":"框架","slug":"框架","link":"#框架","children":[]},{"level":2,"title":"Vue 生态","slug":"vue-生态","link":"#vue-生态","children":[]},{"level":2,"title":"React 生态","slug":"react-生态","link":"#react-生态","children":[{"level":3,"title":"Redux 中间件","slug":"redux-中间件","link":"#redux-中间件","children":[]}]},{"level":2,"title":"上层框架","slug":"上层框架","link":"#上层框架","children":[]},{"level":2,"title":"提效方案","slug":"提效方案","link":"#提效方案","children":[]},{"level":2,"title":"工程化","slug":"工程化","link":"#工程化","children":[]},{"level":2,"title":"NodeJS 工具","slug":"nodejs-工具","link":"#nodejs-工具","children":[]},{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[]}],"relativePath":"doc-process.md","lastUpdated":1673767667000}');
const _sfc_main = { name: "doc-process.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="文档进度" tabindex="-1">文档进度 <a class="header-anchor" href="#文档进度" aria-hidden="true">#</a></h1><div class="danger custom-block"><p class="custom-block-title">进度说明</p><p>目前，mini-anything 仓库 MVP 版本已经完成，详细 code 请看 <a href="https://github.com/Sunny-117/mini-anything" target="_blank" rel="noreferrer">mini-anything</a></p><p>文档还在更新中，大概会在2月初会更新完所有的 MVP 版本文档</p></div><h2 id="框架" tabindex="-1">框架 <a class="header-anchor" href="#框架" aria-hidden="true">#</a></h2><p>📝 Vuejs</p><p>📝 React</p><p>📝 mini-react-hooks</p><h2 id="vue-生态" tabindex="-1">Vue 生态 <a class="header-anchor" href="#vue-生态" aria-hidden="true">#</a></h2><p>📝 mini-vue-router3</p><p>📝 mini-vuex4</p><p>📝 mini-mini-vuex3 100行写一个 vuex</p><p>📝 mini-pinia</p><p>📝 mini-mini-pinia 40行写一个 pinia</p><h2 id="react-生态" tabindex="-1">React 生态 <a class="header-anchor" href="#react-生态" aria-hidden="true">#</a></h2><p>📝 mini-react-router4</p><p>📝 mini-react-router5</p><p>📝 mini-redux</p><p>📝 connected-react-router</p><p>📝 mini-react-redux</p><h3 id="redux-中间件" tabindex="-1">Redux 中间件 <a class="header-anchor" href="#redux-中间件" aria-hidden="true">#</a></h3><p>📝 mini-redux-promise</p><p>📝 mini-redux-thunk</p><p>📝 mini-redux-saga</p><h2 id="上层框架" tabindex="-1">上层框架 <a class="header-anchor" href="#上层框架" aria-hidden="true">#</a></h2><p>📝 mini-dva</p><p>📝 mini-plugin-dva-loading</p><h2 id="提效方案" tabindex="-1">提效方案 <a class="header-anchor" href="#提效方案" aria-hidden="true">#</a></h2><p>📝 mini-ahooks</p><h2 id="工程化" tabindex="-1">工程化 <a class="header-anchor" href="#工程化" aria-hidden="true">#</a></h2><p>📝 mini-webpack</p><p>📝 mini-vite</p><h2 id="nodejs-工具" tabindex="-1">NodeJS 工具 <a class="header-anchor" href="#nodejs-工具" aria-hidden="true">#</a></h2><p>✅ mini-nodemon</p><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-hidden="true">#</a></h2><p>📝 vite 插件</p><p>📝 mini-webpack-loader-plugins</p><p>📝 rollup plugin</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("doc-process.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const docProcess = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  docProcess as default
};
