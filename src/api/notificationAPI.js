/**
 * Notification API Service
 * Wrapper for Laravel notification routes
 */

class NotificationAPI {
  constructor(baseURL = "", prefix = "notifications") {
    this.baseURL = baseURL;
    this.prefix = prefix;
    this.apiBase = `${baseURL}/${prefix}`;
  }

  /**
   * Make HTTP request with proper error handling
   * @param {string} url - Request URL
   * @param {Object} options - Fetch options
   * @returns {Promise} - Response data
   */
  async request(url, options = {}) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        ...options.headers,
      },
      credentials: "include", // Include cookies for Laravel session
      ...options,
    };

    // Add CSRF token if available
    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute("content");
    if (csrfToken) {
      config.headers["X-CSRF-TOKEN"] = csrfToken;
    }

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  async getUserId() {
    return this.request(`${this.apiBase}/user`);
  }

  /**
   * Get all notifications
   * GET /notifications
   * @param {Object} params - Query parameters (page, per_page, etc.)
   * @returns {Promise} - Notifications data
   */
  async getNotifications(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${this.apiBase}?${queryString}` : this.apiBase;
    return this.request(url);
  }

  /**
   * Get notification count
   * GET /notifications/count
   * @returns {Promise} - Count data
   */
  async getNotificationCount() {
    return this.request(`${this.apiBase}/count`);
  }

  /**
   * Get unread notifications
   * GET /notifications/unread
   * @param {Object} params - Query parameters
   * @returns {Promise} - Unread notifications data
   */
  async getUnreadNotifications(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString
      ? `${this.apiBase}/unread?${queryString}`
      : `${this.apiBase}/unread`;
    return this.request(url);
  }

  /**
   * Get read notifications
   * GET /notifications/read
   * @param {Object} params - Query parameters
   * @returns {Promise} - Read notifications data
   */
  async getReadNotifications(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString
      ? `${this.apiBase}/read?${queryString}`
      : `${this.apiBase}/read`;
    return this.request(url);
  }

  /**
   * Mark notification(s) as read
   * POST /notifications/read
   * @param {string|Array} notificationIds - Single ID or array of IDs
   * @returns {Promise} - Response data
   */
  async markAsRead(notificationIds) {
    const ids = Array.isArray(notificationIds)
      ? notificationIds
      : [notificationIds];
    return this.request(`${this.apiBase}/read`, {
      method: "POST",
      body: JSON.stringify({ ids }),
    });
  }

  /**
   * Mark all notifications as read
   * POST /notifications/read-all
   * @returns {Promise} - Response data
   */
  async markAllAsRead() {
    return this.request(`${this.apiBase}/read-all`, {
      method: "POST",
      body: JSON.stringify({}),
    });
  }

  /**
   * Delete notification(s)
   * POST /notifications/delete
   * @param {string|Array} notificationIds - Single ID or array of IDs
   * @returns {Promise} - Response data
   */
  async deleteNotification(notificationIds) {
    const ids = Array.isArray(notificationIds)
      ? notificationIds
      : [notificationIds];
    return this.request(`${this.apiBase}/delete`, {
      method: "POST",
      body: JSON.stringify({ ids }),
    });
  }

  /**
   * Delete all notifications
   * POST /notifications/delete-all
   * @returns {Promise} - Response data
   */
  async deleteAllNotifications() {
    return this.request(`${this.apiBase}/delete-all`, {
      method: "POST",
      body: JSON.stringify({}),
    });
  }

  /**
   * Batch operations helper
   * @param {string} operation - Operation type ('read', 'delete')
   * @param {Array} notificationIds - Array of notification IDs
   * @returns {Promise} - Response data
   */
  async batchOperation(operation, notificationIds) {
    switch (operation) {
      case "read":
        return this.markAsRead(notificationIds);
      case "delete":
        return this.deleteNotification(notificationIds);
      default:
        throw new Error(`Unknown operation: ${operation}`);
    }
  }
}

// Create and export default instance
const notificationAPI = new NotificationAPI(
  window.location.origin, // Base URL
  typeof process !== "undefined"
    ? process.env?.MIX_NOTIFICATION_API_PREFIX
    : import.meta.env?.VITE_NOTIFICATION_API_PREFIX || "notifications" // Prefix - can be configured
);

export default notificationAPI;
export { NotificationAPI };
