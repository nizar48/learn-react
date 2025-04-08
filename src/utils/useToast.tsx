import { useState, useEffect, createContext, useContext, ReactNode } from "react";

type ToastContextType = {
  showToast: (message: string, duration?: number) => void;
};

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState({ visible: false, message: "", duration: 3000 });

  const showToast = (message: string, duration = 3000) => {
    setToast({ visible: true, message, duration });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        hideToast();
      }, toast.duration);

      return () => clearTimeout(timer);
    }
  }, [toast.visible, toast.duration]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast.visible && (
        <div className="fixed right-4 bottom-4 rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-800 shadow-md transition-opacity duration-200">
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextType {
  return useContext(ToastContext);
}
