---

title: API
description:  Описание создания команд
project: ULX
---

# {{ page.project }} {{ page.title }}
{{ page.description }}

## Command
 Класс команды ULX после создания через ulx.command

### Command:addParam


Добавление аргумента для команды

Поля таблицы t:
- number **type** - тип аргумента (ULib.cmds.(...)Arg)
- boolean **invisible** - данный аргумент "невидимый"? - используется для setOpposite
- string **target** - для каких целей разрешить/запретить использовать команду (для Ulib.cmds.PlayerArg)
- string **hint** - подсказка, для чего использовать аргумент
- table **completes** - таблица, содержащая варианты использования аргумента 
- **...** - из класса <a href="#ulibcmds">ULib.cmds</a>



```lua
function Command:addParam(t: table)
```

### Параметры
- Command **self** -  Класс команды ULX после создания через ulx.command
- table **t** - Таблица с аргументами


---

### Command:call

 Вызвать команду


```lua
function Command:call(isOpposite: boolean, ...any)
```

### Параметры
- Command **self** -  Класс команды ULX после создания через ulx.command
- boolean **isOpposite** - Противоположная функция?


---

### Command:defaultAccess

 Задать доступ по умолчанию для команды


```lua
function Command:defaultAccess(access: string)
```

### Параметры
- Command **self** -  Класс команды ULX после создания через ulx.command
- string **access** - Доступ ("user", "admin" и т.д.)


---

### Command:setOpposite

 Задать противоположную функцию


```lua
function Command:setOpposite(cmd: string, args: table, say_cmd: any, hide_say: any, no_space_in_say: any)
```

### Параметры
- Command **self** -  Класс команды ULX после создания через ulx.command
- string **cmd** - Название противоположной функции (!unназвание)
- table **args** - Таблица с аргументами. Все аргументы в ней должны быть nil, кроме invisible аргумента
- any **say_cmd** 
- any **hide_say** 
- any **no_space_in_say** 


---

## ULib
 Библиотека Ulysses Lib
 https://github.com/TeamUlysses/ulib


---

## ULib.cmds
 API команд

### ULib.cmds.TranslateCommand

 Класс команды ULX после создания через ulx.command


```lua
table
```



---

### ULib.cmds.allowTimeString

 Указывает, что аргумент должен указываться в формате времени (например, 1m, 1h)


```lua
table
```



---

### ULib.cmds.optional

 Указывает аргумент опциональным


```lua
table
```



---

### ULib.cmds.restrictToCompletes

 Указывает, что команда не должна выполняться, если аргумента нет в списке completes=


```lua
table
```



---

### ULib.cmds.round

 Указывает, что аргумент должен округляться


```lua
table
```



---

### ULib.cmds.steamID

 Указывает для аргумента ULib.cmds.PlayerArg возвращать таблицу в виде { name, steamid } для запуска команды на оффлайн игроков


```lua
table
```



---

### ULib.cmds.takeRestOfLine

 Указывает, что аргумент должен забирать всю строку с пробелами целиком (следующие аргументы при этом игнорируются!)


```lua
table
```



---

## ulx
 Ulysses X

 [https://github.com/TeamUlysses/ulx](https://github.com/TeamUlysses/ulx)
 
 Модификация от RP-PS -> [http://github.com/rp-ps/ulx](http://github.com/rp-ps/ulx)
 

### ulx.command

 Создаёт команду ULX


```lua
function ulx.command(category: string, command: string, fn: function, say_cmd: string, hide_say: boolean, nospace: any, unsafe: any)
```

### Параметры
- string **category** - Категория команды
- string **command** - Название команды (ulx + пробел + название)
- function **fn** - Функция, которая будет вызываться после команды
- string **say_cmd** - Название команды (!название)
- boolean **hide_say** - Скрыть сообщение после введения команды?
- any **nospace** 
- any **unsafe** 

### Возвращает
- Command **table** - Объект команды