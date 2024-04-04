import{n as k}from"./chunks/index.Da_DU5FM.js";import{d as w,h as u,c as l,m as o,e as q,J as p,w as d,p as r,F as f,o as m,t as _,a as g,V as b}from"./chunks/framework.BpLZpJbo.js";const B="/assets/DB89BEF3-A9CF-4d4b-9CDD-D215FBE10D5B_.DUIR8b_p.png",h=n=>atob(n);function E(n){return[...new URL(n).searchParams].reduce((t,[a,e])=>(t[a]=e,t),{})}const z=[{link:"https://www.123pan.com/s/BEzKjv-07qqv.html",date:"2024/4/4",version:"1.0.2 fixed",changes:["修复了大量的累计 bug"]},{link:"https://www.123pan.com/s/BEzKjv-A7qqv.html",date:"2024/4/3",version:"1.0.2",changes:["更新上游代码","混音控制台的音量调节可用了","使用非跨进程的 BS-RoFormer 处理音频（人话：更快了）"],patch:"https://www.123pan.com/s/BEzKjv-o7qqv.html"},{link:"https://www.123pan.com/s/BEzKjv-uUqqv.html",date:"2024/3/31",version:"1.0.1",changes:["喜报：DDSP 6.0","混音功能支持自定义","更换 BS-RoFormer 模型作为人声提取模型，速度很快","修复了累计的一大堆 bug","功能稳定下来啦，现在是正式版了"]},{link:"https://www.123pan.com/s/BEzKjv-eCqqv.html",date:"2024/3/10",version:"1.0.0 rc11-fixed",changes:["该版本需要额外下载补丁: [Patch 1 for 1.0.0 rc11-fixed](https://www.123pan.com/s/BEzKjv-18qqv.html) 使用该压缩包内的 webui.bin 覆盖完整包的 webui.bin 即可","修复 rc11 中的一些小 bug","新增无说话人配置自动 fallback 到默认说话人的功能","~~再也不深夜写代码了~~"],patch:"https://www.123pan.com/s/BEzKjv-18qqv.html"},{link:"https://www.123pan.com/s/BEzKjv-ICqqv.html",date:"2024/3/10",version:"1.0.0 rc11",changes:["新增自动混音功能","修复了一些小 bug"]},{link:"https://www.123pan.com/s/BEzKjv-jXqqv.html",date:"2024/3/10",version:"1.0.0 rc10-fixed",changes:["该版本为紧急修复版本 没有功能更新"]},{link:"https://www.123pan.com/s/BEzKjv-NXqqv.html",date:"2024/3/10",version:"1.0.0 rc10",changes:["此版本无法使用 请下载上面的 rc10-fixed","修复了写入配置覆盖 spk 的问题","自带 uvr 部分模型，支持推理","修复启动脚本的问题"]},{link:"https://www.123pan.com/s/BEzKjv-9fqqv.html",date:"2024/2/24",version:"1.0.0 rc9",changes:["更新 nsf_hifigan 声码器模型","去掉了无用日志输出","添加 FFmpeg，支持 mp3 等其他格式的推理了","修复了一些小 bug"]},{link:"https://www.123pan.com/s/BEzKjv-ykqqv.html",date:"2024/2/15",version:"1.0.0 rc8",changes:["添加了当 spk 字段缺失时的提醒"]},{link:"https://www.123pan.com/s/BEzKjv-PEqqv.html",date:"2024/2/15",version:"1.0.0 rc7",changes:["支持保存配置"]},{link:"https://www.123pan.com/s/BEzKjv-EEqqv.html",date:"2024/2/15",version:`1.0.0 rc6
:::warning
此版本 bug 较多，已停止下载
:::`,changes:["支持在 WebUI 实现训练暂停","启动 tensorboard 后自动打开"]},{link:"https://www.123pan.com/s/BEzKjv-WQqqv.html",date:"2024/2/14",version:"1.0.0 rc5",changes:["支持多说话人训练，推理","训练：增加最大轮数选项 ~~其实是为了凑整~~","数据处理：更新手动数据处理","布局：采用平行布局，更加美观","更换压缩参数，减小体积","~~下一个版本上加功德按钮~~"]},{link:"https://www.123pan.com/s/BEzKjv-V9qqv.html",date:"2024/2/13",version:"1.0.0 rc4",changes:["训练：新增不使用底模选项","数据处理：新增使用设备选项","移除模型"]},{link:"https://www.123pan.com/s/BEzKjv-l9qqv.html",date:"2024/2/13",version:"1.0.0 rc3",changes:["修复了归档后缺工作目录的 bug","此版本自带真寻的模型，绝对不是我不小心打包进去的"]},{link:"https://www.123pan.com/s/BEzKjv-89qqv.html",date:"2024/2/13",version:"1.0.0 rc2",changes:["添加群链接","重打环境，减小体积"]},{link:"https://www.123pan.com/s/BEzKjv-W9qqv.html",date:"2024/2/13",version:"1.0.0 rc1 ",changes:["第一个没多少 bug 的版本"]}],j={class:"tip custom-block"},K=o("p",{class:"custom-block-title"},"版本额外说明",-1),x=["innerHTML"],D={key:0},F=w({__name:"comp",props:{wait_time:{},link:{},version:{}},setup(n){const{NButton:t,NSpace:a}=k,e=n,s=u(""),i=z.find(c=>c.version===e.version);console.log(i),i.patch&&(s.value=`
该版本需要安装补丁才可使用，补丁 <a href="${i.patch}">点击下载</a>
使用方法：
将补丁内文件覆盖到整合包根目录
    `.split(`
`).map(c=>`<p>${c}</p>`).join(""));const v=()=>{wait_time.value>0||window.open(e.link,"_blank")};return(c,I)=>(m(),l(f,null,[o("div",j,[K,o("div",{innerHTML:s.value},null,8,x),s.value?q("",!0):(m(),l("div",D,"该版本没啥好说的"))]),p(r(a),{vertical:""},{default:d(()=>[o("div",null," 等待 "+_(e.wait_time)+"s 后，方可点击跳转按钮 ",1),p(r(t),{onClick:v,style:{width:"100%"}},{default:d(()=>[g("跳转到 123 云盘")]),_:1})]),_:1})],64))}}),N={id:"下载中转页-version",tabindex:"-1"},S=o("a",{class:"header-anchor",href:"#下载中转页-version","aria-label":'Permalink to "下载中转页 {{ version }}"'},"​",-1),y=b('<p>您需要查看下列的注意事项后才能跳转到网盘</p><p>其中包含了十分重要的信息，缺失这些可能导致您无法使用整合包</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><details class="details custom-block"><summary>新底模相关</summary><p>DDSP 6.0 整合包中的底模是我自己炖的 非官方底模（截至发布也没有官方底模）</p></details></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>再次说明，请使用 <strong>bandizip（最新版本）</strong> 或者 <strong>7zip</strong> 解压整合包，不要使用 winrar 等其他解压软件，否则可能会出现文件损坏、压缩方式不支持的情况。</p><details class="details custom-block"><summary>图片</summary><img src="'+B+'"></details></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>从 1.0.0 rc11 开始，包内不再自带 uvr 模型，需要自行下载</p><p>下载链接：<a href="https://www.123pan.com/s/BEzKjv-h7qqv.html" target="_blank" rel="noreferrer">uvr 模型</a></p><p>下载后解压至整合包根目录 完成操作后你应该能 <code>other_weights</code> 文件夹</p></div>',5),M=JSON.parse('{"title":"下载中转页 {{ version }}","description":"","frontmatter":{},"headers":[],"relativePath":"download/index.md","filePath":"download/index.md"}'),P={name:"download/index.md"},V=w({...P,setup(n){const t=E(typeof window>"u"?"http://example.com/?link=aHR0cHM6Ly93d3cuMTIzcGFuLmNvbS9zL0JFektqdi1lQ3Fxdi5odG1s&version=MS4wLjAgcmMxMS1maXhlZA==":location.href);console.log(t),t.link;const a=h(t.link),e=h(t.version),s=u(15);console.log(a);const i=setInterval(()=>{s.value--,s.value<=0&&clearInterval(i)},1e3);return(v,c)=>(m(),l("div",null,[o("h1",N,[g("下载中转页 "+_(r(e))+" ",1),S]),y,p(F,{wait_time:s.value,link:r(a),version:r(e)},null,8,["wait_time","link","version"])]))}});export{M as __pageData,V as default};
