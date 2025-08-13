<template>
    <div class="relative" ref="notificationContainer">
        <!-- Notification Bell/Trigger -->
        <button @click="toggleNotifications"
            class="relative p-2 cursor-pointer focus:outline-none rounded-full transition-colors" :class="{
                'bg-blue-50 text-gray-600 hover:text-gray-800': isOpen && !isDarkMode,
                'bg-blue-900/20 text-gray-300 hover:text-gray-100': isOpen && isDarkMode,
                'text-gray-600 hover:text-gray-800': !isOpen && !isDarkMode,
                'text-gray-300 hover:text-gray-100': !isOpen && isDarkMode
            }">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <!-- Notification Badge -->
            <span v-if="unreadCount > 0"
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                {{ unreadCount > 99 ? '99+' : unreadCount }}
            </span>
        </button>

        <!-- Notification Panel -->
        <Transition enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div v-if="isOpen" :class="[
                'z-50 shadow-xl border',
                isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200',
                isExpanded
                    ? 'fixed top-0 right-0 h-full flex flex-col w-2/5 rounded-l-lg overflow-hidden'
                    : 'absolute right-0 mt-2 w-96 rounded-lg'
            ]" @click.stop>
                <!-- Header -->
                <div class="flex items-center justify-between p-4"
                    :class="isDarkMode ? 'border-b border-gray-700' : 'border-b border-gray-200'">
                    <div class="flex items-center">
                        <h3 class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                            {{ getLocale('Notifications') }}</h3>
                        <span v-if="isExpanded" class="ml-2 text-sm"
                            :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">({{ notifications.length }})</span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <svg aria-label="Mark all as read" @click="markAllAsRead" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="isDarkMode
                                ? 'text-gray-200 hover:text-gray-400'
                                : 'text-gray-500 hover:text-gray-700'"
                            class="lucide w-6 h-6 cursor-pointer p-1 rounded-full lucide-check-check-icon lucide-check-check">
                            <path d="M18 6 7 17l-5-5" />
                            <path d="m22 10-7.5 7.5L13 16" />
                        </svg>
                        <svg aria-label="Delete all notifications" @click="deleteAllNotifications"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            :class="isDarkMode
                                ? 'text-gray-400 hover:text-gray-200'
                                : 'text-gray-500 hover:text-gray-700'"
                            class="lucide cursor-pointer  p-1 rounded-full w-6 h-6 lucide-trash-icon lucide-trash">
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M3 6h18" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                        <button v-if="isExpanded" @click="toggleExpandedView" :class="isDarkMode
                            ? 'p-1 rounded-full hover:bg-gray-700'
                            : 'p-1 rounded-full hover:bg-gray-100'" aria-label="Close expanded view">
                            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Tabs -->
                <div class="flex" :class="isDarkMode ? 'border-b border-gray-700' : 'border-b border-gray-200'">
                    <button v-for="category in notificationCategories" :key="category.id"
                        @click="activeCategory = category.id"
                        class="flex-1 px-4 py-3 text-sm font-medium text-center border-b-2 transition-colors" :class="[
                            activeCategory === category.id
                                ? isDarkMode
                                    ? 'border-blue-500 text-blue-400 bg-blue-900/20'
                                    : 'border-blue-500 text-blue-600 bg-blue-50'
                                : isDarkMode
                                    ? 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                        ]">
                        {{ getLocale(category.name) }}
                        <span v-if="category.count > 0"
                            class="ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                            {{ category.count }}
                        </span>
                    </button>
                </div>

                <!-- Notifications List -->
                <div class="overflow-y-auto" :class="isExpanded ? 'h-full' : 'max-h-96'">
                    <!-- Loading State -->
                    <div v-if="isLoading" class="p-6 text-center"
                        :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 inline" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        <span>{{ getLocale('Loading notifications') }}...</span>
                    </div>

                    <!-- Error State -->
                    <div v-else-if="error" class="p-6 text-center">
                        <div class="text-red-500 mb-2">{{ error }}</div>
                        <button @click="refreshNotifications" class="text-sm px-4 py-2 rounded transition-colors"
                            :class="isDarkMode
                                ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'">
                            {{ getLocale('Try Again') }}
                        </button>
                    </div>

                    <!-- Empty State -->
                    <div v-else-if="filteredNotifications.length === 0" class="p-6 text-center"
                        :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
                        <div class="mb-2">
                            {{ activeCategory === 'unread' ? getLocale('No unread notifications') :
                                activeCategory === 'read' ? getLocale('No read notifications') :
                                    notifications.length === 0 ? getLocale('No notifications yet') :
                                        getLocale('No notifications') }}
                        </div>
                        <button v-if="activeCategory !== 'inbox' && notifications.length > 0"
                            @click="activeCategory = 'inbox'" class="text-sm text-blue-500 hover:text-blue-600">
                            {{ getLocale('View all notifications') }}
                        </button>
                        <div v-else-if="notifications.length === 0" class="mt-4">
                            <svg class="w-12 h-12 mx-auto mb-4 opacity-50"
                                :class="isDarkMode ? 'text-gray-600' : 'text-gray-300'" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <p class="text-sm">{{ getLocale("You're all caught up!") }}</p>
                        </div>
                    </div>

                    <!-- Notifications -->
                    <div v-else>
                        <div v-for="notification in filteredNotifications" :key="notification.id"
                            @click="markAsRead(notification.id)"
                            class="flex items-start cursor-pointer p-4 transition-colors" :class="[
                                { 'border-b last:border-b-0': true },
                                isDarkMode
                                    ? { 'hover:bg-gray-800 border-gray-700': true, 'bg-blue-900/10': !notification.read_at }
                                    : { 'hover:bg-gray-50 border-gray-100': true, 'bg-blue-50': !notification.read_at }
                            ]">
                            <!-- Avatar or Icon -->
                            <div class="w-10 h-10 mr-3 flex-shrink-0 flex items-center justify-center">
                                <img v-if="notification.avatar" :src="notification.avatar" :alt="notification.title"
                                    class="w-10 h-10 rounded-full">
                                <div v-else class="w-10 h-10 rounded-full flex items-center justify-center"
                                    :class="getTypeIconBg(notification.status, isDarkMode)">
                                    <svg class="w-5 h-5" :class="getTypeIconColor(notification.status, isDarkMode)"
                                        fill="currentColor" viewBox="0 0 20 20">
                                        <path v-if="notification.status === 'info'" fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd" />
                                        <path v-else-if="notification.status === 'success'" fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                        <path v-else-if="notification.status === 'warning'" fill-rule="evenodd"
                                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                            clip-rule="evenodd" />
                                        <path v-else-if="notification.status === 'error'" fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                            clip-rule="evenodd" />
                                        <path v-else fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-medium"
                                        :class="isDarkMode ? 'text-gray-100' : 'text-gray-900'">
                                        {{ getLocale(notification.title) }}
                                    </p>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
                                            {{ formatTime(notification.created_at, currentTime.value) }}
                                        </span>

                                        <!-- Notification Actions Menu -->
                                        <div class="relative group">
                                            <button
                                                class="p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                                :class="isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'"
                                                @click.stop="toggleNotificationMenu(notification.id)">
                                                <svg class="w-4 h-4"
                                                    :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'"
                                                    fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                </svg>
                                            </button>

                                            <!-- Dropdown Menu -->
                                            <div v-if="openMenuId === notification.id"
                                                class="absolute right-0 mt-1 w-40 rounded-md shadow-lg z-10"
                                                :class="isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'"
                                                @click.stop>
                                                <button v-if="!notification.read_at"
                                                    @click="markAsRead(notification.id)"
                                                    class="w-full text-left px-4 py-2 text-sm hover:bg-opacity-80 transition-colors"
                                                    :class="isDarkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'">
                                                    {{ getLocale('Mark as Read') }}
                                                </button>
                                                <button @click="deleteNotification(notification.id)"
                                                    class="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-opacity-80 transition-colors"
                                                    :class="isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'">
                                                    {{ getLocale('Delete') }}
                                                </button>
                                            </div>
                                        </div>

                                        <div v-if="!notification.read_at" class="w-2 h-2 bg-blue-500 rounded-full">
                                        </div>
                                    </div>
                                </div>

                                <p class="text-sm mt-1" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                                    {{ notification.message }}
                                </p>

                                <!-- Progress Bar -->
                                <div v-if="notification.progress !== undefined && notification.progress !== null"
                                    class="mt-2">
                                    <div class="flex items-center justify-between mb-1">
                                        <span class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">{{
                                            getLocale('Progress') }}</span>
                                        <span class="text-xs font-medium"
                                            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                                            {{ notification.progress }}%
                                        </span>
                                    </div>
                                    <div class="w-full rounded-full h-2"
                                        :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-200'">
                                        <div class="h-2 rounded-full progress-bar"
                                            :style="{ width: `${notification.progress}%` }" :class="[
                                                {
                                                    'bg-blue-500': (notification.status === 'info' || !notification.status),
                                                    'bg-yellow-500': notification.status === 'warning',
                                                    'bg-red-500': notification.status === 'error',
                                                    'bg-green-500': notification.status === 'success'
                                                }
                                            ]">
                                        </div>
                                    </div>
                                </div>

                                <!-- Action Buttons -->
                                <div v-if="notification.actions" class="flex flex-wrap gap-2 mt-3">
                                    <button v-for="action in notification.actions" :key="action.label"
                                        @click.stop="handleAction(action, notification)"
                                        class="px-3 py-1 text-xs font-medium rounded transition-colors" :style="{
                                            backgroundColor: action.backgroundColor || '#f3f4f6',
                                            color: getContrastColor(action.backgroundColor)
                                        }">
                                        {{ getLocale(action.label) }}
                                    </button>
                                </div>

                                <!-- Attachment -->
                                <div v-if="notification.attachment" class="mt-3 p-2 rounded border" :class="isDarkMode
                                    ? 'bg-gray-800 border-gray-700'
                                    : 'bg-gray-50 border-gray-200'">
                                    <div class="flex items-center">
                                        <svg class="w-4 h-4 mr-2"
                                            :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                        </svg>
                                        <span class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                                            {{ notification.attachment }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="p-4" :class="isDarkMode ? 'border-t border-gray-700' : 'border-t border-gray-200'">
                    <button @click="toggleExpandedView" class="w-full text-center text-sm font-medium" :class="isDarkMode
                        ? 'text-blue-400 hover:text-blue-300'
                        : 'text-blue-600 hover:text-blue-800'">
                        {{ isExpanded ? getLocale('Collapse View') : getLocale('View all notifications') }}
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import {
    formatTime,
    getTypeIconBg,
    getTypeIconColor,
    getContrastColor,
    checkUserColorScheme,
    saveThemePreference,
    createSampleNotifications
} from './utils/notificationUtils.js';
import notificationAPI from './api/notificationAPI.js';

// Props
const props = defineProps({
    notifications: {
        type: Array,
        default: () => []
    },
    user_id: {
        type: [String, Number],
        default: null
    },
    // show categories
    categories: {
        type: Array,
        default: () => [{ id: 'inbox', name: 'All', count: 6 },
        { id: 'unread', name: 'New', count: 0 }]
    },
    locales: {
        type: Object,
        default: () => { }
    }
});

const getLocale = (key) => {
    return props.locales[key] || key; // Fallback to key if locale not found
};

// Emits
const emit = defineEmits(['notification-read', 'action-clicked', 'all-read', 'all-deleted']);

// Reactive state
const isOpen = ref(false);
const isExpanded = ref(false);
const activeCategory = ref('inbox');
const isDarkMode = ref(false);
const notificationContainer = ref(null);
const currentTime = ref(Date.now()); // Add reactive timestamp for time updates
const isLoading = ref(false);
const error = ref(null);
const openMenuId = ref(null);

// Sample data (replace with props or API data)
const notifications = ref([]);


// Computed properties
const unreadCount = computed(() =>
    notifications.value.filter(n => !n.read_at).length
);

const filteredNotifications = computed(() => {
    if (activeCategory.value === 'unread') {
        return notifications.value.filter(n => !n.read_at);
    } else if (activeCategory.value === 'read') {
        return notifications.value.filter(n => n.read_at);
    }
    return notifications.value; // 'inbox' or 'all' - show all notifications
});

const notificationCategories = computed(() => [
    {
        id: 'inbox',
        name: 'All',
        count: 0
    },
    {
        id: 'unread',
        name: 'New',
        count: unreadCount.value
    },
]);

// Methods
const loadNotifications = async () => {
    try {
        isLoading.value = true;
        error.value = null;

        const response = await notificationAPI.getNotifications();
        notifications.value = response.data || response; // Handle different response formats
        console.log(notifications.value)
    } catch (err) {
        error.value = getLocale('Failed to load notifications');
        console.error('Error loading notifications:', err);

        // Fallback to sample data if API fails
        notifications.value = createSampleNotifications();


    } finally {
        isLoading.value = false;
    }
};

const toggleNotifications = async () => {
    if (isOpen.value && isExpanded.value) {
        // If expanded, collapse first before closing
        isExpanded.value = false;
    }

    // Load notifications when opening for the first time
    if (!isOpen.value && notifications.value.length === 0) {
        await loadNotifications();
    }

    isOpen.value = !isOpen.value;
};

const toggleExpandedView = () => {
    isExpanded.value = !isExpanded.value;

    // If we're expanding and not already at the top, scroll to top
    if (isExpanded.value) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const markAllAsRead = async () => {
    try {
        isLoading.value = true;

        await notificationAPI.markAllAsRead();

        // Update local state
        loadNotifications();

        emit('all-read');
    } catch (err) {
        error.value = getLocale('Failed to mark all as read');
        console.error('Error marking all as read:', err);
    } finally {
        isLoading.value = false;
    }
};

const deleteAllNotifications = async () => {
    // Show confirmation dialog
    if (!confirm(getLocale('Are you sure you want to delete all notifications? This action cannot be undone.'))) {
        return;
    }

    try {
        isLoading.value = true;

        await notificationAPI.deleteAllNotifications();

        // Clear local state
        notifications.value = [];

        emit('all-deleted');
    } catch (err) {
        error.value = getLocale('Failed to delete all notifications');
        console.error('Error deleting all notifications:', err);
    } finally {
        isLoading.value = false;
    }
};

const markAsRead = async (notificationId) => {
    try {
        await notificationAPI.markAsRead(notificationId);

        // Update local state
        const notification = notifications.value.find(n => n.id === notificationId);
        if (notification) {
            notification.read_at = true;
            emit('notification-read', notification);
        }
    } catch (err) {
        error.value = getLocale('Failed to mark notification as read');
        console.error('Error marking notification as read:', err);
    }
};

const deleteNotification = async (notificationId) => {
    try {
        await notificationAPI.deleteNotification(notificationId);

        // Remove from local state
        const index = notifications.value.findIndex(n => n.id === notificationId);
        if (index !== -1) {
            notifications.value.splice(index, 1);
        }
    } catch (err) {
        error.value = getLocale('Failed to delete notification');
        console.error('Error deleting notification:', err);
    }
};

const refreshNotifications = async () => {
    await loadNotifications();
};

const handleAction = async (action, notification) => {
    emit('action-clicked', { action, notification });

    // Mark as read when user interacts with notification
    if (!notification.read_at) {
        await markAsRead(notification.id);
    }

    // Handle actions
    if (action.label.toLowerCase() === getLocale('accept') || action.label.toLowerCase() === getLocale('decline')) {
        // Remove notification after action
        await deleteNotification(notification.id);
    }

    // Navigate if URL exists and not '#'
    if (action.url && action.url !== '#') {
        const link = document.createElement('a');
        link.href = action.url;
        link.target = '_blank'; // Open in new tab
        link.rel = 'noopener noreferrer'; // Security best practice
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

const toggleNotificationMenu = (notificationId) => {
    openMenuId.value = openMenuId.value === notificationId ? null : notificationId;
};

const handleClickOutside = (event) => {
    if (notificationContainer.value && !notificationContainer.value.contains(event.target)) {
        if (isExpanded.value) {
            // If expanded, just collapse instead of closing completely
            isExpanded.value = false;
        } else {
            isOpen.value = false;
        }
    }
    // Close any open menus
    openMenuId.value = null;
};

let timeTracker = null;

// Lifecycle hooks
onMounted(async () => {
    const userId = await notificationAPI.getUserId();

    if (!userId) {
        console.error('User ID not found. Please ensure the user is authenticated.');
        return;
    }

    document.addEventListener('click', handleClickOutside);

    // Check user's preferred color scheme
    // isDarkMode.value = checkUserColorScheme();

    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', event => {
                if (!localStorage.getItem('notification-theme')) {
                    // Only auto-switch if user hasn't set a preference
                    isDarkMode.value = event.matches;
                }
            });
    }

    // Load initial notifications
    await loadNotifications();

    // initialize laravel echo
    if (!window.Echo) {
        console.error('Laravel Echo is not defined. Please ensure it is properly imported and configured.');
        return;
    }

    console.log('Setting up Echo channel listener...', props.user_id || userId || 1);
    const channel = Echo.private('App.Models.User.' + (props.user_id || userId || 1));

    // Log channel events
    channel.subscribed(() => {
        console.log('✅ Successfully subscribed to notifications channel');
    });

    channel.error((error) => {
        console.error('🚨 Channel subscription error:', error);
    });

    channel
        .notification((notification) => {
            console.log('New notification received:', notification);

            // check if notification is already in the list
            const existingNotification = notifications.value.find(n => n.id === notification.id);
            if (existingNotification) {
                // Update existing notification
                Object.assign(existingNotification, notification);
            } else {
                // Add new notification
                notifications.value.unshift(notification);
            }
        });

    // Update current time every minute to trigger reactive updates
    timeTracker = setInterval(() => {
        currentTime.value = Date.now();
    }, 60000); // Update every 60 seconds (1 minute)
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);

    // Clean up theme change listener
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)')
            .removeEventListener('change', () => { });
    }

    // clean up interval
    if (timeTracker) {
        clearInterval(timeTracker);
    }

    // Clean up Echo channel listener
    if (window.Echo) {
        const channel = Echo.private('App.Models.User.' + (props.user_id || userId));
        channel.unlisten('.notification');
        channel.unsubscribe();
        console.log('✅ Unsubscribed from notifications channel');
    }
});
</script>

<style scoped>
/* Custom scrollbar for the notifications list */
.max-h-96::-webkit-scrollbar,
.h-\[calc\(100\%-142px\)\]::-webkit-scrollbar {
    width: 4px;
}

.max-h-96::-webkit-scrollbar-track,
.h-\[calc\(100\%-142px\)\]::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.max-h-96::-webkit-scrollbar-thumb,
.h-\[calc\(100\%-142px\)\]::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 2px;
}

.max-h-96::-webkit-scrollbar-thumb:hover,
.h-\[calc\(100\%-142px\)\]::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}

/* Fixed sidebar animation */
.fixed {
    transition: width 0.3s ease, right 0.3s ease;
}

/* Progress bar animation */
.progress-bar {
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: left;
}

/* Progress bar pulse animation for active progress */
@keyframes pulse-progress {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.8;
        transform: scaleY(1.1);
    }
}

.progress-bar:not([style*="100%"]) {
    animation: pulse-progress 2s ease-in-out infinite;
}
</style>
