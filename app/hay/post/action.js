"use server";

import { prisma } from "../../../lib/prisma";
import { redirect } from "next/navigation";

export async function createHayListing(formData) {
  const type = formData.get("type");
  const name = formData.get("name");
  const phone = formData.get("phone");
  const location = formData.get("location");
  const quantity = formData.get("quantity");
  const purpose = formData.get("purpose");
  const price = formData.get("price");

  await prisma.hayListing.create({
    data: {
      type,
      name,
      phone,
      location,
      quantity,
      purpose: purpose || null,
      price: price || null,
    },
  });

  redirect("/hay");
}