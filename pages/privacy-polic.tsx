// pages/privacy-policy.tsx
import Head from 'next/head';
import Layout from './components/Layout'; // Import your Layout component

export default function PrivacyPolicy() {
    return (
        <Layout>
            <div className="bg-white text-gray-900 p-6">
                <Head>
                    <title>Privacy Policy</title>
                </Head>
                
                <h1 className="text-3xl font-bold mb-4 text-[#316b9e]">Privacy Policy</h1>
                <p className="mb-4">
                    Effective date: [Insert Date]
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">1. Introduction</h2>
                <p className="mb-4">
                    Welcome to [Your Organization/Website Name] (the “Site”). We are committed to protecting 
                    your privacy and your personal information. This Privacy Policy outlines our practices 
                    regarding the collection, use, and disclosure of information that you may provide us 
                    when you use our Site.
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">2. Information We Collect</h2>
                <p className="mb-4">
                    We may collect personal information from you in a variety of ways, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>When you visit our Site</li>
                    <li>When you register on the Site</li>
                    <li>When you subscribe to our newsletter</li>
                    <li>When you fill out a form</li>
                    <li>When you interact with us via email or social media</li>
                </ul>
                <p className="mb-4">
                    The types of personal information we may collect include, but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Mailing Address</li>
                    <li>Any other information you provide us</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">3. How We Use Your Information</h2>
                <p className="mb-4">
                    We may use the information we collect from you for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>To personalize your experience</li>
                    <li>To improve our Site</li>
                    <li>To send periodic emails regarding your order or other products and services</li>
                    <li>To respond to inquiries and support needs</li>
                    <li>To process transactions</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">4. Sharing Your Information</h2>
                <p className="mb-4">
                    We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable 
                    Information unless we provide users with advance notice. This does not include website hosting 
                    partners and other parties who assist us in operating our website, conducting our business, 
                    or serving our users, so long as those parties agree to keep this information confidential.
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">5. Data Security</h2>
                <p className="mb-4">
                    We implement a variety of security measures to maintain the safety of your personal information 
                    when you place an order or enter, submit, or access your personal information. However, no method 
                    of transmission over the Internet or method of electronic storage is 100% secure.
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">6. Your Rights</h2>
                <p className="mb-4">
                    You have the right to access, correct, or delete your personal information. If you would like to 
                    exercise these rights, please contact us using the information provided below.
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">7. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
                    new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any 
                    changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
                
                <h2 className="text-2xl font-semibold mb-2 text-[#316b9e]">8. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
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
