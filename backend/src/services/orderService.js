import prisma from "../config/prisma.js";

export const createOrder = async (userId, data) => {
  return prisma.order.create({
    data: {
      userId: userId,
      productId: data.productId,
      quantity: data.quantity,
    },
  });
};

export const getUserOrders = async (userId) => {
  return prisma.order.findMany({
    where: { userId },
    include: {
      product: true,
    },
  });
};

export const getAllOrders = async () => {
  return prisma.order.findMany({
    include: {
      user: true,
      product: true,
    },
  });
};

export const updateOrderStatus = async (id, status) => {
  return prisma.order.update({
    where: { id: Number(id) },
    data: { status },
  });
};

export const deleteOrder = async (id) => {
  return prisma.order.delete({
    where: { id: Number(id) },
  });
};
