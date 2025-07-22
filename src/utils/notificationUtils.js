/**
 * Notification Utility Functions
 * Contains reusable functions for notification component
 */

/**
 * Format ISO datetime string to human-readable relative time
 * @param {string} isoString - ISO datetime string
 * @param {number} currentTime - Current timestamp for reactivity
 * @returns {string} - Human-readable time (e.g., "2 hours ago")
 */
export const formatTime = (isoString, currentTime) => {
    if (!isoString) return "";

    const now = currentTime || Date.now();
    const date = new Date(isoString);
    const diff = now - date.getTime();

    // Convert milliseconds to minutes, hours, days
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
    return `${years} year${years > 1 ? "s" : ""} ago`;
};

/**
 * Get notification type label
 * @param {string} type - Notification type
 * @returns {string} - Human-readable label
 */
export const getNotificationTypeLabel = (type) => {
    switch (type) {
        case "info":
            return "Information";
        case "warning":
            return "Warning";
        case "error":
            return "Error";
        case "success":
            return "Success";
        default:
            return "Notification";
    }
};

/**
 * Get icon background color based on notification type
 * @param {string} type - Notification type
 * @param {boolean} isDarkMode - Whether dark mode is enabled
 * @returns {string} - CSS class for background color
 */
export const getTypeIconBg = (type, isDarkMode) => {
    switch (type) {
        case "success":
            return isDarkMode ? "bg-green-900" : "bg-green-100";
        case "warning":
            return isDarkMode ? "bg-yellow-900" : "bg-yellow-100";
        case "error":
            return isDarkMode ? "bg-red-900" : "bg-red-100";
        case "info":
        default:
            return isDarkMode ? "bg-blue-900" : "bg-blue-100";
    }
};

/**
 * Get icon color based on notification type
 * @param {string} type - Notification type
 * @param {boolean} isDarkMode - Whether dark mode is enabled
 * @returns {string} - CSS class for text color
 */
export const getTypeIconColor = (type, isDarkMode) => {
    switch (type) {
        case "success":
            return isDarkMode ? "text-green-300" : "text-green-600";
        case "warning":
            return isDarkMode ? "text-yellow-300" : "text-yellow-600";
        case "error":
            return isDarkMode ? "text-red-300" : "text-red-600";
        case "info":
        default:
            return isDarkMode ? "text-blue-300" : "text-blue-600";
    }
};

/**
 * Determine text color based on background color for better contrast
 * @param {string} bgColor - Background color in hex format
 * @returns {string} - Text color in hex format
 */
export const getContrastColor = (bgColor) => {
    // Default to dark text if no background color is provided
    if (!bgColor || bgColor === "#f3f4f6") return "#1f2937";

    // Simple contrast algorithm (can be improved for production)
    // Convert hex to RGB
    let hex = bgColor.replace("#", "");
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return white for dark colors, black for light colors
    return luminance > 0.5 ? "#1f2937" : "#ffffff";
};

/**
 * Check for user's preferred color scheme
 * @returns {boolean} - True if dark mode is preferred
 */
export const checkUserColorScheme = () => {
    // Check if the user has a system preference
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return true;
    }

    // Check if there's a saved preference in localStorage
    const savedTheme = localStorage.getItem("notification-theme");
    if (savedTheme) {
        return savedTheme === "dark";
    }

    return false;
};

/**
 * Save theme preference to localStorage
 * @param {boolean} isDarkMode - Whether dark mode is enabled
 */
export const saveThemePreference = (isDarkMode) => {
    localStorage.setItem("notification-theme", isDarkMode ? "dark" : "light");
};

/**
 * Create sample notifications for demonstration
 * @returns {Array} - Array of sample notification objects
 */
export const createSampleNotifications = () => [
    {
        id: 1,
        title: "Tom",
        message: "added new video",
        created_at: new Date().toISOString(),
        status: "info",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
        read: false,
        category: "inbox",
    },
    {
        id: 2,
        title: "Tom",
        message: "left comments for you",
        created_at: new Date(Date.now() - 27 * 60 * 1000).toISOString(),
        status: "success",
        read: false,
        category: "inbox",
    },
    {
        id: 3,
        title: "Anna",
        message: "has applied to create an ad for your campaign",
        created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        status: "info",
        read: false,
        category: "inbox",
        actions: [
            { label: "Decline", backgroundColor: "#f3f4f6", url: "#" },
            { label: "Accept", backgroundColor: "#3b82f6", url: "#" },
        ],
    },
    {
        id: 4,
        title: "Jason",
        message: "attached the file",
        created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        status: "info",
        progress: 100,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
        read: true,
        category: "inbox",
        attachment: "Work examples.pdf",
    },
    {
        id: 5,
        title: "System",
        message: "Your file is being processed",
        created_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
        status: "info",
        progress: 45,
        read: false,
        category: "inbox",
        actions: [],
    },
    {
        id: 6,
        title: "Security",
        message: "Unusual login attempt detected",
        created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        status: "warning",
        read: false,
        category: "inbox",
        actions: [
            { label: "Ignore", backgroundColor: "#9ca3af", url: "#" },
            { label: "Review", backgroundColor: "#ef4444", url: "#" },
        ],
    },
];
