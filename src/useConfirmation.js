import { ref, createApp, h } from "vue";
import ConfirmationDialog from "./confirmation.vue";

export function useConfirmation() {
  const showConfirmation = (options = {}) => {
    return new Promise((resolve, reject) => {
      // Create a container for the dialog
      const container = document.createElement("div");
      document.body.appendChild(container);

      // Default options
      const defaultOptions = {
        title: "Confirm Action",
        message: "Are you sure you want to proceed?",
        confirmText: "Confirm",
        cancelText: "Cancel",
        confirmType: "danger",
        closeOnOverlayClick: true,
      };

      const finalOptions = { ...defaultOptions, ...options };

      // Create the Vue app instance
      const app = createApp({
        render() {
          return h(ConfirmationDialog, {
            ...finalOptions,
            onConfirm: () => {
              cleanup();
              resolve(true);
            },
            onCancel: () => {
              cleanup();
              resolve(false);
            },
            onClose: () => {
              cleanup();
              resolve(false);
            },
          });
        },
      });

      // Cleanup function
      const cleanup = () => {
        setTimeout(() => {
          app.unmount();
          if (container.parentNode) {
            container.parentNode.removeChild(container);
          }
        }, 200); // Small delay for exit animation
      };

      // Mount the app
      app.mount(container);
    });
  };

  // Convenience methods for common confirmation types
  const confirmDelete = (
    message = "All your photos will be permanently removed and you won't be able to see them again, including the ones you've shared with your friends."
  ) => {
    return showConfirmation({
      title: "You're about to delete your account",
      message,
      confirmText: "Delete",
      confirmType: "danger",
    });
  };

  const confirmAction = (title, message, confirmText = "Confirm") => {
    return showConfirmation({
      title,
      message,
      confirmText,
      confirmType: "primary",
    });
  };

  const confirmWarning = (title, message, confirmText = "Proceed") => {
    return showConfirmation({
      title,
      message,
      confirmText,
      confirmType: "warning",
    });
  };

  return {
    showConfirmation,
    confirmDelete,
    confirmAction,
    confirmWarning,
  };
}

export default useConfirmation;
