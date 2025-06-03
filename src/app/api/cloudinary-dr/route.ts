import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    // Obtén imágenes
    const images = await cloudinary.api.resources({
      type: "upload",
      prefix: "dr/",
      max_results: 30,
      resource_type: "image",
    });
    // Obtén videos
    const videos = await cloudinary.api.resources({
      type: "upload",
      prefix: "dr/",
      max_results: 30,
      resource_type: "video",
    });

    // Combina ambos arrays
    const resources = [...images.resources, ...videos.resources];
    console.log(resources)

    return NextResponse.json(resources);
  } catch (err: any) {
    console.error("Cloudinary error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}