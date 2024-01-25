import { AlertTriangleIcon, CheckCheckIcon } from "lucide-react";

export default function FormSuccess({ message }) {
  if (!message) {
    return null;
  }
  return (
    <div className="bg-emerald-200 p-3 rounded-md flex gap-4 items-center">
      <CheckCheckIcon className="text-emerald-500 h-4 w-4" />
      <p className="text-emerald-500">{message}</p>
    </div>
  );
}
