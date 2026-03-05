---
layout: default
title: Sovereign AI and AI Act Risks
permalink: /aiarisks.html
---

{% include language-switcher.html %}

<div data-language-section="en" markdown="1">
## AI Sovrana ≠ AI Conforme

La **data residency** risponde alla domanda: **dove** risiedono i dati e **dove** vengono trattati.  
L’**AI Act UE** risponde alla domanda: **come** un sistema di IA deve essere progettato, gestito e controllato per ridurre i rischi lungo il suo ciclo di vita.

In altre parole: **la sovranità dei dati è una scelta infrastrutturale**; **la conformità all’AI Act è un’architettura di governance e gestione del rischio**.  
La prima **non** implica automaticamente la seconda.

---

### Cosa hai già realizzato: Sovranità dei Dati

Queste misure rafforzano controllo, sicurezza e tutela dei dati (e sono spesso prerequisiti utili), ma da sole non coprono tutti gli obblighi di conformità dell’AI Act:

- **Data residency**: controllo su dove i dati vengono archiviati e trattati, in linea con requisiti di localizzazione e policy interne.
- **Infrastruttura self-hosted**: gestione diretta dell’ambiente di esecuzione e delle configurazioni operative.
- **Conformità GDPR**: principi di protezione dei dati “by design” e “by default”, basi giuridiche, minimizzazione e misure tecniche/organizzative adeguate.
- **Cifratura e controllo accessi**: protezione dei dati a riposo e in transito, gestione delle credenziali e tracciamento degli accessi.

---

### Cosa manca ancora: Conformità all’AI Act (valutazione e gestione dei rischi)

La conformità all’AI Act richiede, oltre all’infrastruttura, un sistema strutturato di **valutazione, mitigazione e monitoraggio** dei rischi, con responsabilità chiare tra chi sviluppa/fornisce e chi utilizza/deploya.

- **Classificazione (Articolo 6)**: determinare se il sistema rientra in una categoria **ad alto rischio** e documentare il razionale della classificazione, includendo l’uso previsto e i contesti di impiego.
- **Gestione del rischio (Articolo 9)**: adottare un processo **continuo** e **documentato** per identificare pericoli, stimare probabilità/gravità, definire controlli e verificare l’efficacia delle mitigazioni, anche dopo il rilascio.
- **Logging automatico (Articolo 12)**: predisporre log **a livello di sistema** utili per tracciabilità, audit e incident handling (non solo metriche di performance), con attenzione a minimizzazione e protezione dei dati.
- **Supervisione umana (Articolo 14)**: definire **ruoli, competenze e procedure** per l’intervento umano: quando è richiesto, con quali strumenti, con quali soglie di escalation e con quali meccanismi di override/stop.
- **Obblighi del deployer (Articolo 26)**: chiarire le responsabilità operative dei clienti/utilizzatori (configurazione corretta, monitoraggio, formazione degli operatori, gestione incidenti, uso conforme alle istruzioni).
- **Framework di responsabilità condivisa**: formalizzare “chi fa cosa” lungo la filiera (provider, integratore, deployer), includendo confini di responsabilità, deliverable di conformità e condizioni d’uso.

---

### Messaggio chiave

**Sovranità dei dati** e **conformità all’AI Act** sono complementari ma diverse:  
- una riguarda soprattutto **controllo e localizzazione dei dati**;  
- l’altra riguarda **governance, sicurezza, trasparenza, tracciabilità e gestione del rischio del sistema di IA**.

Per questo, un’architettura “sovrana” può essere un’ottima base, ma la conformità richiede anche processi, evidenze e controlli specifici di **risk management**.
</div>

<div data-language-section="it" markdown="1" hidden>
## AI Sovrana ≠ AI Conforme

La **data residency** risponde alla domanda: **dove** risiedono i dati e **dove** vengono trattati.  
L’**AI Act UE** risponde alla domanda: **come** un sistema di IA deve essere progettato, gestito e controllato per ridurre i rischi lungo il suo ciclo di vita.

In altre parole: **la sovranità dei dati è una scelta infrastrutturale**; **la conformità all’AI Act è un’architettura di governance e gestione del rischio**.  
La prima **non** implica automaticamente la seconda.

---

### Cosa hai già realizzato: Sovranità dei Dati

Queste misure rafforzano controllo, sicurezza e tutela dei dati (e sono spesso prerequisiti utili), ma da sole non coprono tutti gli obblighi di conformità dell’AI Act:

- **Data residency**: controllo su dove i dati vengono archiviati e trattati, in linea con requisiti di localizzazione e policy interne.
- **Infrastruttura self-hosted**: gestione diretta dell’ambiente di esecuzione e delle configurazioni operative.
- **Conformità GDPR**: principi di protezione dei dati “by design” e “by default”, basi giuridiche, minimizzazione e misure tecniche/organizzative adeguate.
- **Cifratura e controllo accessi**: protezione dei dati a riposo e in transito, gestione delle credenziali e tracciamento degli accessi.

---

### Cosa manca ancora: Conformità all’AI Act (valutazione e gestione dei rischi)

La conformità all’AI Act richiede, oltre all’infrastruttura, un sistema strutturato di **valutazione, mitigazione e monitoraggio** dei rischi, con responsabilità chiare tra chi sviluppa/fornisce e chi utilizza/deploya.

- **Classificazione (Articolo 6)**: determinare se il sistema rientra in una categoria **ad alto rischio** e documentare il razionale della classificazione, includendo l’uso previsto e i contesti di impiego.
- **Gestione del rischio (Articolo 9)**: adottare un processo **continuo** e **documentato** per identificare pericoli, stimare probabilità/gravità, definire controlli e verificare l’efficacia delle mitigazioni, anche dopo il rilascio.
- **Logging automatico (Articolo 12)**: predisporre log **a livello di sistema** utili per tracciabilità, audit e incident handling (non solo metriche di performance), con attenzione a minimizzazione e protezione dei dati.
- **Supervisione umana (Articolo 14)**: definire **ruoli, competenze e procedure** per l’intervento umano: quando è richiesto, con quali strumenti, con quali soglie di escalation e con quali meccanismi di override/stop.
- **Obblighi del deployer (Articolo 26)**: chiarire le responsabilità operative dei clienti/utilizzatori (configurazione corretta, monitoraggio, formazione degli operatori, gestione incidenti, uso conforme alle istruzioni).
- **Framework di responsabilità condivisa**: formalizzare “chi fa cosa” lungo la filiera (provider, integratore, deployer), includendo confini di responsabilità, deliverable di conformità e condizioni d’uso.

---

### Messaggio chiave

**Sovranità dei dati** e **conformità all’AI Act** sono complementari ma diverse:  
- una riguarda soprattutto **controllo e localizzazione dei dati**;  
- l’altra riguarda **governance, sicurezza, trasparenza, tracciabilità e gestione del rischio del sistema di IA**.

Per questo, un’architettura “sovrana” può essere un’ottima base, ma la conformità richiede anche processi, evidenze e controlli specifici di **risk management**.

</div>
