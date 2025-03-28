import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach, vi } from "vitest";
import i18n from "../i18n";

// Import all pages
import About from "../pages/About";
import Contact from "../pages/Contact";
import EnglishEducation from "../pages/EnglishEducation";
import FindAuPair from "../pages/FindAuPair";
import FindFamily from "../pages/FindFamily";
import Home from "../pages/Home";
import HowItWorks from "../pages/HowItWorks";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Services from "../pages/Services";

// Mock Supabase client
vi.mock("@supabase/supabase-js", () => ({
  createClient: vi.fn(() => ({
    auth: {
      getUser: vi.fn().mockResolvedValue({ data: { user: null }, error: null }),
      signInWithOAuth: vi.fn(),
      signOut: vi.fn(),
    },
  })),
}));

// Wrapper component for providing necessary context
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>{children}</BrowserRouter>
  </I18nextProvider>
);

describe("Page Components", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  test("About page renders without errors", () => {
    render(<About />, { wrapper: TestWrapper });
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  test("Contact page renders without errors", () => {
    render(<Contact />, { wrapper: TestWrapper });
    expect(
      screen.getByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();
  });

  test("EnglishEducation page renders without errors", () => {
    render(<EnglishEducation />, { wrapper: TestWrapper });
    expect(
      screen.getByRole("heading", { name: /english education/i })
    ).toBeInTheDocument();
  });

  test("FindAuPair page renders without errors", () => {
    render(<FindAuPair />, { wrapper: TestWrapper });
    expect(
      screen.getByRole("heading", { name: /find your perfect au pair/i })
    ).toBeInTheDocument();
  });

  test("FindFamily page renders without errors", () => {
    render(<FindFamily />, { wrapper: TestWrapper });
    expect(
      screen.getByRole("heading", { name: /find host families/i })
    ).toBeInTheDocument();
  });

  test("Home page renders without errors", () => {
    render(<Home />, { wrapper: TestWrapper });
    expect(
      screen.getByRole("heading", { name: /find your perfect au pair match/i })
    ).toBeInTheDocument();
  });

  test("HowItWorks page renders without errors", () => {
    // Mock the translation for process.title
    vi.mocked(i18n).t = vi.fn().mockImplementation((key) => {
      if (key === "process.title") {
        return "How Our Process Works";
      }
      return key;
    });

    render(<HowItWorks />, { wrapper: TestWrapper });
    expect(
      screen.getByRole("heading", { name: /how our process works/i })
    ).toBeInTheDocument();
  });

  test("Login page renders without errors", () => {
    render(<Login />, { wrapper: TestWrapper });
    expect(
      screen.getByRole("heading", { name: /login to your account/i })
    ).toBeInTheDocument();
  });

  test("Profile page renders without errors", () => {
    render(<Profile />, { wrapper: TestWrapper });
    // Profile page shows loading state initially
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("Register page renders without errors", () => {
    render(<Register />, { wrapper: TestWrapper });
    expect(screen.getByText(/register/i)).toBeInTheDocument();
  });

  test("Services page renders without errors", () => {
    render(<Services />, { wrapper: TestWrapper });
    expect(
      screen.getByRole("heading", { name: /services/i })
    ).toBeInTheDocument();
  });
});
