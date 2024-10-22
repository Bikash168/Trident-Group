// pages/terms-of-service.tsx
import Head from 'next/head';
import Layout from './components/Layout'; // Import your Layout component

export default function TermsOfService() {
    return (
        <Layout>
            <div className="bg-white text-gray-900 p-6">
                <Head>
                    <title>Terms of Service</title>
                </Head>
                
                <h1 className="text-3xl font-bold mb-4 text-[#316b9e]">Terms of Service</h1>
                <p className="mb-4">
                    Effective date: [Insert Date]
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing and using [Your Organization/Website Name] (the “Site”), you agree to comply with 
                    and be bound by these Terms of Service. If you do not agree with any part of these terms, you 
                    must not use the Site.
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">2. Changes to Terms</h2>
                <p className="mb-4">
                    We may update our Terms of Service from time to time. We will notify you of any changes by 
                    posting the new Terms of Service on this page. Your continued use of the Site after any changes 
                    indicates your acceptance of the new terms.
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">3. Use of the Site</h2>
                <p className="mb-4">
                    You agree to use the Site only for lawful purposes and in a way that does not infringe the rights 
                    of, restrict, or inhibit anyone else’s use and enjoyment of the Site. Prohibited behavior includes, 
                    but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Harassment, intimidation, or threatening behavior</li>
                    <li>Disrupting the normal flow of dialogue</li>
                    <li>Impersonating any person or entity</li>
                    <li>Engaging in any form of unauthorized advertising or solicitation</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">4. User Accounts</h2>
                <p className="mb-4">
                    Some features of the Site may require you to create an account. You are responsible for maintaining 
                    the confidentiality of your account information and for all activities that occur under your account. 
                    You agree to notify us immediately of any unauthorized use of your account.
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">5. Intellectual Property</h2>
                <p className="mb-4">
                    All content, trademarks, and other intellectual property on the Site are the property of 
                    [Your Organization/Website Name] or our licensors. You may not use, reproduce, modify, or distribute 
                    any content from the Site without our prior written consent.
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">6. Disclaimers</h2>
                <p className="mb-4">
                    The Site is provided on an “as is” and “as available” basis. We make no representations or warranties 
                    of any kind, express or implied, regarding the operation of the Site or the information, content, 
                    materials, or products included on the Site. You agree that your use of the Site is at your own risk.
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">7. Limitation of Liability</h2>
                <p className="mb-4">
                    To the fullest extent permitted by law, [Your Organization/Website Name] will not be liable for any 
                    direct, indirect, incidental, special, consequential, or punitive damages arising from or related to 
                    your use of the Site.
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">8. Governing Law</h2>
                <p className="mb-4">
                    These Terms of Service shall be governed by and construed in accordance with the laws of 
                    [Your Jurisdiction]. Any disputes arising out of or related to these terms will be resolved in 
                    the competent courts of [Your Jurisdiction].
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">9. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Email: [Your Email Address]</li>
                    <li>Phone: [Your Phone Number]</li>
                    <li>Address: [Your Mailing Address]</li>
                </ul>
            </div>
        </Layout>
    );
}
