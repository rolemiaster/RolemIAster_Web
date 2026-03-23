@echo off
:: Configuración de página de códigos para caracteres especiales
chcp 65001 >nul

:: Cambiar al directorio donde reside este script (Carpeta Web)
cd /d "%~dp0"

echo ==========================================
echo   SUBIDA MANUAL DE CONTENIDO WEB
echo ==========================================

:: 1. Añadir todo el contenido de la carpeta actual
echo [1/3] Añadiendo archivos al área de preparación...
git add .

:: 2. Excluir este script del commit (para no subirse a sí mismo)
:: Se asume que el usuario no quiere trackear este script de utilidad
git reset HEAD subir_web.bat >nul 2>&1

:: 3. Solicitar mensaje de commit (opcional)
set /p msg="Mensaje para el commit (Enter para 'Actualizacion Web Manual'): "
if "%msg%"=="" set msg="Actualizacion Web Manual"

:: 4. Commit
echo [2/3] Creando commit...
git commit -m "%msg%"

:: 5. Push
echo [3/3] Subiendo cambios al repositorio remoto...
git push

echo.
echo ==========================================
echo   PROCESO TERMINADO
echo ==========================================
pause
