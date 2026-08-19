/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "dana_dash_user";
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000; // 8 hours

// ─── Credentials sourced from .env (VITE_ prefix = exposed to browser) ───────
// ⚠️  This is still a client-side check. Replace login() with a real API call
//     (returning a signed JWT) before this goes to production.
// ─────────────────────────────────────────────────────────────────────────────
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL ?? "";
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD ?? "";

function loadUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    // Expire the session after SESSION_DURATION_MS
    if (data.expiresAt && Date.now() > data.expiresAt) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadUser);

  const login = useCallback(async (email, password) => {
    // ── Replace the block below with a real API call when ready ──────────
    if (
      email.toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
      password === ADMIN_PASSWORD
    ) {
      const userData = {
        email: email.toLowerCase(),
        name: "Admin",
        role: "admin",
        expiresAt: Date.now() + SESSION_DURATION_MS,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      setUser(userData);
      return { ok: true };
    }
    return { ok: false, message: "Invalid email or password." };
    // ─────────────────────────────────────────────────────────────────────
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
