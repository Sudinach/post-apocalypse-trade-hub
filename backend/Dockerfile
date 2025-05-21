# Stage 1: Build the application
FROM ubuntu:latest AS builder
WORKDIR /app
RUN apt-get update && apt-get install -y openjdk-21-jdk
COPY . .
RUN ./mvnw clean package -DskipTests
# Stage 2: Run the application
FROM ubuntu:latest
WORKDIR /app
RUN apt-get update && apt-get install -y openjdk-21-jre-headless
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]