---
layout: none
---

<html lang="ru">
    <head>
        {% include head.html %}
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
        <div class="wrapper">
            <header> {% include header.html %} </header>
            <div class="main"> 
                <h1 class="page-title">Попытка подключения к серверу Steam...</h1>
                <div class="main__inner">
                    <section class="content">
                        <p>Если ничего не происходит, пожалуйста, подтвердите открытие приложения во всплывающем окне браузера.</p>
                        <a href="steam://connect/play.rp-ps.ru:27015" id="fallback-link" style="display:none;">Нажмите здесь, чтобы подключиться вручную</a>
                        <br>
                    </section>
                </div>
            </div> 
        </div>
    </body>

</html>