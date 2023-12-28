import User from '@/app/(models)/User';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userData = body.formData;

    if (!userData?.email || !userData?.password) {
      return NextResponse.json({ message: 'all fields are required' }, { status: 400 });
    }

    const hashpassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashpassword;

    await User.create(userData);
    return NextResponse.json({ message: 'user created' }, { status: 201 });
  } catch (error) {
    console.log('error: ', error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
