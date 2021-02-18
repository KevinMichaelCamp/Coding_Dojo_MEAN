echo Welcome ^
to MEAN project builder^
project startup!(Please start this from your root folder)
set /P PROJECTNAME="What is the project name? "
pause
call mkdir %PROJECTNAME%
call cd %PROJECTNAME%
call npm init -y
call npm i express express-flash mongoose bcryptjs express-session
call type nul > server.js
call mkdir config
call cd config
call type nul > mongoose.js
call type nul > routes.js
call cd ..
call mkdir controllers
call cd controllers
call type nul > controller.js
call cd ..
call mkdir models
call ng new public
call cd public
call ng g s http
