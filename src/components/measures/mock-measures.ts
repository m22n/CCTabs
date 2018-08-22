import { Measure } from './measure';
// Essential Eight
export const MEASURES: Measure[] = [
    {
        "name": "Application whitelisting",
        "description": "Application whitelisting of approved/trusted programs to prevent execution of unapproved/malicious programs including .exe, DLL, scripts (e.g. Windows Script Host, PowerShell and HTA) and installers.",
        "isMalware": true,
        "isCompromise": false,
        "isSocialEngineering": false,
        "isMisuse": false,
        "isTheft": false
      },
      {
        "name": "Patch applications",
        "description": "Patch applications e.g. Flash, web browsers, Microsoft Office, Java and PDF viewers. Patch/mitigate computers with ‘extreme risk’ vulnerabilities within 48 hours. Use the latest version of applications.",
        "isMalware": true,
        "isCompromise": true,
        "isSocialEngineering": false,
        "isMisuse": false,
        "isTheft": false
      },
      {
        "name": "Configure Microsoft Office macro settings",
        "description": "Configure Microsoft Office macro settings to block macros from the Internet, and only allow vetted macros either in ‘trusted locations’ with limited write access or digitally signed with a trusted certificate.",
        "isMalware": true,
        "isCompromise": false,
        "isSocialEngineering": false,
        "isMisuse": false,
        "isTheft": false
      },
      {
        "name": "User application hardening",
        "description": "Configure web browsers to block Flash (ideally uninstall it), ads and Java on the Internet. Disable unneeded features in Microsoft Office (e.g. OLE), web browsers and PDF viewers.",
        "isMalware": true,
        "isCompromise": false,
        "isSocialEngineering": false,
        "isMisuse": false,
        "isTheft": false
      },
      {
        "name": "Restrict administrative privileges",
        "description": "Restrict administrative privileges to operating systems and applications based on user duties. Regularly revalidate the need for privileges. Don't use privileged accounts for reading email and web browsing.",
        "isMalware": false,
        "isCompromise": false,
        "isSocialEngineering": false,
        "isMisuse": true,
        "isTheft": false
      },
      {
        "name": "Patch operating systems",
        "description": "Patch/mitigate computers (including network devices) with ‘extreme risk’ vulnerabilities within 48 hours. Use the latest operating system version. Don't use unsupported versions.",
        "isMalware": true,
        "isCompromise": true,
        "isSocialEngineering": false,
        "isMisuse": false,
        "isTheft": false
      },
      {
        "name": "Multi-factor authentication",
        "description": "Multi-factor authentication including for VPNs, RDP, SSH and other remote access, and for all users when they perform a privileged action or access an important (sensitive/high-availability) data repository.",
        "isMalware": false,
        "isCompromise": true,
        "isSocialEngineering": true,
        "isMisuse": true,
        "isTheft": false
      },
      {
        "name": "Daily backups",
        "description": "Daily backups of important new/changed data, software and configuration settings, stored disconnected, retained for at least three months. Test restoration initially, annually and when IT infrastructure changes.",
        "isMalware": false,
        "isCompromise": false,
        "isSocialEngineering": false,
        "isMisuse": false,
        "isTheft": false
      }
];


/* CyberComp Basics
export const MEASURES: Measure[] = [

  {
    "name": "Restrict administrative privileges",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": true,
    "isMisuse": true,
    "isTheft": true
  },
  {
    "name": "Regelmässige Datensicherung (Server)",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": true,
    "isTheft": false
  },
  {
    "name": "Updates und Patches für Firmware, Betriebssystem und Anwendungen (Server)",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  },
  {
    "name": "Patch applications",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  },
  {
    "name": "Zeitnahes Einspielen sicherheitsrelevanter Patches und Updates (für Webseiten)",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  },
  {
    "name": "Konfiguration von Autoupdate-Mechanismen",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  },
  {
    "name": "Schutz vor Schadsoftware",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  },
  {
    "name": "Einschränken von Aktiven Inhalten (Office)",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  },
  {
    "name": "Sichere Installation und Konfiguration von Standardsoftware",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  },
  {
    "name": "Festlegung der Verfahrensweise für die Datensicherung",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": true,
    "isTheft": true
  },
  {
    "name": "Regelmässige Aktualisierung (allgemeines IoT-Gerät)",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  },
  {
    "name": "Regelmässige Aktualisierung (Drucker/Kopierer/Multi-Funktionsgeräte)",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  },
  {
    "name": "Konzept für das Patch- und Änderungsmanagement",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  },
  {
    "name": "Regelmässige Datensicherung (allgemeiner Client-Rechner)",
    "description": "",
    "isMalware": true,
    "isCompromise": false,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": true
  },
  {
    "name": "Restriktive Rechtevergabe",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": true,
    "isMisuse": true,
    "isTheft": true
  },
  {
    "name": "Sperrung und Änderung von Zugangsdaten und kryptografischen Schlüsseln",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": true
  },
  {
    "name": "Einschränkung des Netzzugriffs (allgemeines IoT-Gerät)",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": true,
    "isTheft": false
  },
  {
    "name": "Deaktivierung nicht benötigter Dienste und Kennungen (Server)",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  },
  {
    "name": "Isolierung der betroffenen Netzabschnitte",
    "description": "",
    "isMalware": true,
    "isCompromise": false,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  },
  {
    "name": "Einweisung des Personals in den sicheren Umgang mit IT",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": true,
    "isMisuse": true,
    "isTheft": true
  },
  {
    "name": "Sicherer Umgang mit mobilen Datenträgern",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": true,
    "isMisuse": true,
    "isTheft": true
  },
  {
    "name": "Multi-factor authentication",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": true,
    "isMisuse": true,
    "isTheft": true
  },
  {
    "name": "Rollentrennung",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": true,
    "isMisuse": true,
    "isTheft": true
  },
  {
    "name": "Festlegung von Sicherheitsmassnahmen",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": true,
    "isMisuse": true,
    "isTheft": true
  },
  {
    "name": "Sensibilisierung der Mitarbeiter zum sicheren Umgang mit mobilen Datenträgern",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": true,
    "isMisuse": true,
    "isTheft": true
  },
  {
    "name": "Protokollierung (Logging + Auswertung auf Server)",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": true,
    "isMisuse": true,
    "isTheft": false
  },
  {
    "name": "Sichere Grundkonfiguration für mobile Endgeräte",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": true,
    "isTheft": true
  },
  {
    "name": "Verteilung der Grundkonfiguration auf mobile Endgeräte",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": true,
    "isTheft": true
  },
  {
    "name": "Protokollierung (allgemeiner Client-Rechner)",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": true,
    "isMisuse": true,
    "isTheft": false
  },
  {
    "name": "Application whitelisting",
    "description": "",
    "isMalware": true,
    "isCompromise": true,
    "isSocialEngineering": false,
    "isMisuse": true,
    "isTheft": false
  },
  {
    "name": "Sicherstellen der Integrität von Standardsoftware",
    "description": "",
    "isMalware": true,
    "isCompromise": false,
    "isSocialEngineering": false,
    "isMisuse": false,
    "isTheft": false
  }
];

*/