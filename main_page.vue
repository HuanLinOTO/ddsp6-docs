<template>
    <div>
        <div class="title-box">
            <!-- <div class="title-bg"></div> -->
            <!-- <LandingBackground></LandingBackground> -->
            <div class="left">
                <div class="title">DDSP 6.0</div>
                <div class="sub-title">非官方整合包文档</div>
                <div class="sub-sub-title">易于使用 | 可用 CPU 训练 | 面向小白</div>
            </div>
            <div class="title-bg"></div>
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

@media (max-width: 768px) {
    .title-bg {
        display: none;
    }
    .title-box {
        display: block;
        text-align: center;
    }
    .left {
        padding: 0 !important;
        .title {
            font-size: 2.5em;
        }
        .sub-title {
            font-size: 1.5em;
        }
        .sub-sub-title {
            font-size: 1em;
        }
    
    }
}
.title-box {
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    // 当屏幕宽度小于 768px ， display none
    .title-bg {
        z-index: -1;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: no-repeat url(./imgs/yxlllc.jpg) 50% 50%;
        box-shadow:
            inset 0 0 50px #ffffff9f,
            inset 20px 0 80px #ff00ff9f,
            inset -20px 0 80px #00ffff9f,
            inset 20px 0 300px #ff00ff9f,
            inset -20px 0 300px #00ffff9f,
            0 0 50px #ffffff9f,
            -10px 0 80px #ff00ff9f,
            10px 0 80px #00ffff9f;
    }
    .left {
        padding-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
            font-size: 4em;
            font-weight: bold;
            padding-bottom: 30px;
            color: #f87171;
        }
    
        .sub-title {
            font-size: 3em;
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
}
</style>