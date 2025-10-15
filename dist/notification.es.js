import { ref as k, computed as E, onMounted as G, onUnmounted as Q, createElementBlock as i, openBlock as c, createElementVNode as t, createVNode as Z, normalizeClass as u, createCommentVNode as b, toDisplayString as h, Transition as ee, withCtx as te, withModifiers as S, Fragment as B, renderList as L, createTextVNode as q, unref as M, normalizeStyle as V, createApp as ae, h as re } from "vue";
const oe = (g, a, o = {}) => {
  if (!g) return "";
  const s = a || Date.now(), v = new Date(g), d = s - v.getTime(), f = Math.floor(d / (1e3 * 60)), y = Math.floor(d / (1e3 * 60 * 60)), r = Math.floor(d / (1e3 * 60 * 60 * 24)), _ = Math.floor(r / 7), w = Math.floor(r / 30), p = Math.floor(r / 365);
  return f < 1 ? o["Just now"] ?? "Just now" : f < 60 ? `${f} ${o.minute ?? "minute"}${f > 1 ? "s" : ""} ${o.ago ?? "ago"}` : y < 24 ? `${y} ${o.hour ?? "hour"}${y > 1 ? "s" : ""} ${o.ago ?? "ago"}` : r < 7 ? `${r} ${o.day ?? "day"}${r > 1 ? "s" : ""} ${o.ago ?? "ago"}` : _ < 4 ? `${_} ${o.week ?? "week"}${_ > 1 ? "s" : ""} ${o.ago ?? "ago"}` : w < 12 ? `${w} ${o.month ?? "month"}${w > 1 ? "s" : ""} ${o.ago ?? "ago"}` : `${p} ${o.year ?? "year"}${p > 1 ? "s" : ""} ${o.ago ?? "ago"}`;
}, se = (g, a) => {
  switch (g) {
    case "success":
      return a ? "bg-green-900" : "bg-green-100";
    case "warning":
      return a ? "bg-yellow-900" : "bg-yellow-100";
    case "error":
      return a ? "bg-red-900" : "bg-red-100";
    case "info":
    default:
      return a ? "bg-blue-900" : "bg-blue-100";
  }
}, ne = (g, a) => {
  switch (g) {
    case "success":
      return a ? "text-green-300" : "text-green-600";
    case "warning":
      return a ? "text-yellow-300" : "text-yellow-600";
    case "error":
      return a ? "text-red-300" : "text-red-600";
    case "info":
    default:
      return a ? "text-blue-300" : "text-blue-600";
  }
}, le = (g) => {
  if (!g || g === "#f3f4f6") return "#1f2937";
  let a = g.replace("#", "");
  a.length === 3 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]);
  const o = parseInt(a.substring(0, 2), 16), s = parseInt(a.substring(2, 4), 16), v = parseInt(a.substring(4, 6), 16);
  return (0.299 * o + 0.587 * s + 0.114 * v) / 255 > 0.5 ? "#1f2937" : "#ffffff";
}, ie = () => [
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
], ce = {};
class ue {
  constructor(a = "", o = "notifications") {
    this.baseURL = a, this.prefix = o, this.apiBase = `${a}/${o}`;
  }
  /**
   * Make HTTP request with proper error handling
   * @param {string} url - Request URL
   * @param {Object} options - Fetch options
   * @returns {Promise} - Response data
   */
  async request(a, o = {}) {
    const s = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        ...o.headers
      },
      credentials: "include",
      // Include cookies for Laravel session
      ...o
    }, v = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
    v && (s.headers["X-CSRF-TOKEN"] = v);
    try {
      const d = await fetch(a, s);
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
  async getNotifications(a = {}) {
    const o = new URLSearchParams(a).toString(), s = o ? `${this.apiBase}?${o}` : this.apiBase;
    return this.request(s);
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
  async getUnreadNotifications(a = {}) {
    const o = new URLSearchParams(a).toString(), s = o ? `${this.apiBase}/unread?${o}` : `${this.apiBase}/unread`;
    return this.request(s);
  }
  /**
   * Get read notifications
   * GET /notifications/read
   * @param {Object} params - Query parameters
   * @returns {Promise} - Read notifications data
   */
  async getReadNotifications(a = {}) {
    const o = new URLSearchParams(a).toString(), s = o ? `${this.apiBase}/read?${o}` : `${this.apiBase}/read`;
    return this.request(s);
  }
  /**
   * Mark notification(s) as read
   * POST /notifications/read
   * @param {string|Array} notificationIds - Single ID or array of IDs
   * @returns {Promise} - Response data
   */
  async markAsRead(a) {
    const o = Array.isArray(a) ? a : [a];
    return this.request(`${this.apiBase}/read`, {
      method: "POST",
      body: JSON.stringify({ ids: o })
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
  async deleteNotification(a) {
    const o = Array.isArray(a) ? a : [a];
    return this.request(`${this.apiBase}/delete`, {
      method: "POST",
      body: JSON.stringify({ ids: o })
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
  async batchOperation(a, o) {
    switch (a) {
      case "read":
        return this.markAsRead(o);
      case "delete":
        return this.deleteNotification(o);
      default:
        throw new Error(`Unknown operation: ${a}`);
    }
  }
}
const A = new ue(
  window.location.origin,
  // Base URL
  typeof process < "u" ? process.env?.MIX_NOTIFICATION_API_PREFIX : ce?.VITE_NOTIFICATION_API_PREFIX || "notifications"
  // Prefix - can be configured
), U = (g, a) => {
  const o = g.__vccOpts || g;
  for (const [s, v] of a)
    o[s] = v;
  return o;
}, de = {
  key: 0,
  class: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
}, ge = { class: "flex items-center" }, fe = { class: "flex items-center space-x-4" }, ve = ["onClick"], he = {
  key: 0,
  class: "ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1"
}, ye = {
  key: 1,
  class: "p-6 text-center"
}, me = { class: "text-red-500 mb-2" }, pe = { class: "mb-2" }, be = {
  key: 1,
  class: "mt-4"
}, xe = { class: "text-sm" }, we = { key: 3 }, ke = ["onClick"], _e = { class: "w-10 h-10 mr-3 flex-shrink-0 flex items-center justify-center" }, Ce = ["src", "alt"], $e = {
  key: 0,
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, Ae = {
  key: 1,
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
}, Se = {
  key: 2,
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, Ne = {
  key: 3,
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
  "clip-rule": "evenodd"
}, Te = {
  key: 4,
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, Me = { class: "flex-1 min-w-0" }, Oe = { class: "flex items-center justify-between" }, Ie = { class: "flex items-center space-x-2" }, Ee = { class: "relative group" }, Be = ["onClick"], Le = ["onClick"], ze = ["onClick"], Pe = {
  key: 0,
  class: "w-2 h-2 bg-blue-500 rounded-full"
}, De = {
  key: 0,
  class: "mt-2"
}, je = { class: "flex items-center justify-between mb-1" }, Re = {
  key: 1,
  class: "flex flex-wrap gap-2 mt-3"
}, Ve = ["onClick"], qe = { class: "flex items-center" }, Ue = {
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
        { id: "unread", name: "New", count: 0 },
        { id: "inbox", name: "All", count: 6 }
      ]
    },
    locales: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["notification-read", "action-clicked", "all-read", "all-deleted"],
  setup(g, { emit: a }) {
    const o = g, s = (n) => o.locales[n] || n, v = a, d = k(!1), f = k(!1), y = k("unread"), r = k(!1), _ = k(null), w = k(Date.now()), p = k(!1), C = k(null), N = k(null), m = k([]), T = E(
      () => m.value.filter((n) => !n.read_at).length
    ), z = E(() => y.value === "unread" ? m.value.filter((n) => !n.read_at) : y.value === "read" ? m.value.filter((n) => n.read_at) : m.value), F = E(() => [
      {
        id: "unread",
        name: "New",
        count: T.value
      },
      {
        id: "inbox",
        name: "All",
        count: 0
      }
    ]), $ = async () => {
      try {
        p.value = !0, C.value = null;
        const n = await A.getNotifications();
        m.value = n.data || n, console.log(m.value);
      } catch (n) {
        C.value = s("Failed to load notifications"), console.error("Error loading notifications:", n), m.value = ie();
      } finally {
        p.value = !1;
      }
    }, H = async () => {
      d.value && f.value && (f.value = !1), !d.value && m.value.length === 0 && await $(), d.value = !d.value;
    }, P = () => {
      f.value = !f.value, f.value && window.scrollTo({ top: 0, behavior: "smooth" });
    }, J = async () => {
      try {
        p.value = !0, await A.markAllAsRead(), $(), v("all-read");
      } catch (n) {
        C.value = s("Failed to mark all as read"), console.error("Error marking all as read:", n);
      } finally {
        p.value = !1;
      }
    }, X = async () => {
      if (confirm(s("Are you sure you want to delete all notifications? This action cannot be undone.")))
        try {
          p.value = !0, await A.deleteAllNotifications(), m.value = [], v("all-deleted");
        } catch (n) {
          C.value = s("Failed to delete all notifications"), console.error("Error deleting all notifications:", n);
        } finally {
          p.value = !1;
        }
    }, O = async (n) => {
      try {
        await A.markAsRead(n);
        const l = m.value.find((e) => e.id === n);
        l && (l.read_at = !0, v("notification-read", l));
      } catch (l) {
        C.value = s("Failed to mark notification as read"), console.error("Error marking notification as read:", l);
      }
    }, D = async (n) => {
      try {
        await A.deleteNotification(n);
        const l = m.value.findIndex((e) => e.id === n);
        l !== -1 && m.value.splice(l, 1);
      } catch (l) {
        C.value = s("Failed to delete notification"), console.error("Error deleting notification:", l);
      }
    }, W = async () => {
      await $();
    }, Y = async (n, l) => {
      if (v("action-clicked", { action: n, notification: l }), l.read_at || await O(l.id), (n.label.toLowerCase() === s("accept") || n.label.toLowerCase() === s("decline")) && await D(l.id), n.url && n.url !== "#") {
        const e = document.createElement("a");
        e.href = n.url, e.target = "_blank", e.rel = "noopener noreferrer", document.body.appendChild(e), e.click(), document.body.removeChild(e);
      }
    }, K = (n) => {
      N.value = N.value === n ? null : n;
    }, j = (n) => {
      _.value && !_.value.contains(n.target) && (f.value ? f.value = !1 : d.value = !1), N.value = null;
    };
    let I = null;
    return G(async () => {
      const n = await A.getUserId();
      if (!n) {
        console.error("User ID not found. Please ensure the user is authenticated.");
        return;
      }
      if (document.addEventListener("click", j), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        localStorage.getItem("notification-theme") || (r.value = e.matches);
      }), await $(), !window.Echo) {
        console.error("Laravel Echo is not defined. Please ensure it is properly imported and configured.");
        return;
      }
      console.log("Setting up Echo channel listener...", o.user_id || n || 1);
      const l = Echo.private("App.Models.User." + (o.user_id || n || 1));
      l.subscribed(() => {
        console.log("✅ Successfully subscribed to notifications channel");
      }), l.error((e) => {
        console.error("🚨 Channel subscription error:", e);
      }), l.notification((e) => {
        const x = m.value.find((R) => R.id === e.id);
        x ? Object.assign(x, e) : (m.value.unshift(e), setTimeout(async () => {
          await $(), setTimeout(async () => {
            await $();
          }, 5 * 60 * 1e3);
        }, 60 * 1e3));
      }), I = setInterval(() => {
        w.value = Date.now();
      }, 6e4);
    }), Q(() => {
      if (document.removeEventListener("click", j), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", () => {
      }), I && clearInterval(I), window.Echo) {
        const n = Echo.private("App.Models.User." + (o.user_id || userId));
        n.unlisten(".notification"), n.unsubscribe(), console.log("✅ Unsubscribed from notifications channel");
      }
    }), (n, l) => (c(), i("div", {
      class: "relative",
      ref_key: "notificationContainer",
      ref: _
    }, [
      t("button", {
        onClick: H,
        class: u(["relative p-2 cursor-pointer focus:outline-none rounded-full transition-colors", {
          "bg-blue-50 text-gray-600 hover:text-gray-800": d.value && !r.value,
          "bg-blue-900/20 text-gray-300 hover:text-gray-100": d.value && r.value,
          "text-gray-600 hover:text-gray-800": !d.value && !r.value,
          "text-gray-300 hover:text-gray-100": !d.value && r.value
        }])
      }, [
        l[3] || (l[3] = t("svg", {
          class: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          t("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          })
        ], -1)),
        T.value > 0 ? (c(), i("span", de, h(T.value > 99 ? "99+" : T.value), 1)) : b("", !0)
      ], 2),
      Z(ee, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        default: te(() => [
          d.value ? (c(), i("div", {
            key: 0,
            class: u([
              "z-50 shadow-xl border",
              r.value ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-200",
              f.value ? "fixed top-0 right-0 h-full flex flex-col w-2/5 rounded-l-lg overflow-hidden" : "absolute right-0 mt-2 w-96 rounded-lg"
            ]),
            onClick: l[2] || (l[2] = S(() => {
            }, ["stop"]))
          }, [
            t("div", {
              class: u(["flex items-center justify-between p-4", r.value ? "border-b border-gray-700" : "border-b border-gray-200"])
            }, [
              t("div", ge, [
                t("h3", {
                  class: u(["text-lg font-semibold", r.value ? "text-white" : "text-gray-900"])
                }, h(s("Notifications")), 3),
                f.value ? (c(), i("span", {
                  key: 0,
                  class: u(["ml-2 text-sm", r.value ? "text-gray-400" : "text-gray-500"])
                }, "(" + h(m.value.length) + ")", 3)) : b("", !0)
              ]),
              t("div", fe, [
                (c(), i("svg", {
                  "aria-label": "Mark all as read",
                  onClick: J,
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: u([r.value ? "text-gray-200 hover:text-gray-400" : "text-gray-500 hover:text-gray-700", "lucide w-6 h-6 cursor-pointer p-1 rounded-full lucide-check-check-icon lucide-check-check"])
                }, l[4] || (l[4] = [
                  t("path", { d: "M18 6 7 17l-5-5" }, null, -1),
                  t("path", { d: "m22 10-7.5 7.5L13 16" }, null, -1)
                ]), 2)),
                (c(), i("svg", {
                  "aria-label": "Delete all notifications",
                  onClick: X,
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: u([r.value ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700", "lucide cursor-pointer p-1 rounded-full w-6 h-6 lucide-trash-icon lucide-trash"])
                }, l[5] || (l[5] = [
                  t("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }, null, -1),
                  t("path", { d: "M3 6h18" }, null, -1),
                  t("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }, null, -1)
                ]), 2)),
                f.value ? (c(), i("button", {
                  key: 0,
                  onClick: P,
                  class: u(r.value ? "p-1 rounded-full hover:bg-gray-700" : "p-1 rounded-full hover:bg-gray-100"),
                  "aria-label": "Close expanded view"
                }, l[6] || (l[6] = [
                  t("svg", {
                    class: "w-5 h-5 text-gray-500",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    t("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]), 2)) : b("", !0)
              ])
            ], 2),
            t("div", {
              class: u(["flex", r.value ? "border-b border-gray-700" : "border-b border-gray-200"])
            }, [
              (c(!0), i(B, null, L(F.value, (e) => (c(), i("button", {
                key: e.id,
                onClick: (x) => y.value = e.id,
                class: u(["flex-1 px-4 py-3 text-sm font-medium text-center border-b-2 transition-colors", [
                  y.value === e.id ? r.value ? "border-blue-500 text-blue-400 bg-blue-900/20" : "border-blue-500 text-blue-600 bg-blue-50" : r.value ? "border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                ]])
              }, [
                q(h(s(e.name)) + " ", 1),
                e.count > 0 ? (c(), i("span", he, h(e.count), 1)) : b("", !0)
              ], 10, ve))), 128))
            ], 2),
            t("div", {
              class: u(["overflow-y-auto", f.value ? "h-full" : "max-h-96"])
            }, [
              p.value ? (c(), i("div", {
                key: 0,
                class: u(["p-6 text-center", r.value ? "text-gray-400" : "text-gray-500"])
              }, [
                l[7] || (l[7] = t("svg", {
                  class: "animate-spin -ml-1 mr-3 h-5 w-5 inline",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  t("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  t("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })
                ], -1)),
                t("span", null, h(s("Loading notifications")) + "...", 1)
              ], 2)) : C.value ? (c(), i("div", ye, [
                t("div", me, h(C.value), 1),
                t("button", {
                  onClick: W,
                  class: u(["text-sm px-4 py-2 rounded transition-colors", r.value ? "bg-gray-700 hover:bg-gray-600 text-gray-200" : "bg-gray-100 hover:bg-gray-200 text-gray-700"])
                }, h(s("Try Again")), 3)
              ])) : z.value.length === 0 ? (c(), i("div", {
                key: 2,
                class: u(["p-6 text-center", r.value ? "text-gray-400" : "text-gray-500"])
              }, [
                t("div", pe, h(y.value === "unread" ? s("No unread notifications") : y.value === "read" ? s("No read notifications") : m.value.length === 0 ? s("No notifications yet") : s("No notifications")), 1),
                y.value !== "inbox" && m.value.length > 0 ? (c(), i("button", {
                  key: 0,
                  onClick: l[0] || (l[0] = (e) => y.value = "inbox"),
                  class: "text-sm text-blue-500 hover:text-blue-600"
                }, h(s("View all notifications")), 1)) : m.value.length === 0 ? (c(), i("div", be, [
                  (c(), i("svg", {
                    class: u(["w-12 h-12 mx-auto mb-4 opacity-50", r.value ? "text-gray-600" : "text-gray-300"]),
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, l[8] || (l[8] = [
                    t("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    }, null, -1)
                  ]), 2)),
                  t("p", xe, h(s("You're all caught up!")), 1)
                ])) : b("", !0)
              ], 2)) : (c(), i("div", we, [
                (c(!0), i(B, null, L(z.value, (e) => (c(), i("div", {
                  key: e.id,
                  onClick: (x) => O(e.id),
                  class: u(["flex items-start cursor-pointer p-4 transition-colors", [
                    { "border-b last:border-b-0": !0 },
                    r.value ? { "hover:bg-gray-800 border-gray-700": !0, "bg-blue-900/10": !e.read_at } : { "hover:bg-gray-50 border-gray-100": !0, "bg-blue-50": !e.read_at }
                  ]])
                }, [
                  t("div", _e, [
                    e.avatar ? (c(), i("img", {
                      key: 0,
                      src: e.avatar,
                      alt: e.title,
                      class: "w-10 h-10 rounded-full"
                    }, null, 8, Ce)) : (c(), i("div", {
                      key: 1,
                      class: u(["w-10 h-10 rounded-full flex items-center justify-center", M(se)(e.status, r.value)])
                    }, [
                      (c(), i("svg", {
                        class: u(["w-5 h-5", M(ne)(e.status, r.value)]),
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        e.status === "info" ? (c(), i("path", $e)) : e.status === "success" ? (c(), i("path", Ae)) : e.status === "warning" ? (c(), i("path", Se)) : e.status === "error" ? (c(), i("path", Ne)) : (c(), i("path", Te))
                      ], 2))
                    ], 2))
                  ]),
                  t("div", Me, [
                    t("div", Oe, [
                      t("p", {
                        class: u(["text-sm font-medium", r.value ? "text-gray-100" : "text-gray-900"])
                      }, h(s(e.title)), 3),
                      t("div", Ie, [
                        t("span", {
                          class: u(["text-xs", r.value ? "text-gray-400" : "text-gray-500"])
                        }, h(M(oe)(e.created_at, w.value.value, g.locales)), 3),
                        t("div", Ee, [
                          t("button", {
                            class: u(["p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity", r.value ? "hover:bg-gray-700" : "hover:bg-gray-100"]),
                            onClick: S((x) => K(e.id), ["stop"])
                          }, [
                            (c(), i("svg", {
                              class: u(["w-4 h-4", r.value ? "text-gray-400" : "text-gray-500"]),
                              fill: "currentColor",
                              viewBox: "0 0 20 20"
                            }, l[9] || (l[9] = [
                              t("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" }, null, -1)
                            ]), 2))
                          ], 10, Be),
                          N.value === e.id ? (c(), i("div", {
                            key: 0,
                            class: u(["absolute right-0 mt-1 w-40 rounded-md shadow-lg z-10", r.value ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"]),
                            onClick: l[1] || (l[1] = S(() => {
                            }, ["stop"]))
                          }, [
                            e.read_at ? b("", !0) : (c(), i("button", {
                              key: 0,
                              onClick: (x) => O(e.id),
                              class: u(["w-full text-left px-4 py-2 text-sm hover:bg-opacity-80 transition-colors", r.value ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"])
                            }, h(s("Mark as Read")), 11, Le)),
                            t("button", {
                              onClick: (x) => D(e.id),
                              class: u(["w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-opacity-80 transition-colors", r.value ? "hover:bg-gray-700" : "hover:bg-gray-100"])
                            }, h(s("Delete")), 11, ze)
                          ], 2)) : b("", !0)
                        ]),
                        e.read_at ? b("", !0) : (c(), i("div", Pe))
                      ])
                    ]),
                    t("p", {
                      class: u(["text-sm mt-1", r.value ? "text-gray-300" : "text-gray-600"])
                    }, h(e.message), 3),
                    e.progress !== void 0 && e.progress !== null ? (c(), i("div", De, [
                      t("div", je, [
                        t("span", {
                          class: u(["text-xs", r.value ? "text-gray-400" : "text-gray-500"])
                        }, h(s("Progress")), 3),
                        t("span", {
                          class: u(["text-xs font-medium", r.value ? "text-gray-300" : "text-gray-700"])
                        }, h(e.progress) + "% ", 3)
                      ]),
                      t("div", {
                        class: u(["w-full rounded-full h-2", r.value ? "bg-gray-700" : "bg-gray-200"])
                      }, [
                        t("div", {
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
                    ])) : b("", !0),
                    e.actions ? (c(), i("div", Re, [
                      (c(!0), i(B, null, L(e.actions, (x) => (c(), i("button", {
                        key: x.label,
                        onClick: S((R) => Y(x, e), ["stop"]),
                        class: "px-3 py-1 text-xs font-medium rounded transition-colors",
                        style: V({
                          backgroundColor: x.backgroundColor || "#f3f4f6",
                          color: M(le)(x.backgroundColor)
                        })
                      }, h(s(x.label)), 13, Ve))), 128))
                    ])) : b("", !0),
                    e.attachment ? (c(), i("div", {
                      key: 2,
                      class: u(["mt-3 p-2 rounded border", r.value ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"])
                    }, [
                      t("div", qe, [
                        (c(), i("svg", {
                          class: u(["w-4 h-4 mr-2", r.value ? "text-gray-400" : "text-gray-500"]),
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, l[10] || (l[10] = [
                          t("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          }, null, -1)
                        ]), 2)),
                        t("span", {
                          class: u(["text-sm", r.value ? "text-gray-300" : "text-gray-700"])
                        }, h(e.attachment), 3)
                      ])
                    ], 2)) : b("", !0)
                  ])
                ], 10, ke))), 128))
              ]))
            ], 2),
            t("div", {
              class: u(["p-4", r.value ? "border-t border-gray-700" : "border-t border-gray-200"])
            }, [
              t("button", {
                onClick: P,
                class: u(["w-full text-center text-sm font-medium", r.value ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"])
              }, h(f.value ? s("Collapse View") : s("View all notifications")), 3)
            ], 2)
          ], 2)) : b("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
}, Ze = /* @__PURE__ */ U(Ue, [["__scopeId", "data-v-1c046043"]]), Fe = { class: "confirmation-content" }, He = { class: "confirmation-title" }, Je = { class: "confirmation-message" }, Xe = { class: "confirmation-actions" }, We = ["disabled"], Ye = {
  key: 0,
  class: "loading-spinner"
}, Ke = {
  __name: "confirmation",
  props: {
    title: {
      type: String,
      default: "Confirm Action"
    },
    message: {
      type: String,
      default: "Are you sure you want to proceed?"
    },
    confirmText: {
      type: String,
      default: "Delete"
    },
    cancelText: {
      type: String,
      default: "Cancel"
    },
    loadingText: {
      type: String,
      default: "Processing..."
    },
    confirmType: {
      type: String,
      default: "danger",
      // 'danger', 'warning', 'success', 'primary'
      validator: (g) => ["danger", "warning", "success", "primary"].includes(g)
    },
    closeOnOverlayClick: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["confirm", "cancel", "close"],
  setup(g, { expose: a, emit: o }) {
    const s = g, v = o, d = k(!0), f = k(!1), y = async () => {
      f.value = !0;
      try {
        await v("confirm");
      } finally {
        f.value = !1;
      }
    }, r = () => {
      v("cancel"), w();
    }, _ = () => {
      s.closeOnOverlayClick && r();
    }, w = () => {
      d.value = !1, v("close");
    };
    return a({
      close: w,
      show: () => {
        d.value = !0;
      }
    }), (p, C) => d.value ? (c(), i("div", {
      key: 0,
      class: "confirmation-overlay",
      onClick: _
    }, [
      t("div", {
        class: "confirmation-dialog",
        onClick: C[0] || (C[0] = S(() => {
        }, ["stop"]))
      }, [
        t("div", Fe, [
          t("h3", He, h(g.title), 1),
          t("p", Je, h(g.message), 1)
        ]),
        t("div", Xe, [
          t("button", {
            type: "button",
            class: "btn btn-cancel",
            onClick: r
          }, h(g.cancelText), 1),
          t("button", {
            type: "button",
            class: "btn btn-confirm",
            onClick: y,
            disabled: f.value
          }, [
            f.value ? (c(), i("span", Ye)) : b("", !0),
            q(" " + h(f.value ? g.loadingText : g.confirmText), 1)
          ], 8, We)
        ])
      ])
    ])) : b("", !0);
  }
}, Ge = /* @__PURE__ */ U(Ke, [["__scopeId", "data-v-c367d6fe"]]);
function et() {
  const g = (v = {}) => new Promise((d, f) => {
    const y = document.createElement("div");
    document.body.appendChild(y);
    const _ = { ...{
      title: "Confirm Action",
      message: "Are you sure you want to proceed?",
      confirmText: "Confirm",
      cancelText: "Cancel",
      confirmType: "danger",
      closeOnOverlayClick: !0
    }, ...v }, w = ae({
      render() {
        return re(Ge, {
          ..._,
          onConfirm: () => {
            p(), d(!0);
          },
          onCancel: () => {
            p(), d(!1);
          },
          onClose: () => {
            p(), d(!1);
          }
        });
      }
    }), p = () => {
      setTimeout(() => {
        w.unmount(), y.parentNode && y.parentNode.removeChild(y);
      }, 200);
    };
    w.mount(y);
  });
  return {
    showConfirmation: g,
    confirmDelete: (v = "All your photos will be permanently removed and you won't be able to see them again, including the ones you've shared with your friends.") => g({
      title: "You're about to delete your account",
      message: v,
      confirmText: "Delete",
      confirmType: "danger"
    }),
    confirmAction: (v, d, f = "Confirm") => g({
      title: v,
      message: d,
      confirmText: f,
      confirmType: "primary"
    }),
    confirmWarning: (v, d, f = "Proceed") => g({
      title: v,
      message: d,
      confirmText: f,
      confirmType: "warning"
    })
  };
}
export {
  Ze as default,
  et as useConfirmation
};
