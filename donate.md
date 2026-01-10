---
layout: default
title: Донат
---
<style>
    .content {
        max-width: max-content;
        background-color: transparent;
    }   

    /* Контейнер для всех карточек: использует Flexbox для автоматического выравнивания */
    .donate-container {
        display: flex;
        justify-content: space-between;
        gap: 20px; /* Расстояние между карточками */
        flex-wrap: wrap; /* Чтобы на телефонах карточки вставали друг под другом */
        margin: 20px 0; /* Отступ сверху и снизу */
    }

    /* Стилизация отдельной карточки */
    .donate-card {
        flex: 1; /* Карточки занимают равное пространство */
        min-width: 350px; /* Минимальная ширина, чтобы не сжимались слишком сильно */
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        text-align: center; /* Центрируем весь текст внутри */
        background-color: rgba(255, 255, 255, 0.05); /* Легкий полупрозрачный фон */
        transition: transform 0.3s ease; /* Плавная анимация при наведении */
    }

    /* Эффект при наведении курсора */
    .donate-card:hover {
        transform: translateY(-5px); /* Приподнимает карточку */
    }

    /* Выделение "рекомендуемой" карточки (если класс featured присутствует) */
    .donate-card.featured {
        border: 2px solid #009416;
        background-color: rgba(0, 123, 255, 0.05);
    }

    /* Стилизация заголовков и цен */
    .donate-card h3 {
        margin-top: 0;
        font-size: 1.5rem;
    }

    .donate-card p {
        font-size: 1.8rem;
        font-weight: bold;
        color: #c8a90f;
    }

    /* Стилизация списка бонусов */
    .donate-card ul {
        list-style: none; /* Убираем стандартные маркеры списка */
        padding: 0;
        margin: 15px 0;
    }

    .donate-card li {
        margin-bottom: 5px;
    }

    /* Стилизация кнопки "Купить" */
    .donate-button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #323332;
        color: white !important; /* !important может понадобиться, если ваш Jekyll-шаблон переопределяет цвет ссылок */
        text-decoration: none;
        border-radius: 5px;
        margin-top: 10px;
        font-weight: bold;
    }

    .donate-button:hover {
        background-color: #009416;
    }

</style>
<h4>Примечание: указывайте ник/SteamID при донате</h4>

<div class="donate-container">
  {% for item in site.data.donations %}
    <!-- Используем "featured" класс, если он есть в JSON -->
    <div class="donate-card {% if item.featured %}featured{% endif %}">
      <h3>{{ item.title }}</h3>
      <p>{{ item.price }}</p>
      <ul>
        {% for feature in item.features %}
          <li>{{ feature }}</li>
        {% endfor %}
      </ul>
      <!-- Используем свойство button_url для ссылки -->
      <a href="{{ item.button_url }}" class="donate-button">Купить</a>
    </div>
  {% endfor %}
</div>
