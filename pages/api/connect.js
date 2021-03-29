import nc from "next-connect";
import cors from "cors";

const connect = nc()
  // use connect based middleware
  .use(cors())
  .post(async (req, res) => {
    const response = await fetch(remoteServerUrl, config);
    res.json(response);
  });

export default connect;