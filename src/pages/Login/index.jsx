import { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = location.state?.returnTo ?? "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Already authenticated — send straight to dashboard
  if (user) return <Navigate to={returnTo} replace />;

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.ok) {
      navigate(returnTo, { replace: true });
    } else {
      setError(result.message);
    }
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] flex">
      {/* Left panel — branding */}
      <div
        className="hidden lg:flex lg:w-1/2 relative items-end p-16"
        style={{ background: "hsl(var(--navy-deep))" }}
      >
        <img
          src="/Danakigali-photos-021.jpg"
          alt="Dana Kigali Hotel"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10">
          <img
            src="/DANA%20HOTEL.png"
            alt="Dana Kigali Hotel"
            className="h-20 w-auto mb-8"
          />
          <h1 className="font-display text-4xl text-white leading-tight mb-4">
            Hotel CMS
          </h1>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Manage pages, rooms, and experiences for DANA KIGALI HOTEL from
            one place.
          </p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden mb-10 flex justify-center">
            <img
              src="/DANA%20HOTEL.png"
              alt="Dana Kigali Hotel"
              className="h-16 w-auto"
            />
          </div>

          <h2 className="font-display text-3xl text-[hsl(var(--foreground))] mb-2">
            Sign in
          </h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-8">
            Enter your admin credentials to access the dashboard.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="admin@danakigali.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p
                role="alert"
                className="text-sm text-[hsl(var(--destructive))] bg-[hsl(var(--destructive)/0.08)] px-3 py-2 rounded-md"
              >
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-light))] text-[hsl(var(--navy-deep))] font-semibold rounded-none h-11"
            >
              {loading ? "Signing in…" : "Sign in"}
            </Button>
          </form>

          <p className="mt-8 text-xs text-center text-[hsl(var(--muted-foreground))]">
            Session expires automatically after 8 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
