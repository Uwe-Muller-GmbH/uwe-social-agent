# uwe-social-agent
uwe-social-agent/
│
├── server.js              # Express Server mit Routen
├── services/
│   ├── postGenerator.js   # GPT-Logik für Posts
│   ├── catalogReader.js   # Liest catalog.json oder Knowledge-Dateien
│   ├── publisher.js       # Optional: Social Media Veröffentlichung
│
├── data/
│   ├── catalog.json       # Maschinen-Daten (Quelle)
│   ├── posts.json         # Generierte Posts mit Status
│
├── .env                   # API Keys (OpenAI, Buffer, LinkedIn …)
├── package.json
