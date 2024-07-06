import { API_CONFIG } from '@/config/api-config';
import connectDB from '@/lib/connect-db';
import { SubmissionClass, SubmissionModel } from '@/model/submission.mongodb';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type SubmissionBody = {
    name: string;
    email: string;
    websiteOrFacebook: string;
    tel: string;
    budget: string;
    services: string[];
};

export async function POST(request: NextRequest) {
    try {
        await connectDB()
        const body = await request.json() as SubmissionBody;
        const submissionData = new SubmissionClass()
        submissionData.budget = body.budget
        submissionData.email = body.email
        submissionData.name = body.name
        submissionData.services = body.services
        submissionData.tel = body.tel
        submissionData.websiteOrFacebook = body.websiteOrFacebook
        
        await SubmissionModel.insertMany([submissionData]);

        const transporter = nodemailer.createTransport({
            service: API_CONFIG.EMAIL_SERVICE ,
            host: API_CONFIG.EMAIL_HOST,
            port: API_CONFIG.EMAIL_PORT,
            secure: API_CONFIG.EMAIL_SECURE,
            auth: {
                user: API_CONFIG.EMAIL_AUTH_USER,
                pass: API_CONFIG.EMAIL_AUTH_APP_PASSWORD,
            },
        });

        await transporter.verify();

        const mailOptions: nodemailer.SendMailOptions = {
            from: API_CONFIG.EMAIL_AUTH_USER,
            to: body.email,
            subject: 'Hello ✔',
            text: 'Hello ${submissionData.name}',
            html: `<b>Hello  ${submissionData.name}</b>`,
        };

        const info = await transporter.sendMail(mailOptions);

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        return NextResponse.json({ data: body }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);

        if (error instanceof SyntaxError) {
            return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 });
        }

        if (error instanceof Error && error.message.includes('response')) {
            return NextResponse.json({ error: `Failed to send email: ${error.message}` }, { status: 500 });
        }

        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
