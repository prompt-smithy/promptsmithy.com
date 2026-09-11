# Project Specification: prompt-smithy.com

## Objective
Build a lightweight, responsive static website for `prompt-smithy.com` deployed on Cloudflare Pages (Free Tier). The site functions as a software distribution directory where visitors can browse tools, drill down into platform-specific targets (e.g., Windows, macOS, Linux), and download customized package variants directly from GitHub Releases.

---

## Technical Stack & Constraints
- **Hosting:** Cloudflare Pages (Free Tier, static deployment, zero build steps required).
- **Architecture:** Vanilla HTML5, CSS3, and JavaScript (`index.html`, `style.css`, `app.js`).
- **Data Configuration:** All tools, target platforms, requirements, URLs, and button labels must reside in a single, well-structured JavaScript array/object inside `app.js`. Adding or tweaking a package variant should never require modifying raw HTML.

---

## Layout & UX Requirements

### 1. Header & Hero Section
- Brand: **Prompt Smithy** (`prompt-smithy.com`).
- Subtitle: Lightweight, open-source utility tools for multiple operating systems.
- Header links: GitHub Organization / Profile, repository source links.

### 2. Hierarchical Expandable Architecture
The layout uses a two-level accordion / collapsible hierarchy:

1. **Level 1: Tool List (Top Level Accordion)**
   - Clickable tool header showing Tool Name, Version, and a short summary.
   - **Initial Page Load State:** **Only the first (top) tool is expanded.** All other tools are collapsed.
   - Smooth toggle indicator (e.g., chevron `▼` / `▲`).

2. **Level 2: Platform Sub-Menu (Nested Accordion inside each Tool)**
   - Inside the expanded tool, display expandable platform tabs or accordion rows (e.g., `Windows`, `macOS`, `Linux`).
   - Clicking a platform opens that platform's distribution table.
   - **Initial State:** Within the active top tool, the first platform tab/panel can be expanded by default so users immediately see available downloads.

3. **Level 3: Package Variant Table (Inside each Platform)**
   A structured table detailing available package builds with 3 columns:
   - **Type**: Build variant format (e.g., `Installer for Windows`, `Installer for Windows with .NET 10`, `Portable Windows (Self-contained)`, `Portable for system with .NET`).
   - **System Requirements**: OS version, runtime dependencies, or architecture prerequisites (e.g., `Windows 10/11 64-bit`, `.NET 10 Desktop Runtime required`, `Standalone / No dependencies`).
   - **Download Link**: Styled action button or link.
     - Fully configurable destination URL (pointing to GitHub Releases).
     - Fully configurable UI link text (e.g., `Download .msi`, `Download Setup (.exe)`, `Download Portable .zip`).

---

## Configuration Data Schema (`app.js`)
The dynamic rendering engine must parse data following this structure:

```javascript
const toolsData = [
  {
    id: "tool-one",
    name: "Display Master",
    version: "v1.0.0",
    description: "Lightweight monitor management and profile switcher.",
    repoUrl: "[https://github.com/username/display-master](https://github.com/username/display-master)",
    platforms: [
      {
        platformName: "Windows",
        badge: "Win x64 / ARM64",
        packages: [
          {
            type: "Installer for Windows",
            systemRequirements: "Windows 10/11 (64-bit), Self-contained",
            downloadUrl: "[https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster-Setup.exe](https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster-Setup.exe)",
            linkText: "Download Installer (.exe)"
          },
          {
            type: "Installer for Windows with .NET 10",
            systemRequirements: "Windows 10/11 (64-bit), requires .NET 10 Desktop Runtime",
            downloadUrl: "[https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster-FrameworkDependent-Setup.msi](https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster-FrameworkDependent-Setup.msi)",
            linkText: "Download Light Installer (.msi)"
          },
          {
            type: "Portable Windows",
            systemRequirements: "Windows 10/11 (64-bit), No installation needed, Self-contained",
            downloadUrl: "[https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster-Portable.zip](https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster-Portable.zip)",
            linkText: "Download Portable (.zip)"
          },
          {
            type: "Portable for system with .NET",
            systemRequirements: "Windows 10/11 (64-bit), requires .NET 10 Runtime",
            downloadUrl: "[https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster-Net10-Portable.zip](https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster-Net10-Portable.zip)",
            linkText: "Download Portable (Framework Dependent)"
          }
        ]
      },
      {
        platformName: "macOS",
        badge: "Apple Silicon / Intel",
        packages: [
          {
            type: "macOS Universal DMG",
            systemRequirements: "macOS 12 Monterey or later (Apple Silicon & Intel)",
            downloadUrl: "[https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster.dmg](https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster.dmg)",
            linkText: "Download .dmg"
          }
        ]
      },
      {
        platformName: "Linux",
        badge: "x86_64",
        packages: [
          {
            type: "AppImage (Standalone)",
            systemRequirements: "glibc 2.31+, any modern Linux desktop",
            downloadUrl: "[https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster-x86_64.AppImage](https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster-x86_64.AppImage)",
            linkText: "Download .AppImage"
          }
        ]
      }
    ]
  }
];