import { Measure } from './measure';

// CyberComp Basics
export const MEASURES: Measure[] = [
  {
    "name": "Automatisches/Regelmässiges Update und Patches für Firmware, Betriebssystem und Anwendungen",
    "description": "Patch applications e.g. Flash, web browsers, Microsoft Office, Java and PDF viewers. Patch/mitigate computers with extreme risk vulnerabilities within 48 hours. Use the latest version of applications. Why: Security vulnerabilities in applications can be used to execute malicious code on systems. Patch operating systems. Patch/mitigate computers (including network devices) with ‘extreme risk’ vulnerabilities within 48 hours. Use the latest operating system version. Don't use unsupported versions. Why: Security vulnerabilities in operating systems can be used to further the compromise of systems.",
    "modeOfAttack":["Malware", "Social Engineering", "Misuse"]
  },
  {
    "name": "Regelmässige Datensicherung",
    "description": "Daily backups of important new/changed data, software and configuration settings, stored disconnected, retained for at least three months. Test restoration initially, annually and when IT infrastructure changes. Why: To ensure information can be accessed again following a cyber security incident (e.g. after a successful ransomware incident).",
    "modeOfAttack":["Malware", "Compromise", "Social Engineering", "Misuse", "Theft"]
  }
];
