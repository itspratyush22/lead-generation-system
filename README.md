# 📨 Lead Generation Automation with n8n & React

This project automates lead handling using a React frontend, a Node.js backend, and [n8n](https://n8n.io/) for workflow automation. When a user submits a lead form, the data is processed and forwarded via email — and optionally stored in Google Sheets or sent to a CRM.

---

## 📦 Project Structure

```
lead-generation/
├── backend/               # Node.js server (Express) for handling POST requests
│   └── index.js           # Forwards data to n8n webhook
│
├── lead-form/             # React frontend app
│   ├── App.js             # Lead capture form component
│   └── index.js           # React entry point
│
└── README.md              # Project documentation (this file)
```

---

## ⚙️ How It Works

1. A user fills out and submits the lead form in the React app.
2. The backend receives the POST request and forwards the data to an n8n webhook.
3. n8n handles the automation:
   - Sends a notification email to the sales team
   - (Optional) Stores lead data in Google Sheets or a CRM

---

## 🚀 Quick Start

### 1. Clone and Set Up the Project

```bash
git clone https://github.com/yourusername/lead-generation.git
cd lead-generation
```

### 2. Run the React Frontend

```bash
cd lead-form
npm install
npm start
```

> Visit the app at [http://localhost:3000](http://localhost:3000)

### 3. Start the Backend Server

```bash
cd backend
npm install
node index.js
```

Ensure your backend is sending POST data to your local n8n webhook.

### 4. Start n8n Workflow Automation

```bash
npm install -g n8n
n8n start
```

> Access n8n at [http://localhost:5678](http://localhost:5678)

---

## 🔗 Webhook Endpoint

Make sure your backend POSTs the lead data to:

```
http://localhost:5678/webhook-test/lead-form
```

---

## 💼 Example Lead Payload

```json
{
  "name": "Pratyush Nayak",
  "email": "sidraj4422@gmail.com",
  "company": "Error Inc.",
  "message": "I'm interested in your services."
}
```

---

## 🧠 Workflow Overview (n8n)

- **Webhook Node**: Receives data from backend
- **Send Email Node**: Sends the lead to your sales inbox
- *(Optional)* **Google Sheets Node**: Logs the lead into a spreadsheet
- *(Optional)* **CRM Node**: Pushes data to HubSpot, Salesforce, etc.

You can use expressions like `{{$json["body"]["name"]}}` to extract data fields inside nodes.

---

## 🧩 System Extensions

Here’s how to expand functionality as your lead pipeline grows:

| Feature                  | How to Implement                             |
|--------------------------|----------------------------------------------|
| ✅ CAPTCHA Support        | Add Google reCAPTCHA to the React form       |
| 📊 CRM Integration        | Use n8n’s HubSpot / Salesforce nodes         |
| 🧠 Lead Qualification     | Add **IF** and **Set** nodes in n8n          |
| 📈 Lead Scoring           | Use email domains or keywords to score leads |
| 🔁 Auto-Responses         | Use **Send Email** node for user confirmation |
| 🧪 A/B Testing            | Use **Switch** node to branch logic randomly |

---

## 🧪 Developer Scripts (Frontend)

Inside `lead-form/`, you can run:

| Command           | Description                                 |
|------------------|---------------------------------------------|
| `npm start`      | Run React app locally                       |
| `npm run build`  | Build for production                        |
| `npm test`       | Run tests                                   |

---

## 📘 Documentation Summary

### ✅ Setup & Run

- Clone repo, run frontend (`npm start`), backend (`node index.js`), and n8n (`n8n start`)
- Send lead form data from frontend to backend → forwarded to n8n

### 🔄 Integration

- Node.js backend receives and forwards data
- n8n webhook listens and automates the next steps (email, storage, CRM)

### 📈 Extend in Future

- Add lead scoring, filtering, CRMs, or even Slack notifications
- Add visual dashboards or reports via Google Sheets or Airtable

---

## 🙋‍♂️ Author

- GitHub: [@itspratyush22](https://github.com/itspratyush22)
- LinkedIn: [Pratyush Nayak](https://www.linkedin.com/in/pratyush-nayak-5b0a95238/)



## 📚 Resources

- [n8n Docs](https://docs.n8n.io/)
- [React Docs](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [Gmail SMTP Guide](https://support.google.com/mail/answer/7126229)

---

Feel free to split this into separate `README.md` files inside `backend/` and `lead-form/` if needed.
