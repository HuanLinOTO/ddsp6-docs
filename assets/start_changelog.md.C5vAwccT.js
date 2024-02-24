import{_ as a,c as r,o as t,V as l}from"./chunks/framework.gkMttBBc.js";const e="/assets/DB89BEF3-A9CF-4d4b-9CDD-D215FBE10D5B_.DUIR8b_p.png",u=JSON.parse('{"title":"更新日志","description":"","frontmatter":{},"headers":[],"relativePath":"start/changelog.md","filePath":"start/changelog.md"}'),s={name:"start/changelog.md"},c=l('<h1 id="更新日志" tabindex="-1">更新日志 <a class="header-anchor" href="#更新日志" aria-label="Permalink to &quot;更新日志&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>2024.2.24 已更新</strong></p><p>由于 DDSP 5.0 的底模存在些许问题，我自己炖了一个底模。</p><p>经过测试，一份 40 min 左右的数据集，同参数情况下训练10000step，效果优于原底模和无底模训练</p><p>底模使用了 97.35h 的高质量数据集，分别来自 galgame，授权数据，开源数据集，以及自己掏钱找人唱的。</p><p>因为自己学业问题没时间进行测试，所以底模的效果并没有经过验证，因此没有放入整合包中。</p><p>如果你想加入测试，可以<a href="https://www.123pan.com/s/BEzKjv-1fqqv.html" target="_blank" rel="noreferrer">点击这</a>下载模型权重。</p><p>上次公开的底模链接: <a href="https://www.123pan.com/s/BEzKjv-Vkqqv.html" target="_blank" rel="noreferrer">https://www.123pan.com/s/BEzKjv-Vkqqv.html</a></p><p>使用方法：解压后用解压出来的文件替换掉整合包目录下的 <code>pretrained</code> 文件夹中的 <code>model_0.pt</code> 文件，请在覆盖前备份原文件。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>再次说明，请使用 <strong>bandizip（最新版本）</strong> 或者 <strong>7zip</strong> 解压整合包，不要使用 winrar 等其他解压软件，否则可能会出现文件损坏、压缩方式不支持的情况。</p><details><summary>查看图片</summary><img src="'+e+'"></details></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>点击标题左侧的 icon 即可下载对应版本</p></div><h2 id="⏬-2024-2-24-1-0-0-rc9" tabindex="-1"><a href="https://www.123pan.com/s/BEzKjv-9fqqv.html" target="_blank" rel="noreferrer">⏬</a> 2024/2/24 1.0.0 rc9 <a class="header-anchor" href="#⏬-2024-2-24-1-0-0-rc9" aria-label="Permalink to &quot;[⏬](https://www.123pan.com/s/BEzKjv-9fqqv.html) 2024/2/24 1.0.0 rc9&quot;">​</a></h2><ul><li>更新 nsf_hifigan 声码器模型</li><li>去掉了无用日志输出</li><li>添加 FFmpeg，支持 mp3 等其他格式的推理了</li><li>修复了一些小 bug</li></ul><h2 id="⏬-2024-2-15-1-0-0-rc8" tabindex="-1"><a href="https://www.123pan.com/s/BEzKjv-ykqqv.html" target="_blank" rel="noreferrer">⏬</a> 2024/2/15 1.0.0 rc8 <a class="header-anchor" href="#⏬-2024-2-15-1-0-0-rc8" aria-label="Permalink to &quot;[⏬](https://www.123pan.com/s/BEzKjv-ykqqv.html) 2024/2/15 1.0.0 rc8&quot;">​</a></h2><ul><li>添加了当 spk 字段缺失时的提醒</li></ul><h2 id="⏬-2024-2-15-1-0-0-rc7" tabindex="-1"><a href="https://www.123pan.com/s/BEzKjv-PEqqv.html" target="_blank" rel="noreferrer">⏬</a> 2024/2/15 1.0.0 rc7 <a class="header-anchor" href="#⏬-2024-2-15-1-0-0-rc7" aria-label="Permalink to &quot;[⏬](https://www.123pan.com/s/BEzKjv-PEqqv.html) 2024/2/15 1.0.0 rc7&quot;">​</a></h2><ul><li>支持保存配置</li></ul><h2 id="⏬-2024-2-15-1-0-0-rc6" tabindex="-1"><a href="https://www.123pan.com/s/BEzKjv-EEqqv.html" target="_blank" rel="noreferrer">⏬</a> 2024/2/15 1.0.0 rc6 <a class="header-anchor" href="#⏬-2024-2-15-1-0-0-rc6" aria-label="Permalink to &quot;[⏬](https://www.123pan.com/s/BEzKjv-EEqqv.html) 2024/2/15 1.0.0 rc6&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>此版本 bug 较多，已停止下载</p></div><ul><li>支持在 WebUI 实现训练暂停</li><li>启动 tensorboard 后自动打开</li></ul><h2 id="⏬-2024-2-14-1-0-0-rc5" tabindex="-1"><a href="https://www.123pan.com/s/BEzKjv-WQqqv.html" target="_blank" rel="noreferrer">⏬</a> 2024/2/14 1.0.0 rc5 <a class="header-anchor" href="#⏬-2024-2-14-1-0-0-rc5" aria-label="Permalink to &quot;[⏬](https://www.123pan.com/s/BEzKjv-WQqqv.html) 2024/2/14 1.0.0 rc5&quot;">​</a></h2><ul><li>支持多说话人训练，推理</li><li>训练：增加最大轮数选项 <s>其实是为了凑整</s></li><li>数据处理：更新手动数据处理</li><li>布局：采用平行布局，更加美观</li><li>更换压缩参数，减小体积</li><li><s>下一个版本上加功德按钮</s></li></ul><h2 id="⏬-2024-2-13-1-0-0-rc4" tabindex="-1"><a href="https://www.123pan.com/s/BEzKjv-V9qqv.html" target="_blank" rel="noreferrer">⏬</a> 2024/2/13 1.0.0 rc4 <a class="header-anchor" href="#⏬-2024-2-13-1-0-0-rc4" aria-label="Permalink to &quot;[⏬](https://www.123pan.com/s/BEzKjv-V9qqv.html) 2024/2/13 1.0.0 rc4&quot;">​</a></h2><ul><li>训练：新增不使用底模选项</li><li>数据处理：新增使用设备选项</li><li>移除模型</li></ul><h2 id="⏬-2024-2-13-1-0-0-rc3" tabindex="-1"><a href="https://www.123pan.com/s/BEzKjv-l9qqv.html" target="_blank" rel="noreferrer">⏬</a> 2024/2/13 1.0.0 rc3 <a class="header-anchor" href="#⏬-2024-2-13-1-0-0-rc3" aria-label="Permalink to &quot;[⏬](https://www.123pan.com/s/BEzKjv-l9qqv.html) 2024/2/13 1.0.0 rc3&quot;">​</a></h2><ul><li>修复了归档后缺工作目录的 bug</li><li>此版本自带真寻的模型，绝对不是我不小心打包进去的</li></ul><h2 id="⏬-2024-2-13-1-0-0-rc2" tabindex="-1"><a href="https://www.123pan.com/s/BEzKjv-89qqv.html" target="_blank" rel="noreferrer">⏬</a> 2024/2/13 1.0.0 rc2 <a class="header-anchor" href="#⏬-2024-2-13-1-0-0-rc2" aria-label="Permalink to &quot;[⏬](https://www.123pan.com/s/BEzKjv-89qqv.html) 2024/2/13 1.0.0 rc2&quot;">​</a></h2><ul><li>添加群链接</li><li>重打环境，减小体积</li></ul><h2 id="⏬-2024-2-13-1-0-0-rc1" tabindex="-1"><a href="https://www.123pan.com/s/BEzKjv-W9qqv.html" target="_blank" rel="noreferrer">⏬</a> 2024/2/13 1.0.0 rc1 <a class="header-anchor" href="#⏬-2024-2-13-1-0-0-rc1" aria-label="Permalink to &quot;[⏬](https://www.123pan.com/s/BEzKjv-W9qqv.html) 2024/2/13 1.0.0 rc1&quot;">​</a></h2><ul><li>第一个没多少 bug 的版本</li></ul><hr><p><s>在此之前发了 10 几个不太能跑版本，都没写日志，绝对不是我懒</s></p>',25),o=[c];function i(h,n,p,m,w,d){return t(),r("div",null,o)}const v=a(s,[["render",i]]);export{u as __pageData,v as default};
