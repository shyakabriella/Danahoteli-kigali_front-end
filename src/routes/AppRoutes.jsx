import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";

// ── Public pages (lazy-loaded for smaller initial bundle) ──────────────────
const Layouts          = lazy(() => import("../components/Layouts"));
const HomePage         = lazy(() => import("../pages/Home/HomePage"));
const About            = lazy(() => import("../pages/About/index"));
const Contact          = lazy(() => import("../pages/Contact/index"));
const Experiences      = lazy(() => import("../pages/Experiences/index"));
const Rooms            = lazy(() => import("../pages/Rooms/index"));
const PrivacyPolicy    = lazy(() => import("../pages/PrivacyPolicy/index"));
const TermsConditions  = lazy(() => import("../pages/TermsConditions/index"));
const CancellationPolicy = lazy(() => import("../pages/CancellationPolicy/index"));
const CookiePolicy     = lazy(() => import("../pages/CookiePolicy/index"));
const NotFound         = lazy(() => import("../pages/NotFound/index"));

// ── Auth ───────────────────────────────────────────────────────────────────
const LoginPage        = lazy(() => import("../pages/Login/index"));

// ── Dashboard (protected, lazy-loaded) ────────────────────────────────────
const DashboardLayout  = lazy(() => import("../pages/Dashboard/DashboardLayout"));
const DashboardIndex   = lazy(() => import("../pages/Dashboard/index"));

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <span className="animate-pulse text-sm text-muted-foreground">Loading…</span>
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* ── Auth ───────────────────────────────────────────────── */}
        <Route path="/login" element={<LoginPage />} />

        {/* ── Dashboard (protected) ──────────────────────────────── */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardIndex />} />
          {/* Add more dashboard sub-routes here as needed */}
        </Route>

        {/* ── Public site ────────────────────────────────────────── */}
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="cancellation-policy" element={<CancellationPolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
