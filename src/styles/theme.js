import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

// Definição dos tokens (cores, fontes, etc.)
const config = defineConfig({
  theme: {
    // Breakpoints responsivos (mobile-first)
    breakpoints: {
      sm: "30em", // 480px
      md: "48em", // 768px
      lg: "62em", // 992px
      xl: "80em", // 1280px
      "2xl": "96em", // 1536px
    },
    tokens: {
      colors: {
        primary: {
          50: { value: "#e3f2ff" },
          100: { value: "#b3d6ff" },
          200: { value: "#81baff" },
          300: { value: "#4f9eff" },
          400: { value: "#1d82ff" },
          500: { value: "#0469e6" },
          600: { value: "#004fb4" },
          700: { value: "#003682" },
          800: { value: "#001e51" },
          900: { value: "#000621" },
        },
        gray: {
          50: { value: "#f7fafc" },
          100: { value: "#edf2f7" },
          200: { value: "#e2e8f0" },
          300: { value: "#cbd5e0" },
          400: { value: "#a0aec0" },
          500: { value: "#718096" },
          600: { value: "#4a5568" },
          700: { value: "#2d3748" },
          800: { value: "#1a202c" },
          900: { value: "#171923" },
        },
      },
      fonts: {
        body: { value: "Inter, sans-serif" },
        heading: { value: "Inter, sans-serif" },
      },
      fontSizes: {
        xs: { value: "0.75rem" }, // 12px
        sm: { value: "0.875rem" }, // 14px
        md: { value: "1rem" }, // 16px
        lg: { value: "1.125rem" }, // 18px
        xl: { value: "1.25rem" }, // 20px
        "2xl": { value: "1.5rem" }, // 24px
        "3xl": { value: "1.875rem" }, // 30px
        "4xl": { value: "2.25rem" }, // 36px
        "5xl": { value: "3rem" }, // 48px
      },
      sizes: {
        container: {
          sm: { value: "640px" },
          md: { value: "768px" },
          lg: { value: "1024px" },
          xl: { value: "1280px" },
        },
      },
    },
    // Semântica responsiva
    semanticTokens: {
      colors: {
        "bg.page": {
          value: { base: "{colors.gray.50}", dark: "{colors.gray.900}" },
        },
        "text.primary": {
          value: { base: "{colors.gray.800}", dark: "{colors.gray.100}" },
        },
      },
      fontSizes: {
        "heading.mobile": {
          value: {
            base: "{fontSizes.2xl}",
            md: "{fontSizes.3xl}",
            lg: "{fontSizes.4xl}",
          },
        },
        "body.mobile": {
          value: { base: "{fontSizes.sm}", md: "{fontSizes.md}" },
        },
      },
      sizes: {
        "container.main": {
          value: {
            base: "100%",
            md: "{sizes.container.md}",
            lg: "{sizes.container.lg}",
          },
        },
      },
    },
  },
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      backgroundColor: "{colors.bg.page}",
      color: "{colors.text.primary}",
      fontFamily: "{fonts.body}",
      fontSize: { base: "14px", md: "16px" }, // Responsivo
    },
    a: {
      color: "{colors.primary.500}",
      textDecoration: "none",
      _hover: { textDecoration: "underline" },
    },
    ".responsive-container": {
      maxWidth: "{sizes.container.main}",
      margin: "0 auto",
      padding: { base: "0 1rem", md: "0 2rem" },
    },
  },
});

// Cria o sistema de estilização
const system = createSystem(defaultConfig, config);

export default system;
