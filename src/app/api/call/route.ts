import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Validate US phone number format
    const usPhoneRegex = /^\+1[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    if (!usPhoneRegex.test(phoneNumber)) {
      return NextResponse.json(
        { error: 'Please enter a valid US phone number' },
        { status: 400 }
      );
    }

    const headers = {
      Authorization:
        process.env.BLAND_AI_KEY ||
        'org_dc3ae2c11203faecc5af471aff4add45bb06a6ad21a14e496e3423c8fe9bad8711d17411b6d4ba18658669',
      'Content-Type': 'application/json',
    };

    const data = {
      phone_number: phoneNumber,
      voice: 'Paige',
      wait_for_greeting: false,
      record: true,
      answered_by_enabled: true,
      noise_cancellation: false,
      interruption_threshold: 100,
      block_interruptions: false,
      max_duration: 12,
      model: 'base',
      language: 'en',
      background_track: 'none',
      endpoint: 'https://api.bland.ai',
      voicemail_action: 'hangup',
      task: `You are Sarah, a helpful customer support representative from AI Company Boost. The person you're calling requested information from our website about AI customer support automation.

INSTRUCTIONS:
1. Introduce yourself politely as Sarah Leonards assistant from AI Company Boost customer support
2. Mention that they requested a call from the website
3. Ask how you can help them today
4. Based on their response, ask relevant follow-up questions about:
   - Their current customer support challenges
   - Their business size and support ticket volume
   - Whether they're looking for pricing information
   - Questions about our platform capabilities
   - Setup process and timeline questions
   - Integration requirements

BACKGROUND: AI Company Boost provides automated customer support solutions that can handle 80% of support tickets. Our service costs $1,500 setup + $299/month. We help businesses reduce support costs and response times through AI automation.

TONE: Friendly, helpful, and consultative. Focus on understanding their needs before providing information. Do not be pushy or overly sales-focused.`,
    };

    const response = await fetch('https://api.bland.ai/v1/calls', {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Bland AI API error:', result);
      return NextResponse.json(
        { error: 'Failed to initiate call' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      callId: result.call_id,
      message: 'Call initiated successfully',
    });
  } catch (error) {
    console.error('Call API error:', error);
    return NextResponse.json(
      { error: 'Failed to initiate call' },
      { status: 500 }
    );
  }
}
