<template>
    <ClientOnly>
        <template v-for="(item, index) in extra_info">
            <div class="tip custom-block">
                <p class="custom-block-title">版本额外说明 {{ index+1 }}</p>
                <div v-html="item"></div>
            </div>
        </template>
        <n-space vertical>
            <div>
                等待 {{ props.wait_time }}s 后，方可点击跳转按钮
            </div>
            <NButton @click="gogogo" style="width: 100%">跳转到 123 云盘</NButton>
        </n-space>
    </ClientOnly>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import * as naive from "naive-ui"
const { NButton, NSpace } = naive

import versions from "../version.json"
import env_versions from "../env_version.json"

const props = defineProps<{
    wait_time: number,
    link: string,
    version: string
}>();

const extra_info = ref<string[]>([])

const cur_version = versions.find(v => v.version === props.version)
console.log(cur_version)

if (cur_version?.patch) {
    extra_info.value.push(`
该版本需要安装补丁才可使用，补丁 <a href="${cur_version?.patch}">点击下载</a>
使用方法：
将补丁内文件覆盖到整合包根目录
    `.split("\n").map(l => `<p>${l}</p>`).join(""))
}

if (cur_version?.env) {
    extra_info.value.push(`
该版本需要搭配环境包才可使用
环境版本 ${cur_version?.env}，如果您已安装过该环境包，可直接下载整合包
<a href="${env_versions[cur_version?.env]}">点击下载</a>
将环境包内文件覆盖到整合包根目录，确保根目录存在 <code>.conda</code> 文件夹即可
    `.split("\n").map(l => `<p>${l}</p>`).join(""))
}

const gogogo = () => {
    if (props.wait_time > 0) {
        return
    }
    window.open(props.link, "_blank")
}

</script>

<style lang="less" scoped>

</style>