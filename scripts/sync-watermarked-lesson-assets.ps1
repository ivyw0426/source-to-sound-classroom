param(
  [string]$RepoRoot = (Resolve-Path "$PSScriptRoot\..").Path,
  [string]$LessonsRoot = "C:\Workspace\Lessons"
)

$ErrorActionPreference = "Stop"

$poppler = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\native\poppler\Library\bin\pdftoppm.exe"
if (-not (Test-Path -LiteralPath $poppler)) {
  $popplerCommand = Get-Command pdftoppm -ErrorAction SilentlyContinue
  if (-not $popplerCommand) {
    throw "Could not find pdftoppm. Install Poppler or run this through Codex with the bundled runtime."
  }
  $poppler = $popplerCommand.Source
}

$watermarkedRoot = Join-Path $RepoRoot "public\lesson-slides-watermarked"
$thumbnailDir = Join-Path $RepoRoot "public\lesson-thumbnails"
New-Item -ItemType Directory -Force -Path $watermarkedRoot | Out-Null
New-Item -ItemType Directory -Force -Path $thumbnailDir | Out-Null

$expectedRoot = (Resolve-Path $watermarkedRoot).Path

$decks = @(
  @{
    Slug = "water-filtration-challenge"
    Pdf = Join-Path $LessonsRoot "Clean the Water Filtration Challenge\WM_Clean the Water Filtration Challenge Presentation - Source to Sound.pdf"
    Padded = $false
    Thumbnail = "water-filtration-challenge-watermarked.jpg"
    ThumbnailSlide = "slide-1.jpg"
  },
  @{
    Slug = "raindrop-racers"
    Pdf = Join-Path $LessonsRoot "Raindrop Racers\WM_Raindrop Racers Presentation - Source to Sound.pdf"
    Padded = $false
    Thumbnail = "raindrop-racers-watermarked.jpg"
    ThumbnailSlide = "slide-1.jpg"
  },
  @{
    Slug = "filtration-lab"
    Pdf = Join-Path $LessonsRoot "Create an EcoColumn\Ecocolumn Watermarked.pdf"
    Padded = $true
    Thumbnail = "filtration-lab-watermarked.jpg"
    ThumbnailSlide = "slide-01.jpg"
  },
  @{
    Slug = "drain-detectives"
    Pdf = Join-Path $LessonsRoot "Drain Detectives\Drain Detectives Watermarked.pdf"
    Padded = $false
    Thumbnail = "drain-detectives-watermarked.jpg"
    ThumbnailSlide = "slide-1.jpg"
  }
)

foreach ($deck in $decks) {
  if (-not (Test-Path -LiteralPath $deck.Pdf)) {
    throw "Missing expected watermarked presentation: $($deck.Pdf)"
  }

  $targetDir = Join-Path $watermarkedRoot $deck.Slug
  New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
  $resolvedTargetDir = (Resolve-Path $targetDir).Path
  if (-not $resolvedTargetDir.StartsWith($expectedRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Watermarked slide output path is outside the expected directory."
  }

  Get-ChildItem -LiteralPath $targetDir -Filter "slide-*.jpg" -File -ErrorAction SilentlyContinue |
    Remove-Item -Force

  & $poppler -jpeg -r 144 $deck.Pdf (Join-Path $targetDir "slide")

  if ($deck.Padded) {
    Get-ChildItem -LiteralPath $targetDir -Filter "slide-*.jpg" -File | ForEach-Object {
      if ($_.BaseName -match "^slide-(\d+)$") {
        $newName = "slide-{0}.jpg" -f ([int]$Matches[1]).ToString("00")
        Rename-Item -LiteralPath $_.FullName -NewName $newName
      }
    }
  }

  if ($deck.Thumbnail) {
    Copy-Item -LiteralPath (Join-Path $targetDir $deck.ThumbnailSlide) -Destination (Join-Path $thumbnailDir $deck.Thumbnail)
  }
}

Write-Output "Watermarked lesson assets synced from $LessonsRoot"
