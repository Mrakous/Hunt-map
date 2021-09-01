![LOGO](public/images/media/logo-dark-text-870x390.png)

## Preview

## Dev

### Новый язык

0. `public/locales/`
1. создать папку с кодом языка
2. `public/locales/{code_lang}`
3. создать файл `translation.json`
4. добавить контент из англ. яз, как эталон формата
5. перевести на нужный язык
6. `store/lang/state`
7. добавить язык

### Новый маркер

0. `store/filter/state` (`types`, `extraTypes`, `polygonTypes`, `polylineTypes`)
1. добавить типы
2. `containers/map/`
3. добавить компонент маркера
4. `containers/map/switchTypeFeature`
5. добавить тип маркера = компонент
6. добавить перевод

### Новая карта

0. в админке создать 2 коллекции (с сокращением именем карты (id))
1. `public/images/tiles/`
2. положить оригинал
3. `public/images/tiles/`
4. создать папку с сокращением именем карты (id)
5. нарезать карту [oliverheilig/LeafletPano](https://github.com/oliverheilig/LeafletPano)
6. `public/images/tiles{id_map}`
7. сохранить тайлы
8. `store/map/state`
9. добавить конфигурацию
10. добавить перевод
11. data/index
12. добавить в мерж кэша
13. добавить в крон по обновлению кэша

_Пример конфигурации карты_

```js
    SB: {                                         // id map
      id: 'SB',                                   // id map
      image: {                                    //
        width: 4096,                              // исходный размер картинки
        height: 4096,                             // исходный размер картинки
        path: '/images/tiles/SB/{z}-{x}-{y}.jpg', // путь до нарезанных тайлов
      },                                          //
      levels: {                                   //
        org: 4,                                   // оригинальный зум (размер на зум в тайлах) взяьб из pano
        max: 7,                                   // максимальная нарезка, зум 7
        min: 1,                                   // минимальная нарезка, зум 1 (уменьшение исходника)
        default: 1,                               // начальный зум
      },                                          //
      width: 1000,                                // игровой размер (в метрах)
      height: 1000,                               // игровой размер (в метрах)
      center: [-500, 500],                        // цента карты для позиционирования
      padding: 300,                               // отступ для скролла
    },
```

### Обновление кэш

Пользователи пишут в дев коллекции
Админ модерирует перемещаяя в коллекцию
Раз в сутки по крону запускается мерж коллекции с датой
При мерже по id и event определяется тип изменений
добавление изменение удаление

## Authors

[contributors.txt](./public/contributors.txt)

## License

[MIT](https://github.com/Findoss/Hunt-map/blob/master/LICENSE). Copyright (c) Nikita Stroganov.
