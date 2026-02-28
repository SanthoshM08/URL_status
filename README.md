# 🌐 URL Status Monitoring Application

A containerized URL monitoring system that periodically checks the availability and response status of configured websites and displays their health status.

---

## 📌 Project Overview

This application monitors a list of URLs and:

- ✅ Checks HTTP status codes
- ✅ Measures response time
- ✅ Detects downtime
- ✅ Logs monitoring results
- ✅ Runs inside Docker containers
- ✅ Supports CI/CD automation

It is designed using a backend service and can be deployed locally or on a cloud server.

---

## 🏗️ Architecture Overview

```
User / Admin
      ↓
Backend API (FastAPI / Node / Django)
      ↓
HTTP Request Checker
      ↓
Target URLs
      ↓
Database (Optional Logging)
```

---

## 🚀 Features

- Add URLs to monitor
- Automatic periodic health checks
- HTTP status tracking (200, 404, 500, etc.)
- Response time measurement
- Failure detection
- Containerized deployment
- CI/CD ready

---

## 🛠️ Tech Stack

### Backend
- Python (FastAPI / Django) OR Node.js
- Requests / HTTP client library

### Database (Optional)
- SQLite / MySQL / MongoDB

### DevOps
- Docker
- Docker Compose
- GitHub Actions
- Linux (Ubuntu)

---

# ⚙️ Setup & Installation

---

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/url-status-monitor.git
cd url-status-monitor
```

---

## 2️⃣ Create Virtual Environment (If not using Docker)

```bash
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows
```

---

## 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4️⃣ Run Application

```bash
python main.py
```

Application runs at:

```
http://localhost:8000
```

---

# 🐳 Running with Docker

---

## Build Docker Image

```bash
docker build -t url-monitor .
```

---

## Run Container

```bash
docker run -p 8000:8000 url-monitor
```

---

## Or Use Docker Compose

```bash
docker-compose up --build
```

---

# 🔄 CI/CD Pipeline

This project integrates GitHub Actions to:

- Build Docker image
- Run basic checks
- Push image to Docker Hub
- Deploy automatically (if configured)

Pipeline Flow:

```
Code Change
     ↓
git push
     ↓
GitHub Actions
     ↓
Docker Build
     ↓
Docker Hub
     ↓
Deployment
```

---

# 📊 API Endpoints (Example)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /add-url | Add URL to monitor |
| GET | /status | Get current URL statuses |
| DELETE | /delete/{id} | Remove URL |

---

# 🔐 Environment Variables

Create a `.env` file:

```
CHECK_INTERVAL=60
PORT=8000
DATABASE_URL=sqlite:///db.sqlite3
```

---

# 📁 Project Structure

```
url-status-monitor/
│
├── app/
│   ├── main.py
│   ├── models.py
│   ├── monitor.py
│
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
└── README.md
```

---

# 🚀 Future Improvements

- Email alerts on downtime
- Slack/Telegram notifications
- Dashboard UI
- Response time analytics
- Prometheus integration
- Kubernetes deployment

---

# 👨‍💻 Author

Santhosh Kumar  
Backend Developer | DevOps Enthusiast

---

# 📌 Deployment Ready

This project is production-ready with:

- Containerization
- CI/CD automation
- Cloud deployment compatibility
