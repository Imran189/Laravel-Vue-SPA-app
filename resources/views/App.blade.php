<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Vue | Laravel | SPA </title>
        <link rel="icon" href="{{asset('images/logo.png')}}">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
       
    </head>
    <body>
      <div id="header"></div>
        <div id="app"></div>

       <script src="js/app.js" ></script>
    </body>
</html>
