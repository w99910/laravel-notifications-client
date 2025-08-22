<template>
    <div v-if="isVisible" class="confirmation-overlay" @click="handleOverlayClick">
        <div class="confirmation-dialog" @click.stop>
            <div class="confirmation-content">
                <h3 class="confirmation-title">{{ title }}</h3>
                <p class="confirmation-message">{{ message }}</p>
            </div>

            <div class="confirmation-actions">
                <button type="button" class="btn btn-cancel" @click="handleCancel">
                    {{ cancelText }}
                </button>
                <button type="button" class="btn btn-confirm" @click="handleConfirm" :disabled="loading">
                    <span v-if="loading" class="loading-spinner"></span>
                    {{ loading ? loadingText : confirmText }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: 'Confirm Action'
    },
    message: {
        type: String,
        default: 'Are you sure you want to proceed?'
    },
    confirmText: {
        type: String,
        default: 'Delete'
    },
    cancelText: {
        type: String,
        default: 'Cancel'
    },
    loadingText: {
        type: String,
        default: 'Processing...'
    },
    confirmType: {
        type: String,
        default: 'danger', // 'danger', 'warning', 'success', 'primary'
        validator: (value) => ['danger', 'warning', 'success', 'primary'].includes(value)
    },
    closeOnOverlayClick: {
        type: Boolean,
        default: true
    }
})

const emit = defineEmits(['confirm', 'cancel', 'close'])

const isVisible = ref(true)
const loading = ref(false)

const handleConfirm = async () => {
    loading.value = true
    try {
        await emit('confirm')
    } finally {
        loading.value = false
    }
}

const handleCancel = () => {
    emit('cancel')
    close()
}

const handleOverlayClick = () => {
    if (props.closeOnOverlayClick) {
        handleCancel()
    }
}

const close = () => {
    isVisible.value = false
    emit('close')
}

// Expose methods for parent components
defineExpose({
    close,
    show: () => { isVisible.value = true }
})
</script>

<style scoped>
.confirmation-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
}

.confirmation-dialog {
    background: white;
    border-radius: 12px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    max-width: 400px;
    width: 100%;
    overflow: hidden;
    animation: slideIn 0.2s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: scale(0.95) translateY(-10px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.confirmation-content {
    padding: 24px 24px 16px;
}

.confirmation-title {
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    margin: 0 0 12px 0;
    line-height: 1.4;
}

.confirmation-message {
    font-size: 14px;
    color: #6b7280;
    margin: 0;
    line-height: 1.5;
}

.confirmation-actions {
    padding: 16px 24px 24px;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
}

.btn {
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid;
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 80px;
    justify-content: center;
}

.btn:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

.btn-cancel {
    background: white;
    color: #374151;
    border-color: #d1d5db;
}

.btn-cancel:hover:not(:disabled) {
    background: #f9fafb;
    border-color: #9ca3af;
}

.btn-confirm {
    background: #ef4444;
    color: white;
    border-color: #ef4444;
}

.btn-confirm:hover:not(:disabled) {
    background: #dc2626;
    border-color: #dc2626;
}

/* Different confirm button types */
.confirmation-dialog[data-type="warning"] .btn-confirm {
    background: #f59e0b;
    border-color: #f59e0b;
}

.confirmation-dialog[data-type="warning"] .btn-confirm:hover:not(:disabled) {
    background: #d97706;
    border-color: #d97706;
}

.confirmation-dialog[data-type="success"] .btn-confirm {
    background: #10b981;
    border-color: #10b981;
}

.confirmation-dialog[data-type="success"] .btn-confirm:hover:not(:disabled) {
    background: #059669;
    border-color: #059669;
}

.confirmation-dialog[data-type="primary"] .btn-confirm {
    background: #3b82f6;
    border-color: #3b82f6;
}

.confirmation-dialog[data-type="primary"] .btn-confirm:hover:not(:disabled) {
    background: #2563eb;
    border-color: #2563eb;
}

.loading-spinner {
    width: 14px;
    height: 14px;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* Responsive */
@media (max-width: 640px) {
    .confirmation-overlay {
        padding: 16px;
    }

    .confirmation-actions {
        flex-direction: column-reverse;
    }

    .btn {
        width: 100%;
    }
}
</style>
