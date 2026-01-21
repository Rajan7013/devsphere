export default function Team() {
    const team = [
        {
            name: 'Rajan Prasaila Yadav',
            role: 'Founder & Architect',
            initials: 'RP',
        },
        {
            name: 'Lead Designer',
            role: 'UI/UX Specialist',
            initials: 'LD',
        },
        {
            name: 'Senior Developer',
            role: 'Full Stack Engineer',
            initials: 'SD',
        },
        {
            name: 'Growth Strategist',
            role: 'Digital Marketing',
            initials: 'GS',
        },
    ];

    return (
        <section className="pt-4 pb-4 md:pt-6 md:pb-8 bg-bg-card border-t-2 border-b-2 border-text-muted/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-h2-mobile md:text-h2-desktop font-heading font-bold mb-4 leading-heading tracking-heading">
                        Meet The Team
                    </h2>
                    <p className="text-body-lg text-text-muted max-w-2xl mx-auto leading-body">
                        Talented professionals dedicated to your success
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="w-32 h-32 bg-linear-to-br from-skin/20 to-skin/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-28 h-28 bg-bg-card rounded-full flex items-center justify-center text-2xl font-heading font-bold text-skin">
                                    {member.initials}
                                </div>
                            </div>
                            <h3 className="text-h4-mobile md:text-h4-desktop font-heading font-semibold mb-1 leading-heading tracking-heading">
                                {member.name}
                            </h3>
                            <p className="text-text-muted leading-body">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
