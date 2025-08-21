# Color Palette Builder

Ein schneller, schlanker und benutzerfreundlicher Generator für eigene Farbpaletten – ideal für Designer:innen,
Entwickler:innen und alle, die harmonische Farben zusammenstellen möchten.

- Live-Demo: https://dkluske.github.io/color-palette-builder
- Stack: React 19, Vite 7, GitHub Pages

## Features

- Zufallsfarben mit einem Klick: Erstelle direkt eine Palette aus 5 Startfarben und würfle einzelne Einträge neu.
- Manuelles Bearbeiten: Hex-Code pro Farbe bearbeiten (Akzeptiert `#RRGGBB` oder `RRGGBB`; wird automatisch zu
  Großbuchstaben normalisiert).
- Validierung: Ungültige Hex-Codes werden verhindert; hilfreiche Fehlermeldung bei falscher Eingabe.
- Tastaturkürzel beim Bearbeiten: Enter = Speichern, Escape = Abbrechen.
- Palette verwalten: Farben hinzufügen (bis zu 10 Einträge) oder löschen (mindestens 1 Farbe bleibt erhalten).

## Schnellstart

Voraussetzung: Node.js (empfohlen LTS).

1. Repository klonen oder herunterladen
2. Abhängigkeiten installieren
    - `npm install`
3. Entwicklungsserver starten
    - `npm run dev`
4. App im Browser öffnen (Vite zeigt die lokale URL in der Konsole an)

## Scripts

- `npm run dev` – Entwicklungsserver starten
- `npm run build` – Produktionsbuild nach `dist` erzeugen
- `npm run preview` – lokalen Preview-Server für den Build starten
- `npm run lint` – Linting ausführen
- `npm run deploy` – auf GitHub Pages veröffentlichen (baut automatisch via `predeploy`)

## Deployment (GitHub Pages)

Dieses Projekt nutzt `gh-pages` für das Hosting der Produktionsversion aus dem Ordner `dist`.

- Baue und deploye mit einem Befehl: `npm run deploy`
- Stelle sicher, dass das Repository entsprechend konfiguriert ist (Branch `gh-pages` wird automatisch gepflegt).

## Technischer Überblick

- React 19 (mit Hooks)
- Vite 7 (schnelles Development & Build)
- ESLint (inkl. React Hooks Plugin)

## Roadmap / Ideen

- Export der Palette (z. B. als JSON, CSS-Variablen, Tailwind-Config)
- Import von Paletten
- Unterstützung für HSL/HSV und Farbnamen
- Kopieren des Hex-Codes per Klick
- Sharing-Link für Paletten

## Mitwirken (Contributing)

Beiträge sind willkommen!

- Issues: Fehler melden oder Vorschläge machen
- Pull Requests: Kleine, fokusierte Änderungen mit kurzer Beschreibung
- Code-Stil: ESLint beachten (`npm run lint`)

## Lizenz

Aktuell ist keine Lizenzdatei hinterlegt. Für echte Open-Source-Nutzung empfiehlt sich das Hinzufügen einer
LICENSE-Datei (z. B. MIT). Wenn du eine konkrete Lizenz wünschst, füge die Datei im Projektroot hinzu und passe diesen
Abschnitt an.

## Danksagung

- Erstellt mit React und Vite
- Gehostet via GitHub Pages