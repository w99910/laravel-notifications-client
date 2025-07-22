/**
 * Example usage of the Notification Component with Laravel API
 *
 * This file demonstrates how to integrate the notification component
 * with a Laravel backend using the provided API wrapper.
 */

import { createApp } from "vue";
import NotificationComponent from "./src/notification.vue";
import notificationAPI from "./src/api/notificationAPI.js";

// Configure the API (optional - defaults to current origin)
// If your Laravel app is on a different domain or port:
// notificationAPI.baseURL = 'https://your-laravel-app.com';
// notificationAPI.prefix = 'custom-notifications-prefix';

// Example: Using the component in a Laravel Blade template
const app = createApp({
    components: {
        NotificationComponent,
    },
    data() {
        return {
            userId: null,
        };
    },
    mounted() {
        // Get user ID from Laravel (you can pass this from Blade)
        this.userId =
            window.Laravel?.user?.id ||
            document.querySelector('meta[name="user-id"]')?.content;
    },
    methods: {
        // Handle notification events
        onNotificationRead(notification) {
            console.log("Notification marked as read:", notification);
        },

        onActionClicked({ action, notification }) {
            console.log(
                "Action clicked:",
                action,
                "for notification:",
                notification
            );

            // You can add custom logic here
            if (action.label === "View Order") {
                // Navigate to order page
                window.location.href = `/orders/${notification.data.order_id}`;
            }
        },

        onAllRead() {
            console.log("All notifications marked as read");
            // You can trigger a page update or show a toast message
        },
    },
});

app.mount("#notification-app");

// Example: Manually triggering notifications (for testing)
// You can remove this in production
window.testNotification = () => {
    // Simulate a notification from the server
    if (window.Echo) {
        // This would normally come from your Laravel backend
        window.Echo.private("App.Models.User.1").notification({
            id: Date.now(),
            type: "App\\Notifications\\TestNotification",
            title: "Test Notification",
            message: "This is a test notification triggered manually",
            status: "info",
            created_at: new Date().toISOString(),
            read: false,
            data: {
                custom_field: "test_value",
            },
        });
    }
};

// Example: Using the API directly
window.notificationAPI = notificationAPI;

// Example functions you can call from browser console for testing:
window.testAPIFunctions = {
    // Load all notifications
    loadAll: () => notificationAPI.getNotifications(),

    // Load unread notifications
    loadUnread: () => notificationAPI.getUnreadNotifications(),

    // Mark all as read
    markAllRead: () => notificationAPI.markAllAsRead(),

    // Mark specific notification as read
    markAsRead: (id) => notificationAPI.markAsRead(id),

    // Delete notification
    deleteNotification: (id) => notificationAPI.deleteNotification(id),

    // Get notification count
    getCount: () => notificationAPI.getNotificationCount(),
};

console.log("🔔 Notification system initialized");
console.log(
    "📝 Available test functions:",
    Object.keys(window.testAPIFunctions)
);
console.log("🧪 Test notification: window.testNotification()");

export default app;
