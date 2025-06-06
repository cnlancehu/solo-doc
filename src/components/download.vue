<template>
    <div class="download-container">
        <div v-if="Object.keys(list).length > 0" class="content-wrapper">
            <div class="header-section">
                <h1 class="title">
                    Solo {{ list.version }}
                </h1>
                <p class="publish-time">{{ i18n.published }} {{ list.update_time }}</p>
            </div>

            <div class="platform-groups">
                <div v-for="(group, platform) in groupedArtifacts" :key="platform" class="platform-group">
                    <div class="platform-header">
                        <i :class="getPlatformIcon(platform)" class="platform-icon"></i>
                        <h3 class="platform-title">{{ platform }}</h3>
                    </div>

                    <div class="download-grid">
                        <div v-for="(artifact, i) in group" :key="i" class="download-item"
                            :style="{ '--delay': i * 100 + 'ms' }">
                            <div class="download-info">
                                <div class="arch-info">
                                    <span class="arch-badge">{{ artifact.arch }}</span>
                                </div>
                                <div class="file-details">
                                    <div class="file-name">{{ artifact.name }}</div>
                                    <div class="file-size">{{ artifact.size }}</div>
                                </div>
                            </div>

                            <a :href="artifact.url" class="download-button" download>
                                <i class="fa-solid fa-download"></i>
                                <span>{{ i18n.download }}</span>
                                <div class="button-shine"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="loading-wrapper">
            <div class="loading-spinner">
                <div class="spinner"></div>
            </div>
            <h2 class="loading-text">{{ status }}</h2>
        </div>
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
                download: "下载",
                loading: "加载中...",
                error: "加载数据失败，请稍后再试。",
                published: "发布于",
                platforms: "平台",
            },
            en: {
                download: "Download",
                loading: "Loading...",
                error: "Error loading data. Please try again later.",
                published: "Published at",
                platforms: "Platforms",
            }
        };

        return {
            status: i18nData[this.lang].loading,
            list: {},
            i18n: i18nData[this.lang]
        }
    },
    computed: {
        groupedArtifacts() {
            if (!this.list.artifacts) return {};

            return this.list.artifacts;
        }
    },
    methods: {
        getPlatformIcon(platform) {
            const icons = {
                'Windows': 'fa-brands fa-windows',
                'Android': 'fa-brands fa-android',
                'Linux': 'fa-brands fa-linux',
                'macOS': 'fa-brands fa-apple'
            };
            return icons[platform] || 'fa-solid fa-desktop';
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
.download-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.content-wrapper {
    animation: fadeInUp 0.8s ease-out;
}

.header-section {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
}

.title {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: var(--vp-c-accent);
    font-weight: 700;
    text-shadow: 0 2px 8px var(--vp-c-shadow);
    animation: titleGlow 3s ease-in-out infinite alternate;
}

html[data-theme="dark"] .title {
    color: #ffffff;
    text-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
}

.publish-time {
    color: var(--vp-c-text-mute);
    font-size: 1.1rem;
    margin: 0;
}

.stats-section {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
}

.stat-card {
    background: var(--vp-c-bg-alt);
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    text-align: center;
    border: 1px solid var(--vp-c-divider);
    box-shadow: 0 4px 12px var(--vp-c-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--vp-c-shadow);
}

.stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--vp-c-accent);
    margin-bottom: 0.5rem;
}

.stat-label {
    color: var(--vp-c-text-mute);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.platform-groups {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.platform-group {
    animation: slideInLeft 0.6s ease-out;
}

.platform-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--vp-c-divider);
    position: relative;
}

.platform-icon {
    font-size: 2rem;
    margin-right: 1rem;
    color: var(--vp-c-accent);
}

html[data-theme="dark"] .platform-icon {
    color: #ffffff;
}

.platform-title {
    font-size: 1.5rem;
    margin: 0;
    margin-right: auto;
    color: var(--vp-c-text);
}

.download-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1rem;
}

.download-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-divider);
    border-radius: 1rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    animation: fadeInScale 0.5s ease-out both;
    animation-delay: var(--delay);
}

.download-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, var(--vp-c-accent-soft), transparent);
    transition: left 0.5s ease;
}

html[data-theme="dark"] .download-item::before {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
}

.download-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px var(--vp-c-shadow);
    border-color: var(--vp-c-accent);
}

html[data-theme="dark"] .download-item:hover {
    border-color: #ffffffb9;
}

.download-item:hover::before {
    left: 100%;
}

.download-info {
    flex: 1;
}

.arch-info {
    margin-bottom: 0.5rem;
}

.arch-badge {
    background: var(--vp-c-accent);
    color: var(--vp-c-accent-text);
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

html[data-theme="dark"] .arch-badge {
    background: #fffffff1;
    color: #000000;
}

.file-details {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.file-name {
    font-weight: 600;
    color: var(--vp-c-text);
    font-size: 1rem;
}

.file-size {
    color: var(--vp-c-text-mute);
    font-size: 0.9rem;
}

.download-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--vp-c-accent-bg);
    color: var(--vp-c-accent-text);
    text-decoration: none;
    border-radius: 0.75rem;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 12px var(--vp-c-shadow);
    border: 1px solid var(--vp-c-accent);
}

html[data-theme="dark"] .download-button {
    background: #ffffff;
    color: #000000;
    border: 1px solid #ffffff;
}

.download-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--vp-c-shadow);
    background: var(--vp-c-accent-hover);
}

html[data-theme="dark"] .download-button:hover {
    background: rgba(255, 255, 255, 0.9);
}

.button-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
}

html[data-theme="dark"] .button-shine {
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
}

.download-button:hover .button-shine {
    left: 100%;
}

.loading-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    animation: fadeIn 0.5s ease-out;
}

.loading-spinner {
    margin-bottom: 2rem;
}

.spinner {
    width: 60px;
    height: 60px;
    border: 4px solid var(--vp-c-divider);
    border-left: 4px solid var(--vp-c-accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

html[data-theme="dark"] .spinner {
    border-left: 4px solid #ffffffb9;
}

.loading-text {
    color: var(--vp-c-text-mute);
    margin: 0;
    font-size: 1.25rem;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes titleGlow {
    from {
        text-shadow: 0 2px 8px var(--vp-c-shadow);
    }

    to {
        text-shadow: 0 4px 16px var(--vp-c-shadow), 0 0 20px var(--vp-c-accent-soft);
    }
}

html[data-theme="dark"] .title {
    animation: titleGlowDark 3s ease-in-out infinite alternate;
}

@keyframes titleGlowDark {
    from {
        text-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
    }

    to {
        text-shadow: 0 4px 16px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.1);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@media (max-width: 1024px) {
    .download-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }

    .download-item {
        padding: 1.2rem;
    }
}

@media (max-width: 768px) {
    .download-container {
        padding: 1rem 0.5rem;
    }

    .title {
        font-size: 2rem;
    }

    .publish-time {
        font-size: 1rem;
    }

    .header-section {
        margin-bottom: 2rem;
    }

    .platform-groups {
        gap: 1.5rem;
    }

    .platform-header {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        text-align: left;
        margin-bottom: 1rem;
        padding-bottom: 0.75rem;
    }

    .platform-icon {
        font-size: 1.5rem;
        margin-right: 0.75rem;
    }

    .platform-title {
        font-size: 1.25rem;
    }

    .download-grid {
        grid-template-columns: 1fr;
        gap: 0.75rem;
    }

    .download-item {
        padding: 1rem;
        border-radius: 0.75rem;
    }

    .download-info {
        flex: 1;
        margin-right: 1rem;
    }

    .arch-badge {
        font-size: 0.7rem;
        padding: 0.2rem 0.6rem;
    }

    .file-name {
        font-size: 0.9rem;
    }

    .file-size {
        font-size: 0.8rem;
    }

    .download-button {
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
        border-radius: 0.6rem;
        flex-shrink: 0;
    }

    .download-button i {
        font-size: 0.9rem;
    }

    /* 移动端禁用悬停效果 */
    .download-item:hover {
        transform: none;
        box-shadow: 0 4px 12px var(--vp-c-shadow);
    }

    .download-button:hover {
        transform: none;
        box-shadow: 0 4px 12px var(--vp-c-shadow);
    }
}

@media (max-width: 480px) {
    .download-container {
        padding: 0.75rem 0.25rem;
    }

    .title {
        font-size: 1.75rem;
    }

    .platform-groups {
        gap: 1.25rem;
    }

    .download-item {
        padding: 0.875rem;
        gap: 0.75rem;
    }

    .download-info {
        margin-right: 0.75rem;
    }

    .arch-badge {
        font-size: 0.65rem;
        padding: 0.15rem 0.5rem;
    }

    .file-name {
        font-size: 0.85rem;
    }

    .file-size {
        font-size: 0.75rem;
    }

    .download-button {
        padding: 0.5rem 0.875rem;
        font-size: 0.85rem;
    }

    .download-button span {
        display: none;
    }

    .download-button i {
        font-size: 1rem;
    }
}
</style>