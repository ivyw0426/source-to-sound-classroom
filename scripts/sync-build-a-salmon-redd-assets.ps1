param(
  [string]$SourceDir = "C:\Workspace\Lessons\Build a Salmon Redd",
  [string]$RepoRoot = (Resolve-Path "$PSScriptRoot\..").Path
)

$ErrorActionPreference = "Stop"

$files = @{
  LessonPlan = "Build a Salmon Redd Lesson Plan.pdf"
  Slides = "Build a Salmon Redd Presentation - Source to Sound.pdf"
  ObservationSheet = "Student Observation Sheet.pdf"
  WatermarkedSlides = "WM_Build a Salmon Redd Presentation - Source to Sound.pdf"
}

foreach ($file in $files.Values) {
  $path = Join-Path $SourceDir $file
  if (-not (Test-Path -LiteralPath $path)) {
    throw "Missing expected source file: $path"
  }
}

$slideDir = Join-Path $RepoRoot "public\lesson-slides\build-a-salmon-redd"
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

Get-ChildItem -LiteralPath $slideDir -Filter "slide-*.jpg" -File |
  Remove-Item -Force

Copy-Item -LiteralPath (Join-Path $SourceDir $files.LessonPlan) -Destination (Join-Path $planDir "build-a-salmon-redd-plan.pdf")
Copy-Item -LiteralPath (Join-Path $SourceDir $files.Slides) -Destination (Join-Path $downloadDir "build-a-salmon-redd.pdf")
Copy-Item -LiteralPath (Join-Path $SourceDir $files.ObservationSheet) -Destination (Join-Path $downloadDir "build-a-salmon-redd-observation-sheet.pdf")
Copy-Item -LiteralPath (Join-Path $SourceDir $files.WatermarkedSlides) -Destination (Join-Path $downloadDir "build-a-salmon-redd-watermarked.pdf")

$poppler = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\native\poppler\Library\bin\pdftoppm.exe"
if (-not (Test-Path -LiteralPath $poppler)) {
  $popplerCommand = Get-Command pdftoppm -ErrorAction SilentlyContinue
  if (-not $popplerCommand) {
    throw "Could not find pdftoppm. Install Poppler or run this through Codex with the bundled runtime."
  }
  $poppler = $popplerCommand.Source
}

& $poppler -jpeg -r 144 (Join-Path $SourceDir $files.WatermarkedSlides) (Join-Path $slideDir "slide")
Copy-Item -LiteralPath (Join-Path $slideDir "slide-1.jpg") -Destination (Join-Path $thumbnailDir "build-a-salmon-redd.jpg")

Write-Output "Build a Salmon Redd assets synced from $SourceDir"
