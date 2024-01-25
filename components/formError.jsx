import { AlertTriangleIcon } from "lucide-react";

export default function FormError({ message }) {
  if (!message) {
    return null;
  }
  return (
    <div className="bg-red-200 p-3 rounded-md flex gap-4 items-center">
      <AlertTriangleIcon className="text-red-500 h-4 w-4" />
      <p className="text-red-500">{message}</p>
    </div>
  );
}
