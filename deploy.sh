cd client
npm run build
cp -r build/* ../server/src/main/resources/static
cd ..
cd server
mvn package
scp target/server-0.0.1-SNAPSHOT.jar root@94.237.114.242:~root/scm.jar
ssh root@94.237.114.242