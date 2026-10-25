Add-Type -AssemblyName System.Drawing

# 1. 512x512 App Icon (Exact same penguin from phone home screen)
$srcPath = "public\logo.png"
$src = [System.Drawing.Bitmap]::FromFile((Resolve-Path $srcPath))
$icon512 = New-Object System.Drawing.Bitmap 512, 512
$g1 = [System.Drawing.Graphics]::FromImage($icon512)
$g1.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g1.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g1.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g1.DrawImage($src, 0, 0, 512, 512)
$icon512.Save("store_assets\icon_512.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g1.Dispose()
$icon512.Dispose()

# 2. 1024x500 Feature Graphic matching "AI Prep for AP Exams & Notes"
$fg = New-Object System.Drawing.Bitmap 1024, 500
$g2 = [System.Drawing.Graphics]::FromImage($fg)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g2.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Premium Deep Indigo & Slate Gradient
$rect = New-Object System.Drawing.Rectangle 0, 0, 1024, 500
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $rect,
    [System.Drawing.Color]::FromArgb(10, 15, 30),   # deep night
    [System.Drawing.Color]::FromArgb(26, 26, 64),   # rich indigo
    30.0
)
$g2.FillRectangle($brush, $rect)

# Draw Logo on Left
$logoSize = 340
$logoX = 70
$logoY = [int]((500 - $logoSize) / 2)
$g2.DrawImage($src, $logoX, $logoY, $logoSize, $logoSize)

# Clean Typography matching App Name: "AI Prep for AP Exams & Notes"
$fontTitle = New-Object System.Drawing.Font("Segoe UI", 34, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font("Segoe UI", 18, [System.Drawing.FontStyle]::Bold)
$fontPills = New-Object System.Drawing.Font("Segoe UI", 12, [System.Drawing.FontStyle]::Bold)

$textBrushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 255))
$textBrushGold = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(251, 191, 36)) # Amber Gold
$textBrushMuted = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(203, 213, 225)) # Slate 300

$textX = 450
$g2.DrawString("AI Prep for AP Exams", $fontTitle, $textBrushWhite, $textX, 125)
$g2.DrawString("Score a 5 with AI Tutor & Notes", $fontSub, $textBrushGold, $textX, 200)

# Feature Badges
$g2.DrawString("Detailed Unit Notes  *  FRQ Grader  *  1v1 Battles", $fontPills, $textBrushMuted, $textX, 265)

$fg.Save("store_assets\feature_graphic_1024x500.png", [System.Drawing.Imaging.ImageFormat]::Png)

$g2.Dispose()
$fg.Dispose()
$src.Dispose()

Write-Host "SUCCESS: Generated pixel-perfect icon_512.png and feature_graphic_1024x500.png"
