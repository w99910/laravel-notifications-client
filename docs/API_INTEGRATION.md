# Notification Component with Laravel API Integration

This notification component now includes a complete API wrapper for your Laravel notification routes. The component automatically handles loading, updating, and managing notifications through your Laravel backend.

## Features Added

### 🔌 API Integration

-   Complete wrapper for all Laravel notification routes
-   Automatic loading of notifications from your backend
-   Real-time updates via Laravel Echo
-   Error handling and fallback to sample data

### 🎯 Enhanced UI

-   Loading states with spinners
-   Error handling with retry options
-   Individual notification actions (mark as read, delete)
-   Context menus for each notification
-   Better categorization (All, Unread, Read)

### ⚡ Performance

-   Lazy loading (notifications load only when panel opens)
-   Optimistic updates for better UX
-   Caching support (configurable)

## Laravel Backend Requirements

Make sure your Laravel controller returns data in the expected format:

```php
// Example controller response for getNotifications()
{
    "data": [
        {
            "id": "uuid-here",
            "type": "App\\Notifications\\OrderShipped",
            "title": "Order Shipped",
            "message": "Your order #12345 has been shipped",
            "status": "info", // info, success, warning, error
            "created_at": "2025-01-15T10:30:00Z",
            "read": false,
            "data": {
                // Your custom notification data
                "order_id": 12345,
                "tracking_number": "1Z999AA1234567890"
            },
            "avatar": "https://example.com/avatar.jpg", // optional
            "actions": [ // optional
                {
                    "label": "View Order",
                    "url": "/orders/12345",
                    "backgroundColor": "#3b82f6"
                }
            ]
        }
    ],
    "meta": {
        "total": 25,
        "unread_count": 5
    }
}
```

## Configuration

### 1. Environment Setup

Add these to your `.env` file:

```env
# Notification settings
NOTIFICATION_PREFIX=notifications
NOTIFICATION_MIDDLEWARE=web,auth
```

### 2. CSRF Token

Make sure you have the CSRF token in your HTML head:

```html
<meta name="csrf-token" content="{{ csrf_token() }}" />
```

### 3. User ID (Optional)

Pass the user ID to the component:

```html
<meta name="user-id" content="{{ auth()->id() }}" />
```

## Usage Examples

### Basic Implementation

```html
<!-- In your Blade template -->
<div id="notification-app">
    <notification-component
        :user_id="{{ auth()->id() }}"
        @notification-read="handleNotificationRead"
        @action-clicked="handleActionClick"
        @all-read="handleAllRead"
    >
    </notification-component>
</div>

<script src="{{ mix('js/notifications.js') }}"></script>
```

### Vue 3 Setup

```javascript
import { createApp } from "vue";
import NotificationComponent from "./src/notification.vue";

const app = createApp({
    components: {
        NotificationComponent,
    },
    methods: {
        handleNotificationRead(notification) {
            console.log("Read:", notification);
        },
        handleActionClick({ action, notification }) {
            console.log("Action:", action, notification);
        },
        handleAllRead() {
            console.log("All marked as read");
        },
    },
});

app.mount("#notification-app");
```

### Direct API Usage

```javascript
import notificationAPI from "./src/api/notificationAPI.js";

// Load notifications
const notifications = await notificationAPI.getNotifications();

// Mark as read
await notificationAPI.markAsRead("notification-id");

// Delete notification
await notificationAPI.deleteNotification("notification-id");

// Mark all as read
await notificationAPI.markAllAsRead();
```

## Laravel Echo Integration

The component automatically listens for real-time notifications. Make sure Laravel Echo is configured:

```javascript
// In your main.js or app.js
import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;
window.Echo = new Echo({
    broadcaster: "pusher",
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: true,
});
```

## Customization

### API Configuration

```javascript
// Modify the API base URL or prefix
import { NotificationAPI } from "./src/api/notificationAPI.js";

const customAPI = new NotificationAPI(
    "https://api.example.com",
    "custom-notifications"
);
```

### Component Props

```javascript
// Available props
{
    user_id: Number|String,     // User ID for Echo channel
    categories: Array,          // Custom categories (optional)
    notifications: Array        // Initial notifications (optional)
}
```

### Event Handling

```javascript
// Available events
@notification-read="handler"    // Single notification marked as read
@action-clicked="handler"       // Action button clicked
@all-read="handler"            // All notifications marked as read
```

## Troubleshooting

### 1. Notifications not loading

-   Check Laravel routes are accessible
-   Verify CSRF token is present
-   Check browser console for API errors

### 2. Real-time updates not working

-   Ensure Laravel Echo is properly configured
-   Check WebSocket connection in browser dev tools
-   Verify user authentication for private channels

### 3. Styling issues

-   Component uses Tailwind CSS classes
-   Make sure Tailwind is included in your build
-   All styles are scoped to avoid conflicts

## Testing

Use the browser console to test API functions:

```javascript
// Test API functions (available in development)
window.testAPIFunctions.loadAll();
window.testAPIFunctions.markAllRead();
window.testNotification(); // Simulate real-time notification
```

## Next Steps

1. **Customize notification types**: Add your own status types and icons
2. **Add more actions**: Implement custom action handlers
3. **Enhance permissions**: Add role-based notification filtering
4. **Add sound effects**: Implement audio notifications
5. **Mobile optimization**: Add touch gestures and mobile-specific UX
