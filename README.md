# High Solutions recruitment Web 
## Kwestie techniczne

### Instalacja

Yarn
```
yarn 
```
NPM
```
npm install
```

### Serwer

Yarn
```
yarn start
```
NPM
```
npm start
```


## Aplikacja

### Backend
```
https://high-solutions-task.herokuapp.com/
```
### Api

#### Logowanie
```
https://high-solutions-task.herokuapp.com/login
```
#### Lista postaci
```
https://high-solutions-task.herokuapp.com
```

## Rozwiązania programistyczne
### Testowy user
User pobierany z backendu
```
Email: user@user.com
Password: password123
```
### Technologie
* Zastosowanie `react`
* Zastosowanie `react-redux`
* Zastosowanie `react-semantic-ui`
### Zastosowania architektura
Podział na odpowiednie foldery:
* actions - Redux'owe akcje
* components - Komponenty
* constants - Stałe
* helpers - Helpery
* pages - Strony
* reducers - Reducery do Redux'a
* services - Serwisy
### Gitflow
W aplikacji zastosowałem uproszczony gitflow (bez HOTFIX, ze względu na brak produkcyjny)
```bash
master -> develop -> developerName/featureName
```
## Inne kwestie
### Czas pracy
- 4h - tyle pracy zajęło mi zrobienie aplikacji (jak zwykle heroku zajął mi sporo czasu)
### Produkcja
Aplikacja działa na Heroku http://high-solutions-web.herokuapp.com/
### ToDo
- Dodanie rejestracji
- Większe podzielenie komponentów
- TypeScript!