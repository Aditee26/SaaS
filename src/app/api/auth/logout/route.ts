import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    // Clear the auth token cookie
    cookies().delete('token');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Logged out successfully' 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Logout failed' },
      { status: 500 }
    );
  }
}

// Also handle GET requests for simplicity
export async function GET() {
  try {
    cookies().delete('token');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Logged out successfully' 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Logout failed' },
      { status: 500 }
    );
  }
}