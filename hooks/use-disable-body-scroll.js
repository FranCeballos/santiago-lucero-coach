import { useEffect } from "react";

export const useDisableBodyScroll = (open) => {
  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "unset";
  }, [open]);
};
