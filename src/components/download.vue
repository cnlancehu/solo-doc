<template>
    <div v-if="Object.keys(list).length > 0">
        <h1>Solo v{{ list.version }} <Badge :text="i18n.latest" type="tip" vertical="middle" /></h1>
        <p style="text-align: right;">{{ i18n.published }} {{ list.update_time }}</p>

        <div class="download-grid">
            <div v-for="(artifact, i) in list.artifacts" :key="i" class="download-item">
                <div class="download-info">
                    <div class="platform">
                        <span>
                            <i style="margin-right: 8px; width: 16px; text-align: center;" :class="artifact.os === 'Windows' ? 'fa-brands fa-windows' :
                                artifact.os === 'Android' ? 'fa-brands fa-android' :
                                    artifact.os === 'Linux' ? 'fa-brands fa-linux' :
                                        artifact.os === 'macOS' ? 'fa-brands fa-apple' : ''"></i>
                            <strong>{{ artifact.os }}</strong> - {{ artifact.arch }}
                        </span>
                    </div>
                    <div class="file-info">
                        {{ artifact.name }} - {{ artifact.size }}
                    </div>
                </div>
                <a :href="artifact.url" class="download-button" download>{{ i18n.download }}</a>
            </div>
        </div>
    </div>
    <div v-else>
        <h1 style="text-align: center;">{{ status }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        lang: {
            type: String,
            default: 'en',
            validator: value => ['en', 'zh'].includes(value)
        }
    },
    data() {
        const i18nData = {
            zh: {
                latest: "最新版本",
                download: "下载",
                loading: "加载中...",
                error: "加载数据失败，请稍后再试。",
                published: "发布于",
            },
            en: {
                latest: "Latest Version",
                download: "Download",
                loading: "Loading...",
                error: "Error loading data. Please try again later.",
                published: "Published at",
            }
        };

        return {
            status: i18nData[this.lang].loading,
            list: {},
            i18n: i18nData[this.lang]
        }
    },
    async mounted() {
        try {
            const response = await fetch("https://pkg.lance.fun/list/solo");
            this.list = await response.json();
        } catch (error) {
            this.status = this.i18n.error;
        }
    },
};
</script>

<style scoped>
.download-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
}

.download-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color, #ddd);
    border-radius: 0.375rem;
}
</style>
