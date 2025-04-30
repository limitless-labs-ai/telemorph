import { motion } from "framer-motion";
import Link from "next/link";
import { App } from "./navlinks";
import { ArrowButton } from "@/components/ui/arrow-button";

// Both components are used in the Hero component and can be modified.

// Title Component - Hero Section
const TitleComponent = (
  <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 max-w-5xl mx-auto px-4 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
      >
        Empower business with
        <span className="block text-[var(--brand-primary)] mt-2">
          modern technology solutions
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto"
      >
        TeleMorph is a leading technology company specializing in providing
        innovative software solutions and IT services
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 mt-12 justify-center"
      >
        <Link href={App}>
          <ArrowButton
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-[var(--brand-primary-dark)] min-w-[180px] text-lg"
          >
            Learn more
          </ArrowButton>
        </Link>
        <ArrowButton
          size="lg"
          variant="outline"
          className="border-foreground text-foreground hover:bg-foreground/10 min-w-[180px] text-lg"
        >
          Contact Us
        </ArrowButton>
      </motion.div>
    </motion.div>
  </div>
);

// Dashboard Component - Hero Section
const DashboardComponent = (
  <div className="flex items-center justify-center h-full">
    {/* Mini Dashboard */}
    <div className="w-full h-full flex flex-col">
      {/* Dashboard Header */}
      <div className="bg-card/80 border-b border-border/50 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-sidebar-primary/20 w-8 h-8 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-sidebar-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
          </div>
          <h2 className="font-medium text-lg">Business Dashboard</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center">
            <span className="text-xs font-semibold">AB</span>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-background/30 backdrop-blur-sm">
        {/* Sidebar */}
        <div className="md:col-span-1 bg-card/60 rounded-xl border border-border/50 p-4 flex flex-col gap-3">
          <div className="flex items-center gap-3 p-2 bg-sidebar-primary/10 rounded-lg">
            <svg
              className="w-5 h-5 text-sidebar-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span className="font-medium">Dashboard</span>
          </div>

          <div className="flex items-center gap-3 p-2 hover:bg-accent/20 rounded-lg transition-colors">
            <svg
              className="w-5 h-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
            <span className="text-muted-foreground">Products</span>
          </div>

          <div className="flex items-center gap-3 p-2 hover:bg-accent/20 rounded-lg transition-colors">
            <svg
              className="w-5 h-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span className="text-muted-foreground">Customers</span>
          </div>

          <div className="flex items-center gap-3 p-2 hover:bg-accent/20 rounded-lg transition-colors">
            <svg
              className="w-5 h-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
            <span className="text-muted-foreground">Analytics</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stats Cards */}
          <div className="bg-card/60 rounded-xl border border-border/50 p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Revenue</span>
              <div className="bg-green-500/10 text-green-500 text-xs font-medium py-1 px-2 rounded-full">
                +12.5%
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">$24,875</div>
            <div className="text-xs text-muted-foreground">
              Compared to $22,123 last month
            </div>
            <div className="mt-4 h-2 bg-accent/30 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-sidebar-primary rounded-full"></div>
            </div>
          </div>

          <div className="bg-card/60 rounded-xl border border-border/50 p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">
                New Customers
              </span>
              <div className="bg-green-500/10 text-green-500 text-xs font-medium py-1 px-2 rounded-full">
                +8.2%
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">1,248</div>
            <div className="text-xs text-muted-foreground">
              Compared to 1,154 last month
            </div>
            <div className="mt-4 h-2 bg-accent/30 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-chart-2 rounded-full"></div>
            </div>
          </div>

          <div className="bg-card/60 rounded-xl border border-border/50 p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">
                Active Users
              </span>
              <div className="bg-red-500/10 text-red-500 text-xs font-medium py-1 px-2 rounded-full">
                -3.1%
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">9,275</div>
            <div className="text-xs text-muted-foreground">
              Compared to 9,571 last week
            </div>
            <div className="mt-4 h-2 bg-accent/30 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-chart-5 rounded-full"></div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="md:col-span-3 bg-card/60 rounded-xl border border-border/50 p-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium">Performance Overview</h3>
              <div className="flex items-center gap-2 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-sidebar-primary"></div>
                  <span>Revenue</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-chart-4"></div>
                  <span>Growth</span>
                </div>
              </div>
            </div>

            <div className="h-48 flex items-end gap-2">
              {[35, 45, 30, 65, 50, 75, 40, 60, 55, 70, 45, 55].map(
                (height, i) => (
                  <div
                    key={i}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <div
                      className="w-full bg-sidebar-primary/20 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div
                      className="w-full bg-chart-4/20 rounded-t-sm"
                      style={{ height: `${Math.max(20, height - 15)}%` }}
                    ></div>
                    <span className="text-xs text-muted-foreground">{`${
                      i + 1
                    }`}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { TitleComponent, DashboardComponent };
