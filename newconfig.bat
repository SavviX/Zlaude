@echo off

REM Install Node.js modules
npm install

REM Start the server
start "node" /min cmd /C node server.cjs

REM Wait for 5 seconds
timeout /t 5 /nobreak >nul

REM Open the URL in the default browser
start http://localhost:3000

REM Prompt the user to stop the server
echo Press any key to stop the server...
pause >nul

REM Terminate the server process
taskkill /IM node.exe /F
