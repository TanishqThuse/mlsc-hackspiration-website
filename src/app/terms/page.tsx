export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 md:px-6 py-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">
                    Terms of <span className="text-neon-cyan">Service</span>
                </h1>
                
                <div className="max-w-4xl space-y-6 text-zinc-300">
                    <p className="text-sm text-zinc-400">Last updated: February 5, 2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                        <p>
                            By registering for or participating in Hackspiration'26 organized by Microsoft Learner's Student Club (MLSC)
                            VIT Pune, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not
                            register for or participate in the event.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Eligibility</h2>
                        <p className="mb-4">To participate in Hackspiration'26, you must:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Be currently enrolled in an educational institution or have graduated within the last year</li>
                            <li>Form a team of 2-4 members for the hackathon</li>
                            <li>Have the necessary skills and resources to participate in a coding hackathon</li>
                            <li>Comply with all rules and regulations set forth by the organizers</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Registration and Participation</h2>
                        <p className="mb-4">
                            Registration for Hackspiration'26 requires providing accurate and complete information. You are responsible
                            for maintaining the confidentiality of your account credentials. The organizers reserve the right to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Verify your eligibility and identity</li>
                            <li>Reject or cancel any registration at any time</li>
                            <li>Modify event schedules, rules, or prizes</li>
                            <li>Disqualify participants who violate these terms or the Code of Conduct</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                        
                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Your Submissions</h3>
                        <p className="mb-4">
                            You retain all ownership rights to your submissions. By submitting your project to Hackspiration'26, you grant
                            MLSC VIT Pune a non-exclusive, worldwide, royalty-free license to use, reproduce, and display your submission
                            for promotional and educational purposes related to the hackathon.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Third-Party Content</h3>
                        <p>
                            You represent and warrant that your submission is your original work and does not infringe upon any third-party
                            intellectual property rights. You are responsible for obtaining all necessary permissions for any third-party
                            content included in your submission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Prizes and Awards</h2>
                        <p className="mb-4">
                            Prizes will be awarded at the sole discretion of the judges. Prize eligibility and distribution are subject to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Verification of eligibility and compliance with all rules</li>
                            <li>Completion of any required documentation or forms</li>
                            <li>Applicable tax obligations (winners are responsible for any taxes)</li>
                            <li>Availability of the specified prizes</li>
                        </ul>
                        <p className="mt-4">
                            MLSC VIT Pune reserves the right to substitute prizes of equal or greater value if specified prizes become unavailable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Code of Conduct</h2>
                        <p>
                            All participants must adhere to the Hackspiration'26{" "}
                            <a href="/code-of-conduct" className="text-neon-cyan hover:underline">Code of Conduct</a>.
                            Violation of the Code of Conduct may result in immediate disqualification and removal from the event.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                        <p>
                            MLSC VIT Pune and its organizers, sponsors, and partners shall not be liable for any direct, indirect,
                            incidental, special, consequential, or punitive damages arising out of your participation in Hackspiration'26.
                            Participation is at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Photography and Recording</h2>
                        <p>
                            By participating in Hackspiration'26, you consent to being photographed, filmed, and recorded during the event.
                            You grant MLSC VIT Pune the right to use such media for promotional and educational purposes without compensation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Modifications to Terms</h2>
                        <p>
                            MLSC VIT Pune reserves the right to modify these Terms of Service at any time. Changes will be effective
                            immediately upon posting on this page. Your continued participation in the event after such changes constitutes
                            acceptance of the modified terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                        <p>
                            These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard
                            to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                        <p>
                            For any questions regarding these Terms of Service, please contact us at{" "}
                            <a href="mailto:mlsc@vit.edu" className="text-neon-cyan hover:underline">mlsc@vit.edu</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
