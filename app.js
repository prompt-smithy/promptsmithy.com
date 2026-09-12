const directoryData = {
  site: {
    name: "Prompt Smithy",
    domain: "prompt-smithy.com",
    subtitleLines: [
      "Lightweight, open-source utility tools for multiple operating systems.",
      "Pick a platform and download the build that fits your setup."
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/prompt-smithy"
      },
      {
        label: "Site source",
        url: "https://github.com/prompt-smithy/prompt-smithy.com"
      }
    ],
    footerText: "Open-source software, distributed directly from GitHub Releases.",
    footerLinkText: "View all repositories",
    footerLinkUrl: "https://github.com/prompt-smithy?tab=repositories"
  },
  tools: [
    {
      id: "Amber",
      name: "Amber",
      version: "v1",
      description: "A lightweight Windows tray app for controlling display brightness and color temperature, with multi-monitor support and automatic day/night scheduling.",
      platforms: [
        {
          platformName: "Windows",
          badge: "Win x64 / ARM64",
          repoUrl: "https://github.com/prompt-smithy/amber",
          packages: [
            {
              type: "Installer for Windows",
              systemRequirements: "Windows 10 or 11 (64-bit); no separate .NET installation required",
              downloadUrl: "https://github.com/prompt-smithy/Amber/releases/download/v1/Amber_Installer.exe",
              linkText: "Download Installer (.exe)"
            },
            {
              type: "Installer for Windows with .NET 10",
              systemRequirements: "Windows 10/11 (64-bit), requires .NET 10 Desktop Runtime",
              downloadUrl: "https://github.com/prompt-smithy/Amber/releases/download/v1/Amber_Installer.For.systems.with.net.10.exe",
              linkText: "Download Installer for systems with .NET 10 (.exe)"
            },
            {
              type: "Portable Windows Executable",
              systemRequirements: "Windows 10/11 (64-bit), no installation needed, self-contained",
              downloadUrl: "https://github.com/prompt-smithy/Amber/releases/download/v1/Amber_Portable.exe",
              linkText: "Download Portable (.exe)"
            },
            {
              type: "Portable Windows Executable for system with .NET",
              systemRequirements: "Windows 10/11 (64-bit), requires .NET 10 Runtime",
              downloadUrl: "https://github.com/prompt-smithy/Amber/releases/download/v1/Amber_Portable.For.systems.with.net.10.exe",
              linkText: "Download Portable for systems with .NET 10 (.exe)"
            }
          ]
        },
        {
          platformName: "macOS",
          badge: "Apple Silicon / Intel",
          repoUrl: "https://github.com/username/display-master-macos",
          packages: [
            {
              type: "macOS Universal DMG",
              systemRequirements: "macOS 12 Monterey or later (Apple Silicon and Intel)",
              downloadUrl: "https://github.com/username/display-master/releases/download/v1.0.0/DisplayMaster.dmg",
              linkText: "Download .dmg"
            }
          ]
        }
      ]
    }
    // {
    //   id: "clipboard-forge",
    //   name: "Clipboard Forge",
    //   version: "v0.8.2",
    //   description: "Fast clipboard history, search, and reusable text snippets.",
    //   repoUrl: "https://github.com/username/clipboard-forge",
    //   platforms: [
    //     {
    //       platformName: "Windows",
    //       badge: "Win x64",
    //       repoUrl: "https://github.com/username/clipboard-forge-windows",
    //       packages: [
    //         {
    //           type: "Windows Installer",
    //           systemRequirements: "Windows 10/11 (64-bit), self-contained",
    //           downloadUrl: "https://github.com/username/clipboard-forge-windows/releases/download/v0.8.2/ClipboardForge-Setup.exe",
    //           linkText: "Download Setup (.exe)"
    //         },
    //         {
    //           type: "Portable Windows",
    //           systemRequirements: "Windows 10/11 (64-bit), no installation required",
    //           downloadUrl: "https://github.com/username/clipboard-forge-windows/releases/download/v0.8.2/ClipboardForge-Portable.zip",
    //           linkText: "Download Portable (.zip)"
    //         }
    //       ]
    //     },
    //     {
    //       platformName: "macOS",
    //       badge: "Apple Silicon",
    //       repoUrl: "https://github.com/username/clipboard-forge-macos",
    //       packages: [
    //         {
    //           type: "macOS Disk Image",
    //           systemRequirements: "macOS 13 Ventura or later, Apple Silicon",
    //           downloadUrl: "https://github.com/username/clipboard-forge-macos/releases/download/v0.8.2/ClipboardForge.dmg",
    //           linkText: "Download .dmg"
    //         }
    //       ]
    //     },
    //     {
    //       platformName: "Linux",
    //       badge: "x86_64",
    //       repoUrl: "https://github.com/username/clipboard-forge-linux",
    //       packages: [
    //         {
    //           type: "AppImage",
    //           systemRequirements: "Ubuntu 22.04 or equivalent, x86_64",
    //           downloadUrl: "https://github.com/username/clipboard-forge-linux/releases/download/v0.8.2/ClipboardForge-x86_64.AppImage",
    //           linkText: "Download .AppImage"
    //         }
    //       ]
    //     }
    //   ]
    // }
  ]
};

function createExternalLink(label, url, className = "") {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = label;
  link.className = className;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
}

function createPackageTable(packages, platformName) {
  const wrapper = document.createElement("div");
  wrapper.className = "table-wrap";

  const table = document.createElement("table");
  const caption = document.createElement("caption");
  caption.textContent = `${platformName} package downloads`;
  caption.hidden = true;
  table.append(caption);

  const head = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Type", "System requirements", "Download link"].forEach((heading) => {
    const cell = document.createElement("th");
    cell.scope = "col";
    cell.textContent = heading;
    headerRow.append(cell);
  });
  head.append(headerRow);
  table.append(head);

  const body = document.createElement("tbody");
  packages.forEach((packageVariant) => {
    const row = document.createElement("tr");
    const typeCell = document.createElement("td");
    const requirementsCell = document.createElement("td");
    const downloadCell = document.createElement("td");

    typeCell.textContent = packageVariant.type;
    requirementsCell.textContent = packageVariant.systemRequirements;
    downloadCell.append(createExternalLink(packageVariant.linkText, packageVariant.downloadUrl, "download-link"));
    row.append(typeCell, requirementsCell, downloadCell);
    body.append(row);
  });
  table.append(body);
  wrapper.append(table);
  return wrapper;
}

function createPlatform(platform, toolId, platformIndex, openByDefault, showPlatformRepo) {
  const platformId = `${toolId}-platform-${platformIndex}`;
  const section = document.createElement("section");
  section.className = "platform";

  const header = document.createElement("div");
  header.className = "platform-header";

  const toggle = document.createElement("button");
  toggle.className = "platform-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-expanded", String(openByDefault));
  toggle.setAttribute("aria-controls", platformId);

  const name = document.createElement("span");
  name.className = "platform-name";
  name.textContent = platform.platformName;
  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = platform.badge;
  const chevron = document.createElement("span");
  chevron.className = "chevron";
  chevron.setAttribute("aria-hidden", "true");
  chevron.textContent = "⌄";
  toggle.append(name, badge, chevron);

  header.append(toggle);
  if (showPlatformRepo && platform.repoUrl) {
    header.append(createExternalLink("Source ↗", platform.repoUrl, "platform-repo-link"));
  }

  const panel = document.createElement("div");
  panel.id = platformId;
  panel.className = `collapsible${openByDefault ? " is-open" : ""}`;
  const inner = document.createElement("div");
  inner.className = "collapsible-inner";
  inner.append(createPackageTable(platform.packages, platform.platformName));
  panel.append(inner);

  toggle.addEventListener("click", () => togglePanel(toggle, panel));
  section.append(header, panel);
  return section;
}

function createTool(tool, openByDefault) {
  const panelId = `${tool.id}-details`;
  const article = document.createElement("article");
  article.className = "tool";

  const header = document.createElement("div");
  header.className = "tool-header";

  const toggle = document.createElement("button");
  toggle.className = "tool-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-expanded", String(openByDefault));
  toggle.setAttribute("aria-controls", panelId);

  const titleRow = document.createElement("span");
  titleRow.className = "tool-title-row";
  const title = document.createElement("h3");
  title.textContent = tool.name;
  const version = document.createElement("span");
  version.className = "version";
  version.textContent = tool.version;
  titleRow.append(title, version);

  const description = document.createElement("span");
  description.className = "tool-description";
  description.textContent = tool.description;
  const chevron = document.createElement("span");
  chevron.className = "chevron";
  chevron.setAttribute("aria-hidden", "true");
  chevron.textContent = "⌄";
  toggle.append(titleRow, description, chevron);

  header.append(toggle);
  if (tool.repoUrl) {
    header.append(createExternalLink("Source ↗", tool.repoUrl, "tool-repo-link"));
  }

  const panel = document.createElement("div");
  panel.id = panelId;
  panel.className = `collapsible${openByDefault ? " is-open" : ""}`;
  const inner = document.createElement("div");
  inner.className = "collapsible-inner tool-body-inner";
  tool.platforms.forEach((platform, platformIndex) => {
    inner.append(createPlatform(platform, tool.id, platformIndex, tool.platforms.length === 1, !tool.repoUrl));
  });
  panel.append(inner);

  toggle.addEventListener("click", () => togglePanel(toggle, panel));
  article.append(header, panel);
  return article;
}

function togglePanel(toggle, panel) {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  panel.setAttribute("aria-hidden", String(isOpen));
  panel.inert = isOpen;
  panel.classList.toggle("is-open", !isOpen);
}

function setInitialPanelState(panel, isOpen) {
  panel.setAttribute("aria-hidden", String(!isOpen));
  panel.inert = !isOpen;
}

function setupToolSearch(tools) {
  const search = document.getElementById("tool-search");
  const count = document.getElementById("catalog-count");
  const noResults = document.getElementById("no-results");
  const toolElements = Array.from(document.querySelectorAll(".tool"));

  search.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();
    let visibleCount = 0;

    tools.forEach((tool, index) => {
      const searchableText = [
        tool.name,
        tool.version,
        tool.description,
        ...tool.platforms.map((platform) => platform.platformName)
      ].join(" ").toLowerCase();
      const matches = searchableText.includes(query);
      toolElements[index].hidden = !matches;
      visibleCount += Number(matches);
    });

    count.textContent = `${visibleCount} ${visibleCount === 1 ? "tool" : "tools"} available`;
    noResults.hidden = visibleCount !== 0;
  });
}

function renderSite() {
  const { site, tools } = directoryData;
  document.getElementById("brand-name").textContent = site.name;
  const subtitle = document.getElementById("site-subtitle");
  site.subtitleLines.forEach((line) => {
    const lineElement = document.createElement("span");
    lineElement.textContent = line;
    subtitle.append(lineElement);
  });
  document.getElementById("catalog-count").textContent = `${tools.length} ${tools.length === 1 ? "tool" : "tools"} available`;
  document.getElementById("footer-copy").textContent = site.footerText;

  const headerLinks = document.getElementById("header-links");
  site.links.forEach(({ label, url }) => headerLinks.append(createExternalLink(`${label} ↗`, url)));

  const footerLink = document.getElementById("footer-link");
  footerLink.textContent = `${site.footerLinkText} ↗`;
  footerLink.href = site.footerLinkUrl;
  footerLink.target = "_blank";
  footerLink.rel = "noopener noreferrer";

  const directory = document.getElementById("tools-directory");
  tools.forEach((tool) => directory.append(createTool(tool, tools.length === 1)));
  directory.querySelectorAll(".collapsible").forEach((panel) => {
    setInitialPanelState(panel, panel.classList.contains("is-open"));
  });
  setupToolSearch(tools);
}

renderSite();