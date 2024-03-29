import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './Routes/user';
import { eventRouter } from './Routes/event';


const app = new Hono<{
  Bindings:{
    DATABASE_URL :string;
    JWT_SECRET:string;
  }
}>();

app.use("/api/*" , cors());
app.route("api/v1/user" , userRouter);
app.route("api/v1/user" , eventRouter);

export default app
