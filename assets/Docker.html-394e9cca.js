import{_ as a,o as e,c as t,a as s}from"./app-521e935c.js";const d={},n=s(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td>sudo ufw status</td><td>查看防火墙状态<br>inactive是关闭，active是开启</td></tr><tr><td>sudo ufw disable</td><td>关闭防火墙</td></tr><tr><td>sudo ufw enable</td><td>开启防火墙<br>开启防火墙，开启的状态下，只有系统允许的端口才能被其他主机访问。</td></tr><tr><td>sudo ufw reload</td><td>重启防火墙</td></tr><tr><td>sudo ufw allow 端口号</td><td>开放指定端口号</td></tr><tr><td>sudo ufw delete allow 端口号</td><td>关闭指定端口</td></tr><tr><td>sudo ufw deny 端口号</td><td>不允许访问指定端口号</td></tr></tbody></table><h2 id="使用官方安装脚本自动安装" tabindex="-1"><a class="header-anchor" href="#使用官方安装脚本自动安装" aria-hidden="true">#</a> 使用官方安装脚本自动安装</h2><p>安装命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以使用国内 daocloud 一键安装命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -sSL https://get.daocloud.io/docker | sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="docker-commit-命令" tabindex="-1"><a class="header-anchor" href="#docker-commit-命令" aria-hidden="true">#</a> Docker commit 命令</h1><p>**docker commit 😗*从容器创建一个新的镜像。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> commit <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>REPOSITORY<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ OPTIONS说明：</p><ul><li>**-a 😗*提交的镜像作者；</li><li>**-c 😗*使用Dockerfile指令来创建镜像；</li><li>**-m 😗*提交时的说明文字；</li><li>**-p 😗*在commit时，将容器暂停。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>将容器a404c6c174a2 保存为新的镜像,并添加提交人信息和说明信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> commit <span class="token parameter variable">-a</span> <span class="token string">&quot;cxrs.xyz&quot;</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;2023-03-28&quot;</span> dfa30120a6af  mariadb:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),r=[n];function i(c,o){return e(),t("div",null,r)}const u=a(d,[["render",i],["__file","Docker.html.vue"]]);export{u as default};
