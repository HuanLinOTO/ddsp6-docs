# 下载中转页 {{ version }}

您需要查看下列的注意事项后才能跳转到网盘

其中包含了十分重要的信息，缺失这些可能导致您无法使用整合包

:::tip 
:::details 新底模相关 
**2024.2.24 已更新**

由于 DDSP 5.0 的底模存在些许问题，我自己炖了一个底模。

经过测试，一份 40 min 左右的数据集，同参数情况下训练 10000 step，效果优于原底模和无底模训练

底模使用了 97.35h 的高质量数据集，分别来自 galgame，授权数据，开源数据集，以及自己掏钱找人唱的。   

因为自己学业问题没时间进行测试，所以底模的效果并没有经过验证，因此没有放入整合包中。

如果你想加入测试，可以[点击这](https://www.123pan.com/s/BEzKjv-1fqqv.html)下载模型权重。

上次公开的底模链接: https://www.123pan.com/s/BEzKjv-Vkqqv.html

使用方法：解压后用解压出来的文件替换掉整合包目录下的 `pretrained` 文件夹中的 `model_0.pt` 文件，请在覆盖前备份原文件。
:::

:::warning
再次说明，请使用 **bandizip（最新版本）** 或者 **7zip** 解压整合包，不要使用 winrar 等其他解压软件，否则可能会出现文件损坏、压缩方式不支持的情况。
:::details 图片
<img src="/imgs/{DB89BEF3-A9CF-4d4b-9CDD-D215FBE10D5B}.png"/>
:::

:::tip
从 1.0.0 rc11 开始，包内不再自带 uvr 模型，需要自行下载

下载链接：[uvr 模型](https://www.123pan.com/s/BEzKjv-MCqqv.html)
:::

等待 {{ wait_time }}s 后，方可点击跳转按钮

<NButton @click="gogogo" style="width: 100%">跳转到 123 云盘</NButton>

<script lang="ts" setup>
import { parse, decode_string } from "../utils/url.ts"
import { ref } from "vue"
import * as naive from "naive-ui"

const { NButton } = naive 

const params = parse(typeof window === "undefined"?"http://example.com/?link=aHR0cHM6Ly93d3cuMTIzcGFuLmNvbS9zL0JFektqdi1lQ3Fxdi5odG1s&version=MS4wLjAgcmMxMS1maXhlZA==":location.href)

console.log(params)

if (!params.link) {
    // 回到首页
    // window.location.href = "/"
}
const link = decode_string(params.link)
const version = decode_string(params.version)

const wait_time = ref(15)

console.log(link)

const timer = setInterval(() => {
    wait_time.value --
    if (wait_time.value <= 0) {
        clearInterval(timer)
        // location.href = link
    }
}, 1000)

const gogogo = () => {
    if (wait_time.value > 0) {
        return
    }
    window.open(link, "_blank")
}
</script>