import { Link } from "react-router-dom";
import { useContent } from "@/contexts/ContentContext";
import { useAuth } from "@/contexts/AuthContext";
import { FileText, Eye, Globe, Clock } from "lucide-react";

/**
 * Dashboard Overview — CMS landing page.
 * Shows a quick stat strip and a table of all managed pages.
 */
export default function DashboardIndex() {
  const { pages } = useContent();
  const { user } = useAuth();

  const published = pages.filter((p) => p.status === "Published").length;

  const stats = [
    {
      icon: <FileText className="w-5 h-5" />,
      label: "Total Pages",
      value: pages.length,
    },
    {
      icon: <Eye className="w-5 h-5" />,
      label: "Published",
      value: published,
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Site",
      value: (
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-[hsl(var(--gold))] transition-colors"
        >
          danakigali.com
        </a>
      ),
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Session",
      value: "8 h",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="text-xs tracking-[0.25em] uppercase text-[hsl(var(--gold))] mb-1">
          CMS Overview
        </p>
        <h1 className="font-display text-3xl text-[hsl(var(--foreground))]">
          Welcome back, {user?.name ?? "Admin"}
        </h1>
        <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">
          Manage all public-facing pages and content from here.
        </p>
      </div>

      {/* Stat strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-5 flex flex-col gap-3"
          >
            <span className="text-[hsl(var(--gold))]">{s.icon}</span>
            <div>
              <div className="text-2xl font-semibold text-[hsl(var(--foreground))]">
                {s.value}
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5">
                {s.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pages table */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[hsl(var(--border))]">
          <h2 className="font-semibold text-[hsl(var(--foreground))]">
            All Pages
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[hsl(var(--muted)/0.4)] text-[hsl(var(--muted-foreground))] text-xs uppercase tracking-wider">
                <th className="text-left px-6 py-3">Page</th>
                <th className="text-left px-6 py-3 hidden sm:table-cell">Slug</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-left px-6 py-3 hidden md:table-cell">Last Modified</th>
                <th className="text-left px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[hsl(var(--border))]">
              {pages.map((page) => (
                <tr
                  key={page.id}
                  className="hover:bg-[hsl(var(--muted)/0.2)] transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-[hsl(var(--foreground))]">
                    {page.name}
                  </td>
                  <td className="px-6 py-4 text-[hsl(var(--muted-foreground))] font-mono hidden sm:table-cell">
                    {page.slug}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        page.status === "Published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {page.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[hsl(var(--muted-foreground))] hidden md:table-cell">
                    {page.lastModified}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/dashboard/pages`}
                        className="text-[hsl(var(--gold))] hover:underline text-xs font-medium"
                      >
                        Edit
                      </Link>
                      <a
                        href={page.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] text-xs"
                      >
                        View ↗
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
