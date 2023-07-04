FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

COPY spring-petclinic/.mvn/ .mvn
COPY spring-petclinic/mvnw spring-petclinic/pom.xml ./
RUN ./mvnw dependency:resolve

COPY spring-petclinic/src ./src

CMD ["./mvnw", "spring-boot:run"]