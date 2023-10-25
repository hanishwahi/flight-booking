import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function PrivacyPolicy() {
    return (
        <>
            <Header />
            <div className='container-fluid py-5'>
                <div className='container-xxl'>
                    <div className="row privacy-policy">
                        <h2>Privacy Policy</h2>
                    </div>
                    <div className='row'>
                        <ul>
                            <div className='privacy-policy'>
                                <li>COMMENTS</li>
                                <p> This Privacy Policy outlines how Farebooking.online collects, uses, discloses, and protects your personal information. By using the Website, you consent to the practices described in this Privacy Policy.</p> 
                            </div>
                            <div className='privacy-policy'>
                                <li>Information We Collect</li>
                                <p><strong>Personal Information:</strong> We may collect personal information that you provide when creating an account, including your name, email address, date of birth, and location.</p>
                                <p><strong>Profile Information:</strong> You may choose to provide additional information on your profile, such as photos, gender, interests, and preferences.</p>
                                <p><strong>Communication:</strong> We collect information from your communications on the Website, including messages, chats, and comments.</p>
                                <p><strong>Usage Data: </strong> We may gather information about your interactions with the Website, such as your IP address, device type, browser, and operating system.</p>

                            </div>
                            <div className='privacy-policy'>
                                <li>How We Use Your Information</li>
                                <p><strong>Matchmaking and Communication:</strong> We use the information you provide to match you with potential partners and facilitate communication between users.</p>
                                <p><strong>Improvement of Services:</strong> We analyze usage data to improve the Website’s features, user experience, and overall functionality.</p>
                                <p><strong>Marketing and Promotions:</strong> With your consent, we may use your email address to send you promotional materials and updates about the Website’s services.</p> 

                            </div>
                            <div className='privacy-policy'>
                                <li>Data Sharing</li>
                                <p><strong>With Other Users:</strong> Your profile information, such as name, photos, and interests, may be visible to other users in accordance with your privacy settings.</p>
                                <p><strong>Third-Party Service Providers:</strong> We may share your information with third-party service providers that assist us in operating the Website, such as hosting, data analysis, and customer support.</p>
                                <p><strong>Legal Compliance: </strong> We may disclose your information if required by law or in response to valid legal processes, such as court orders or government requests.</p> 

                            </div>
                            <div className='privacy-policy'>
                                <li>Security</li>
                                <p> We employ security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p> 

                            </div>
                            <div className='privacy-policy'>
                                <li>Your Choices</li>
                                <p><strong>Profile Settings:</strong> You can control the visibility of your profile information through privacy settings.</p>
                                <p><strong>Communication Preferences:</strong> You can manage your communication preferences and opt-out of promotional emails.</p>
                                <p><strong>Deleting Your Account: </strong> You can delete your account at any time by following the instructions on the Website. However, some information may remain in our records after account deletion.</p> 

                            </div>
                            <div className='privacy-policy'>
                                <li>Children’s Privacy</li>
                                <p>The Website is not intended for users under the age of 18. We do not knowingly collect personal information from individuals under 18.</p> 

                            </div>
                            <div className='privacy-policy'>
                                <li>Changes to Privacy Policy</li>
                                <p>We may update this Privacy Policy from time to time. The updated policy will be posted on the Website, and your continued use of the Website after changes indicate your acceptance of the revised policy.</p> 

                            </div>
                            <div className='privacy-policy'>
                                <li>Contact Information</li>
                                <p> If you have any questions or concerns regarding this Privacy Policy, please contact us at contact@farebooking.online.</p> 

                            </div>
                           
                        </ul>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicy