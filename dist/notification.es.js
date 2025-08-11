import { ref as x, computed as E, onMounted as Y, onUnmounted as K, createElementBlock as n, openBlock as i, createElementVNode as r, createVNode as G, normalizeClass as u, createCommentVNode as m, toDisplayString as g, Transition as Q, withCtx as Z, withModifiers as M, Fragment as L, renderList as O, createTextVNode as ee, unref as I, normalizeStyle as V } from "vue";
const te = (f, t) => {
  if (!f) return "";
  const c = t || Date.now(), l = new Date(f), y = c - l.getTime(), d = Math.floor(y / (1e3 * 60)), h = Math.floor(y / (1e3 * 60 * 60)), p = Math.floor(y / (1e3 * 60 * 60 * 24)), s = Math.floor(p / 7), k = Math.floor(p / 30), N = Math.floor(p / 365);
  return d < 1 ? "Just now" : d < 60 ? `${d} minute${d > 1 ? "s" : ""} ago` : h < 24 ? `${h} hour${h > 1 ? "s" : ""} ago` : p < 7 ? `${p} day${p > 1 ? "s" : ""} ago` : s < 4 ? `${s} week${s > 1 ? "s" : ""} ago` : k < 12 ? `${k} month${k > 1 ? "s" : ""} ago` : `${N} year${N > 1 ? "s" : ""} ago`;
}, re = (f, t) => {
  switch (f) {
    case "success":
      return t ? "bg-green-900" : "bg-green-100";
    case "warning":
      return t ? "bg-yellow-900" : "bg-yellow-100";
    case "error":
      return t ? "bg-red-900" : "bg-red-100";
    case "info":
    default:
      return t ? "bg-blue-900" : "bg-blue-100";
  }
}, ae = (f, t) => {
  switch (f) {
    case "success":
      return t ? "text-green-300" : "text-green-600";
    case "warning":
      return t ? "text-yellow-300" : "text-yellow-600";
    case "error":
      return t ? "text-red-300" : "text-red-600";
    case "info":
    default:
      return t ? "text-blue-300" : "text-blue-600";
  }
}, se = (f) => {
  if (!f || f === "#f3f4f6") return "#1f2937";
  let t = f.replace("#", "");
  t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
  const c = parseInt(t.substring(0, 2), 16), l = parseInt(t.substring(2, 4), 16), y = parseInt(t.substring(4, 6), 16);
  return (0.299 * c + 0.587 * l + 0.114 * y) / 255 > 0.5 ? "#1f2937" : "#ffffff";
}, oe = () => [
  {
    id: 1,
    title: "Tom",
    message: "added new video",
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    status: "info",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
    read: !1,
    category: "inbox"
  },
  {
    id: 2,
    title: "Tom",
    message: "left comments for you",
    created_at: new Date(Date.now() - 27 * 60 * 1e3).toISOString(),
    status: "success",
    read: !1,
    category: "inbox"
  },
  {
    id: 3,
    title: "Anna",
    message: "has applied to create an ad for your campaign",
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1e3).toISOString(),
    status: "info",
    read: !1,
    category: "inbox",
    actions: [
      { label: "Decline", backgroundColor: "#f3f4f6", url: "#" },
      { label: "Accept", backgroundColor: "#3b82f6", url: "#" }
    ]
  },
  {
    id: 4,
    title: "Jason",
    message: "attached the file",
    created_at: new Date(Date.now() - 6 * 60 * 60 * 1e3).toISOString(),
    status: "info",
    progress: 100,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
    read: !0,
    category: "inbox",
    attachment: "Work examples.pdf"
  },
  {
    id: 5,
    title: "System",
    message: "Your file is being processed",
    created_at: new Date(Date.now() - 1 * 60 * 60 * 1e3).toISOString(),
    status: "info",
    progress: 45,
    read: !1,
    category: "inbox",
    actions: []
  },
  {
    id: 6,
    title: "Security",
    message: "Unusual login attempt detected",
    created_at: new Date(Date.now() - 3 * 60 * 60 * 1e3).toISOString(),
    status: "warning",
    read: !1,
    category: "inbox",
    actions: [
      { label: "Ignore", backgroundColor: "#9ca3af", url: "#" },
      { label: "Review", backgroundColor: "#ef4444", url: "#" }
    ]
  }
], le = {};
class ne {
  constructor(t = "", c = "notifications") {
    this.baseURL = t, this.prefix = c, this.apiBase = `${t}/${c}`;
  }
  /**
   * Make HTTP request with proper error handling
   * @param {string} url - Request URL
   * @param {Object} options - Fetch options
   * @returns {Promise} - Response data
   */
  async request(t, c = {}) {
    const l = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        ...c.headers
      },
      credentials: "include",
      // Include cookies for Laravel session
      ...c
    }, y = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
    y && (l.headers["X-CSRF-TOKEN"] = y);
    try {
      const d = await fetch(t, l);
      if (!d.ok)
        throw new Error(`HTTP error! status: ${d.status}`);
      return await d.json();
    } catch (d) {
      throw console.error("API request failed:", d), d;
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
  async getNotifications(t = {}) {
    const c = new URLSearchParams(t).toString(), l = c ? `${this.apiBase}?${c}` : this.apiBase;
    return this.request(l);
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
  async getUnreadNotifications(t = {}) {
    const c = new URLSearchParams(t).toString(), l = c ? `${this.apiBase}/unread?${c}` : `${this.apiBase}/unread`;
    return this.request(l);
  }
  /**
   * Get read notifications
   * GET /notifications/read
   * @param {Object} params - Query parameters
   * @returns {Promise} - Read notifications data
   */
  async getReadNotifications(t = {}) {
    const c = new URLSearchParams(t).toString(), l = c ? `${this.apiBase}/read?${c}` : `${this.apiBase}/read`;
    return this.request(l);
  }
  /**
   * Mark notification(s) as read
   * POST /notifications/read
   * @param {string|Array} notificationIds - Single ID or array of IDs
   * @returns {Promise} - Response data
   */
  async markAsRead(t) {
    const c = Array.isArray(t) ? t : [t];
    return this.request(`${this.apiBase}/read`, {
      method: "POST",
      body: JSON.stringify({ ids: c })
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
      body: JSON.stringify({})
    });
  }
  /**
   * Delete notification(s)
   * POST /notifications/delete
   * @param {string|Array} notificationIds - Single ID or array of IDs
   * @returns {Promise} - Response data
   */
  async deleteNotification(t) {
    const c = Array.isArray(t) ? t : [t];
    return this.request(`${this.apiBase}/delete`, {
      method: "POST",
      body: JSON.stringify({ ids: c })
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
      body: JSON.stringify({})
    });
  }
  /**
   * Batch operations helper
   * @param {string} operation - Operation type ('read', 'delete')
   * @param {Array} notificationIds - Array of notification IDs
   * @returns {Promise} - Response data
   */
  async batchOperation(t, c) {
    switch (t) {
      case "read":
        return this.markAsRead(c);
      case "delete":
        return this.deleteNotification(c);
      default:
        throw new Error(`Unknown operation: ${t}`);
    }
  }
}
const C = new ne(
  window.location.origin,
  // Base URL
  typeof process < "u" ? process.env?.MIX_NOTIFICATION_API_PREFIX : le?.VITE_NOTIFICATION_API_PREFIX || "notifications"
  // Prefix - can be configured
), ie = (f, t) => {
  const c = f.__vccOpts || f;
  for (const [l, y] of t)
    c[l] = y;
  return c;
}, ue = {
  key: 0,
  class: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
}, ce = { class: "flex items-center" }, de = { class: "flex items-center space-x-4" }, ge = ["onClick"], ve = {
  key: 0,
  class: "ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1"
}, he = {
  key: 1,
  class: "p-6 text-center"
}, fe = { class: "text-red-500 mb-2" }, ye = { class: "mb-2" }, pe = {
  key: 1,
  class: "mt-4"
}, be = { class: "text-sm" }, me = { key: 3 }, xe = ["onClick"], we = { class: "w-10 h-10 mr-3 flex-shrink-0 flex items-center justify-center" }, ke = ["src", "alt"], _e = {
  key: 0,
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, Ce = {
  key: 1,
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
}, Ne = {
  key: 2,
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, Ae = {
  key: 3,
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
  "clip-rule": "evenodd"
}, Se = {
  key: 4,
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, $e = { class: "flex-1 min-w-0" }, Me = { class: "flex items-center justify-between" }, Ie = { class: "flex items-center space-x-2" }, Te = { class: "relative group" }, Be = ["onClick"], Ee = ["onClick"], Le = ["onClick"], Oe = {
  key: 0,
  class: "w-2 h-2 bg-blue-500 rounded-full"
}, ze = {
  key: 0,
  class: "mt-2"
}, Pe = { class: "flex items-center justify-between mb-1" }, Re = {
  key: 1,
  class: "flex flex-wrap gap-2 mt-3"
}, je = ["href", "onClick"], qe = { class: "flex items-center" }, Ve = {
  __name: "notification",
  props: {
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
      default: () => [
        { id: "inbox", name: "All", count: 6 },
        { id: "unread", name: "New", count: 0 }
      ]
    },
    locales: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["notification-read", "action-clicked", "all-read", "all-deleted"],
  setup(f, { emit: t }) {
    const c = f, l = (a) => c.locales[a] || a, y = t, d = x(!1), h = x(!1), p = x("inbox"), s = x(!1), k = x(null), N = x(Date.now()), _ = x(!1), w = x(null), A = x(null), v = x([]), S = E(
      () => v.value.filter((a) => !a.read_at).length
    ), z = E(() => p.value === "unread" ? v.value.filter((a) => !a.read_at) : p.value === "read" ? v.value.filter((a) => a.read_at) : v.value), D = E(() => [
      {
        id: "inbox",
        name: "All",
        count: 0
      },
      {
        id: "unread",
        name: "New",
        count: S.value
      }
    ]), $ = async () => {
      try {
        _.value = !0, w.value = null;
        const a = await C.getNotifications();
        v.value = a.data || a, console.log(v.value);
      } catch (a) {
        w.value = l("Failed to load notifications"), console.error("Error loading notifications:", a), v.value = oe();
      } finally {
        _.value = !1;
      }
    }, U = async () => {
      d.value && h.value && (h.value = !1), !d.value && v.value.length === 0 && await $(), d.value = !d.value;
    }, P = () => {
      h.value = !h.value, h.value && window.scrollTo({ top: 0, behavior: "smooth" });
    }, F = async () => {
      try {
        _.value = !0, await C.markAllAsRead(), $(), y("all-read");
      } catch (a) {
        w.value = l("Failed to mark all as read"), console.error("Error marking all as read:", a);
      } finally {
        _.value = !1;
      }
    }, H = async () => {
      if (confirm(l("Are you sure you want to delete all notifications? This action cannot be undone.")))
        try {
          _.value = !0, await C.deleteAllNotifications(), v.value = [], y("all-deleted");
        } catch (a) {
          w.value = l("Failed to delete all notifications"), console.error("Error deleting all notifications:", a);
        } finally {
          _.value = !1;
        }
    }, T = async (a) => {
      try {
        await C.markAsRead(a);
        const o = v.value.find((e) => e.id === a);
        o && (o.read_at = !0, y("notification-read", o));
      } catch (o) {
        w.value = l("Failed to mark notification as read"), console.error("Error marking notification as read:", o);
      }
    }, R = async (a) => {
      try {
        await C.deleteNotification(a);
        const o = v.value.findIndex((e) => e.id === a);
        o !== -1 && v.value.splice(o, 1);
      } catch (o) {
        w.value = l("Failed to delete notification"), console.error("Error deleting notification:", o);
      }
    }, J = async () => {
      await $();
    }, X = async (a, o) => {
      y("action-clicked", { action: a, notification: o }), o.read_at || await T(o.id), (a.label.toLowerCase() === l("accept") || a.label.toLowerCase() === l("decline")) && await R(o.id), a.url && a.url !== "#" && (window.location.href = a.url);
    }, W = (a) => {
      A.value = A.value === a ? null : a;
    }, j = (a) => {
      k.value && !k.value.contains(a.target) && (h.value ? h.value = !1 : d.value = !1), A.value = null;
    };
    let B = null;
    return Y(async () => {
      const a = await C.getUserId();
      if (!a) {
        console.error("User ID not found. Please ensure the user is authenticated.");
        return;
      }
      if (document.addEventListener("click", j), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        localStorage.getItem("notification-theme") || (s.value = e.matches);
      }), await $(), !window.Echo) {
        console.error("Laravel Echo is not defined. Please ensure it is properly imported and configured.");
        return;
      }
      console.log("Setting up Echo channel listener...", c.user_id || a || 1);
      const o = Echo.private("App.Models.User." + (c.user_id || a || 1));
      o.subscribed(() => {
        console.log("✅ Successfully subscribed to notifications channel");
      }), o.error((e) => {
        console.error("🚨 Channel subscription error:", e);
      }), o.notification((e) => {
        console.log("New notification received:", e);
        const b = v.value.find((q) => q.id === e.id);
        b ? Object.assign(b, e) : v.value.unshift(e);
      }), B = setInterval(() => {
        N.value = Date.now();
      }, 6e4);
    }), K(() => {
      if (document.removeEventListener("click", j), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", () => {
      }), B && clearInterval(B), window.Echo) {
        const a = Echo.private("App.Models.User." + (c.user_id || userId));
        a.unlisten(".notification"), a.unsubscribe(), console.log("✅ Unsubscribed from notifications channel");
      }
    }), (a, o) => (i(), n("div", {
      class: "relative",
      ref_key: "notificationContainer",
      ref: k
    }, [
      r("button", {
        onClick: U,
        class: u(["relative p-2 cursor-pointer focus:outline-none rounded-full transition-colors", {
          "bg-blue-50 text-gray-600 hover:text-gray-800": d.value && !s.value,
          "bg-blue-900/20 text-gray-300 hover:text-gray-100": d.value && s.value,
          "text-gray-600 hover:text-gray-800": !d.value && !s.value,
          "text-gray-300 hover:text-gray-100": !d.value && s.value
        }])
      }, [
        o[3] || (o[3] = r("svg", {
          class: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          r("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          })
        ], -1)),
        S.value > 0 ? (i(), n("span", ue, g(S.value > 99 ? "99+" : S.value), 1)) : m("", !0)
      ], 2),
      G(Q, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        default: Z(() => [
          d.value ? (i(), n("div", {
            key: 0,
            class: u([
              "z-50 shadow-xl border",
              s.value ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-200",
              h.value ? "fixed top-0 right-0 h-full flex flex-col w-2/5 rounded-l-lg overflow-hidden" : "absolute right-0 mt-2 w-96 rounded-lg"
            ]),
            onClick: o[2] || (o[2] = M(() => {
            }, ["stop"]))
          }, [
            r("div", {
              class: u(["flex items-center justify-between p-4", s.value ? "border-b border-gray-700" : "border-b border-gray-200"])
            }, [
              r("div", ce, [
                r("h3", {
                  class: u(["text-lg font-semibold", s.value ? "text-white" : "text-gray-900"])
                }, g(l("Notifications")), 3),
                h.value ? (i(), n("span", {
                  key: 0,
                  class: u(["ml-2 text-sm", s.value ? "text-gray-400" : "text-gray-500"])
                }, "(" + g(v.value.length) + ")", 3)) : m("", !0)
              ]),
              r("div", de, [
                (i(), n("svg", {
                  "aria-label": "Mark all as read",
                  onClick: F,
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: u([s.value ? "text-gray-200 hover:text-gray-400" : "text-gray-500 hover:text-gray-700", "lucide w-6 h-6 cursor-pointer p-1 rounded-full lucide-check-check-icon lucide-check-check"])
                }, o[4] || (o[4] = [
                  r("path", { d: "M18 6 7 17l-5-5" }, null, -1),
                  r("path", { d: "m22 10-7.5 7.5L13 16" }, null, -1)
                ]), 2)),
                (i(), n("svg", {
                  "aria-label": "Delete all notifications",
                  onClick: H,
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: u([s.value ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700", "lucide cursor-pointer p-1 rounded-full w-6 h-6 lucide-trash-icon lucide-trash"])
                }, o[5] || (o[5] = [
                  r("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }, null, -1),
                  r("path", { d: "M3 6h18" }, null, -1),
                  r("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }, null, -1)
                ]), 2)),
                h.value ? (i(), n("button", {
                  key: 0,
                  onClick: P,
                  class: u(s.value ? "p-1 rounded-full hover:bg-gray-700" : "p-1 rounded-full hover:bg-gray-100"),
                  "aria-label": "Close expanded view"
                }, o[6] || (o[6] = [
                  r("svg", {
                    class: "w-5 h-5 text-gray-500",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    r("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]), 2)) : m("", !0)
              ])
            ], 2),
            r("div", {
              class: u(["flex", s.value ? "border-b border-gray-700" : "border-b border-gray-200"])
            }, [
              (i(!0), n(L, null, O(D.value, (e) => (i(), n("button", {
                key: e.id,
                onClick: (b) => p.value = e.id,
                class: u(["flex-1 px-4 py-3 text-sm font-medium text-center border-b-2 transition-colors", [
                  p.value === e.id ? s.value ? "border-blue-500 text-blue-400 bg-blue-900/20" : "border-blue-500 text-blue-600 bg-blue-50" : s.value ? "border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                ]])
              }, [
                ee(g(l(e.name)) + " ", 1),
                e.count > 0 ? (i(), n("span", ve, g(e.count), 1)) : m("", !0)
              ], 10, ge))), 128))
            ], 2),
            r("div", {
              class: u(["overflow-y-auto", h.value ? "h-full" : "max-h-96"])
            }, [
              _.value ? (i(), n("div", {
                key: 0,
                class: u(["p-6 text-center", s.value ? "text-gray-400" : "text-gray-500"])
              }, [
                o[7] || (o[7] = r("svg", {
                  class: "animate-spin -ml-1 mr-3 h-5 w-5 inline",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  r("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  r("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })
                ], -1)),
                r("span", null, g(l("Loading notifications")) + "...", 1)
              ], 2)) : w.value ? (i(), n("div", he, [
                r("div", fe, g(w.value), 1),
                r("button", {
                  onClick: J,
                  class: u(["text-sm px-4 py-2 rounded transition-colors", s.value ? "bg-gray-700 hover:bg-gray-600 text-gray-200" : "bg-gray-100 hover:bg-gray-200 text-gray-700"])
                }, g(l("Try Again")), 3)
              ])) : z.value.length === 0 ? (i(), n("div", {
                key: 2,
                class: u(["p-6 text-center", s.value ? "text-gray-400" : "text-gray-500"])
              }, [
                r("div", ye, g(p.value === "unread" ? l("No unread notifications") : p.value === "read" ? l("No read notifications") : v.value.length === 0 ? l("No notifications yet") : l("No notifications")), 1),
                p.value !== "inbox" && v.value.length > 0 ? (i(), n("button", {
                  key: 0,
                  onClick: o[0] || (o[0] = (e) => p.value = "inbox"),
                  class: "text-sm text-blue-500 hover:text-blue-600"
                }, g(l("View all notifications")), 1)) : v.value.length === 0 ? (i(), n("div", pe, [
                  (i(), n("svg", {
                    class: u(["w-12 h-12 mx-auto mb-4 opacity-50", s.value ? "text-gray-600" : "text-gray-300"]),
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, o[8] || (o[8] = [
                    r("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    }, null, -1)
                  ]), 2)),
                  r("p", be, g(l("You're all caught up!")), 1)
                ])) : m("", !0)
              ], 2)) : (i(), n("div", me, [
                (i(!0), n(L, null, O(z.value, (e) => (i(), n("div", {
                  key: e.id,
                  onClick: (b) => T(e.id),
                  class: u(["flex items-start p-4 transition-colors", [
                    { "border-b last:border-b-0": !0 },
                    s.value ? { "hover:bg-gray-800 border-gray-700": !0, "bg-blue-900/10": !e.read_at } : { "hover:bg-gray-50 border-gray-100": !0, "bg-blue-50": !e.read_at }
                  ]])
                }, [
                  r("div", we, [
                    e.avatar ? (i(), n("img", {
                      key: 0,
                      src: e.avatar,
                      alt: e.title,
                      class: "w-10 h-10 rounded-full"
                    }, null, 8, ke)) : (i(), n("div", {
                      key: 1,
                      class: u(["w-10 h-10 rounded-full flex items-center justify-center", I(re)(e.status, s.value)])
                    }, [
                      (i(), n("svg", {
                        class: u(["w-5 h-5", I(ae)(e.status, s.value)]),
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        e.status === "info" ? (i(), n("path", _e)) : e.status === "success" ? (i(), n("path", Ce)) : e.status === "warning" ? (i(), n("path", Ne)) : e.status === "error" ? (i(), n("path", Ae)) : (i(), n("path", Se))
                      ], 2))
                    ], 2))
                  ]),
                  r("div", $e, [
                    r("div", Me, [
                      r("p", {
                        class: u(["text-sm font-medium", s.value ? "text-gray-100" : "text-gray-900"])
                      }, g(l(e.title)), 3),
                      r("div", Ie, [
                        r("span", {
                          class: u(["text-xs", s.value ? "text-gray-400" : "text-gray-500"])
                        }, g(I(te)(e.created_at, N.value.value)), 3),
                        r("div", Te, [
                          r("button", {
                            class: u(["p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity", s.value ? "hover:bg-gray-700" : "hover:bg-gray-100"]),
                            onClick: M((b) => W(e.id), ["stop"])
                          }, [
                            (i(), n("svg", {
                              class: u(["w-4 h-4", s.value ? "text-gray-400" : "text-gray-500"]),
                              fill: "currentColor",
                              viewBox: "0 0 20 20"
                            }, o[9] || (o[9] = [
                              r("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" }, null, -1)
                            ]), 2))
                          ], 10, Be),
                          A.value === e.id ? (i(), n("div", {
                            key: 0,
                            class: u(["absolute right-0 mt-1 w-40 rounded-md shadow-lg z-10", s.value ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"]),
                            onClick: o[1] || (o[1] = M(() => {
                            }, ["stop"]))
                          }, [
                            e.read_at ? m("", !0) : (i(), n("button", {
                              key: 0,
                              onClick: (b) => T(e.id),
                              class: u(["w-full text-left px-4 py-2 text-sm hover:bg-opacity-80 transition-colors", s.value ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"])
                            }, g(l("Mark as Read")), 11, Ee)),
                            r("button", {
                              onClick: (b) => R(e.id),
                              class: u(["w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-opacity-80 transition-colors", s.value ? "hover:bg-gray-700" : "hover:bg-gray-100"])
                            }, g(l("Delete")), 11, Le)
                          ], 2)) : m("", !0)
                        ]),
                        e.read_at ? m("", !0) : (i(), n("div", Oe))
                      ])
                    ]),
                    r("p", {
                      class: u(["text-sm mt-1", s.value ? "text-gray-300" : "text-gray-600"])
                    }, g(e.message), 3),
                    e.progress !== void 0 && e.progress !== null ? (i(), n("div", ze, [
                      r("div", Pe, [
                        r("span", {
                          class: u(["text-xs", s.value ? "text-gray-400" : "text-gray-500"])
                        }, g(l("Progress")), 3),
                        r("span", {
                          class: u(["text-xs font-medium", s.value ? "text-gray-300" : "text-gray-700"])
                        }, g(e.progress) + "% ", 3)
                      ]),
                      r("div", {
                        class: u(["w-full rounded-full h-2", s.value ? "bg-gray-700" : "bg-gray-200"])
                      }, [
                        r("div", {
                          class: u(["h-2 rounded-full progress-bar", [
                            {
                              "bg-blue-500": e.status === "info" || !e.status,
                              "bg-yellow-500": e.status === "warning",
                              "bg-red-500": e.status === "error",
                              "bg-green-500": e.status === "success"
                            }
                          ]]),
                          style: V({ width: `${e.progress}%` })
                        }, null, 6)
                      ], 2)
                    ])) : m("", !0),
                    e.actions ? (i(), n("div", Re, [
                      (i(!0), n(L, null, O(e.actions, (b) => (i(), n("a", {
                        key: b.label,
                        href: b.url,
                        onClick: M((q) => X(b, e), ["prevent"]),
                        class: "px-3 py-1 text-xs font-medium rounded transition-colors",
                        style: V({
                          backgroundColor: b.backgroundColor || "#f3f4f6",
                          color: I(se)(b.backgroundColor)
                        })
                      }, g(l(b.label)), 13, je))), 128))
                    ])) : m("", !0),
                    e.attachment ? (i(), n("div", {
                      key: 2,
                      class: u(["mt-3 p-2 rounded border", s.value ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"])
                    }, [
                      r("div", qe, [
                        (i(), n("svg", {
                          class: u(["w-4 h-4 mr-2", s.value ? "text-gray-400" : "text-gray-500"]),
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, o[10] || (o[10] = [
                          r("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          }, null, -1)
                        ]), 2)),
                        r("span", {
                          class: u(["text-sm", s.value ? "text-gray-300" : "text-gray-700"])
                        }, g(e.attachment), 3)
                      ])
                    ], 2)) : m("", !0)
                  ])
                ], 10, xe))), 128))
              ]))
            ], 2),
            r("div", {
              class: u(["p-4", s.value ? "border-t border-gray-700" : "border-t border-gray-200"])
            }, [
              r("button", {
                onClick: P,
                class: u(["w-full text-center text-sm font-medium", s.value ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"])
              }, g(h.value ? l("Collapse View") : l("View all notifications")), 3)
            ], 2)
          ], 2)) : m("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
}, Ue = /* @__PURE__ */ ie(Ve, [["__scopeId", "data-v-184538b6"]]);
export {
  Ue as default
};
