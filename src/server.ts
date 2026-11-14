import { send } from "node:process";
import app from "./app";

const PORT = Number(process.env.port) || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Main application home page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
