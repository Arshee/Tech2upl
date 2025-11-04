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
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **AI:** [Google Gemini API](https://ai.google.dev/) (`@google/genai`)

## Uruchomienie

Aplikacja wymaga Node.js i npm do zarządzania zależnościami i uruchomienia serwera deweloperskiego.

1.  **Klucz API:**
    Aplikacja wymaga klucza API do Google Gemini. Klucz ten **musi** być dostępny jako zmienna środowiskowa `API_KEY` w środowisku, w którym aplikacja jest uruchamiana. Można to zrobić, tworząc plik `.env.local` w głównym katalogu projektu z następującą zawartością:
    ```
    VITE_API_KEY=TWOJ_KLUCZ_API
    ```

2.  **Instalacja Zależności:**
    ```bash
    npm install
    ```

3.  **Serwer Lokalny:**
    ```bash
    npm run dev
    ```
    Aplikacja będzie dostępna pod adresem wskazanym w konsoli (zazwyczaj `http://localhost:5173`).

## Struktura Projektu

```
.
├── src/
│   ├── components/
│   │   ├── VideoAssistant.tsx
│   │   ├── Chatbot.tsx
│   │   ├── ...
│   ├── services/
│   │   └── geminiService.ts
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   └── types.ts
├── index.html
├── package.json
├── vite.config.ts
└── tailwind.config.js
```