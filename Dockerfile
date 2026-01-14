# 1️⃣ Base image (runtime comes from Docker, not your PC)
FROM node:18-alpine

# 2️⃣ Set working directory inside container
WORKDIR /app

# 3️⃣ Copy dependency file first (layer caching – DevOps best practice)
COPY package.json ./

# 4️⃣ Install dependencies inside container
RUN npm install --production

# 5️⃣ Copy application code
COPY . .

# 6️⃣ App listens on port 3000
EXPOSE 3000

# 7️⃣ Start the application
CMD ["npm", "start"]
