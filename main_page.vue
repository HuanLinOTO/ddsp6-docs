<template>
    <div>
        <div class="title-box">
            <!-- <div class="title-bg"></div> -->
            <LandingBackground></LandingBackground>
            <div class="title">DDSP 6.0</div>
            <div class="sub-title">非官方整合包文档</div>
            <div class="sub-sub-title">易于使用 | 可用 CPU 训练 | 面向小白</div>
        </div>
        <n-flex justify="center">
            <n-button  type="primary" size="large" @click="goto('/start/')">
                <template #icon>
                    <RocketLaunchRound></RocketLaunchRound>
                </template>
                马上开始
            </n-button>
            <n-button  type="info" size="large" @click="goto('https://qm.qq.com/cgi-bin/qm/qr?k=igP4OFTLm_-8QFpXb5l6qXrunFYJDMDt&jump_from=webapi&authKey=KlzIXtfCZmCm7mv+gFS7GXnUm+cL1DQ2OVoqaY8IOUxxREnIoAnIDHcJOHbQLTo0')">
                <template #icon>
                    <ChatBubbleFilled></ChatBubbleFilled>
                </template>
                加入群聊
            </n-button>
            <n-button type="info" size="large" @click="goto('/download/?link=|| LatestVersionLinkPlaceHolder ||&version=|| LatestVersionPlaceHolderEncoded ||')">
                <template #icon>
                    <FileDownloadFilled></FileDownloadFilled>
                </template>
                下载最新版本 || LatestVersionPlaceHolder ||
            </n-button>
        </n-flex>
    </div>
</template>

<script lang="ts" setup>
import LandingBackground from './components/LandingBackground.vue';
import * as naive from "naive-ui"
const { NButton, NFlex, useMessage } = naive
import { RocketLaunchRound, ChatBubbleFilled, FileDownloadFilled } from '@vicons/material';
import { onMounted } from "vue"
// import Button from './components/Button.vue';
import './index.css'

const goto = (url: string) => {
    // console.log("goto", url);
    // if (!url.startsWith('http') && !url.startsWith('https'))
    //     url = `http://${window.location.origin}${url}`
    if (typeof window !== 'undefined') {
        location.href = url;
    }
    
}
const message = useMessage();
onMounted(() =>{
    message.info("文档已迁移到 ddsp.dysjs.com, 旧域名不再维护")
    console.log("mounted");
    
})
</script>

<style lang="scss" scoped>

.title-box {
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
    /* font-family: sfpro, sans-serif; */
    .title-bg {
        position: absolute;
        z-index: -1;
        height: 100%;
        width: 100%;
        --tw-gradient-stops: red, blue;
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        transition: clip-path 0.5s ease-in-out;
        clip-path: polygon(70.5424% 41.8695%, 75.166% 52.7696%, 44.4262% 36.2115%, 43.5959% 83.2837%, 45.985% 82.9772%, 13.5457% 109.842%, 56.1683% 11.189%, 86.281% 57.6911%, -21.6608% 102.57%, 40.8016% 33.4501%, 48.3169% 82.2832%, 7.33869% 33.7219%, 11.4006% 71.5851%, 68.49% 64.791%, 73.4071% 0.219186%, 85.8941% 24.0206%);
    }
    .title {
        font-size: 3em;
        font-weight: bold;
        padding: 64px;
        padding-bottom: 24px;
        color: #f87171;
    }

    .sub-title {
        font-size: 2.25em;
        font-weight: 500;
        font-weight: bold;
        font-family: var(--vp-font-family-base);
        padding-bottom: 24px;
    }
    .sub-sub-title {
        font-size: 1.25em;
        font-weight: 500;
        font-weight: bold;
        color: #585858;
        font-family: var(--vp-font-family-base);
    }
}
</style>