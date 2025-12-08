import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyZEyBVcy3GAXzgNeL2YNP68NlZbGe_U7sTB6zjZGivtW-Pjes0MB-dwUV16fsJovAJ/exec";

// POST vẫn giữ nguyên (ghi dữ liệu)
export async function POST(req: Request) {
  const formData = await req.formData();
  const params = new URLSearchParams();
  formData.forEach((value, key) => params.append(key, value.toString()));

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: params,
  });

  const text = await response.text();
  return new NextResponse(text, { status: 200, headers: { "Content-Type": "application/json" } });
}

export async function GET() {
  const googleScriptUrl = "https://script.google.com/macros/s/AKfycbyZEyBVcy3GAXzgNeL2YNP68NlZbGe_U7sTB6zjZGivtW-Pjes0MB-dwUV16fsJovAJ/exec";
  const res = await fetch(googleScriptUrl);
  const text = await res.text();

  // parse JSON
  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    console.error("Failed to parse JSON from Google Script", err);
    data = [];
  }

  return NextResponse.json(data);
}

