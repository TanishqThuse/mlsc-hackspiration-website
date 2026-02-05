export default function CodeOfConductPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 md:px-6 py-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">
                    Code of <span className="text-neon-cyan">Conduct</span>
                </h1>
                
                <div className="max-w-4xl space-y-6 text-zinc-300">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Pledge</h2>
                        <p className="mb-4">
                            We as members, contributors, and organizers of Hackspiration'26 pledge to make participation in our hackathon
                            a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability,
                            ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic
                            status, nationality, personal appearance, race, religion, or sexual identity and orientation.
                        </p>
                        <p>
                            We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Standards</h2>
                        <p className="mb-4">Examples of behavior that contributes to a positive environment include:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Demonstrating empathy and kindness toward other people</li>
                            <li>Being respectful of differing opinions, viewpoints, and experiences</li>
                            <li>Giving and gracefully accepting constructive feedback</li>
                            <li>Accepting responsibility and apologizing to those affected by our mistakes</li>
                            <li>Focusing on what is best for the overall community</li>
                        </ul>
                        
                        <p className="mb-4 mt-6">Examples of unacceptable behavior include:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
                            <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
                            <li>Public or private harassment</li>
                            <li>Publishing others' private information without explicit permission</li>
                            <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Enforcement</h2>
                        <p className="mb-4">
                            Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the organizing team
                            at <a href="mailto:mlsc@vit.edu" className="text-neon-cyan hover:underline">mlsc@vit.edu</a>.
                        </p>
                        <p className="mb-4">
                            All complaints will be reviewed and investigated promptly and fairly. The organizing team is obligated to
                            respect the privacy and security of the reporter of any incident.
                        </p>
                        <p>
                            Organizers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent
                            repercussions as determined by other members of the event's leadership.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Scope</h2>
                        <p>
                            This Code of Conduct applies to all Hackspiration'26 spaces, both online and offline, including but not limited
                            to the hackathon venue, official communication channels, social media, and any other spaces where participants
                            are representing the hackathon or its community.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
