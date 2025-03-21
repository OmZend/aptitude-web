@echo off
echo Navigating to the project directory...
cd aptitude-web/aptitude-web || (echo Directory not found! Exiting... && exit /b)

echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo npm install failed. Exiting...
    exit /b %errorlevel%
)

echo Installing TailwindCSS and required dependencies...
npm i -D tailwindcss@3 postcss autoprefixer
if %errorlevel% neq 0 (
    echo Tailwind install failed. Exiting...
    exit /b %errorlevel%
)

echo Initializing TailwindCSS...
npx tailwindcss init -p
if %errorlevel% neq 0 (
    echo Tailwind initialization failed. Exiting...
    exit /b %errorlevel%
)

echo Starting the development server...
npm start
if %errorlevel% neq 0 (
    echo Failed to start the server. Exiting...
    exit /b %errorlevel%
)

echo Setup and server started successfully!
pause
