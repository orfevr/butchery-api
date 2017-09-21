# remove a container (force the removal of a running container)
docker rm -f butchery-redis-db

# remove image
docker rmi butchery-redis

# remove unused images (remove all images without at least one container associated to them)
# docker image prune

docker build -t butchery-redis .