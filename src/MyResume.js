import React, { useState } from 'react';
import './App.css';

function MyResume() {
    const [showProfessionalSummary, setShowProfessionalSummary] = useState(true);
    const [showEducation, setShowEducation] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showSkills, setShowSkills] = useState(false);

    const showAllSections = () => {
        setShowProfessionalSummary(true);
        setShowEducation(true);
        setShowExperience(true);
        setShowSkills(true);
    };

    return (
        <div>
<nav className="navbar">
    <ul className="nav-list">
        <li><a href onClick={showAllSections}>Profile</a></li>
        <li><a href="#profile" onClick={() => { setShowProfessionalSummary(true); setShowEducation(false); setShowExperience(false); setShowSkills(false); }}>Professional Summary</a></li>
        <li><a href="#education" onClick={() => { setShowProfessionalSummary(false); setShowEducation(true); setShowExperience(false); setShowSkills(false); }}>Education</a></li>
        <li><a href="#experience" onClick={() => { setShowProfessionalSummary(false); setShowEducation(false); setShowExperience(true); setShowSkills(false); }}>Experience</a></li>
        <li><a href="#skills" onClick={() => { setShowProfessionalSummary(false); setShowEducation(false); setShowExperience(false); setShowSkills(true); }}>Skills</a></li>
        
    </ul>
</nav>
            <div className="content">
                {showProfessionalSummary && (
                    <section id="profile">
                        <div className="profile">
                            <h1>Rayalou Anog</h1>
                            <p>12666 72 Ave • Surrey, BC V3W 2M8 • rayalou.anog@student.kpu.ca</p>
                        </div>
                        <h2>Professional Summary</h2>
                        <ul>
                            <li>• Bachelor of Technology in Information Technology 4th year student.</li>
                            <li>• Experienced in a dynamic work environment.</li>
                            <li>• Demonstrated ability to communicate technical terms in a user-friendly manner to individuals.</li>
                            <li>• Efficient in managing time and resources to meet deadlines.</li>
                            <li>• Unique talent for determining user needs through effective questioning and research.</li>
                            <li>• Ability to work both independently and within a team environment effectively.</li>
                            <li>• Strong written and oral communication skills.</li>
                            <li>• Skilled at prioritizing tasks based on urgency and impact on end-users.</li>
                        </ul>
                    </section>
                )}
                {showEducation && (
                    <section id="education" className="education">
                        <h2>Education</h2>
                        <ul>
                            <li>
                                <div className="education-entry">
                                    <div className="education-title">
                                        <h3>Kwantlen Polytechnic University, Richmond BC</h3>
                                        <h3>September 2019 – Present</h3>
                                    </div>
                                    <h4>Bachelor of Technology in Information Technology,</h4>
                                    <h4>Currently enrolled in the 4th year, Co-op Option</h4>
                                    <div className="coursework">
                                        <strong>&nbsp; • Relevant Coursework</strong>
                                        <ul>
                                            <li>
                                                <strong>&nbsp; o Introduction to Computer Hardware and Software: </strong>
                                                <ul>
                                                    <li>&nbsp; ▪ Analyzed the general architecture of a computer and hardware components such as microprocessors, hard disk drives, peripherals, video, audio, and network interface cards.</li>
                                                    <li>&nbsp; ▪ Examined the functions of operating systems and device drivers.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>&nbsp; o Networking Technologies II:</strong>
                                                <ul>
                                                    <li>&nbsp; ▪ Acquired skills for configuring and troubleshooting routers and switches.</li>
                                                    <li>&nbsp; ▪ Developed skills in resolving common issues which exist when routing between different protocols.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>&nbsp; o Database Management Systems:</strong>
                                                <ul>
                                                    <li>&nbsp; ▪ Practiced database designs utilizing Entity-Relationship Modeling, functional dependencies, and database table normalization.</li>
                                                    <li>&nbsp; ▪ Learned Structured Query Language (SQL) and used SQL statements to design, query and maintain databases.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>&nbsp; o Operating Systems Principles and Applications:</strong>
                                                <ul>
                                                    <li>&nbsp; ▪ Studied principles such as operating system architecture, input/output systems and file systems, along with multi-user, multi-tasking operating systems such as Windows, UNIX, and Linux.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                )}
                {showExperience && (
                    <section id="experience" className="experience">
                        <h2>Work Experience</h2>
                        <ul>
                            <li>
                                <div className="experience-entry">
                                    <div className="experience-title">
                                        <h3>Service Desk Analyst Co-op</h3>
                                        <h3>May – December 2022</h3>
                                    </div>
                                    <h4>Microserve, Burnaby, BC</h4>
                                    <ul>
                                        <li>&nbsp; • Provided Tier 1 support for end user computing issues.</li>
                                        <li>&nbsp; • Used remote tools and diagnostic utilities such as N-Able to aid in troubleshooting.</li>
                                        <li>&nbsp; • Handled incoming support requests via telephone, web portal, and email to ensure courteous, 
                                                     timely, and effective resolution of end-user issues.</li>
                                        <li>&nbsp; • Logged incoming Hardware/Software service requests into the service management system.</li>
                                        <li>&nbsp; • Performed basic administration tasks such as password resets and account creation/deletion in 
                                                     Window Server 2012 R2 Active Directory.</li>
                                        <li>&nbsp; • Performed tasks within Exchange, and Office 365 Admin Portal relating to mailbox creations/delegations, 
                                                     and mail flows.</li>
                                        <li>&nbsp; • Setup, deployed and troubleshoot PC’s peripherals and printers.</li>
                                        <li>&nbsp; • Trained new team members with ticket handling, using the service management system, and how to 
                                                    respond to call appropriately.</li>
                                        <li>&nbsp; • Recorded, tracked, and documented the service desk incidents, including all decisions made and 
                                                     actions taken, through to final resolution in IT Glue</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="experience-entry">
                                    <div className="experience-title">
                                        <h3>Helpdesk Support Specialist</h3>
                                        <h3>May 2023 - February 2024</h3>
                                    </div>
                                    <h4>Zepp Health, Vancouver, BC</h4>
                                    <ul>
                                        <li>&nbsp; • Daily IT support for all remote and on-site users.</li>
                                        <li>&nbsp; • Assisted new employee onboarding, computer setup and company IT policy awareness training.</li>
                                        <li>&nbsp; • Assisted with employee exit, collecting equipment, data clean up and reprovisioning.</li>
                                        <li>&nbsp; • Maintained and upgraded network and IT infrastructure as required.</li>
                                        <li>&nbsp; • Collaborated with China's IT Team to complete other IT jobs.</li>
                                        <li>&nbsp; • Trained user on remote access VPN optimization.</li>
                                        <li>&nbsp; • Configured and managed Hillstone firewall.</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </section>
                )}
                {showSkills && (
                    <section id="skills" className="skills">
                        <h2>Skills</h2>
                            <h3>Software</h3>
                                <p>Exchange, Office 365 Admin Portal, ConnectWise, N-Able, Freshdesk, IT Glue, 
                                Outlook, SharePoint, Oracle VM VirtualBox, Microsoft Office, Visual Studio, and Lark</p>
        
                            <h3>Operating Systems</h3>
                                <p>Windows, Linux and macOS</p>
                    </section>
                )}
            </div>
        </div>
    );
}

export default MyResume;