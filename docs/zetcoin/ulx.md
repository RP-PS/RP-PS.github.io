---

title: ULX
description: Команды ULX
project: ZetCoin
---

# {{ page.project }} {{ page.title }}
{{ page.description }}

{% include ulx-command.html 
   name="!shop" 
   description="Открывает магазин" %}

{% include ulx-command.html 
   name="!leaderboard" 
   description="Открывает таблицу рекордов" %}

{% include ulx-command.html 
   name="!zcadd [Player] [Money]" 
   description="Добавляет зеткоинов на счёт игрока" 
   args="- Player - игрок
- Money - Количество денег" %}

{% include ulx-command.html 
   name="!zcremove [Player] [Money]" 
   description="Удаляет зеткоины со счёта игрока" 
   args="- Player - игрок
- Money - Количество денег" %}

{% include ulx-command.html
   name="!zcset [Player] [Money]" 
   description="Устанавливает определенное количество зеткоинов" 
   args="- Player - игрок
- Money - Количество денег" %}

{% include ulx-command.html
   name="!zcreset [Player]" 
   description="Вайпает зеткоины на количество, равное полученным ачивкам" 
   args="- Player - игрок" %}