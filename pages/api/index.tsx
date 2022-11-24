import type { NextApiRequest, NextApiResponse } from "next";

const Index = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json("hello world");
};

export default Index;
