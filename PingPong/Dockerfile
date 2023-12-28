version: '3.8'

networks:
  hadnetwork:
services:
  
  frontend:
    build:
      context: ./PingPong
      dockerfile: Dockerfile
    container_name: Akinator
    ports:
      - 5173:5173
    restart: always
    networks:
      - hadnetwork