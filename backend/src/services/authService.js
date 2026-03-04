import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";

export const registerUser = async (data) => {
  const hashed = await bcrypt.hash(data.password, 10);

  return prisma.user.create({
    data: {
      email: data.email,
      password: hashed,
      role: data.role || "USER",
    },
  });
};

export const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) throw new Error("Invalid password");

  return user;
};
