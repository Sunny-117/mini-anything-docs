import{_ as e,c as o,o as c,a as d}from"./app.3113b857.js";const t="/mini-anything-docs/assets/vue3.57505927.png",h=JSON.parse('{"title":"vue3源码结构","description":"","frontmatter":{},"headers":[{"level":2,"title":"一句话概括","slug":"一句话概括","link":"#一句话概括","children":[]}],"relativePath":"vue3/index.md","lastUpdated":null}'),i={name:"vue3/index.md"},r=d('<h1 id="vue3源码结构" tabindex="-1">vue3源码结构 <a class="header-anchor" href="#vue3源码结构" aria-hidden="true">#</a></h1><p><img src="'+t+'" alt=""></p><ul><li><code>@vue/compiler-sfc</code>：专门解析<code>sfc</code>，转成纯 <code>js</code> 文件浏览器才可以运行(需要用到<code>@vue/compiler-dom</code>和<code>@vue/compiler-core</code>)</li><li><code>@vue/compiler-dom和@vue/compiler-core</code>：结合起来专门处理<code>template</code>，把<code>template</code>处理成<code>render</code>函数</li><li><code>@vue/runtime-dom</code>：专门处理 <code>dom</code> 节点上的东西，底层依赖于 <code>@vue/runtime-core</code></li><li><code>@vue/reactivity</code>：实现 <code>vue</code> 响应式</li></ul><h2 id="一句话概括" tabindex="-1">一句话概括 <a class="header-anchor" href="#一句话概括" aria-hidden="true">#</a></h2><p><code>@vue/compiler-sfc</code>依赖<code>@vue/compiler-dom</code>和<code>@vue/compiler-core</code>解析<code>template</code>，转换成<code>render</code>函数，后面的东西交给运行时来执行</p>',5),a=[r];function l(n,s,u,m,p,_){return c(),o("div",null,a)}const f=e(i,[["render",l]]);export{h as __pageData,f as default};
