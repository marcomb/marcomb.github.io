---
layout: default
title: AI Act Compliance
permalink: /aiacompliancy.html
---

{% include language-switcher.html %}

<div data-language-section="en" markdown="1">

For an **Italian Public Administration (PA)**, the obligations are **legal, not optional**. 

In practice:

### 1. Legal framework that applies

An Italian PA must comply with:

* **GDPR**
* **Codice dell’Amministrazione Digitale (CAD)**
* **Linee guida AgID su AI e cloud**
* **AI Act (now adopted at EU level)**
* **Public procurement code (Codice degli Appalti)**

This means **no PA can freely use public AI tools like ChatGPT SaaS for institutional data**.

---

### 2. What an Italian PA is allowed to do

An Italian PA may use AI only if **all** of the following are true:

* ✅ **Data is hosted in EU or Italy**
* ✅ **No training on PA data**
* ✅ **Contractual guarantees on confidentiality**
* ✅ **DPIA (Data Protection Impact Assessment) completed**
* ✅ **DPO approval**
* ✅ **Cybersecurity validation (ACN / ISO 27001)**
* ✅ **Procurement via public tender or framework agreement**

Without these, use is **illegal**.

---

### 3. What an Italian PA typically does in practice

There are three compliant paths:

1. **Use an EU-approved GPAI via a controlled environment**
   * Example: Microsoft + OpenAI via EU cloud with contractual safeguards
2. **Use an open-source LLM deployed internally**
   * Full control, higher cost, maximum compliance
3. **Sector-specific AI platforms certified for PA use**

---

### 4. Key difference vs. EU Institutions

* **EU Institutions → Approval by EDPS**
* **Italian PA → Approval by:**
  * **DPO**
  * **AgID**
  * **ACN (cybersecurity)**
  * **Public procurement authority**

---

### Bottom line (no euphemisms)

> An Italian Public Administration **cannot legally use any AI system** unless it is contractually governed, EU-hosted, DPIA-approved, cybersecurity-certified, and procured under public law.  
> “Trying tools informally” is a **regulatory violation**.

Below is the **exact meaning and operational structure** of  
**“EU-approved GPAI via a controlled environment”** for Public Administrations.

---

## 1. What “EU-approved GPAI” actually means

It does **not** mean:

* “Approved by the EU in general”
* “Certified by Brussels”
* “Compliant by design”

It means:

> A **commercial GPAI (e.g., GPT-4/4o, Claude, Gemini)** that is **contractually constrained, technically isolated, and legally validated** for use by public bodies.

Approval is obtained through:

* ✅ **Formal contract (DPA + SCCs)**
* ✅ **GDPR Art. 28 processor qualification**
* ✅ **No data reuse for model training**
* ✅ **EU-only data residency**
* ✅ **Security certification**
* ✅ **DPIA + DPO sign-off**

Without those: **not approved**.

---

## 2. What “controlled environment” technically means

A controlled environment is **not a website login**. It is:

### A. Infrastructure Control

One of the following:

* **Dedicated EU cloud tenant** (Azure EU, AWS Europe Sovereign, Google EU)
* **National sovereign cloud** (e.g., Polo Strategico Nazionale – Italy)
* **On-premise deployment (rare for closed models)**

Requirements:

* ✅ Physical data location in EU
* ✅ EU legal jurisdiction only
* ✅ No third-country admin access

---

### B. Model Access Control

The PA **does not access the public SaaS**. It uses:

* Private API endpoints  
* Network-isolated access  
* Role-based access control (RBAC)  
* Logging + audit trails  

This prevents:

* Shadow usage  
* Prompt leakage  
* Cross-tenant contamination  

---

### C. Data Processing Guarantees

Contractually enforced:

* ✅ Prompts and outputs **not stored for training**
* ✅ Data retention limited and configurable
* ✅ Encryption at rest and in transit
* ✅ Incident notification obligations

---

## 3. Real examples of this model

These are **typical implementations**, not endorsements:

* **Microsoft Azure OpenAI (EU tenant + DPA + no-training clause)**
* **Google Vertex AI (EU regions + sovereign configuration)**
* **EU-hosted Claude via enterprise contracts**
* **National AI platforms integrated into PSN (Italy)**

What makes them “approved” is:

> **The legal + technical perimeter**, not the brand.

---

## 4. Additional constraint introduced by the EU AI Office (AI Act)

Under the **AI Act**, the **EU AI Office** will publish and maintain a:

> **List of GPAI models with “systemic risk” (systemic high-risk models)**

These are frontier models exceeding capability/compute thresholds and subject to **extra regulatory obligations** at provider level (robustness, evaluations, incident reporting, cybersecurity, transparency).

### Impact on an Italian PA:

Before adopting any GPAI, the PA must now verify:

1. ✅ Whether the model appears on the **EU AI Office systemic-risk list**
2. ✅ If yes, that the **provider is fully compliant with the AI Act GPAI obligations**
3. ✅ That this status is explicitly reflected in:
   * DPIA
   * Security assessment
   * Contractual documentation

If the provider is **not compliant**, the model becomes **legally unsafe to adopt**, even if hosted in the EU.

This adds a **mandatory model-level regulatory checkpoint** on top of:
- GDPR
- Cybersecurity
- Procurement
- Sovereign cloud controls

---

## 5. Mandatory governance steps for an Italian PA

To activate such an environment, the PA must do **all** of the following:

1. **Define use case and data classification**
2. **Perform DPIA**
3. **Verify AI Act GPAI / systemic-risk status via EU AI Office**
4. **Obtain DPO approval**
5. **Cybersecurity risk assessment (ACN / ISO 27001 alignment)**
6. **Procurement via public tender or framework**
7. **Contract with:**
   * Data Processing Agreement (DPA)
   * No-training clause
   * EU-only processing
   * Liability and breach clauses
8. **Operational monitoring + logging**

Skipping even one step = **non-compliant**.

---

## 6. What this enables (and what it does not)

### ✅ Permitted:

* Document drafting  
* Internal decision support  
* Citizen service automation  
* Code generation  
* Data summarization  

### ❌ Still forbidden:

* Feeding classified data without clearance  
* Automated legal decisions without human validation  
* Biometric or high-risk profiling without AI Act safeguards  
* Using public ChatGPT UI with institutional data  

---

## Bottom line

> “EU-approved GPAI in a controlled environment” means **using powerful commercial AI under full legal, infrastructural, cybersecurity, and AI-Act regulatory sovereignty**.  
> It is **not innovation freedom**. It is **regulated industrial deployment**.


</div>

<div data-language-section="it" markdown="1" hidden>
Per una **Pubblica Amministrazione (PA) italiana**, gli obblighi sono **legali, non opzionali**.

In pratica:

### 1. Quadro normativo applicabile

Una PA italiana deve rispettare:

* **GDPR**
* **Codice dell’Amministrazione Digitale (CAD)**
* **Linee guida AgID su AI e cloud**
* **AI Act (ora adottato a livello UE)**
* **Codice dei contratti pubblici (Codice degli Appalti)**

Questo significa che **nessuna PA può utilizzare liberamente strumenti di AI pubblici come ChatGPT in modalità SaaS per dati istituzionali**.

---

### 2. Cosa è autorizzata a fare una PA italiana

Una PA può utilizzare sistemi di AI solo se **tutte** le seguenti condizioni sono soddisfatte:

* ✅ **Dati ospitati in UE o in Italia**
* ✅ **Nessun addestramento sui dati della PA**
* ✅ **Garanzie contrattuali di riservatezza**
* ✅ **DPIA (Valutazione d’Impatto sulla Protezione dei Dati) completata**
* ✅ **Approvazione del DPO**
* ✅ **Validazione della cybersicurezza (ACN / ISO 27001)**
* ✅ **Acquisizione tramite gara pubblica o accordo quadro**

In assenza di questi requisiti, l’uso è **illecito**.

---

### 3. Cosa fa tipicamente una PA italiana nella pratica

Esistono tre percorsi conformi:

1. **Utilizzare un GPAI approvato in ambito UE tramite un ambiente controllato**
   * Esempio: Microsoft + OpenAI su cloud UE con garanzie contrattuali
2. **Utilizzare un LLM open source distribuito internamente**
   * Controllo totale, costi più alti, massima conformità
3. **Piattaforme AI verticali certificate per l’uso nella PA**

---

### 4. Differenza chiave rispetto alle istituzioni UE

* **Istituzioni UE → Approvazione da parte dell’EDPS**
* **PA italiana → Approvazione da parte di:**
  * **DPO**
  * **AgID**
  * **ACN (cybersicurezza)**
  * **Autorità per gli appalti pubblici**

---

### Sintesi (senza eufemismi)

> Una Pubblica Amministrazione **non può legalmente utilizzare alcun sistema di AI** se non è contrattualizzato, ospitato nell’UE, approvato tramite DPIA, certificato in ambito cybersicurezza e acquisito secondo le norme sul procurement pubblico.  
> “Provare strumenti in modo informale” è una **violazione normativa**.

Di seguito il **significato esatto e la struttura operativa** di  
**“GPAI approvato in UE tramite un ambiente controllato”** per le Pubbliche Amministrazioni.

---

## 1. Cosa significa realmente “GPAI approvato in UE”

**Non** significa:

* “Approvato genericamente dall’UE”
* “Certificato da Bruxelles”
* “Conforme per definizione”

Significa:

> Un **GPAI commerciale (es. GPT-4/4o, Claude, Gemini)** che è **vincolato contrattualmente, isolato tecnicamente e validato legalmente** per l’uso da parte di enti pubblici.

L’approvazione si basa su:

* ✅ **Contratto formale (DPA + SCC)**
* ✅ **Qualifica di responsabile del trattamento ex art. 28 GDPR**
* ✅ **Nessun riutilizzo dei dati per l’addestramento**
* ✅ **Residenza dei dati esclusivamente in UE**
* ✅ **Certificazioni di sicurezza**
* ✅ **DPIA + validazione del DPO**

In assenza di questi requisiti: **non è approvato**.

---

## 2. Cosa significa tecnicamente “ambiente controllato”

Un ambiente controllato **non è un semplice login su un sito web**. È:

### A. Controllo dell’infrastruttura

Una delle seguenti opzioni:

* **Tenant cloud dedicato in UE** (Azure EU, AWS Europe Sovereign, Google EU)
* **Cloud sovrano nazionale** (es. Polo Strategico Nazionale – Italia)
* **Distribuzione on-premise (rara per modelli proprietari)**

Requisiti:

* ✅ Localizzazione fisica dei dati in UE
* ✅ Giurisdizione legale esclusivamente UE
* ✅ Nessun accesso amministrativo da Paesi terzi

---

### B. Controllo dell’accesso al modello

La PA **non utilizza il SaaS pubblico**. Utilizza:

* Endpoint API privati  
* Accesso isolato a livello di rete  
* Controllo degli accessi basato sui ruoli (RBAC)  
* Logging e audit trail  

Questo evita:

* Uso “ombra”  
* Fuga di prompt  
* Contaminazione tra tenant  

---

### C. Garanzie sul trattamento dei dati

Vincoli contrattuali:

* ✅ Prompt e output **non conservati per l’addestramento**
* ✅ Conservazione dei dati limitata e configurabile
* ✅ Cifratura a riposo e in transito
* ✅ Obblighi di notifica in caso di incidente

---

## 3. Esempi reali di questo modello

Implementazioni tipiche (non endorsement):

* **Microsoft Azure OpenAI (tenant UE + DPA + clausola no-training)**
* **Google Vertex AI (regioni UE + configurazione sovrana)**
* **Claude ospitato in UE tramite contratti enterprise**
* **Piattaforme AI nazionali integrate nel PSN (Italia)**

Ciò che le rende “approvate” è:

> **Il perimetro legale e tecnico**, non il marchio.

---

## 4. Vincolo aggiuntivo introdotto dall’EU AI Office (AI Act)

L’**EU AI Office** pubblicherà e manterrà una:

> **Lista dei modelli GPAI con “rischio sistemico” (systemic high-risk models)**

Si tratta di modelli frontier che superano soglie di capacità/calcolo e sono soggetti a **obblighi aggiuntivi** per i fornitori (robustezza, valutazioni, incident reporting, cybersecurity, trasparenza).

### Impatto per una PA italiana:

Prima dell’adozione di un GPAI, la PA deve verificare:

1. ✅ Se il modello compare nella **lista dei modelli a rischio sistemico** dell’EU AI Office  
2. ✅ Se sì, che il **fornitore sia pienamente conforme** agli obblighi aggiuntivi dell’AI Act  
3. ✅ Che questo stato sia riflesso in:
   * DPIA
   * Analisi di sicurezza
   * Documentazione contrattuale

Se il fornitore **non è conforme**, il modello diventa **non sicuro legalmente**, anche se ospitato in UE.

Questo introduce un **checkpoint regolatorio obbligatorio sul modello**, aggiuntivo rispetto a:

* GDPR  
* Cybersicurezza  
* Procurement  
* Controlli sul cloud sovrano  

---

## 5. Passaggi di governance obbligatori per una PA italiana

Per attivare un ambiente controllato, la PA deve completare **tutti** i seguenti passaggi:

1. **Definizione del caso d’uso e classificazione dei dati**
2. **Esecuzione della DPIA**
3. **Verifica della conformità AI Act / rischio sistemico tramite EU AI Office**
4. **Approvazione del DPO**
5. **Valutazione del rischio di cybersicurezza (ACN / ISO 27001)**
6. **Acquisizione tramite gara o accordo quadro**
7. **Stipula del contratto con:**
   * DPA (Data Processing Agreement)
   * Clausola di non addestramento
   * Trattamento esclusivamente in UE
   * Clausole su responsabilità e data breach
8. **Monitoraggio operativo e logging**

Saltare uno solo di questi passaggi = **non conformità**.

---

## 6. Cosa permette (e cosa no)

### ✅ Consentito:

* Redazione documentale  
* Supporto decisionale interno  
* Automazione dei servizi al cittadino  
* Generazione di codice  
* Sintesi di dati  

### ❌ Vietato:

* Inserimento di dati classificati senza autorizzazione  
* Decisioni legali automatizzate senza supervisione umana  
* Profilazione biometrica o ad alto rischio senza le garanzie dell’AI Act  
* Uso dell’interfaccia pubblica di ChatGPT con dati istituzionali  

---

## Conclusione

> “GPAI approvato in UE in un ambiente controllato” significa **utilizzare AI commerciale sotto piena sovranità legale, infrastrutturale, di cybersicurezza e nel rispetto dell’AI Act**.  
> **Non è libertà di innovazione.** È **adozione industriale regolata**.


</div>
