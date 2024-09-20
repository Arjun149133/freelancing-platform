# Step 1: Use Node.js as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application files
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Expose the port your app runs on
EXPOSE 3000

# Step 8: Start the Next.js app
CMD ["npm", "run", "start"]
