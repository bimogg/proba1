# Папка для изображений

Загрузите сюда все изображения для Hero секции и других компонентов.

## Структура:

```
public/images/
├── hero/
│   └── megaphone-illustration.png (или .svg, .jpg)
├── brands/
│   └── (логотипы брендов)
├── team/
│   └── (фото команды)
└── ...
```

## Как использовать в компонентах:

В Next.js изображения из папки `public/` доступны по пути `/images/...`

Пример:
```tsx
import Image from 'next/image'

<Image 
  src="/images/hero/megaphone-illustration.png" 
  alt="Hero illustration"
  width={500}
  height={500}
/>
```


