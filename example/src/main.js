import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// import "../../dist/client.css";

import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: "pusher",
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    wsHost: import.meta.env.VITE_PUSHER_HOST,
    wsPort: import.meta.env.VITE_PUSHER_PORT,
    wssPort: import.meta.env.VITE_PUSHER_PORT,
    forceTLS: false,
    encrypted: false, // Changed to false since we're using localhost without SSL
    disableStats: true,
    enabledTransports: ["ws", "wss"],
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    authEndpoint: false,
    authorizer: (channel, options) => {
        return {
            authorize: (socketId, callback) => {
                callback(true);
                // axios.post('/api/broadcasting/auth', {
                //     socket_id: socketId,
                //     channel_name: channel.name
                // })
                // .then(response => {
                //     callback(false, response.data);
                // })
                // .catch(error => {
                //     callback(true, error);
                // });
            },
        };
    },
});

// Add debugging
console.log("Echo configuration:", {
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    wsHost: import.meta.env.VITE_PUSHER_HOST,
    wsPort: import.meta.env.VITE_PUSHER_PORT,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
});

// Log connection events
window.Echo.connector.pusher.connection.bind("connected", () => {
    console.log("✅ Echo connected successfully!");
});

window.Echo.connector.pusher.connection.bind("disconnected", () => {
    console.log("❌ Echo disconnected");
});

window.Echo.connector.pusher.connection.bind("error", (error) => {
    console.error("🚨 Echo connection error:", error);
});

createApp(App).mount("#app");
