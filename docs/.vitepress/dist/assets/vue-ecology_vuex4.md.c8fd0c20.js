import{_ as s,c as a,o as n,a as l}from"./app.d94937bc.js";const C=JSON.parse('{"title":"vuex 4","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vuex 是什么？","slug":"vuex-是什么","link":"#vuex-是什么","children":[]},{"level":2,"title":"从使用开始","slug":"从使用开始","link":"#从使用开始","children":[]},{"level":2,"title":"实现思路","slug":"实现思路","link":"#实现思路","children":[{"level":3,"title":"Store 内部数据结构","slug":"store-内部数据结构","link":"#store-内部数据结构","children":[]},{"level":3,"title":"小细节","slug":"小细节","link":"#小细节","children":[]},{"level":3,"title":"设计优化","slug":"设计优化","link":"#设计优化","children":[]},{"level":3,"title":"语法取舍","slug":"语法取舍","link":"#语法取舍","children":[]}]}],"relativePath":"vue-ecology/vuex4.md","lastUpdated":1675255382000}'),p={name:"vue-ecology/vuex4.md"},o=l(`<h1 id="vuex-4" tabindex="-1">vuex 4 <a class="header-anchor" href="#vuex-4" aria-hidden="true">#</a></h1><h2 id="vuex-是什么" tabindex="-1">Vuex 是什么？ <a class="header-anchor" href="#vuex-是什么" aria-hidden="true">#</a></h2><p>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</p><p>“单向数据流”理念的简单示意：</p><p><img src="https://vuex.vuejs.org/flow.png" alt=""></p><h2 id="从使用开始" tabindex="-1">从使用开始 <a class="header-anchor" href="#从使用开始" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createStore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vuex</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 创建一个新的 store 实例</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> store </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createStore</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mutations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">increment</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 根组件 */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将 store 实例作为插件安装</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(store)</span></span>
<span class="line"></span></code></pre></div><p>可见，vuex 入口是通过 createStore 创建一个新的 store 实例，createStore 的参数是一个配置对象，包含了 state, getters，mutations, actions</p><h2 id="实现思路" tabindex="-1">实现思路 <a class="header-anchor" href="#实现思路" aria-hidden="true">#</a></h2><h3 id="store-内部数据结构" tabindex="-1">Store 内部数据结构 <a class="header-anchor" href="#store-内部数据结构" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Store</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">getters</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">mutations</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">actions</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">store</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dispatch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_mutations</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">) </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_actions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">createMutations</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mutations</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">createActions</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">actions</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">createGetters</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getters</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">createCommitFn</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">commit</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">createDispatchFn</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dispatch</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">_state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">commit</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">type</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">payload</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">_mutations</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;">](</span><span style="color:#A6ACCD;">payload</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dispatch</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">type</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">payload</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">_actions</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;">](</span><span style="color:#A6ACCD;">payload</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">install</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">app</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">provide</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">store</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">globalProperties</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$store</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>createMutations, createActions, createGetters 三者功能类似，均是往 store 上挂载 mutation, actions, getters, 以 createMutations 为例：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createMutations</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">store</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">mutations</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">forEachValueKey</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">mutations</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">mutationFn</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">mutationKey</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_mutations</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">mutationKey</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">payload</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">mutationFn</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">payload</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="小细节" tabindex="-1">小细节 <a class="header-anchor" href="#小细节" aria-hidden="true">#</a></h3><p>需要注意的一点：store._mutations 和 store._actions 对象是通过 Object.create(null) 创建的，不存在原形链</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_mutations </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 没有原型链</span></span>
<span class="line"><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_actions </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 没有原型链</span></span>
<span class="line"></span></code></pre></div><h3 id="设计优化" tabindex="-1">设计优化 <a class="header-anchor" href="#设计优化" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 为什么不？</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// store._state = reactive(state)</span></span>
<span class="line"></span></code></pre></div><p>原因：API：replaceState(state: Object)，替换 store 的根状态，仅用状态合并或时光旅行调试。</p><p>当使用 replaceState，store._state.data，这样设计就不需要给整体 reactive 一遍，提升了效率</p><h3 id="语法取舍" tabindex="-1">语法取舍 <a class="header-anchor" href="#语法取舍" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// imp</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Store</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">commit</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">type</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">payload</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// console.log(this)// undefined 因为用的时候直接解构会破坏 this 指向</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 解决：</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 1. es7直接 commit=(type, payload)=&gt; 导致打包体积增大</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 2. vuex的做法：实例上定义commit和dispatch</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">_mutations</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;">](</span><span style="color:#A6ACCD;">payload</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// usage</span></span>
<span class="line"><span style="color:#82AAFF;">addTodo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> commit </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> text) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 直接解构出来的 commit</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">commit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">addTodo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">text</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div><p>实现代码</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 实例上定义commit和dispatch</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createCommitFn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">store</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">commit</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">commit</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">type</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">payload</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">payload</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createDispatchFn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">store</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">dispatch</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">type</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">payload</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dispatch</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">store</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">payload</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,24),e=[o];function t(c,r,y,F,D,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
