export type ToastType = 'success' | 'info';

export type ToastPosition = 'top' | 'bottom';

export interface ToastService {
  toast: ToastProps | null;
  showToast: (props: ToastProps) => void;
  hideToast: (props?: HideToastProps | undefined) => void;
}

export interface ToastProps {
  message: string;
  type?: ToastType;
  position?: ToastPosition;
  duration?: number;
}

export interface HideToastProps {
  duration?: number;
}
