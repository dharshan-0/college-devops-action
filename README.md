# skens 

A react wep app that shows random anime images.


## Instructions

### Clone this repo and go into the directory

```bash
git clone git@github.com:dharshan-0/college-devops-action.git && cd college-devops-action
```

### Build the image

```bash
docker build -t skens .
```

### Run the container

```bash
docker run -p 80:80 -d --name random-pic-webapp skens:latest
```

### View result

Open `http://localhost` to see the web app
