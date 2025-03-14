# 📝 Guida alla Code Review

<div align="center">
  
![Code Review Banner](https://via.placeholder.com/800x200?text=SEAI+Code+Review+Process)

</div>

## 📋 Indice
- [Introduzione](#introduzione)
- [Procedura Passo-Passo](#procedura-passo-passo)
- [Consigli per una Review Efficace](#consigli-per-una-review-efficace)
- [Risorse Utili](#risorse-utili)

## 📌 Introduzione

Questo documento fornisce le istruzioni dettagliate per completare correttamente una code review sul repository `human-resources`. Una code review ben eseguita aiuta a mantenere alta la qualità del codice e favorisce la condivisione di conoscenze all'interno del team.

## 🔄 Procedura Passo-Passo

<details>
<summary>1️⃣ Creare una Fork della Repository</summary>

1. Naviga alla pagina GitHub del repository [Human-Resources](https://github.com/SEAI-Development/Human-Resources)
2. Clicca sul pulsante <kbd>Fork</kbd> nell'angolo superiore destro
3. Seleziona il tuo account come destinazione della fork
4. Assicurati di clonare tutti i branch della repository originale
5. Attendi il completamento del processo di fork

</details>

<details>
<summary>2️⃣ Creare una Pull Request</summary>

1. Dalla tua repository forkata (`tuonome/Human-Resources`)
2. Vai alla sezione <kbd>Pull requests</kbd>
3. Clicca sul pulsante <kbd>New pull request</kbd>
4. Configura la PR:
   - Base repository: `SEAI-Development/Human-Resources`
   - Base branch: `main`
   - Head repository: `tuonome/Human-Resources`
   - Compare branch: `code-review`
5. Clicca su <kbd>Create pull request</kbd>
6. Come titolo inserire `[Code Review] Nome e Cognome`
7. Conferma con <kbd>Create pull request</kbd>

</details>

<details>
<summary>3️⃣ Effettuare la Code Review</summary>

1. All'interno della PR, seleziona la scheda <kbd>Files changed</kbd>
2. Trova il commit con etichetta `Code to REVIEW`
3. Inizia la review del codice aggiungendo i tuoi commenti

> **Suggerimento:** Usa il formato Markdown nei tuoi commenti per migliorarne la leggibilità

</details>

<details>
<summary>4️⃣ Richiedere Review dai Moderatori</summary>

1. Dopo aver completato la tua review
2. Vai alla sezione `Reviewers` nel pannello laterale destro
3. Clicca su <kbd>Request</kbd> e seleziona [@chillFil](https://github.com/chillFil) o [@Fxllo](https://github.com/Fxllo)

</details>

<details>
<summary>5️⃣ Attendere e Rispondere al Feedback</summary>

1. I moderatori esamineranno la tua code review
2. Riceverai notifiche quando ci saranno aggiornamenti
3. Rispondi tempestivamente a eventuali richieste di chiarimento

</details>

## 💡 Consigli per una Review Efficace

| Focus | Cosa Cercare |
|-------|--------------|
| **🔒 Sicurezza** | Vulnerabilità, validazione input, gestione errori |
| **📊 Performance** | Algoritmi inefficienti, query database, caricamento risorse |
| **📚 Leggibilità** | Nomi variabili, commenti, struttura logica |
| **🧪 Testabilità** | Copertura test, edge cases, mocking |
| **♻️ Manutenibilità** | Duplicazione codice, pattern di design, dipendenze |

### Do's and Don'ts

✅ **Da fare:**
- Essere specifici nei commenti
- Fornire esempi di miglioramento
- Riconoscere le buone pratiche
- Fare domande quando qualcosa non è chiaro

❌ **Da evitare:**
- Commenti vaghi o generici
- Tono critico o accusatorio
- Focus eccessivo su preferenze stilistiche
- Ignorare il contesto più ampio

## 📚 Risorse Utili:

- [Code Review - roadmap.sh](https://roadmap.sh/code-review)
- [Code Review Best Practices](https://github.com/google/eng-practices/blob/master/review/reviewer/index.md)

---

<div align="center">
  
**Buona Code Review!** 👨‍💻👩‍💻

</div>