# 更新日志

:::tip
**2024.2.24 已更新**

由于 DDSP 5.0 的底模存在些许问题，我自己炖了一个底模。

经过测试，一份 40 min 左右的数据集，同参数情况下训练10000step，效果优于原底模和无底模训练

底模使用了 97.35h 的高质量数据集，分别来自 galgame，授权数据，开源数据集，以及自己掏钱找人唱的。   

因为自己学业问题没时间进行测试，所以底模的效果并没有经过验证，因此没有放入整合包中。

如果你想加入测试，可以[点击这](https://www.123pan.com/s/BEzKjv-1fqqv.html)下载模型权重。

上次公开的底模链接: https://www.123pan.com/s/BEzKjv-Vkqqv.html

使用方法：解压后用解压出来的文件替换掉整合包目录下的 `pretrained` 文件夹中的 `model_0.pt` 文件，请在覆盖前备份原文件。
:::

:::warning
再次说明，请使用 **bandizip（最新版本）** 或者 **7zip** 解压整合包，不要使用 winrar 等其他解压软件，否则可能会出现文件损坏、压缩方式不支持的情况。
<details>
    <summary>查看图片</summary>
    <img src="/imgs/{DB89BEF3-A9CF-4d4b-9CDD-D215FBE10D5B}.png"/>
</details>

:::

:::tip
点击标题左侧的 icon 即可下载对应版本
:::

## [⏬](https://www.123pan.com/s/BEzKjv-9fqqv.html) 2024/2/24 1.0.0 rc9
 - 更新 nsf_hifigan 声码器模型
 - 去掉了无用日志输出
 - 添加 FFmpeg，支持 mp3 等其他格式的推理了
 - 修复了一些小 bug

## [⏬](https://www.123pan.com/s/BEzKjv-ykqqv.html) 2024/2/15 1.0.0 rc8
 - 添加了当 spk 字段缺失时的提醒

## [⏬](https://www.123pan.com/s/BEzKjv-PEqqv.html) 2024/2/15 1.0.0 rc7
 - 支持保存配置

## [⏬](https://www.123pan.com/s/BEzKjv-EEqqv.html) 2024/2/15 1.0.0 rc6
:::warning
此版本 bug 较多，已停止下载
:::
 - 支持在 WebUI 实现训练暂停
 - 启动 tensorboard 后自动打开

## [⏬](https://www.123pan.com/s/BEzKjv-WQqqv.html) 2024/2/14 1.0.0 rc5
 - 支持多说话人训练，推理
 - 训练：增加最大轮数选项 ~~其实是为了凑整~~
 - 数据处理：更新手动数据处理
 - 布局：采用平行布局，更加美观
 - 更换压缩参数，减小体积
 - ~~下一个版本上加功德按钮~~

## [⏬](https://www.123pan.com/s/BEzKjv-V9qqv.html) 2024/2/13 1.0.0 rc4
 - 训练：新增不使用底模选项
 - 数据处理：新增使用设备选项
 - 移除模型

## [⏬](https://www.123pan.com/s/BEzKjv-l9qqv.html) 2024/2/13 1.0.0 rc3
 - 修复了归档后缺工作目录的 bug
 - 此版本自带真寻的模型，绝对不是我不小心打包进去的

## [⏬](https://www.123pan.com/s/BEzKjv-89qqv.html) 2024/2/13 1.0.0 rc2
 - 添加群链接
 - 重打环境，减小体积

## [⏬](https://www.123pan.com/s/BEzKjv-W9qqv.html) 2024/2/13 1.0.0 rc1 
 - 第一个没多少 bug 的版本

---

~~在此之前发了 10 几个不太能跑版本，都没写日志，绝对不是我懒~~