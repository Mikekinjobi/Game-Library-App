import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: ()=> void;
}

export default function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert-primary alert-warning alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
}
