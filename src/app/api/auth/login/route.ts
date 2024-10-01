import { __USER } from "@/__mock/__auth";
import jwt from "jsonwebtoken";
import { getDateAfterSec } from "../../util";

const isUserExsists = (email: string, password: string) => {
  if (email === "john@example.com" && password === "Password@1") {
    return true;
  }
  return false;
};

export async function POST(request: Request) {
  const body = await request.json();
  const email = body.email;
  const password = body.password;

  if (typeof email !== "string" || typeof password !== "string") {
    return new Response(
      JSON.stringify({ message: "Missing email or password", status: 400 }),
      { status: 400 },
    );
  }

  if (!process.env.REFRESH_TOKEN_SECRET || !process.env.ACCESS_TOKEN_SECRET)
    return new Response(JSON.stringify({ message: "Env keys not found" }), {
      status: 500,
    });

  if (isUserExsists(email, password)) {
    const access_token = jwt.sign(
      {
        sub: "b123",
        name: __USER.name,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" },
    );
    const refresh_token = jwt.sign(
      {
        sub: "b123",
        name: __USER.name,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1w" },
    );

    return new Response(
      JSON.stringify({
        status: 200,
        user: {
          email: email,
          name: __USER.name,
          avatar: __USER.avatar,
        },
        access_token: access_token,
        refresh_token: refresh_token,
        access_token_exp: getDateAfterSec(30 * 60),
      }),
      { status: 200 },
    );
  } else {
    return new Response(
      JSON.stringify({ message: "Unauthorized", status: 401 }),
      { status: 401 },
    );
  }
}
