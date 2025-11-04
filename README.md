# Asystent Publikacji AI

![Asystent Publikacji AI](https://placehold.co/800x200/252A34/08D9D6?text=Asystent+Publikacji+AI)

Zaawansowana aplikacja internetowa oparta na AI, zaprojektowana do automatyzacji i optymalizacji procesu tworzenia i publikowania treści w mediach społecznościowych.

## Kluczowe Funkcje

Aplikacja składa się z trzech głównych modułów:

### 1. 🤖 Asystent Wideo
Kompleksowe narzędzie do planowania publikacji materiałów wideo.
- **Automatyczna Analiza Pliku:** Generuje sugestie kategorii, tagów i słów kluczowych na podstawie nazwy pliku.
- **Generator Tytułów:** Tworzy chwytliwe i zoptymalizowane pod SEO tytuły dla YouTube i social media.
- **Generator Miniatur AI:** Projektuje trzy unikalne warianty miniatur na podstawie klatki wideo, tytułu i opcjonalnego logo.
- **Kompleksowy Plan Publikacji:** Tworzy harmonogram publikacji, unikalne opisy i zestawy hashtagów dla wielu platform (YouTube, TikTok, Instagram, Facebook).
- **Branding i Ulepszenia:** Umożliwia dodawanie muzyki (z wyszukiwarki lub własnej) oraz napisów.

### 2. 💬 Chatbot AI
Inteligentny chatbot oparty na modelu Gemini, gotowy do odpowiedzi na dowolne pytania.
- **Interfejs konwersacyjny:** Prowadź płynną rozmowę z AI.
- **Strumieniowanie odpowiedzi:** Odpowiedzi pojawiają się w czasie rzeczywistym, token po tokenie, co zapewnia naturalne doświadczenie.

### 3. 🖼️ Analizator Obrazu
Narzędzie do głębokiej analizy wizualnej.
- **Przesyłanie "Przeciągnij i Upuść":** Łatwo dodawaj obrazy do analizy.
- **Zadawanie pytań:** Zapytaj o dowolny aspekt obrazu, a AI udzieli szczegółowej odpowiedzi.

## Stos Technologiczny

- **Frontend:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (za pomocą CDN)
- **AI:** [Google Gemini API](https://ai.google.dev/) (`@google/genai`)
- **Środowisko Uruchomieniowe:** Bezpośrednio w przeglądarce, z wykorzystaniem [Import Maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) do dynamicznego ładowania modułów (bez `npm` i `package.json`).

## Uruchomienie

Aplikacja jest zaprojektowana do działania bez potrzeby procesu budowania (np. Vite, Webpack) czy instalacji zależności za pomocą `npm`.

1.  **Klucz API:**
    Aplikacja wymaga klucza API do Google Gemini. Klucz ten **musi** być dostępny jako zmienna środowiskowa `process.env.API_KEY` w środowisku, w którym aplikacja jest uruchamiana.

2.  **Serwer Lokalny:**
    Aby uruchomić aplikację lokalnie, wystarczy serwować pliki za pomocą dowolnego prostego serwera WWW. Można użyć na przykład rozszerzenia "Live Server" w Visual Studio Code lub prostego serwera w Pythonie:
    ```bash
    python -m http.server
    ```
    Następnie otwórz przeglądarkę pod adresem `http://localhost:8000`.

## Struktura Projektu

```
.
├── components/         # Komponenty React
│   ├── VideoAssistant.tsx
│   ├── Chatbot.tsx
│   ├── ImageAnalyzer.tsx
│   ├── Icons.tsx
│   └── LoadingSpinner.tsx
├── services/           # Logika komunikacji z API
│   └── geminiService.ts
├── App.tsx             # Główny komponent aplikacji
├── index.html          # Główny plik HTML, punkt wejścia
├── index.tsx           # Renderowanie aplikacji React
├── metadata.json       # Metadane aplikacji
└── types.ts            # Definicje typów TypeScript
```
