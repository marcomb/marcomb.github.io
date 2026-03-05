---
layout: default
title: Sovereign AI and AI Act Risks
permalink: /aiarisks.html
---

{% include language-switcher.html %}

<div data-language-section="en" markdown="1">
## Sovereign AI != Compliant AI

Data residency solves where data lives. The EU AI Act regulates what the system does with it.

### What You Built: Data Sovereignty

* **Data residency**: control where data is stored and processed.
* **Self-hosted infrastructure**: deploy on your own servers.
* **GDPR compliance**: data protection by design and by default.
* **Encryption and access control**: protect data at rest and in transit.

### What You Still Need: AI Act Compliance

* **Article 6 classification (system use case)**: is the deployed AI system **high-risk** given its intended purpose and deployment context (Annex III)?
* **GPAI model due diligence (Article 51/55 implications)**: if the solution relies on a frontier GPAI model, require **model identification (name/version)**, **model-change notifications**, and **evidence of upstream risk controls** from the supplier; treat this as a procurement and governance requirement, separate from Annex III classification.
* **Article 9 risk management**: documented, continuous, auditable risk assessment and mitigation across the lifecycle.
* **Article 12 automatic logging**: system-level logging for traceability and incident investigation, not only platform metrics.
* **Article 14 human oversight**: who intervenes, how, and when, including escalation paths and stop/override mechanisms.
* **Article 26 deployer obligations**: your customers' operational responsibilities (configuration, monitoring, training, incident handling).
* **Shared responsibility framework**: where your obligations end and where theirs begin, contractually and operationally.

### Key Point

Data sovereignty is an infrastructure decision. AI Act compliance is a risk-and-governance architecture. One does not automatically deliver the other.

<div data-language-section="it" markdown="1" hidden>
## AI Sovrana != AI Conforme

La data residency risolve dove risiedono i dati.  
L’AI Act UE regola cosa il sistema fa con essi.

### Cosa Hai Realizzato: Sovranità dei Dati

* **Data residency**: controllo su dove i dati vengono archiviati e trattati.
* **Infrastruttura self-hosted**: distribuzione sui tuoi server.
* **Conformità GDPR**: protezione dei dati by design e by default.
* **Cifratura e controllo accessi**: protezione dei dati a riposo e in transito.

### Cosa Serve Ancora: Conformità all’AI Act

* **Classificazione Articolo 6 (caso d’uso del sistema)**: il sistema AI deployato è **ad alto rischio** in base a finalità prevista e contesto di impiego (Allegato III)?
* **Due diligence sul modello GPAI (implicazioni Art. 51/55)**: se la soluzione si basa su un modello GPAI “frontier”, richiedere al fornitore **identificazione del modello (nome/versione)**, **notifica delle modifiche al modello**, ed **evidenze dei controlli di rischio a monte**; trattarlo come requisito di procurement e governance, distinto dalla classificazione Annex III.
* **Gestione del rischio Articolo 9**: valutazione e mitigazione dei rischi documentate, continue e verificabili lungo il ciclo di vita.
* **Logging automatico Articolo 12**: logging a livello di sistema per tracciabilità e gestione incidenti, non solo metriche di piattaforma.
* **Supervisione umana Articolo 14**: chi interviene, come e quando, incluse escalation e meccanismi di stop/override.
* **Obblighi del deployer Articolo 26**: responsabilità operative dei clienti (configurazione, monitoraggio, formazione, gestione incidenti).
* **Framework di responsabilità condivisa**: dove finiscono i tuoi obblighi e iniziano i loro, a livello contrattuale e operativo.

### Punto Chiave

La sovranità dei dati è una scelta infrastrutturale.  
La conformità all’AI Act è un’architettura di gestione del rischio e governance.  
Una non implica automaticamente l’altra.


</div>
