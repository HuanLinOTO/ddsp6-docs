<template>
    <div class="tip custom-block">
        <p class="custom-block-title">版本额外说明</p>
        <div v-html="extra_info"></div>
        <div v-if="!extra_info">该版本没啥好说的</div>
    </div>
    <n-space vertical>
        <div>
            等待 {{ props.wait_time }}s 后，方可点击跳转按钮
        </div>
        <NButton @click="gogogo" style="width: 100%">跳转到 123 云盘</NButton>
    </n-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import * as naive from "naive-ui"
const { NButton, NSpace } = naive

import versions from "../version.json"

const props = defineProps<{
    wait_time: number,
    link: string,
    version: string
}>();

const extra_info = ref("")

const cur_version = versions.find(v => v.version === props.version)
console.log(cur_version)

if (cur_version?.patch) {
    extra_info.value = `
该版本需要安装补丁才可使用，补丁 <a href="${cur_version?.patch}">点击下载</a>
使用方法：
将补丁内文件覆盖到整合包根目录
    `.split("\n").map(l => `<p>${l}</p>`).join("")
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