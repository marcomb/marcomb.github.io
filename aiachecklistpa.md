---
layout: default
title: AI Act Compliance Checklist
---

<div data-language-section="en" markdown="1">

# AI Act Compliance Checklist — Italian Public Administration
*Consultancy engagement — operational task list*

> **Rule:** all phases must be completed. Skipping any single item = non-compliant deployment.

---

## PHASE 1 — Use Case Definition

- [ ] Define the intended AI use case
- [ ] Classify the data involved (public / sensitive / classified)
- [ ] Determine if the use case falls under AI Act high-risk categories
- [ ] Identify which compliant deployment path applies:
  - EU-approved GPAI via controlled environment
  - Open-source LLM deployed internally
  - Sector-specific AI platform certified for PA use

---

## PHASE 2 — Model Assessment (AI Act)

- [ ] Identify the candidate AI model or system
- [ ] Verify whether the model appears on the **EU AI Office systemic-risk list**
- [ ] If systemic risk applies: confirm provider compliance with AI Act GPAI obligations (robustness, evaluations, incident reporting, cybersecurity, transparency)
- [ ] Document model status explicitly in: DPIA, security assessment, and contract

---

## PHASE 3 — Legal & Privacy

- [ ] Conduct **DPIA** (Data Protection Impact Assessment)
- [ ] Obtain **DPO** formal approval
- [ ] Verify **GDPR Art. 28** processor qualification of the provider
- [ ] Confirm no training on PA data (contractual clause)
- [ ] Confirm EU-only data residency
- [ ] Include **Standard Contractual Clauses (SCCs)** in the contract
- [ ] Verify **AgID** guidelines alignment (AI and cloud)

---

## PHASE 4 — Infrastructure Control

- [ ] Select compliant hosting — one of:
  - Dedicated EU cloud tenant (Azure EU / AWS Europe Sovereign / Google EU)
  - National sovereign cloud (Polo Strategico Nazionale – Italy)
  - On-premise deployment
- [ ] Confirm physical data location in EU
- [ ] Confirm EU legal jurisdiction only
- [ ] Confirm no third-country admin access
- [ ] Verify access via private API endpoints (not public SaaS UI)
- [ ] Implement **RBAC** (role-based access control)
- [ ] Activate logging and audit trails

---

## PHASE 5 — Cybersecurity

- [ ] Conduct cybersecurity risk assessment (**ACN** framework / **ISO 27001** alignment)
- [ ] Verify encryption at rest and in transit
- [ ] Define and document incident notification procedures
- [ ] Obtain **ACN** validation (or equivalent cybersecurity certification)

---

## PHASE 6 — Procurement

- [ ] Verify procurement route: public tender or framework agreement (e.g., Consip/MePA)
- [ ] Exclude any direct or informal adoption of commercial SaaS tools
- [ ] Confirm involvement of the **public procurement authority**

---

## PHASE 7 — Contract

- [ ] Sign **Data Processing Agreement (DPA)**
- [ ] Include **no-training clause** (prompts and outputs not used for model training)
- [ ] Include **EU-only processing** clause
- [ ] Define liability and breach notification clauses
- [ ] Confirm configurable and limited data retention
- [ ] Confirm encryption obligations are contractually enforced

---

## PHASE 8 — Governance & Approvals

- [ ] Obtain **DPO** sign-off
- [ ] Obtain **AgID** alignment confirmation
- [ ] Obtain **ACN** cybersecurity validation
- [ ] Confirm procurement authority sign-off

---

## PHASE 9 — Operations

- [ ] Activate operational monitoring and logging
- [ ] Define mandatory human oversight for all decision-support outputs
- [ ] Document and enforce forbidden uses (see below)

---

## Reference: Permitted vs. Forbidden Uses

### ✅ Permitted
- Document drafting
- Internal decision support
- Citizen service automation
- Code generation
- Data summarization

### ❌ Forbidden
- Feeding classified data without clearance
- Automated legal decisions without human validation
- Biometric or high-risk profiling without AI Act safeguards
- Using public ChatGPT UI (or equivalent SaaS) with institutional data

---

> "EU-approved GPAI in a controlled environment" is not innovation freedom.  
> It is **regulated industrial deployment**.

</div>

<div data-language-section="it" markdown="1" hidden>

# Checklist di Conformità AI Act — Pubblica Amministrazione Italiana
*Incarico di consulenza — lista operativa delle attività*

> **Regola:** tutte le fasi devono essere completate. Saltare anche un solo punto = sistema non conforme.

---

## FASE 1 — Definizione del caso d'uso

- [ ] Definire il caso d'uso previsto per il sistema AI
- [ ] Classificare i dati coinvolti (pubblici / sensibili / classificati)
- [ ] Verificare se il caso d'uso rientra nelle categorie ad alto rischio dell'AI Act
- [ ] Identificare il percorso di adozione conforme applicabile:
  - GPAI approvato in UE tramite ambiente controllato
  - LLM open source distribuito internamente
  - Piattaforma AI verticale certificata per la PA

---

## FASE 2 — Valutazione del modello (AI Act)

- [ ] Identificare il modello o sistema AI candidato
- [ ] Verificare se il modello compare nella **lista dei modelli a rischio sistemico** dell'EU AI Office
- [ ] In caso di rischio sistemico: confermare la conformità del fornitore agli obblighi AI Act per GPAI (robustezza, valutazioni, incident reporting, cybersicurezza, trasparenza)
- [ ] Documentare lo stato del modello esplicitamente in: DPIA, analisi di sicurezza e contratto

---

## FASE 3 — Legale e privacy

- [ ] Eseguire la **DPIA** (Valutazione d'Impatto sulla Protezione dei Dati)
- [ ] Ottenere l'approvazione formale del **DPO**
- [ ] Verificare la qualifica del fornitore come responsabile del trattamento ex **art. 28 GDPR**
- [ ] Confermare l'assenza di addestramento sui dati della PA (clausola contrattuale)
- [ ] Confermare la residenza dei dati esclusivamente in UE
- [ ] Includere le **Clausole Contrattuali Standard (SCC)** nel contratto
- [ ] Verificare l'allineamento alle **linee guida AgID** su AI e cloud

---

## FASE 4 — Controllo dell'infrastruttura

- [ ] Selezionare l'hosting conforme — una delle seguenti opzioni:
  - Tenant cloud dedicato in UE (Azure EU / AWS Europe Sovereign / Google EU)
  - Cloud sovrano nazionale (Polo Strategico Nazionale – Italia)
  - Distribuzione on-premise
- [ ] Confermare la localizzazione fisica dei dati in UE
- [ ] Confermare la giurisdizione legale esclusivamente UE
- [ ] Confermare l'assenza di accesso amministrativo da Paesi terzi
- [ ] Verificare l'accesso tramite endpoint API privati (non SaaS pubblico)
- [ ] Implementare il **controllo degli accessi basato sui ruoli (RBAC)**
- [ ] Attivare logging e audit trail

---

## FASE 5 — Cybersicurezza

- [ ] Eseguire la valutazione del rischio di cybersicurezza (framework **ACN** / allineamento **ISO 27001**)
- [ ] Verificare la cifratura a riposo e in transito
- [ ] Definire e documentare le procedure di notifica degli incidenti
- [ ] Ottenere la validazione **ACN** (o certificazione di sicurezza equivalente)

---

## FASE 6 — Procurement

- [ ] Verificare il percorso di acquisizione: gara pubblica o accordo quadro (es. Consip/MePA)
- [ ] Escludere qualsiasi adozione diretta o informale di strumenti SaaS commerciali
- [ ] Confermare il coinvolgimento dell'**autorità competente per gli appalti pubblici**

---

## FASE 7 — Contratto

- [ ] Stipulare il **Data Processing Agreement (DPA)**
- [ ] Includere la **clausola di non addestramento** (prompt e output non utilizzati per il training del modello)
- [ ] Includere la clausola di **trattamento esclusivamente in UE**
- [ ] Definire le clausole su responsabilità e notifica di data breach
- [ ] Confermare la conservazione dei dati limitata e configurabile
- [ ] Confermare gli obblighi di cifratura vincolati contrattualmente

---

## FASE 8 — Governance e approvazioni

- [ ] Ottenere il sign-off del **DPO**
- [ ] Ottenere la conferma di allineamento da parte di **AgID**
- [ ] Ottenere la validazione di cybersicurezza da parte di **ACN**
- [ ] Confermare il sign-off dell'autorità competente per il procurement

---

## FASE 9 — Operatività

- [ ] Attivare il monitoraggio operativo e il logging
- [ ] Definire la supervisione umana obbligatoria per tutti gli output di supporto decisionale
- [ ] Documentare e applicare i divieti d'uso (vedere di seguito)

---

## Riferimento: Usi consentiti e vietati

### ✅ Consentito
- Redazione documentale
- Supporto decisionale interno
- Automazione dei servizi al cittadino
- Generazione di codice
- Sintesi di dati

### ❌ Vietato
- Inserimento di dati classificati senza autorizzazione
- Decisioni legali automatizzate senza supervisione umana
- Profilazione biometrica o ad alto rischio senza le garanzie dell'AI Act
- Uso dell'interfaccia pubblica di ChatGPT (o SaaS equivalente) con dati istituzionali

---

> "GPAI approvato in UE in un ambiente controllato" non è libertà di innovazione.  
> È **adozione industriale regolata**.

</div>
