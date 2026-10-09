param(
  [string]$SourceDir = "C:\Workspace\Lessons\Save the Stream",
  [string]$RepoRoot = (Resolve-Path "$PSScriptRoot\..").Path
)

$ErrorActionPreference = "Stop"

$slides = Join-Path $SourceDir "Save the Stream Presentation - Source to Sound.pdf"
if (-not (Test-Path -LiteralPath $slides)) {
  throw "Missing expected source file: $slides"
}

$slideDir = Join-Path $RepoRoot "public\lesson-slides\save-the-stream"
$downloadDir = Join-Path $RepoRoot "public\lesson-downloads"
$thumbnailDir = Join-Path $RepoRoot "public\lesson-thumbnails"

foreach ($dir in @($slideDir, $downloadDir, $thumbnailDir)) {
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

$resolvedSlideDir = (Resolve-Path $slideDir).Path
$expectedSlideRoot = (Resolve-Path (Join-Path $RepoRoot "public\lesson-slides")).Path
if (-not $resolvedSlideDir.StartsWith($expectedSlideRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Slide output path is outside the expected public lesson-slides directory."
}

Get-ChildItem -LiteralPath $slideDir -Filter "slide-*.jpg" -File -ErrorAction SilentlyContinue |
  Remove-Item -Force

Copy-Item -LiteralPath $slides -Destination (Join-Path $downloadDir "save-the-stream.pdf")

$poppler = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\native\poppler\Library\bin\pdftoppm.exe"
if (-not (Test-Path -LiteralPath $poppler)) {
  $popplerCommand = Get-Command pdftoppm -ErrorAction SilentlyContinue
  if (-not $popplerCommand) {
    throw "Could not find pdftoppm. Install Poppler or run this through Codex with the bundled runtime."
  }
  $poppler = $popplerCommand.Source
}

& $poppler -jpeg -r 144 $slides (Join-Path $slideDir "slide")
Copy-Item -LiteralPath (Join-Path $slideDir "slide-1.jpg") -Destination (Join-Path $thumbnailDir "save-the-stream.png")

Write-Output "Save the Stream assets synced from $SourceDir"
