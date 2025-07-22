/**
 * Notification Configuration
 * Configure the notification system settings
 */

export const notificationConfig = {
    // API configuration
    api: {
        baseURL: window.location.origin,
        prefix: "notifications",
        timeout: 10000, // Request timeout in milliseconds
    },

    // Real-time configuration
    realtime: {
        enabled: true,
        reconnectOnFail: true,
        maxReconnectAttempts: 5,
    },

    // UI configuration
    ui: {
        autoMarkAsReadOnView: false, // Auto mark as read when notification is viewed
        showProgressAnimations: true,
        maxNotificationsDisplay: 50,
        refreshInterval: 300000, // Refresh every 5 minutes (300000ms)
    },

    // Cache configuration
    cache: {
        enabled: true,
        ttl: 300000, // 5 minutes cache
        key: "notification_cache",
    },

    // Default notification categories
    defaultCategories: [
        { id: "inbox", name: "All" },
        { id: "unread", name: "Unread" },
        { id: "read", name: "Read" },
    ],
};

export default notificationConfig;
