# Deployment
```bash
# Heroku
heroku container:login
# Optional create
heroku create
# Copy the AppID
heroku container:push web -a AppID

# AppEngine Flex
gcloud auth login
# Optional create
gcloud projects create AppID
# Deploy to AppID
gcloud app deploy --project AppID
```

# Run locally
```bash
# Direct run
npm install prerender prerender-memory-cache
# Make sure to create environment variable for allowed domains
export ALLOWED_DOMAINS=www.google.com,www.example.com
# Run the server
node server.js

# Docker - create the image
docker build -t prerender:latest .
# Run the image
docker run -p 3000:3000 prerender:latest
# Ctrl+C to stop
```

# Update Dockerfile ENV

Update memory cache timeout, capacity and allowed domains environment