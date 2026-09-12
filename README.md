# Prompt Smithy

A lightweight, responsive software directory for discovering Prompt Smithy utilities and downloading platform-specific releases directly from GitHub.

## Features

- Searchable tool catalog
- Expandable tool and platform sections
- Platform-specific packages and system requirements
- Support for shared or platform-specific repositories
- Responsive, accessible interface
- Static hosting with no build framework or backend
- Self-contained release file for simple deployment

## Project Structure

```text
.
├── index.html              # Page structure
├── style.css               # Responsive styling
├── app.js                  # Site configuration and rendering logic
├── assets/                 # Prompt Smithy logo files
└── dist/
    └── index.html          # Standalone release build
```

## Configure Tools

All site content is configured in the `directoryData` object at the top of `app.js`. Add tools, platforms, packages, repository URLs, and download links there without editing the HTML.

```javascript
{
  id: "example-tool",
  name: "Example Tool",
  version: "v1.0.0",
  description: "A short description of the utility.",
  repoUrl: "https://github.com/prompt-smithy/example-tool",
  platforms: [
    {
      platformName: "Windows",
      badge: "Win x64",
      packages: [
        {
          type: "Windows Installer",
          systemRequirements: "Windows 10/11 (64-bit)",
          downloadUrl: "https://github.com/prompt-smithy/example-tool/releases/download/v1.0.0/setup.exe",
          linkText: "Download Installer (.exe)"
        }
      ]
    }
  ]
}
```

When `repoUrl` is defined at the tool level, one source link is shown for the entire tool. If it is omitted, individual platforms may define their own `repoUrl`. Missing repository URLs are not displayed.

## Local Preview

Open `index.html` directly in a browser. No dependency installation or local server is required.

## Release Build

`dist/index.html` is the deployable single-file version with the CSS and JavaScript embedded. It can be opened locally or uploaded directly to a static host.

Rebuild this file after changing `index.html`, `style.css`, or `app.js` so the release includes the latest configuration.

```powershell
Set-ExecutionPolicy -Scope Process Bypass; .\scripts\build.ps1
```

## Deploy to Cloudflare Pages

1. Create a Cloudflare Pages project connected to this repository.
2. Select the static HTML deployment option.
3. Use `dist` as the output directory.
4. Leave the build command empty.

The site can also be hosted with GitHub Pages or any other static hosting provider.

## License

No license has been specified yet. Add a license file before allowing reuse or redistribution outside this repository.