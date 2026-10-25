Add-Type -AssemblyName System.Drawing

$outputDir = "store_assets"
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

$W = 1080
$H = 1920

# Color Palettes (Nibble / Slopes inspired)
# Top: Deep Indigo Violet, Bottom: Midnight
$topColor = [System.Drawing.Color]::FromArgb(67, 24, 120)     # Vibrant Purple
$midColor = [System.Drawing.Color]::FromArgb(35, 15, 68)      # Deep Violet
$botColor = [System.Drawing.Color]::FromArgb(11, 14, 25)      # Night Dark

$goldColor = [System.Drawing.Color]::FromArgb(253, 224, 71)   # Star Gold
$whiteColor = [System.Drawing.Color]::FromArgb(255, 255, 255)
$subWhite = [System.Drawing.Color]::FromArgb(203, 213, 225)   # Slate 300
$phoneBorderColor = [System.Drawing.Color]::FromArgb(51, 65, 85)

$fontTitle = New-Object System.Drawing.Font("Segoe UI", 48, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font("Segoe UI", 24, [System.Drawing.FontStyle]::Regular)
$fontBadge = New-Object System.Drawing.Font("Segoe UI", 18, [System.Drawing.FontStyle]::Bold)
$fontChipTitle = New-Object System.Drawing.Font("Segoe UI", 16, [System.Drawing.FontStyle]::Bold)
$fontChipSub = New-Object System.Drawing.Font("Segoe UI", 13, [System.Drawing.FontStyle]::Regular)

$brushWhite = New-Object System.Drawing.SolidBrush($whiteColor)
$brushSub = New-Object System.Drawing.SolidBrush($subWhite)
$brushGold = New-Object System.Drawing.SolidBrush($goldColor)
$brushBadgeBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 255, 255, 255))
$penBadge = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(80, 255, 255, 255), 2)
$penPhone = New-Object System.Drawing.Pen($phoneBorderColor, 12)

# Helper function to create rounded path
function Get-RoundedRectangle([System.Drawing.Rectangle]$rect, [int]$radius) {
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = $radius * 2
    $path.AddArc($rect.X, $rect.Y, $d, $d, 180, 90)
    $path.AddArc($rect.X + $rect.Width - $d, $rect.Y, $d, $d, 270, 90)
    $path.AddArc($rect.X + $rect.Width - $d, $rect.Y + $rect.Height - $d, $d, $d, 0, 90)
    $path.AddArc($rect.X, $rect.Y + $rect.Height - $d, $d, $d, 90, 90)
    $path.CloseFigure()
    return $path
}

$slides = @(
    @{
        Index = 1
        File = "screenshot_1.jpg"
        Title = "Score a 5 on Your APs"
        Sub = "Master AP Calc, Bio, History and 35+ more in 10 mins/day"
        Badge = "* 4.9 RATED - 38+ AP COURSES"
        ChipTitle = "100% CED Aligned"
        ChipSub = "Updated for 2025-2026 Exam"
        OutName = "store_screenshot_1_hero.png"
    },
    @{
        Index = 2
        File = "screenshot_2.jpg"
        Title = "Instant AI Problem Solver"
        Sub = "Snap any question. Step-by-step clarity with Professor Pang"
        Badge = $null
        ChipTitle = "Professor Pang AI"
        ChipSub = "Instant LaTeX & Step Solutions"
        OutName = "store_screenshot_2_solver.png"
    },
    @{
        Index = 3
        File = "screenshot_3.jpg"
        Title = "High-Yield Unit Notes"
        Sub = "Master every unit with formula sheets, summaries and flashcards"
        Badge = $null
        ChipTitle = "All 38+ AP Courses"
        ChipSub = "Formulas, Concepts and Cheatsheets"
        OutName = "store_screenshot_3_notes.png"
    },
    @{
        Index = 4
        File = "screenshot_1.jpg"
        Title = "Live 1v1 Quiz Battles"
        Sub = "Challenge friends, win coins and climb the global leaderboard"
        Badge = $null
        ChipTitle = "Multiplayer Duel"
        ChipSub = "Compete with AP peers"
        OutName = "store_screenshot_4_battles.png"
    },
    @{
        Index = 5
        File = "screenshot_2.jpg"
        Title = "Spot Tricky AP Traps"
        Sub = "Trap Radar alerts to avoid common distractor choices"
        Badge = $null
        ChipTitle = "Trap Radar Active"
        ChipSub = "Avoid 90% common mistakes"
        OutName = "store_screenshot_5_trapradar.png"
    }
)

foreach ($slide in $slides) {
    Write-Host "Rendering $($slide.OutName)..."
    $bmp = New-Object System.Drawing.Bitmap $W, $H
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # 1. Background Gradient
    $bgRect = New-Object System.Drawing.Rectangle 0, 0, $W, $H
    $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($bgRect, $topColor, $botColor, 90.0)
    $g.FillRectangle($bgBrush, $bgRect)
    $bgBrush.Dispose()

    # Ambient Top Glow Circle
    $glowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(45, 168, 85, 247))
    $g.FillEllipse($glowBrush, [int]($W/2 - 400), -150, 800, 500)
    $glowBrush.Dispose()

    $currentY = 120

    # 2. Badge (if any)
    if ($slide.Badge) {
        $badgeSize = $g.MeasureString($slide.Badge, $fontBadge)
        $badgeW = [int]$badgeSize.Width + 48
        $badgeH = 54
        $badgeX = [int](($W - $badgeW) / 2)
        $badgeRect = New-Object System.Drawing.Rectangle $badgeX, $currentY, $badgeW, $badgeH
        $badgePath = Get-RoundedRectangle $badgeRect 27
        $g.FillPath($brushBadgeBg, $badgePath)
        $g.DrawPath($penBadge, $badgePath)

        $sfBadge = New-Object System.Drawing.StringFormat
        $sfBadge.Alignment = [System.Drawing.StringAlignment]::Center
        $sfBadge.LineAlignment = [System.Drawing.StringAlignment]::Center
        $g.DrawString($slide.Badge, $fontBadge, $brushGold, [float]($W/2), [float]($currentY + $badgeH/2), $sfBadge)
        $badgePath.Dispose()
        $currentY += 85
    } else {
        $currentY += 40
    }

    # 3. Main Title
    $sfCenter = New-Object System.Drawing.StringFormat
    $sfCenter.Alignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString($slide.Title, $fontTitle, $brushWhite, [float]($W/2), [float]$currentY, $sfCenter)
    $currentY += 75

    # 4. Subtitle
    $subRect = New-Object System.Drawing.RectangleF 100, $currentY, ($W - 200), 100
    $g.DrawString($slide.Sub, $fontSub, $brushSub, $subRect, $sfCenter)

    # 5. Phone Mockup Frame
    $phoneW = 740
    $phoneH = 1350
    $phoneX = [int](($W - $phoneW) / 2)
    $phoneY = 480

    # Phone Shadow
    $shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(120, 0, 0, 0))
    $shadowRect = New-Object System.Drawing.Rectangle ($phoneX - 8), ($phoneY + 16), ($phoneW + 16), ($phoneH + 16)
    $shadowPath = Get-RoundedRectangle $shadowRect 70
    $g.FillPath($shadowBrush, $shadowPath)
    $shadowPath.Dispose()
    $shadowBrush.Dispose()

    # Phone Inner Screen Path
    $phoneRect = New-Object System.Drawing.Rectangle $phoneX, $phoneY, $phoneW, $phoneH
    $phonePath = Get-RoundedRectangle $phoneRect 64

    # Clip & Draw Screenshot
    $state = $g.Save()
    $g.SetClip($phonePath)

    $screenPath = Join-Path $outputDir $slide.File
    if (Test-Path $screenPath) {
        $screenImg = [System.Drawing.Bitmap]::FromFile((Resolve-Path $screenPath))
        $g.DrawImage($screenImg, $phoneX, $phoneY, $phoneW, $phoneH)
        $screenImg.Dispose()
    } else {
        $darkFill = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(15, 23, 42))
        $g.FillRectangle($darkFill, $phoneX, $phoneY, $phoneW, $phoneH)
        $darkFill.Dispose()
    }

    # Dynamic Island
    $islandW = 180
    $islandH = 42
    $islandX = [int](($W - $islandW) / 2)
    $islandY = $phoneY + 22
    $islandRect = New-Object System.Drawing.Rectangle $islandX, $islandY, $islandW, $islandH
    $islandPath = Get-RoundedRectangle $islandRect 21
    $brushBlack = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(0, 0, 0))
    $g.FillPath($brushBlack, $islandPath)
    $islandPath.Dispose()
    $brushBlack.Dispose()

    $g.Restore($state)

    # Phone Border Outline
    $g.DrawPath($penPhone, $phonePath)
    $phonePath.Dispose()

    # 6. Floating Glass Card / Badge
    if ($slide.ChipTitle) {
        $chipW = 380
        $chipH = 88
        $chipX = [int]($phoneX + $phoneW - $chipW + 40)
        if ($slide.Index % 2 -eq 0) {
            $chipX = [int]($phoneX - 40)
        }
        $chipY = [int]($phoneY + $phoneH - 180)

        $chipRect = New-Object System.Drawing.Rectangle $chipX, $chipY, $chipW, $chipH
        $chipPath = Get-RoundedRectangle $chipRect 24

        $chipShadow = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(140, 0, 0, 0))
        $g.FillRectangle($chipShadow, ($chipX + 4), ($chipY + 8), $chipW, $chipH)
        $chipShadow.Dispose()

        $chipBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(235, 15, 23, 42))
        $chipPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(90, 255, 255, 255), 2)
        $g.FillPath($chipBg, $chipPath)
        $g.DrawPath($chipPen, $chipPath)

        # Chip Text
        $g.DrawString($slide.ChipTitle, $fontChipTitle, $brushWhite, [float]($chipX + 28), [float]($chipY + 16))
        $g.DrawString($slide.ChipSub, $fontChipSub, $brushSub, [float]($chipX + 28), [float]($chipY + 46))

        $chipPath.Dispose()
        $chipBg.Dispose()
        $chipPen.Dispose()
    }

    # Save PNG
    $dest = Join-Path $outputDir $slide.OutName
    $bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)

    $g.Dispose()
    $bmp.Dispose()
}

$brushWhite.Dispose()
$brushSub.Dispose()
$brushGold.Dispose()
$brushBadgeBg.Dispose()
$penBadge.Dispose()
$penPhone.Dispose()
$fontTitle.Dispose()
$fontSub.Dispose()
$fontBadge.Dispose()
$fontChipTitle.Dispose()
$fontChipSub.Dispose()

Write-Host "`nSUCCESS: All 5 store screenshots generated in store_assets/ folder!"
