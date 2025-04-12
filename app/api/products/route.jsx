import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabaseClient"; // ✅ use admin client
import { productTable } from "@/configs/schema";
import { db } from "@/configs/db"; // ✅ use your database client

export async function POST(req) {
  try {
    const formData = await req.formData();
    const image = formData.get("image");
    const file = formData.get("file");
    const data = JSON.parse(formData.get("data"));

    console.log("Form data:", data);

    // Upload image to Supabase Storage
    const imageName = `${Date.now()}.png`;
    const filePath = `files/${imageName}`;

    const { data: uploadResult } = await supabaseAdmin.storage
      .from("upload") // bucket name
      .upload(filePath, image);

    const publicUrlData = await supabaseAdmin.storage
      .from("upload") // bucket name
      .getPublicUrl(filePath);

    const imageUrl = publicUrlData.data.publicUrl;

    // save product File/document to supabase storage
    const fileName = `${Date.now()}.png`;
    const StorageFileRef = `files/${fileName}`;

    let fileUrl = null;

    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from("upload")
      .upload(StorageFileRef, file);

    if (uploadError) {
      console.error("Upload failed:", uploadError.message);
    } else {
      const { data: publicUrlData } = await supabaseAdmin.storage
        .from("upload")
        .getPublicUrl(StorageFileRef);

      fileUrl = publicUrlData.publicUrl;
    }

    // Insert product data into the database
    const result = await db
      .insert(productTable)
      .values({
        title: data?.title,
        category: data?.category,
        description: data?.description,
        fileUrl: fileUrl, // ✅ already a string
        imageURL: imageUrl, // ✅ fix was here
        price: data?.price, // ✅ converting to integer (schema expects it)
        about: data?.about,
        message: data?.sellerNote, // if you're sending this key from frontend
        createdBy: data?.userEmail,
      })
      .returning(productTable);

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}
