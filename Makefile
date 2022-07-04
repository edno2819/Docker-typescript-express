run_dockerfile:
	docker build -t type_docker .
	docker run -p 3000:3000 -d type_docker
	
run_dockercompose:
	docker-compose up

generate_keys_https:
	sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./certs/selfsigned.key -out ./certs/selfsigned.crt
	sudo chown $USER:$USER ./certs