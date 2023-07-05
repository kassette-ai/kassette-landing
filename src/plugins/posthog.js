import posthog from "posthog-js";

export default {
    install(app) {
        app.config.globalProperties.$posthog = posthog.init(
            "phc_Ei2KDWvuIsrQZbC91DanjkLNTN42fkW90mtqO2XHlDU",
            {
                api_host: "https://app.posthog.com",
            }
        );
    },
};