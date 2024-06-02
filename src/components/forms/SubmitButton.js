import { useFormStatus } from "react-dom";

import { classNames } from "@/utils/classNames";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={classNames(
        "rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        pending ? "bg-grey-600" : "bg-indigo-600"
      )}
    >
      Save
    </button>
  );
}