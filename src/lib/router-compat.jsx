import {
  useNavigate as useTanstackNavigate,
  useLocation as useTanstackLocation,
  useParams as useTanstackParams,
  useRouterState,
} from "@tanstack/react-router";
import { useCallback, useMemo } from "react";

/** Splits "/explore?q=naruto" into { to, search } understood by TanStack Router. */
function parsePath(path) {
  const [pathname, query = ""] = String(path).split("?");
  const search = Object.fromEntries(new URLSearchParams(query).entries());
  return { to: pathname || "/", search };
}

/** react-router-dom compatible useNavigate on top of TanStack Router. */
export function useNavigate() {
  const navigate = useTanstackNavigate();

  return useCallback(
    (to, options = {}) => {
      if (typeof to === "number") {
        if (typeof window !== "undefined") window.history.go(to);
        return;
      }
      const { to: pathname, search } = parsePath(to);
      navigate({
        to: pathname,
        search,
        replace: options.replace,
        state: options.state,
      });
    },
    [navigate],
  );
}

/** react-router-dom compatible useLocation. */
export function useLocation() {
  const location = useTanstackLocation();
  return useMemo(
    () => ({
      pathname: location.pathname,
      search:
        "?" + new URLSearchParams(location.search ?? {}).toString(),
      hash: location.hash,
      state: location.state ?? {},
      key: location.href,
    }),
    [location],
  );
}

/** react-router-dom compatible useParams. */
export function useParams() {
  return useTanstackParams({ strict: false });
}

/** react-router-dom compatible useSearchParams. */
export function useSearchParams() {
  const navigate = useTanstackNavigate();
  const search = useRouterState({ select: (s) => s.location.search });
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const searchParams = useMemo(
    () => new URLSearchParams(search ?? {}),
    [search],
  );

  const setSearchParams = useCallback(
    (next, options = {}) => {
      const resolved =
        typeof next === "function" ? next(new URLSearchParams(search ?? {})) : next;
      const params =
        resolved instanceof URLSearchParams
          ? resolved
          : new URLSearchParams(resolved ?? {});
      navigate({
        to: pathname,
        search: Object.fromEntries(params.entries()),
        replace: options.replace,
      });
    },
    [navigate, pathname, search],
  );

  return [searchParams, setSearchParams];
}
