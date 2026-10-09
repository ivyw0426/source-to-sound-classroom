param(
  [string]$SourceDir = "C:\Workspace\Lessons\Macroinvertebrate Measurements",
  [string]$RepoRoot = (Resolve-Path "$PSScriptRoot\..").Path
)

$ErrorActionPreference = "Stop"

$files = @{
  LessonPlan = "Macroinvertebrate Measurements Lesson Plan.pdf"
  Slides = "Macroinvertebrate Measurements Presentation - Source to Sound.pdf"
  Worksheet = "Student Investigation Worksheet.pdf"
}

foreach ($file in $files.Values) {
  $path = Join-Path $SourceDir $file
  if (-not (Test-Path -LiteralPath $path)) {
    throw "Missing expected source file: $path"
  }
}

$slideDir = Join-Path $RepoRoot "public\lesson-slides\macroinvertebrate-measurements"
$planDir = Join-Path $RepoRoot "public\lesson-plans"
$downloadDir = Join-Path $RepoRoot "public\lesson-downloads"
$thumbnailDir = Join-Path $RepoRoot "public\lesson-thumbnails"

foreach ($dir in @($slideDir, $planDir, $downloadDir, $thumbnailDir)) {
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

$resolvedSlideDir = (Resolve-Path $slideDir).Path
$expectedSlideRoot = (Resolve-Path (Join-Path $RepoRoot "public\lesson-slides")).Path
if (-not $resolvedSlideDir.StartsWith($expectedSlideRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Slide output path is outside the expected public lesson-slides directory."
}

Get-ChildItem -LiteralPath $slideDir -Filter "slide-*.jpg" -File -ErrorAction SilentlyContinue |
  Remove-Item -Force

Copy-Item -LiteralPath (Join-Path $SourceDir $files.LessonPlan) -Destination (Join-Path $planDir "macroinvertebrate-measurements-plan.pdf")
Copy-Item -LiteralPath (Join-Path $SourceDir $files.Slides) -Destination (Join-Path $downloadDir "macroinvertebrate-measurements.pdf")
Copy-Item -LiteralPath (Join-Path $SourceDir $files.Worksheet) -Destination (Join-Path $downloadDir "macroinvertebrate-measurements-student-investigation-worksheet.pdf")

$poppler = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\native\poppler\Library\bin\pdftoppm.exe"
if (-not (Test-Path -LiteralPath $poppler)) {
  $popplerCommand = Get-Command pdftoppm -ErrorAction SilentlyContinue
  if (-not $popplerCommand) {
    throw "Could not find pdftoppm. Install Poppler or run this through Codex with the bundled runtime."
  }
  $poppler = $popplerCommand.Source
}

& $poppler -jpeg -r 144 (Join-Path $SourceDir $files.Slides) (Join-Path $slideDir "slide")
Copy-Item -LiteralPath (Join-Path $slideDir "slide-01.jpg") -Destination (Join-Path $thumbnailDir "macroinvertebrate-measurements.jpg")

Write-Output "Macroinvertebrate Measurements assets synced from $SourceDir"
