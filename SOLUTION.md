### Frontend (ReactJS && Material UI && Typescript):

#### List View:

- Create a lead management UI for a tradie in a single page including Invited and Accepted tab.
- Fetch and display data from the backend.

---

### Backend (NestJS && MySQL && Typescript):

#### Database Connection:

- Use typeorm for database connection.

#### API Endpoints:

- Create RESTful API endpoints CRUD operations for tradie jobs.

---

### Deployment and testing:

#### Docker:

- From the root of the project, run `docker-compose up -d`

- You should now have the UI running at http://localhost:3000 and the server running at http://localhost:8080
- You should now have a MySQL database running at localhost:3306
  - The username is `root`
  - The password is `hipages`

If at any point you want to refresh the database, you can stop the Docker containers (`docker-compose down`) and start them again

#### Local testing:

- Clone repository frrom Github`
- Run`npm install` for server and ui package separately
- From the root of the project, run `docker-compose up -d`
- Run http://localhost:3000 in broswer after docker containers set up`
