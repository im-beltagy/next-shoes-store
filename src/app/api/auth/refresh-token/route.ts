import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { __USER } from "@/__mock/__auth";
import { getDateAfterSec } from "../../util";

export async function GET(request: NextRequest) {
  const authorization = request.headers.get("Authorization");
  const token = authorization?.split("Bearer ")[1] || ""; // if token is invalid, will push error on jwt.verify

  if (!process.env.REFRESH_TOKEN_SECRET || !process.env.ACCESS_TOKEN_SECRET)
    return new Response("Env keys not found", { status: 500 });

  try {
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    const access_token = jwt.sign(
      {
        sub: "b123",
        name: __USER.name,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" },
    );

    return new Response(
      JSON.stringify({
        status: 200,
        access_token,
        access_token_exp: getDateAfterSec(30 * 60),
      }),
      { status: 200 },
    );
  } catch (err) {
    return new Response(JSON.stringify({ message: "Invalid token" }), {
      status: 401,
    });
  }
}
