from datetime import datetime

def get_admin_notification_email(form_data: dict) -> dict:
    """Generate admin notification email"""
    
    timestamp = datetime.utcnow().strftime("%B %d, %Y at %I:%M %p UTC")
    
    subject = f"New Quotation Request – Nexline Website – {form_data['product_category']} – {form_data['company_name']}"
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {{
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
                line-height: 1.6;
                color: #333333;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
            }}
            .container {{
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border: 1px solid #e0e0e0;
            }}
            .header {{
                background-color: #0A2540;
                padding: 30px;
                text-align: center;
            }}
            .header h1 {{
                color: #ffffff;
                margin: 0;
                font-size: 24px;
                font-weight: 600;
            }}
            .content {{
                padding: 40px 30px;
            }}
            .section-title {{
                color: #0A2540;
                font-size: 18px;
                font-weight: 600;
                margin: 30px 0 15px 0;
                padding-bottom: 10px;
                border-bottom: 2px solid #D4AF37;
            }}
            .info-row {{
                margin: 12px 0;
                padding: 8px 0;
            }}
            .label {{
                font-weight: 600;
                color: #0A2540;
                display: inline-block;
                min-width: 180px;
            }}
            .value {{
                color: #333333;
            }}
            .message-box {{
                background-color: #f9f9f9;
                padding: 20px;
                border-left: 4px solid #D4AF37;
                margin: 20px 0;
                white-space: pre-wrap;
                word-wrap: break-word;
            }}
            .footer {{
                background-color: #f5f5f5;
                padding: 20px 30px;
                text-align: center;
                font-size: 12px;
                color: #666666;
                border-top: 1px solid #e0e0e0;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Website Inquiry Received</h1>
            </div>
            
            <div class="content">
                <div class="section-title">Contact Details</div>
                
                <div class="info-row">
                    <span class="label">Full Name:</span>
                    <span class="value">{form_data['full_name']}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">Company:</span>
                    <span class="value">{form_data['company_name']}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">Email:</span>
                    <span class="value">{form_data['email']}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">Phone:</span>
                    <span class="value">{form_data['phone']}</span>
                </div>
                
                <div class="section-title">Inquiry Details</div>
                
                <div class="info-row">
                    <span class="label">Product Category:</span>
                    <span class="value">{form_data['product_category']}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">Destination Country:</span>
                    <span class="value">{form_data['destination_country']}</span>
                </div>
                
                <div class="section-title">Message</div>
                
                <div class="message-box">
                    {form_data['message']}
                </div>
            </div>
            
            <div class="footer">
                <p>Submitted from: nexlinetrading.com</p>
                <p>Date & Time: {timestamp}</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    return {
        "subject": subject,
        "html": html_content
    }


def get_client_confirmation_email(form_data: dict) -> dict:
    """Generate client confirmation email"""
    
    subject = "Acknowledgement of Inquiry – Nex Line General Trading FZ LLC"
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {{
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
                line-height: 1.6;
                color: #333333;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
            }}
            .container {{
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border: 1px solid #e0e0e0;
            }}
            .content {{
                padding: 50px 40px;
            }}
            .greeting {{
                color: #0A2540;
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 20px;
            }}
            .body-text {{
                color: #333333;
                font-size: 15px;
                line-height: 1.8;
                margin: 15px 0;
            }}
            .signature {{
                margin-top: 40px;
                padding-top: 30px;
                border-top: 1px solid #D4AF37;
            }}
            .company-name {{
                font-weight: 600;
                color: #0A2540;
                font-size: 16px;
                margin-bottom: 8px;
            }}
            .company-location {{
                color: #666666;
                font-size: 14px;
                margin-bottom: 20px;
            }}
            .contact-info {{
                font-size: 14px;
                color: #333333;
                margin: 5px 0;
            }}
            .contact-info a {{
                color: #0A2540;
                text-decoration: none;
            }}
            .contact-info a:hover {{
                color: #D4AF37;
            }}
            .logo-container {{
                text-align: center;
                margin-top: 30px;
                padding-top: 30px;
                border-top: 1px solid #e0e0e0;
            }}
            .logo {{
                max-width: 180px;
                height: auto;
            }}
            .footer {{
                background-color: #f9f9f9;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                color: #999999;
                border-top: 1px solid #e0e0e0;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="greeting">Dear {form_data['full_name']},</div>
                
                <p class="body-text">
                    Thank you for your inquiry.
                </p>
                
                <p class="body-text">
                    We have received your request and will review the details provided. Our team will revert to you shortly.
                </p>
                
                <div class="signature">
                    <p class="body-text" style="margin-bottom: 10px;">Kind regards,</p>
                    
                    <div class="company-name">Nex Line General Trading FZ LLC</div>
                    <div class="company-location">Ras Al Khaimah, United Arab Emirates</div>
                    
                    <div class="contact-info">T: +971 56 423 0120</div>
                    <div class="contact-info">E: <a href="mailto:shahid@nexlinetrading.com">shahid@nexlinetrading.com</a></div>
                    <div class="contact-info">W: <a href="https://www.nexlinetrading.com">www.nexlinetrading.com</a></div>
                </div>
                
                <div class="logo-container">
                    <img src="https://customer-assets.emergentagent.com/job_19aa9317-cba9-4065-9fcf-a828b291b4d7/artifacts/joze3u58_WhatsApp%20Image%202026-02-18%20at%202.07.52%20PM.jpeg" alt="Nexline Logo" class="logo" />
                </div>
            </div>
            
            <div class="footer">
                <p>This is an automated message. Please do not reply to this email.</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    return {
        "subject": subject,
        "html": html_content
    }
