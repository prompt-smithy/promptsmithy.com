$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$sourceHtmlPath = Join-Path $projectRoot "index.html"
$sourceCssPath = Join-Path $projectRoot "style.css"
$sourceJavaScriptPath = Join-Path $projectRoot "app.js"
$outputDirectory = Join-Path $projectRoot "dist"
$outputPath = Join-Path $outputDirectory "index.html"

$html = [System.IO.File]::ReadAllText($sourceHtmlPath)
$css = [System.IO.File]::ReadAllText($sourceCssPath)
$javaScript = [System.IO.File]::ReadAllText($sourceJavaScriptPath)

$stylesheetTag = '    <link rel="stylesheet" href="style.css">'
$scriptPattern = '(?m)^\s*<script src="app\.js" defer></script>\r?\n'

if (-not $html.Contains($stylesheetTag)) {
    throw "Could not find the style.css link in index.html."
}

if (-not [System.Text.RegularExpressions.Regex]::IsMatch($html, $scriptPattern)) {
    throw "Could not find the deferred app.js script in index.html."
}

$html = $html.Replace($stylesheetTag, "    <style>`r`n$css`r`n    </style>")
$html = [System.Text.RegularExpressions.Regex]::Replace($html, $scriptPattern, "")
$html = $html.Replace("  </body>", "    <script>`r`n$javaScript`r`n    </script>`r`n  </body>")

[System.IO.Directory]::CreateDirectory($outputDirectory) | Out-Null
[System.IO.File]::WriteAllText($outputPath, $html, [System.Text.UTF8Encoding]::new($false))

$output = Get-Item $outputPath
Write-Host "Built $($output.FullName) ($($output.Length) bytes)"