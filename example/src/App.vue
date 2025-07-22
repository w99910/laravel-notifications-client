<template>
    <div class="p-6">
        <header class="flex items-center justify-between mb-8 bg-white p-4 border-b border-gray-200">
            <div class="flex items-center space-x-4">
                <img src="https://placehold.co/30x30" alt="Logo" class="h-8 w-8 rounded-full" />
                <h1 class="text-xl font-semibold">Your App</h1>
            </div>

            <div class="flex items-center space-x-4">
                <!-- Test button for debugging -->
                <button @click="testNotification"
                    class="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                    Test Notification
                </button>

                <!-- Mount the notification component here -->
                <NotificationComponent />
                <!-- <notification-component></notification-component> -->
                <!-- <notification></notification> -->
                <!-- User profile -->
                <div class="flex items-center space-x-2">
                    <!-- <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
                        alt="User" class="h-8 w-8 rounded-full" /> -->
                    <div class="h-8 w-8 rounded-full bg-gray-400"></div>
                    <span class="text-sm font-medium">John Doe</span>
                </div>
            </div>
        </header>
    </div>
</template>

<script setup>
// import NotificationComponent from 'notification';
import NotificationComponent from '../../src/notification.vue';

// Test function to trigger a notification via PHP
const testNotification = async () => {
    console.log('Testing notification...');
    try {
        const response = await fetch('http://localhost:8000/index.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('PHP response:', response);
    } catch (error) {
        console.error('Error triggering notification:', error);
    }
};

// import notification from "../../dist/notification.es.js";
</script>
