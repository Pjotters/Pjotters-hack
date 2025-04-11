# AI Security Scanner

Een AI-aangedreven beveiligingsscanner voor websites met gratis en betaalde functies.

## Features

### Gratis Tier
- Basis beveiligingsscan
- Automatische beveiligingsaanbevelingen
- Beperkt aantal scans per maand

### Betaalde Tier
- Uitgebreide beveiligingsscans
- Regelmatige automatische scans
- Gedetailleerde rapporten in begrijpelijke taal
- Onbeperkt aantal scans
- Email notificaties

## Installatie

1. Clone de repository
2. Installeer dependencies:
```bash
pip install -r requirements.txt
```

3. Maak een `.env` bestand aan met de benodigde configuratie
4. Start de applicatie:
```bash
uvicorn main:app --reload
```

## Beveiliging
Deze applicatie vereist authenticatie en heeft ingebouwde bescherming tegen misbruik:
- API rate limiting
- User verification
- Role-based access control
- Request validation
- Audit logging
