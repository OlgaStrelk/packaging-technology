## Настройка окружения 
Для первого запуска Gulp потребуется Node JS, если он не установлен. Переходим https://nodejs.org/en/ и скачиваем установщик.
После установки, можем посмотреть какую  версию  мы установили и определяется ли  Node JS у нас с помощью команды
```
node --version  
```
Работа  с Gulp осуществляется не только  с помощью Node JS, но и его менеджера пакета npm  и  команды утилиты npx

Поэтому тоже  используем команду--version  для проверки их версии
```
npm --version 
```
```
npx --version
```
## Глобальная установка
Выполняется командой 
```
npm install --global gulp-cli
```

## Запуск проекта

```
npm i gulp
```

# Сборка проекта на Gulp 4
Быстро настроить сборку вашего проекта на Gulp и писать код на:
- HTML
- CSS, SASS
- Java Script

## Функционал сборки
- минификация HTML
- компиляция препроцессоров SASS
- минификация CSS
- автоматическое добавление префиксов CSS
- минификация JavaScript
- сжатие изображений
- отслеживание изменений в файлах
- локальный сервер с автоматическим обновлением страницы при изменении файлов

## Используемые NPM пакеты
- [gulp](https://www.npmjs.com/package/gulp) Сборщик Gulp  
- [browser-sync](https://browsersync.io/docs/gulp) Автоматическое обновление сайта при изменении файлов  
- [gulp-file-include](https://www.npmjs.com/package/gulp-file-include) Подключение шаблонов  
- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) Минификация HTML файлов  
- [gulp-concat](https://www.npmjs.com/package/gulp-concat) Объединение нескольких файлов в один          
- [sass](https://www.npmjs.com/package/sass) Компилятор Sass    
- [gulp-sass](https://www.npmjs.com/package/gulp-sass) Компиляция Sass и Scss файлов    
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Сжатие и оптимизация Java Script кода    
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) Автоматическое добавление префиксов в CSS     
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Минификация и оптимизация CSS файлов     
- [del](https://www.npmjs.com/package/del) Удаление каталогов и файлов    
- [gulp-rename](https://www.npmjs.com/package/gulp-rename) Переименовывает файлы и минифицирует  
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) Сжатие изображений     
- [gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries) Объединяет и выносит  в конец файла все медиа запросы  

## Команда для установки плагина
```
npm i gulp-file-include
```
То есть вводим в команду название плагина, а npm  уже установит данный плагин нам, так же плагины можно устанавливать несколько за раз и теперь команада будет  выглядеть  таким образом

```
npm i gulp-file-include gulp-htmlmin gulp-concat
```
Gulp имеет возможность установаить сразу все плаигны,  которые раньше были установлены в package.json с помощью команды
```
npm i
```

## Устранение возможных проблем
Если устанавливаем Галп ни Windows. Есть вероятность ошибки, связанной с  правами. Решение: PowerShell запускаем от  имени администратора и прописываем следующую команду
```
Set-ExecutionPolicy RemoteSigned
```
imagemin устанавливаем 7.1.0 версии

Если возникает  проблемы с плагином Sass, нужно проверить константу, и заменить
```
scss = require('gulp-sass')(require('sass'));
```
Если возникает проблемаа с плагином WEBP-CSS то здесь нужно установить converter
```
npm install webp-converter@2.2.3
```
## Рекомендации, которые помогут  избежать ряд проблем
Папка проекта не должна называться gulp  
WEBP-CSS выдает ошибку, если в названии файла картинки есть пробелы, кириллица  
У кого копирует в dist только .jpg попробуйте немного изменить запись форматов с /*.{jpg, png, svg, gif, ico, webp} на /*.+(png|jpg|gif|ico|svg|webp)  

