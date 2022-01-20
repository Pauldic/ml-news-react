import { toast } from "react-toastify";

const toastSuccess = (data, autoClose = 3000) =>
  toast.success(data, { autoClose });
const toastWarn = (data, autoClose = 3000) => toast.warn(data, { autoClose });
const toastError = (
  data = "Something went wrong, please try again later",
  autoClose = 3000
) => toast.error(data, { autoClose });

export { toastSuccess, toastWarn, toastError };
