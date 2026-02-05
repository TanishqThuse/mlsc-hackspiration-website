export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 md:px-6 py-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">
                    Privacy <span className="text-neon-cyan">Policy</span>
                </h1>
                
                <div className="max-w-4xl space-y-6 text-zinc-300">
                    <p className="text-sm text-zinc-400">Last updated: February 5, 2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                        <p>
                            Microsoft Learner's Student Club (MLSC) VIT Pune ("we", "us", or "our") operates Hackspiration'26.
                            This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal
                            information when you register for and participate in Hackspiration'26.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                        <p className="mb-4">We collect several types of information for various purposes:</p>
                        
                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Personal Data</h3>
                        <p className="mb-2">While using our services, we may ask you to provide us with certain personally identifiable information, including but not limited to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Name and email address</li>
                            <li>Educational institution and year of study</li>
                            <li>Phone number</li>
                            <li>GitHub/LinkedIn profile links</li>
                            <li>Team information</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Usage Data</h3>
                        <p>
                            We may also collect information about how you access and use the hackathon platform, including your
                            IP address, browser type, pages visited, time spent on pages, and other diagnostic data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                        <p className="mb-4">MLSC VIT Pune uses the collected data for various purposes:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>To process your registration and manage your participation in Hackspiration'26</li>
                            <li>To communicate with you about the event, including updates and important announcements</li>
                            <li>To evaluate submissions and determine winners</li>
                            <li>To provide customer support</li>
                            <li>To monitor usage of our services and detect technical issues</li>
                            <li>To send you newsletters and marketing communications (with your consent)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                        <p>
                            The security of your data is important to us, but remember that no method of transmission over the Internet
                            or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
                            protect your personal data, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                        <p>
                            We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy
                            Policy. We will retain and use your data to the extent necessary to comply with our legal obligations,
                            resolve disputes, and enforce our policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                        <p className="mb-4">You have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Access and receive a copy of your personal data</li>
                            <li>Rectify inaccurate or incomplete personal data</li>
                            <li>Request deletion of your personal data</li>
                            <li>Object to or restrict processing of your personal data</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p className="mt-4">
                            To exercise these rights, please contact us at <a href="mailto:mlsc@vit.edu" className="text-neon-cyan hover:underline">mlsc@vit.edu</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                        <p>
                            We may employ third-party companies and individuals to facilitate our hackathon, provide services on our behalf,
                            or assist us in analyzing how our services are used. These third parties have access to your personal data only
                            to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                            Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at{" "}
                            <a href="mailto:mlsc@vit.edu" className="text-neon-cyan hover:underline">mlsc@vit.edu</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
