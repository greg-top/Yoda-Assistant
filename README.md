# YODA ASSISTANT - React App

## About

Aplikacja ma dzialać jako Daily Assistant i wykorzystywać maksymalnie wszystkie podstawowe aspekty React'a.

## Zasada działania:

1.) Użytkownik może dodać notatkę w jednym z trzech działów:

- rano
- popołudniu
- wieczorem

Uzytkownik moze przelaczac sie miedzy dzialami za pomoca nawigacji widocznej w header. (na poczatku bd to 3 oddzielne sekcje na jednej stronie??? - rozbudowa w dalszej czesci) <br>

2.) Za dodawanie notatek odpowiada formularz, ktory jest widoczny po prawej stronie okna (okno jest podzielone na pol).
Ewentualnie moze to byc modal odpalany za pomoca przyciku w header (dalszy etap pracy)

Formularz posiada nastepujace pola:

```
- radio buttony, ktore odpowiadaja do ktorej sekcji bd wstawiali nasza notatke
- title
- description
- link (moze dodac jakis event zewnetrzny, np. spotkanie z klientem, wtedy pojawi sie dodatkowo odliczanie za ile jest wyjscie - Dalszy etap prac)
- Czy jest to notatka priorytetowa?
  <br>
```

3.) Gdy uzytkownik wypelni formularz i kliknie przycisk dodaj, notatka powedruje do odpowiedniej podstrony lub sekcji

## Stack:

- React (create-react-app, react-dom .... DOPISAC, react-router, react-router-dom, function components, class components, Context API)
- CSS modules
- SCSS
- Netlify-cli (deployment)

## Instalacja wymaganych paczek

- Utworzenie projektu:

```
npx create-react-app yoda-assistant
```

- Instalacja react-router i react-router-dom

```
npm install react-router react-router-dom --save
```

- Instalacja Sass'a

```
npm install node-sass --save
```

- CSS modules - zawiera sie juz w paczce create-react-app

## Plan pracy

1.) Zbudowac widoki dla naszej aplikacji za pomoca react-router

```
- Root
- MorningView
- AfternoonView
- EveningView
```

<br>
2.) Stworzyc komponenty do obslugi aplikacji:

- Header
  - HeaderNavigation
- Button
- Title
- List
  - ListItem
- Form
  - FormRadio
  - FormInput
- Modal (w pozniejszym etapie prac)

```
---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
```
