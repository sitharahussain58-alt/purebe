import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Toast = ({ toasts }) => {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast">
          <CheckCircle2 size={18} color="#F4B327" />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
