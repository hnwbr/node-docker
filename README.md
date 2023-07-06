docker volume create mongodb
docker volume create mongodb_config

docker network create mongodb

docker run -it --rm -d -v mongodb:/data/db -v mongodb_config:/data/configdb -p 27017:27017 --network mongodb --name mongodb mongo

docker run -it --rm -d --network mongodb --name rest-server -p 8000:8000 -e CONNECTIONSTRING=mongodb://mongodb:27017/notes node-docker

curl --request POST --url http://localhost:8000/notes --header 'content-type: application/json' --data '{"name": "this is a note", "text": "this is a note that I wanted to take while I was working on writing a blog post.", "owner": "peter"}'

mkdir -p ~/.docker/cli-plugins/
curl -SL https://github.com/docker/compose/releases/download/v2.19.1/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose

docker compose -f docker-compose.dev.yml up --build
