FROM amazoncorretto:21-alpine3.20 AS builder

WORKDIR /app
COPY . .
RUN ./gradlew build

FROM amazoncorretto:21-alpine3.20
WORKDIR /app
COPY --from=builder /app/build/libs/demo-0.0.1-SNAPSHOT.jar /app/app.jar

CMD ["java", "-jar", "./app.jar"]
