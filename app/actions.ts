"use server";

import { permanentRedirect } from "next/navigation";

export async function navigate() {
  try {
    permanentRedirect("/about");
  } catch (e) {
    console.log("wuts", e);
    throw e;
  } finally {
    permanentRedirect("/about");
  }
}

// also tried
/* 
export async function navigate() {
  try {
    permanentRedirect("/about");
  } catch (e) {
    console.log("wuts", e);
    throw e;
  } finally {
    permanentRedirect("/about");
  }
}
   */
