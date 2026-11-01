@echo off
setlocal

where py >nul 2>nul
if errorlevel 1 goto try_python
py -3 "%~dp0setup_codex_skills.py" %*
exit /b %errorlevel%

:try_python
where python >nul 2>nul
if errorlevel 1 goto no_python
python "%~dp0setup_codex_skills.py" %*
exit /b %errorlevel%

:no_python
echo [ERROR] Python 3 no esta disponible en PATH. 1>&2
exit /b 2
