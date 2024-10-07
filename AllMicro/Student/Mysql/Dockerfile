FROM  mysql:latest
LABEL app="mysql"
LABEL Author="Aaman"

RUN chown -R mysql:root /var/lib/mysql/

ENV MYSQL_DATABASE=studentapp
ENV MYSQL_USER=aaman
ENV MYSQL_PASSWORD=1234
ENV MYSQL_ROOT_PASSWORD=admin1234

COPY . .

ADD student.sql /etc/mysql/student.sql

RUN sed -i 's/MYSQL_DATABASE/'$MYSQL_DATABASE'/g' /etc/mysql/student.sql    

RUN cp /etc/mysql/student.sql /docker-entrypoint-initdb.d/student.sql

EXPOSE 3306




# docker run -d -p 3306:3306 --name mysql-container \
# -e MYSQL_DATABASE=studentapp \
# -e MYSQL_USER=mayur \
# -e MYSQL_PASSWORD=1234 \
# -e MYSQL_ROOT_PASSWORD=1234 \
# <imageid>
