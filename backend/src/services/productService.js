import prisma from "../config/prisma.js";

export const createProduct = async (data, userId) => {
  return prisma.product.create({
    data: {
      ...data,
      createdBy: userId,
    },
  });
};

export const getProducts = async () => {
  return prisma.product.findMany();
};

export const deleteProduct = async (id) => {
  return prisma.product.delete({
    where: { id: Number(id) },
  });
};
