import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Getting Started","description":"","frontmatter":{"next":"./vue-core/index"},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[{"level":3,"title":"前端框架","slug":"前端框架","link":"#前端框架","children":[]},{"level":3,"title":"Vue 周边","slug":"vue-周边","link":"#vue-周边","children":[]},{"level":3,"title":"React 周边","slug":"react-周边","link":"#react-周边","children":[]},{"level":3,"title":"JavaScript 著名工具库","slug":"javascript-著名工具库","link":"#javascript-著名工具库","children":[]},{"level":3,"title":"工具链","slug":"工具链","link":"#工具链","children":[]},{"level":3,"title":"NodeJS","slug":"nodejs","link":"#nodejs","children":[]},{"level":3,"title":"表单","slug":"表单","link":"#表单","children":[]}]}],"relativePath":"getting-started.md","lastUpdated":1673767667000}');
const _sfc_main = { name: "getting-started.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><p>🚀 mini-anything 是一个集合了前端领域的各种迷你版本的库，方便前端学习者学习，探索前端源码。里面的库是原库的超级迷你版本，只包含原库的主流程，不包含边界case，所以建议仅学习使用，请勿用于生产环境</p><div class="danger custom-block"><p class="custom-block-title">进度说明</p><p>目前，mini-anything 仓库 MVP 版本已经完成，详细 code 请看 <a href="https://github.com/Sunny-117/mini-anything" target="_blank" rel="noreferrer">mini-anything</a></p><p>文档还在更新中，大概会在2月初会更新完所有的 MVP 版本文档</p></div><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-hidden="true">#</a></h2><p>目前，mini-anything 包含了如下源码库的迷你版本</p><h3 id="前端框架" tabindex="-1">前端框架 <a class="header-anchor" href="#前端框架" aria-hidden="true">#</a></h3><p>✅ vue3</p><p>✅ react</p><h3 id="vue-周边" tabindex="-1">Vue 周边 <a class="header-anchor" href="#vue-周边" aria-hidden="true">#</a></h3><p>✅ vue-router</p><p>✅ vuex</p><p>✅ pina</p><p>✅ vueuse</p><p>✅</p><h3 id="react-周边" tabindex="-1">React 周边 <a class="header-anchor" href="#react-周边" aria-hidden="true">#</a></h3><p>✅ react-hooks</p><p>✅ ahooks</p><p>✅ ant design</p><p>✅ connected-react-router</p><p>✅ plugin-dva-loading</p><p>✅ react-redux</p><p>✅ react-router</p><p>✅ redux</p><p>✅ redux-saga</p><p>✅ redux-thunk</p><p>✅ redux-promise</p><p>✅ dva</p><p>✅ umijs</p><h3 id="javascript-著名工具库" tabindex="-1">JavaScript 著名工具库 <a class="header-anchor" href="#javascript-著名工具库" aria-hidden="true">#</a></h3><p>✅ axios</p><p>✅ lodash</p><p>✅ jQuery</p><p>✅ dotenv</p><h3 id="工具链" tabindex="-1">工具链 <a class="header-anchor" href="#工具链" aria-hidden="true">#</a></h3><p>✅ vite</p><p>✅ webpack</p><p>✅ create-vue</p><h3 id="nodejs" tabindex="-1">NodeJS <a class="header-anchor" href="#nodejs" aria-hidden="true">#</a></h3><p>✅ nodemon</p><p>✅ koa</p><p>✅ egg</p><h3 id="表单" tabindex="-1">表单 <a class="header-anchor" href="#表单" aria-hidden="true">#</a></h3><p>✅ formily</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("getting-started.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gettingStarted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gettingStarted as default
};
