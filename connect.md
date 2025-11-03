
---
layout: default
title: Подключение к серверу
---

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>{{ page.title }}</title>
    <script>
        function attemptConnect() {
            window.location.href = "steam://connect/play.rp-ps.ru:27015";

            setTimeout(function() {
                var fallbackLink = document.getElementById('fallback-link');
                if (fallbackLink) {
                    fallbackLink.style.display = 'block';
                }
            }, 1000);
        }
    </script>
</head>

<body onload="attemptConnect()">

    <h1>Попытка подключения к серверу Steam...</h1>
    <p>Если ничего не происходит, пожалуйста, подтвердите открытие приложения во всплывающем окне браузера.</p>
    
    <a href="steam://connect/play.rp-ps.ru:27015" id="fallback-link" style="display:none;">Нажмите здесь, чтобы подключиться вручную</a>

</body>
</html>