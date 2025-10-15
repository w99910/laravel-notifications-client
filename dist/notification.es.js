import { ref as k, computed as P, onMounted as Z, onUnmounted as ee, createElementBlock as i, openBlock as c, createElementVNode as t, createVNode as te, normalizeClass as u, createCommentVNode as x, toDisplayString as f, Transition as ae, withCtx as re, withModifiers as N, Fragment as B, renderList as L, createTextVNode as F, unref as O, normalizeStyle as q, createApp as oe, h as se } from "vue";
const ne = (d, a, r = {}) => {
  if (!d) return "";
  const m = a || Date.now(), g = new Date(d), o = m - g.getTime(), y = Math.floor(o / (1e3 * 60)), h = Math.floor(o / (1e3 * 60 * 60)), v = Math.floor(o / (1e3 * 60 * 60 * 24)), b = Math.floor(v / 7), s = Math.floor(v / 30), _ = Math.floor(v / 365);
  return y < 1 ? r["Just now"] ?? "Just now" : y < 60 ? `${y} ${r.minute ?? "minute"}${y > 1 ? "s" : ""} ${r.ago ?? "ago"}` : h < 24 ? `${h} ${r.hour ?? "hour"}${h > 1 ? "s" : ""} ${r.ago ?? "ago"}` : v < 7 ? `${v} ${r.day ?? "day"}${v > 1 ? "s" : ""} ${r.ago ?? "ago"}` : b < 4 ? `${b} ${r.week ?? "week"}${b > 1 ? "s" : ""} ${r.ago ?? "ago"}` : s < 12 ? `${s} ${r.month ?? "month"}${s > 1 ? "s" : ""} ${r.ago ?? "ago"}` : `${_} ${r.year ?? "year"}${_ > 1 ? "s" : ""} ${r.ago ?? "ago"}`;
}, le = (d, a) => {
  switch (d) {
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
}, ie = (d, a) => {
  switch (d) {
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
}, ce = (d) => {
  if (!d || d === "#f3f4f6") return "#1f2937";
  let a = d.replace("#", "");
  a.length === 3 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]);
  const r = parseInt(a.substring(0, 2), 16), m = parseInt(a.substring(2, 4), 16), g = parseInt(a.substring(4, 6), 16);
  return (0.299 * r + 0.587 * m + 0.114 * g) / 255 > 0.5 ? "#1f2937" : "#ffffff";
}, ue = () => [
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
], de = {};
class U {
  constructor(a = "", r = "notifications") {
    this.baseURL = a, this.prefix = r, this.apiBase = `${a}/${r}`;
  }
  /**
   * Make HTTP request with proper error handling
   * @param {string} url - Request URL
   * @param {Object} options - Fetch options
   * @returns {Promise} - Response data
   */
  async request(a, r = {}) {
    const m = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        ...r.headers
      },
      credentials: "include",
      // Include cookies for Laravel session
      ...r
    }, g = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
    g && (m.headers["X-CSRF-TOKEN"] = g);
    try {
      const o = await fetch(a, m);
      if (!o.ok)
        throw new Error(`HTTP error! status: ${o.status}`);
      return await o.json();
    } catch (o) {
      throw console.error("API request failed:", o), o;
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
    const r = new URLSearchParams(a).toString(), m = r ? `${this.apiBase}?${r}` : this.apiBase;
    return this.request(m);
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
    const r = new URLSearchParams(a).toString(), m = r ? `${this.apiBase}/unread?${r}` : `${this.apiBase}/unread`;
    return this.request(m);
  }
  /**
   * Get read notifications
   * GET /notifications/read
   * @param {Object} params - Query parameters
   * @returns {Promise} - Read notifications data
   */
  async getReadNotifications(a = {}) {
    const r = new URLSearchParams(a).toString(), m = r ? `${this.apiBase}/read?${r}` : `${this.apiBase}/read`;
    return this.request(m);
  }
  /**
   * Mark notification(s) as read
   * POST /notifications/read
   * @param {string|Array} notificationIds - Single ID or array of IDs
   * @returns {Promise} - Response data
   */
  async markAsRead(a) {
    const r = Array.isArray(a) ? a : [a];
    return this.request(`${this.apiBase}/read`, {
      method: "POST",
      body: JSON.stringify({ ids: r })
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
    const r = Array.isArray(a) ? a : [a];
    return this.request(`${this.apiBase}/delete`, {
      method: "POST",
      body: JSON.stringify({ ids: r })
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
  async batchOperation(a, r) {
    switch (a) {
      case "read":
        return this.markAsRead(r);
      case "delete":
        return this.deleteNotification(r);
      default:
        throw new Error(`Unknown operation: ${a}`);
    }
  }
}
new U(
  window.location.origin,
  // Base URL
  typeof process < "u" ? process.env?.MIX_NOTIFICATION_API_PREFIX : de?.VITE_NOTIFICATION_API_PREFIX || "notifications"
  // Prefix - can be configured
);
const H = (d, a) => {
  const r = d.__vccOpts || d;
  for (const [m, g] of a)
    r[m] = g;
  return r;
}, ge = {}, fe = {
  key: 0,
  class: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
}, ve = { class: "flex items-center" }, he = { class: "flex items-center space-x-4" }, ye = ["onClick"], me = {
  key: 0,
  class: "ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1"
}, pe = {
  key: 1,
  class: "p-6 text-center"
}, be = { class: "text-red-500 mb-2" }, xe = { class: "mb-2" }, we = {
  key: 1,
  class: "mt-4"
}, ke = { class: "text-sm" }, _e = { key: 3 }, Ce = ["onClick"], $e = { class: "w-10 h-10 mr-3 flex-shrink-0 flex items-center justify-center" }, Ae = ["src", "alt"], Te = {
  key: 0,
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, Ne = {
  key: 1,
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
}, Se = {
  key: 2,
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, Ie = {
  key: 3,
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
  "clip-rule": "evenodd"
}, Oe = {
  key: 4,
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, Me = { class: "flex-1 min-w-0" }, Ee = { class: "flex items-center justify-between" }, Pe = { class: "flex items-center space-x-2" }, Be = { class: "relative group" }, Le = ["onClick"], ze = ["onClick"], De = ["onClick"], Re = {
  key: 0,
  class: "w-2 h-2 bg-blue-500 rounded-full"
}, Ve = {
  key: 0,
  class: "mt-2"
}, je = { class: "flex items-center justify-between mb-1" }, qe = {
  key: 1,
  class: "flex flex-wrap gap-2 mt-3"
}, Fe = ["onClick"], Ue = { class: "flex items-center" }, He = {
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
    },
    notificationAPIPrefix: {
      type: String,
      default: ""
    }
  },
  emits: ["notification-read", "action-clicked", "all-read", "all-deleted"],
  setup(d, { emit: a }) {
    const r = d, m = r.notificationAPIPrefix || (typeof process < "u" ? process.env?.MIX_NOTIFICATION_API_PREFIX : ge?.VITE_NOTIFICATION_API_PREFIX || "notifications"), g = new U(
      window.location.origin,
      // Base URL
      m
    ), o = (n) => r.locales[n] || n, y = a, h = k(!1), v = k(!1), b = k("unread"), s = k(!1), _ = k(null), T = k(Date.now()), $ = k(!1), C = k(null), S = k(null), p = k([]), I = P(
      () => p.value.filter((n) => !n.read_at).length
    ), z = P(() => b.value === "unread" ? p.value.filter((n) => !n.read_at) : b.value === "read" ? p.value.filter((n) => n.read_at) : p.value), X = P(() => [
      {
        id: "unread",
        name: "New",
        count: I.value
      },
      {
        id: "inbox",
        name: "All",
        count: 0
      }
    ]), A = async () => {
      try {
        $.value = !0, C.value = null;
        const n = await g.getNotifications();
        p.value = n.data || n, console.log(p.value);
      } catch (n) {
        C.value = o("Failed to load notifications"), console.error("Error loading notifications:", n), p.value = ue();
      } finally {
        $.value = !1;
      }
    }, J = async () => {
      h.value && v.value && (v.value = !1), !h.value && p.value.length === 0 && await A(), h.value = !h.value;
    }, D = () => {
      v.value = !v.value, v.value && window.scrollTo({ top: 0, behavior: "smooth" });
    }, W = async () => {
      try {
        $.value = !0, await g.markAllAsRead(), A(), y("all-read");
      } catch (n) {
        C.value = o("Failed to mark all as read"), console.error("Error marking all as read:", n);
      } finally {
        $.value = !1;
      }
    }, Y = async () => {
      if (confirm(o("Are you sure you want to delete all notifications? This action cannot be undone.")))
        try {
          $.value = !0, await g.deleteAllNotifications(), p.value = [], y("all-deleted");
        } catch (n) {
          C.value = o("Failed to delete all notifications"), console.error("Error deleting all notifications:", n);
        } finally {
          $.value = !1;
        }
    }, M = async (n) => {
      try {
        await g.markAsRead(n);
        const l = p.value.find((e) => e.id === n);
        l && (l.read_at = !0, y("notification-read", l));
      } catch (l) {
        C.value = o("Failed to mark notification as read"), console.error("Error marking notification as read:", l);
      }
    }, R = async (n) => {
      try {
        await g.deleteNotification(n);
        const l = p.value.findIndex((e) => e.id === n);
        l !== -1 && p.value.splice(l, 1);
      } catch (l) {
        C.value = o("Failed to delete notification"), console.error("Error deleting notification:", l);
      }
    }, K = async () => {
      await A();
    }, G = async (n, l) => {
      if (y("action-clicked", { action: n, notification: l }), l.read_at || await M(l.id), (n.label.toLowerCase() === o("accept") || n.label.toLowerCase() === o("decline")) && await R(l.id), n.url && n.url !== "#") {
        const e = document.createElement("a");
        e.href = n.url, e.target = "_blank", e.rel = "noopener noreferrer", document.body.appendChild(e), e.click(), document.body.removeChild(e);
      }
    }, Q = (n) => {
      S.value = S.value === n ? null : n;
    }, V = (n) => {
      _.value && !_.value.contains(n.target) && (v.value ? v.value = !1 : h.value = !1), S.value = null;
    };
    let E = null;
    return Z(async () => {
      const n = await g.getUserId();
      if (!n) {
        console.error("User ID not found. Please ensure the user is authenticated.");
        return;
      }
      if (document.addEventListener("click", V), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        localStorage.getItem("notification-theme") || (s.value = e.matches);
      }), await A(), !window.Echo) {
        console.error("Laravel Echo is not defined. Please ensure it is properly imported and configured.");
        return;
      }
      console.log("Setting up Echo channel listener...", r.user_id || n || 1);
      const l = Echo.private("App.Models.User." + (r.user_id || n || 1));
      l.subscribed(() => {
        console.log("✅ Successfully subscribed to notifications channel");
      }), l.error((e) => {
        console.error("🚨 Channel subscription error:", e);
      }), l.notification((e) => {
        const w = p.value.find((j) => j.id === e.id);
        w ? Object.assign(w, e) : (p.value.unshift(e), setTimeout(async () => {
          await A(), setTimeout(async () => {
            await A();
          }, 5 * 60 * 1e3);
        }, 60 * 1e3));
      }), E = setInterval(() => {
        T.value = Date.now();
      }, 6e4);
    }), ee(() => {
      if (document.removeEventListener("click", V), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", () => {
      }), E && clearInterval(E), window.Echo) {
        const n = Echo.private("App.Models.User." + (r.user_id || userId));
        n.unlisten(".notification"), n.unsubscribe(), console.log("✅ Unsubscribed from notifications channel");
      }
    }), (n, l) => (c(), i("div", {
      class: "relative",
      ref_key: "notificationContainer",
      ref: _
    }, [
      t("button", {
        onClick: J,
        class: u(["relative p-2 cursor-pointer focus:outline-none rounded-full transition-colors", {
          "bg-blue-50 text-gray-600 hover:text-gray-800": h.value && !s.value,
          "bg-blue-900/20 text-gray-300 hover:text-gray-100": h.value && s.value,
          "text-gray-600 hover:text-gray-800": !h.value && !s.value,
          "text-gray-300 hover:text-gray-100": !h.value && s.value
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
        I.value > 0 ? (c(), i("span", fe, f(I.value > 99 ? "99+" : I.value), 1)) : x("", !0)
      ], 2),
      te(ae, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        default: re(() => [
          h.value ? (c(), i("div", {
            key: 0,
            class: u([
              "z-50 shadow-xl border",
              s.value ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-200",
              v.value ? "fixed top-0 right-0 h-full flex flex-col w-2/5 rounded-l-lg overflow-hidden" : "absolute right-0 mt-2 w-96 rounded-lg"
            ]),
            onClick: l[2] || (l[2] = N(() => {
            }, ["stop"]))
          }, [
            t("div", {
              class: u(["flex items-center justify-between p-4", s.value ? "border-b border-gray-700" : "border-b border-gray-200"])
            }, [
              t("div", ve, [
                t("h3", {
                  class: u(["text-lg font-semibold", s.value ? "text-white" : "text-gray-900"])
                }, f(o("Notifications")), 3),
                v.value ? (c(), i("span", {
                  key: 0,
                  class: u(["ml-2 text-sm", s.value ? "text-gray-400" : "text-gray-500"])
                }, "(" + f(p.value.length) + ")", 3)) : x("", !0)
              ]),
              t("div", he, [
                (c(), i("svg", {
                  "aria-label": "Mark all as read",
                  onClick: W,
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
                }, l[4] || (l[4] = [
                  t("path", { d: "M18 6 7 17l-5-5" }, null, -1),
                  t("path", { d: "m22 10-7.5 7.5L13 16" }, null, -1)
                ]), 2)),
                (c(), i("svg", {
                  "aria-label": "Delete all notifications",
                  onClick: Y,
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
                }, l[5] || (l[5] = [
                  t("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }, null, -1),
                  t("path", { d: "M3 6h18" }, null, -1),
                  t("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }, null, -1)
                ]), 2)),
                v.value ? (c(), i("button", {
                  key: 0,
                  onClick: D,
                  class: u(s.value ? "p-1 rounded-full hover:bg-gray-700" : "p-1 rounded-full hover:bg-gray-100"),
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
                ]), 2)) : x("", !0)
              ])
            ], 2),
            t("div", {
              class: u(["flex", s.value ? "border-b border-gray-700" : "border-b border-gray-200"])
            }, [
              (c(!0), i(B, null, L(X.value, (e) => (c(), i("button", {
                key: e.id,
                onClick: (w) => b.value = e.id,
                class: u(["flex-1 px-4 py-3 text-sm font-medium text-center border-b-2 transition-colors", [
                  b.value === e.id ? s.value ? "border-blue-500 text-blue-400 bg-blue-900/20" : "border-blue-500 text-blue-600 bg-blue-50" : s.value ? "border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800" : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                ]])
              }, [
                F(f(o(e.name)) + " ", 1),
                e.count > 0 ? (c(), i("span", me, f(e.count), 1)) : x("", !0)
              ], 10, ye))), 128))
            ], 2),
            t("div", {
              class: u(["overflow-y-auto", v.value ? "h-full" : "max-h-96"])
            }, [
              $.value ? (c(), i("div", {
                key: 0,
                class: u(["p-6 text-center", s.value ? "text-gray-400" : "text-gray-500"])
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
                t("span", null, f(o("Loading notifications")) + "...", 1)
              ], 2)) : C.value ? (c(), i("div", pe, [
                t("div", be, f(C.value), 1),
                t("button", {
                  onClick: K,
                  class: u(["text-sm px-4 py-2 rounded transition-colors", s.value ? "bg-gray-700 hover:bg-gray-600 text-gray-200" : "bg-gray-100 hover:bg-gray-200 text-gray-700"])
                }, f(o("Try Again")), 3)
              ])) : z.value.length === 0 ? (c(), i("div", {
                key: 2,
                class: u(["p-6 text-center", s.value ? "text-gray-400" : "text-gray-500"])
              }, [
                t("div", xe, f(b.value === "unread" ? o("No unread notifications") : b.value === "read" ? o("No read notifications") : p.value.length === 0 ? o("No notifications yet") : o("No notifications")), 1),
                b.value !== "inbox" && p.value.length > 0 ? (c(), i("button", {
                  key: 0,
                  onClick: l[0] || (l[0] = (e) => b.value = "inbox"),
                  class: "text-sm text-blue-500 hover:text-blue-600"
                }, f(o("View all notifications")), 1)) : p.value.length === 0 ? (c(), i("div", we, [
                  (c(), i("svg", {
                    class: u(["w-12 h-12 mx-auto mb-4 opacity-50", s.value ? "text-gray-600" : "text-gray-300"]),
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
                  t("p", ke, f(o("You're all caught up!")), 1)
                ])) : x("", !0)
              ], 2)) : (c(), i("div", _e, [
                (c(!0), i(B, null, L(z.value, (e) => (c(), i("div", {
                  key: e.id,
                  onClick: (w) => M(e.id),
                  class: u(["flex items-start cursor-pointer p-4 transition-colors", [
                    { "border-b last:border-b-0": !0 },
                    s.value ? { "hover:bg-gray-800 border-gray-700": !0, "bg-blue-900/10": !e.read_at } : { "hover:bg-gray-50 border-gray-100": !0, "bg-blue-50": !e.read_at }
                  ]])
                }, [
                  t("div", $e, [
                    e.avatar ? (c(), i("img", {
                      key: 0,
                      src: e.avatar,
                      alt: e.title,
                      class: "w-10 h-10 rounded-full"
                    }, null, 8, Ae)) : (c(), i("div", {
                      key: 1,
                      class: u(["w-10 h-10 rounded-full flex items-center justify-center", O(le)(e.status, s.value)])
                    }, [
                      (c(), i("svg", {
                        class: u(["w-5 h-5", O(ie)(e.status, s.value)]),
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        e.status === "info" ? (c(), i("path", Te)) : e.status === "success" ? (c(), i("path", Ne)) : e.status === "warning" ? (c(), i("path", Se)) : e.status === "error" ? (c(), i("path", Ie)) : (c(), i("path", Oe))
                      ], 2))
                    ], 2))
                  ]),
                  t("div", Me, [
                    t("div", Ee, [
                      t("p", {
                        class: u(["text-sm font-medium", s.value ? "text-gray-100" : "text-gray-900"])
                      }, f(o(e.title)), 3),
                      t("div", Pe, [
                        t("span", {
                          class: u(["text-xs", s.value ? "text-gray-400" : "text-gray-500"])
                        }, f(O(ne)(e.created_at, T.value.value, d.locales)), 3),
                        t("div", Be, [
                          t("button", {
                            class: u(["p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity", s.value ? "hover:bg-gray-700" : "hover:bg-gray-100"]),
                            onClick: N((w) => Q(e.id), ["stop"])
                          }, [
                            (c(), i("svg", {
                              class: u(["w-4 h-4", s.value ? "text-gray-400" : "text-gray-500"]),
                              fill: "currentColor",
                              viewBox: "0 0 20 20"
                            }, l[9] || (l[9] = [
                              t("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" }, null, -1)
                            ]), 2))
                          ], 10, Le),
                          S.value === e.id ? (c(), i("div", {
                            key: 0,
                            class: u(["absolute right-0 mt-1 w-40 rounded-md shadow-lg z-10", s.value ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"]),
                            onClick: l[1] || (l[1] = N(() => {
                            }, ["stop"]))
                          }, [
                            e.read_at ? x("", !0) : (c(), i("button", {
                              key: 0,
                              onClick: (w) => M(e.id),
                              class: u(["w-full text-left px-4 py-2 text-sm hover:bg-opacity-80 transition-colors", s.value ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"])
                            }, f(o("Mark as Read")), 11, ze)),
                            t("button", {
                              onClick: (w) => R(e.id),
                              class: u(["w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-opacity-80 transition-colors", s.value ? "hover:bg-gray-700" : "hover:bg-gray-100"])
                            }, f(o("Delete")), 11, De)
                          ], 2)) : x("", !0)
                        ]),
                        e.read_at ? x("", !0) : (c(), i("div", Re))
                      ])
                    ]),
                    t("p", {
                      class: u(["text-sm mt-1", s.value ? "text-gray-300" : "text-gray-600"])
                    }, f(e.message), 3),
                    e.progress !== void 0 && e.progress !== null ? (c(), i("div", Ve, [
                      t("div", je, [
                        t("span", {
                          class: u(["text-xs", s.value ? "text-gray-400" : "text-gray-500"])
                        }, f(o("Progress")), 3),
                        t("span", {
                          class: u(["text-xs font-medium", s.value ? "text-gray-300" : "text-gray-700"])
                        }, f(e.progress) + "% ", 3)
                      ]),
                      t("div", {
                        class: u(["w-full rounded-full h-2", s.value ? "bg-gray-700" : "bg-gray-200"])
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
                          style: q({ width: `${e.progress}%` })
                        }, null, 6)
                      ], 2)
                    ])) : x("", !0),
                    e.actions ? (c(), i("div", qe, [
                      (c(!0), i(B, null, L(e.actions, (w) => (c(), i("button", {
                        key: w.label,
                        onClick: N((j) => G(w, e), ["stop"]),
                        class: "px-3 py-1 text-xs font-medium rounded transition-colors",
                        style: q({
                          backgroundColor: w.backgroundColor || "#f3f4f6",
                          color: O(ce)(w.backgroundColor)
                        })
                      }, f(o(w.label)), 13, Fe))), 128))
                    ])) : x("", !0),
                    e.attachment ? (c(), i("div", {
                      key: 2,
                      class: u(["mt-3 p-2 rounded border", s.value ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"])
                    }, [
                      t("div", Ue, [
                        (c(), i("svg", {
                          class: u(["w-4 h-4 mr-2", s.value ? "text-gray-400" : "text-gray-500"]),
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
                          class: u(["text-sm", s.value ? "text-gray-300" : "text-gray-700"])
                        }, f(e.attachment), 3)
                      ])
                    ], 2)) : x("", !0)
                  ])
                ], 10, Ce))), 128))
              ]))
            ], 2),
            t("div", {
              class: u(["p-4", s.value ? "border-t border-gray-700" : "border-t border-gray-200"])
            }, [
              t("button", {
                onClick: D,
                class: u(["w-full text-center text-sm font-medium", s.value ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"])
              }, f(v.value ? o("Collapse View") : o("View all notifications")), 3)
            ], 2)
          ], 2)) : x("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
}, tt = /* @__PURE__ */ H(He, [["__scopeId", "data-v-d820f11a"]]), Xe = { class: "confirmation-content" }, Je = { class: "confirmation-title" }, We = { class: "confirmation-message" }, Ye = { class: "confirmation-actions" }, Ke = ["disabled"], Ge = {
  key: 0,
  class: "loading-spinner"
}, Qe = {
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
      validator: (d) => ["danger", "warning", "success", "primary"].includes(d)
    },
    closeOnOverlayClick: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["confirm", "cancel", "close"],
  setup(d, { expose: a, emit: r }) {
    const m = d, g = r, o = k(!0), y = k(!1), h = async () => {
      y.value = !0;
      try {
        await g("confirm");
      } finally {
        y.value = !1;
      }
    }, v = () => {
      g("cancel"), s();
    }, b = () => {
      m.closeOnOverlayClick && v();
    }, s = () => {
      o.value = !1, g("close");
    };
    return a({
      close: s,
      show: () => {
        o.value = !0;
      }
    }), (_, T) => o.value ? (c(), i("div", {
      key: 0,
      class: "confirmation-overlay",
      onClick: b
    }, [
      t("div", {
        class: "confirmation-dialog",
        onClick: T[0] || (T[0] = N(() => {
        }, ["stop"]))
      }, [
        t("div", Xe, [
          t("h3", Je, f(d.title), 1),
          t("p", We, f(d.message), 1)
        ]),
        t("div", Ye, [
          t("button", {
            type: "button",
            class: "btn btn-cancel",
            onClick: v
          }, f(d.cancelText), 1),
          t("button", {
            type: "button",
            class: "btn btn-confirm",
            onClick: h,
            disabled: y.value
          }, [
            y.value ? (c(), i("span", Ge)) : x("", !0),
            F(" " + f(y.value ? d.loadingText : d.confirmText), 1)
          ], 8, Ke)
        ])
      ])
    ])) : x("", !0);
  }
}, Ze = /* @__PURE__ */ H(Qe, [["__scopeId", "data-v-c367d6fe"]]);
function at() {
  const d = (g = {}) => new Promise((o, y) => {
    const h = document.createElement("div");
    document.body.appendChild(h);
    const b = { ...{
      title: "Confirm Action",
      message: "Are you sure you want to proceed?",
      confirmText: "Confirm",
      cancelText: "Cancel",
      confirmType: "danger",
      closeOnOverlayClick: !0
    }, ...g }, s = oe({
      render() {
        return se(Ze, {
          ...b,
          onConfirm: () => {
            _(), o(!0);
          },
          onCancel: () => {
            _(), o(!1);
          },
          onClose: () => {
            _(), o(!1);
          }
        });
      }
    }), _ = () => {
      setTimeout(() => {
        s.unmount(), h.parentNode && h.parentNode.removeChild(h);
      }, 200);
    };
    s.mount(h);
  });
  return {
    showConfirmation: d,
    confirmDelete: (g = "All your photos will be permanently removed and you won't be able to see them again, including the ones you've shared with your friends.") => d({
      title: "You're about to delete your account",
      message: g,
      confirmText: "Delete",
      confirmType: "danger"
    }),
    confirmAction: (g, o, y = "Confirm") => d({
      title: g,
      message: o,
      confirmText: y,
      confirmType: "primary"
    }),
    confirmWarning: (g, o, y = "Proceed") => d({
      title: g,
      message: o,
      confirmText: y,
      confirmType: "warning"
    })
  };
}
export {
  tt as default,
  at as useConfirmation
};
