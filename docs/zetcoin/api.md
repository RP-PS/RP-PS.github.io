---

title: API
description:  Система управления валютой
project: ZetCoin
---

# {{ page.project }} {{ page.title }}
{{ page.description }}

## Player
 Игрок

### Player:addBankMoney

Добавляет деньги в банк игрока.


```lua
function Player:addBankMoney(count: number)
```

### Параметры
- Player **self** -  Игрок
- number **count** - Количество денег

### Возвращает
- boolean **success** - Успех
- string? **error_message** - Ошибка в случае неудачи

---

### Player:addWalletMoney

Добавляет деньги в кошелек игрока.


```lua
function Player:addWalletMoney(count: number)
```

### Параметры
- Player **self** -  Игрок
- number **count** - Количество денег

### Возвращает
- boolean **success** - Успех

---

### Player:getBankBalance

Возвращает банковский баланс игрока.


```lua
function Player:getBankBalance()
```

### Параметры
- Player **self** -  Игрок

### Возвращает
- number **count** - Количество денег

---

### Player:getSalaryMoney

Возвращает зарплату игрока.


```lua
function Player:getSalaryMoney()
```

### Параметры
- Player **self** -  Игрок

### Возвращает
- number **salary** - Зарплата

---

### Player:getWalletBalance

Возвращает баланс кошелька игрока.


```lua
function Player:getWalletBalance()
```

### Параметры
- Player **self** -  Игрок

### Возвращает

---

### Player:removeBankMoney

Забирает деньги из банка игрока.


```lua
function Player:removeBankMoney(count: number)
```

### Параметры
- Player **self** -  Игрок
- number **count** - Количество денег

### Возвращает
- boolean **success** - Успех

---

### Player:setBankMoney

Устанавливает баланс банка.


```lua
function Player:setBankMoney(count: number, [notSave: boolean)
```

### Параметры
- Player **self** -  Игрок
- number **count** - Количество денег
- boolean? **notSave** - Если true, данные не будут сохранены в SQL

### Возвращает
- boolean **success** - Успех
- string? **error_message** - Ошибка в случае неудачи

---

### Player:setSalary

Устанавливает зарплату игроку.


```lua
function Player:setSalary(count: number)
```

### Параметры
- Player **self** -  Игрок
- number **count** - salary Зарплата

### Возвращает

---

### Player:setWalletMoney

Устанавливает баланс кошелька.


```lua
function Player:setWalletMoney(count: number, [notSave: boolean)
```

### Параметры
- Player **self** -  Игрок
- number **count** - Количество денег
- boolean? **notSave** - Если true, данные не будут сохранены в SQL

### Возвращает
- boolean **success** - Успех
- string? **error_message** - Ошибка в случае неудачи

---

## ZetCoin
 Таблица с функциями ZetCoin

### ZetCoin.addBankMoney

Добавляет деньги в банк.


```lua
function ZetCoin.addBankMoney(steamid: string, count: number)
```

### Параметры
- string **steamid** - SteamID игрока
- number **count** - Количество денег

### Возвращает
- boolean **success** - Успех
- string? **error_message** - Ошибка в случае неудачи

---

### ZetCoin.addWalletMoney

Добавляет деньги в кошелек.


```lua
function ZetCoin.addWalletMoney(steamid: string, count: number)
```

### Параметры
- string **steamid** - SteamID игрока
- number **count** - Количество денег

### Возвращает
- boolean **success** - Успех
- string? **error_message** - Ошибка в случае неудачи

---

### ZetCoin.getBankBalance

 Возвращает баланс банковского счета игрока.
 Если записи нет, создает её.


```lua
function ZetCoin.getBankBalance(steamid: string)
```

### Параметры
- string **steamid** - SteamID игрока.

### Возвращает
- number **value** - Текущий баланс в банке.

---

### ZetCoin.getSalaryMoney

Получает текущую зарплату игрока.


```lua
function ZetCoin.getSalaryMoney(steamid: string)
```

### Параметры
- string **steamid** - SteamID игрока

### Возвращает

---

### ZetCoin.getWalletBalance

Возвращает баланс кошелька игрока.


```lua
function ZetCoin.getWalletBalance(steamid: string)
```

### Параметры
- string **steamid** - SteamID игрока

### Возвращает
- number или nil **value** - Баланс или nil, если игрок не найден

---

### ZetCoin.removeBankMoney

Забирает деньги из банка.


```lua
function ZetCoin.removeBankMoney(steamid: string, count: number)
```

### Параметры
- string **steamid** - SteamID игрока
- number **count** - Количество денег

### Возвращает
- boolean **success** - Успех
- string? **error_message** - Ошибка в случае неудачи

---

### ZetCoin.removeWalletMoney

Забирает деньги из кошелька.


```lua
function ZetCoin.removeWalletMoney(steamid: string, count: number)
```

### Параметры
- string **steamid** - SteamID игрока
- number **count** - Количество денег

### Возвращает
- boolean **success** - Успех
- string? **error_message** - Ошибка в случае неудачи

---

### ZetCoin.setBankMoney

Устанавливает количество денег в банке.


```lua
function ZetCoin.setBankMoney(steamid: string, count: number, [notSave: boolean)
```

### Параметры
- string **steamid** - SteamID игрока
- number **count** - Количество денег Количество денег
- boolean? **notSave** - Если true, данные не будут сохранены в SQL

### Возвращает
- boolean **success** - Успешно ли выполнена операция
- string? **error_message** - Текст ошибки

---

### ZetCoin.setSalary

Устанавливает зарплату игрока.


```lua
function ZetCoin.setSalary(steamid: string, count: number)
```

### Параметры
- string **steamid** - SteamID игрока
- number **count** - Количество денег

### Возвращает
- boolean **success** - Успех
- string? **error_message** - Ошибка в случае неудачи

---

### ZetCoin.setWalletMoney

Устанавливает количество денег в кошельке.


```lua
function ZetCoin.setWalletMoney(steamid: string, count: number, [notSave: boolean)
```

### Параметры
- string **steamid** - SteamID игрока
- number **count** - Количество денег Количество денег
- boolean? **notSave** - Если true, данные не будут сохранены в SQL

### Возвращает
- boolean **success** - Успех
- string? **error_message** - Ошибка в случае неудачи